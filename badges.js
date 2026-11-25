// =========================================
// UPTIME ULTIMATUM · ACHIEVEMENT & BADGE SYSTEM
// -----------------------------------------
// Central badge manager. script.js reports each finished game via
// UptimeBadges.recordGameResult(); everything else (rules, storage,
// dashboard, notifications) lives here.
//
// NOTE: localStorage is per-browser and can be edited by the user.
// Fine for this prototype; official prize eligibility would need
// server-side verification tied to registration IDs.
// =========================================
(function () {
  "use strict";

  const STORAGE_KEY = "uptimeUltimatum.badges.v1";

  // One entry per game. `gameId` must match the ids in GAMES_DATA (script.js).
  const BADGES = [
    { gameId: "order-up",   number: "01", badgeName: "SEQUENCE MASTER", gameName: "ORDER UP!",            color: "lime",   requirement: "Score 2/2" },
    { gameId: "hands-up",   number: "02", badgeName: "FASTEST FINGER",  gameName: "HANDS UP, ANSWER UP!", color: "purple", requirement: "Buzz in and score 2/2", requiresBuzzer: true },
    { gameId: "beat-clock", number: "03", badgeName: "CLOCK BREAKER",   gameName: "BEAT THE CLOCK!",      color: "orange", requirement: "Score 5/5 within 15s", maxElapsedMs: 15000 },
    { gameId: "crack-clue", number: "04", badgeName: "CODE CRACKER",    gameName: "CRACK THE CLUE!",      color: "pale",   requirement: "Score 2/2" },
    { gameId: "real-fake",  number: "05", badgeName: "FACT CHECKER",    gameName: "REAL OR FAKE?",        color: "orange", requirement: "Score 2/2" },
    { gameId: "guess-3",    number: "06", badgeName: "MASTER DEDUCER",  gameName: "GUESS IT IN 3!",       color: "purple", requirement: "Score 2/2" }
  ];

  const MAX_BADGES = BADGES.length;

  const STAR_SVG = '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false"><path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.6 7L12 17.3 5.8 20.9l1.6-7L2 9.2l7.1-.6z"/></svg>';
  const BADGE_BY_ID = Object.fromEntries(BADGES.map((badge) => [badge.gameId, badge]));

  // ---------- Storage ----------

  // Returns { [gameId]: true } for unlocked badges only. Unknown ids and
  // non-true values are ignored, so a corrupted entry can never add badges.
  function loadBadges() {
    const state = {};
    try {
      const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
      if (parsed && typeof parsed === "object") {
        BADGES.forEach(({ gameId }) => {
          if (parsed[gameId] === true) state[gameId] = true;
        });
      }
    } catch (error) {
      // Storage blocked or JSON invalid: treat as no badges yet.
    }
    return state;
  }

  // Merges with what is already stored so a badge can only ever go
  // from locked to unlocked, never back.
  function saveBadges(state) {
    const merged = loadBadges();
    Object.keys(state).forEach((gameId) => {
      if (state[gameId] === true && BADGE_BY_ID[gameId]) merged[gameId] = true;
    });
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
    } catch (error) {
      // Storage unavailable (e.g. private mode quota): badge still shows this session.
    }
    return merged;
  }

  let unlockedBadges = loadBadges();

  function isUnlocked(gameId) {
    return unlockedBadges[gameId] === true;
  }

  function countUnlockedBadges() {
    return Math.min(BADGES.filter(({ gameId }) => isUnlocked(gameId)).length, MAX_BADGES);
  }

  // Returns true only when the badge changes from locked to unlocked.
  function unlockBadge(gameId) {
    if (!BADGE_BY_ID[gameId] || isUnlocked(gameId)) return false;
    unlockedBadges = saveBadges({ ...unlockedBadges, [gameId]: true });
    return true;
  }

  // ---------- Rules ----------

  // Uses the score the game already calculated. Returns why the attempt
  // did or didn't earn the badge so the results screen can explain it.
  function evaluateResult({ gameId, score, totalQuestions, buzzedAnswers, elapsedMs }) {
    const badge = BADGE_BY_ID[gameId];
    if (!badge) return { eligible: false, reason: "unknown-game" };

    if (score !== totalQuestions) return { eligible: false, reason: "not-perfect" };

    if (badge.requiresBuzzer && buzzedAnswers !== totalQuestions) {
      return { eligible: false, reason: "buzzer-required" };
    }

    if (badge.maxElapsedMs && !(elapsedMs <= badge.maxElapsedMs)) {
      return { eligible: false, reason: "too-slow" };
    }

    return { eligible: true, reason: "perfect" };
  }

  // Called by script.js from endGame(). Safe to call more than once for
  // the same attempt: unlockBadge() ignores already-unlocked badges.
  function recordGameResult(result) {
    const badge = BADGE_BY_ID[result.gameId];
    if (!badge) return;

    const outcome = evaluateResult(result);
    const wasAlreadyUnlocked = isUnlocked(badge.gameId);
    const newlyUnlocked = outcome.eligible && unlockBadge(badge.gameId);

    if (newlyUnlocked) {
      renderDashboard(badge.gameId);
      showUnlockToast(badge);
    }

    renderResultNote(badge, outcome, { newlyUnlocked, wasAlreadyUnlocked, elapsedMs: result.elapsedMs });
  }

  // ---------- Dashboard ----------

  function badgeCardHtml(badge, justUnlocked) {
    const unlocked = isUnlocked(badge.gameId);
    const classes = ["badge-card", `badge-${badge.color}`, unlocked ? "is-unlocked" : "is-locked"];
    if (justUnlocked) classes.push("just-unlocked");

    return `
      <li class="${classes.join(" ")}" data-badge="${badge.gameId}">
        <span class="badge-medal" aria-hidden="true">
          <span class="badge-medal-number">${badge.number}</span>
          <span class="badge-medal-icon">${unlocked ? STAR_SVG : "?"}</span>
        </span>
        <span class="badge-name">${badge.badgeName}</span>
        <span class="badge-game">${badge.gameName}</span>
        <span class="badge-status">
          <span class="sr-only">${badge.badgeName} badge: </span>${unlocked ? "UNLOCKED" : "LOCKED"}
        </span>
        <span class="badge-requirement">${badge.requirement}</span>
      </li>
    `;
  }

  function renderDashboard(justUnlockedId) {
    const grid = document.getElementById("badge-grid");
    const countEl = document.getElementById("badge-count");
    const bar = document.getElementById("badge-progress");
    const fill = document.getElementById("badge-progress-fill");
    const message = document.getElementById("badge-progress-message");
    if (!grid) return;

    grid.innerHTML = BADGES.map((badge) => badgeCardHtml(badge, badge.gameId === justUnlockedId)).join("");

    const count = countUnlockedBadges();
    const percent = Math.round((count / MAX_BADGES) * 100);

    if (countEl) countEl.textContent = `${count} / ${MAX_BADGES}`;
    if (fill) fill.style.width = `${percent}%`;
    if (bar) {
      bar.setAttribute("aria-valuenow", String(count));
      bar.setAttribute("aria-valuetext", `${count} of ${MAX_BADGES} badges unlocked`);
    }
    if (message) {
      if (count === MAX_BADGES) message.textContent = "ALL SIX UNLOCKED. ULTIMATUM COMPLETE.";
      else if (count === 0) message.textContent = "PLAY ANY GAME AND SCORE PERFECT TO EARN YOUR FIRST BADGE.";
      else message.textContent = `${MAX_BADGES - count} MORE TO GO. RETRY AS MANY TIMES AS YOU LIKE.`;
    }
  }

  // ---------- Notifications ----------

  let toastTimer = null;

  function showUnlockToast(badge) {
    const toast = document.getElementById("badge-toast");
    if (!toast) return;

    toast.innerHTML = `
      <span class="badge-toast-medal badge-${badge.color}" aria-hidden="true">${STAR_SVG}</span>
      <span class="badge-toast-text">
        <span class="badge-toast-kicker">BADGE UNLOCKED · ${countUnlockedBadges()} / ${MAX_BADGES}</span>
        <strong>${badge.badgeName}</strong>
      </span>
    `;
    toast.classList.remove("is-visible");
    // Force reflow so the entry animation replays for back-to-back unlocks.
    void toast.offsetWidth;
    toast.classList.add("is-visible");

    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 4200);
  }

  function renderResultNote(badge, outcome, { newlyUnlocked, wasAlreadyUnlocked, elapsedMs }) {
    const card = document.querySelector("#game-modal-content .results-card");
    if (!card) return;

    let text;
    let tone = "neutral";
    const seconds = Number.isFinite(elapsedMs) ? (elapsedMs / 1000).toFixed(1) : null;

    if (newlyUnlocked) {
      text = `BADGE UNLOCKED: ${badge.badgeName}`;
      tone = "success";
    } else if (wasAlreadyUnlocked) {
      text = `${badge.badgeName} BADGE ALREADY EARNED. IT STAYS UNLOCKED.`;
      tone = "success";
    } else if (outcome.reason === "too-slow") {
      text = `PERFECT SCORE, BUT YOU FINISHED IN ${seconds}s. ANSWER ALL 5 WITHIN 15s FOR THE BADGE.`;
    } else if (outcome.reason === "buzzer-required") {
      text = "BUZZ IN BEFORE EVERY ANSWER TO EARN THE BADGE.";
    } else {
      text = `SCORE PERFECT TO EARN THE ${badge.badgeName} BADGE. ${badge.requirement.toUpperCase()}.`;
    }

    let note = card.querySelector(".results-badge-note");
    if (!note) {
      note = document.createElement("p");
      note.className = "results-badge-note";
      const buttons = card.querySelector(".results-btn-group");
      card.insertBefore(note, buttons);
    }
    note.dataset.tone = tone;
    note.textContent = text;
  }

  // ---------- Init ----------

  renderDashboard();

  // Keep multiple open tabs in sync.
  window.addEventListener("storage", (event) => {
    if (event.key !== STORAGE_KEY) return;
    unlockedBadges = loadBadges();
    renderDashboard();
  });

  window.UptimeBadges = {
    recordGameResult,
    unlockBadge,
    isUnlocked,
    countUnlockedBadges,
    renderDashboard,
    STORAGE_KEY,
    MAX_BADGES
  };
})();
