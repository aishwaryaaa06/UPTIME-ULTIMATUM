// =========================================
// 1. MOBILE NAVIGATION
// =========================================
const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".navigation");

if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.textContent = isOpen ? "×" : "☰";
  });

  navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navigation.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.textContent = "☰";
    });
  });
}

// =========================================
// 2. HERO COUNTDOWN TICKER
// =========================================
const eventTime = new Date("2026-12-05T15:45:00+05:30").getTime();

function updateCountdown() {
  const remaining = Math.max(0, eventTime - Date.now());

  const days = Math.floor(remaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((remaining / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((remaining / (1000 * 60)) % 60);
  const seconds = Math.floor((remaining / 1000) % 60);

  const daysEl = document.querySelector("#days");
  const hoursEl = document.querySelector("#hours");
  const minutesEl = document.querySelector("#minutes");
  const secondsEl = document.querySelector("#seconds");

  if (daysEl) daysEl.textContent = String(days).padStart(2, "0");
  if (hoursEl) hoursEl.textContent = String(hours).padStart(2, "0");
  if (minutesEl) minutesEl.textContent = String(minutes).padStart(2, "0");
  if (secondsEl) secondsEl.textContent = String(seconds).padStart(2, "0");
}

updateCountdown();
setInterval(updateCountdown, 1000);

// =========================================
// 3. SIX INTERACTIVE GAMES DATA
// =========================================
const GAMES_DATA = {
  "order-up": {
    id: "order-up",
    theme: "lime",
    title: "ORDER UP!",
    type: "SEQUENCE CHALLENGE",
    instructions: "Put the steps in the correct order. Choose the sequence from first to last.",
    totalQuestions: 2,
    questions: [
      {
        question: "What comes first when starting a computer?",
        options: [
          "Open an app",
          "Press the power button",
          "Connect to Wi-Fi"
        ],
        correctIndex: 1
      },
      {
        question: "Arrange a simple problem-solving flow: identify, plan, solve.",
        options: [
          "Plan → Identify → Solve",
          "Solve → Plan → Identify",
          "Identify → Plan → Solve"
        ],
        correctIndex: 2
      }
    ]
  },

  "hands-up": {
    id: "hands-up",
    theme: "purple",
    title: "HANDS UP, ANSWER UP!",
    type: "THE BUZZER BATTLE",
    instructions: "Tap the buzzer as soon as the question appears, then answer before time runs out.",
    totalQuestions: 2,
    hasBuzzer: true,
    questions: [
      {
        question: "BUZZ! Which device routes data between networks?",
        options: [
          "Router",
          "Keyboard",
          "Monitor"
        ],
        correctIndex: 0
      },
      {
        question: "BUZZ! What does CPU stand for?",
        options: [
          "Central Processing Unit",
          "Computer Personal Utility",
          "Core Program Upload"
        ],
        correctIndex: 0
      }
    ]
  },

  "beat-clock": {
    id: "beat-clock",
    theme: "orange",
    title: "BEAT THE CLOCK!",
    type: "RAPID-FIRE QUIZ",
    instructions: "Answer as many rapid-fire questions as you can before the 20-second timer ends.",
    totalQuestions: 5,
    hasTimer: true,
    timeLimit: 20,
    questions: [
      {
        question: "Binary digits are...",
        options: [
          "0 and 1",
          "1 and 2",
          "0 to 9"
        ],
        correctIndex: 0
      },
      {
        question: "Which is an input device?",
        options: [
          "Monitor",
          "Keyboard",
          "Speaker"
        ],
        correctIndex: 1
      },
      {
        question: "HTML is mainly used to...",
        options: [
          "Structure web pages",
          "Cool a CPU",
          "Store electricity"
        ],
        correctIndex: 0
      },
      {
        question: "Which protocol secures web browsing?",
        options: [
          "HTTPS",
          "HTTP only",
          "FTP"
        ],
        correctIndex: 0
      },
      {
        question: "What does RAM provide?",
        options: [
          "Temporary working memory",
          "Permanent paper storage",
          "Internet access"
        ],
        correctIndex: 0
      }
    ]
  },

  "crack-clue": {
    id: "crack-clue",
    theme: "pale",
    title: "CRACK THE CLUE!",
    type: "VISUAL PUZZLE CHALLENGE",
    instructions: "Read the clues and identify the answer.",
    totalQuestions: 2,
    questions: [
      {
        question: "I connect devices in a local network. I can learn MAC addresses. What am I?",
        options: [
          "Switch",
          "Projector",
          "Microphone"
        ],
        correctIndex: 0
      },
      {
        question: "I am a set of rules that lets browsers request web pages. What am I?",
        options: [
          "HTTP",
          "JPEG",
          "USB"
        ],
        correctIndex: 0
      }
    ]
  },

  "real-fake": {
    id: "real-fake",
    theme: "orange",
    title: "REAL OR FAKE?",
    type: "TRUE OR FALSE CHALLENGE",
    instructions: "Decide whether each statement is true or false.",
    totalQuestions: 2,
    isBinary: true,
    questions: [
      {
        statement: "A strong password should be reused across every account.",
        options: [
          "REAL",
          "FAKE"
        ],
        correctIndex: 1
      },
      {
        statement: "Two-factor authentication adds another layer of account security.",
        options: [
          "REAL",
          "FAKE"
        ],
        correctIndex: 0
      }
    ]
  },

  "guess-3": {
    id: "guess-3",
    theme: "purple",
    title: "GUESS IT IN 3!",
    type: "THREE-CLUE CHALLENGE",
    instructions: "Use the clues to guess the technology. You get three attempts.",
    totalQuestions: 2,
    attemptsPerQuestion: 3,
    questions: [
      {
        clues: [
          "CLUE 1: I am invisible but connect your phone to the internet.",
          "CLUE 2: I use radio waves.",
          "CLUE 3: I am often named after a standard."
        ],
        options: [
          "Wi-Fi",
          "HDMI",
          "Bluetooth"
        ],
        correctIndex: 0
      },
      {
        clues: [
          "CLUE 1: I am a language.",
          "CLUE 2: I style web pages.",
          "CLUE 3: My name includes \"Cascading\"."
        ],
        options: [
          "JavaScript",
          "CSS",
          "Python"
        ],
        correctIndex: 1
      }
    ]
  }
};

// =========================================
// 4. GAME CONTROLLER & STATE
// =========================================
let currentGame = null;
let currentQuestionIndex = 0;
let currentScore = 0;
let gameTimerInterval = null;
let remainingTime = 20;
let buzzerActivated = false;
let remainingAttempts = 3;
let questionAnswered = false;
let failedAttempts = [];

const modalOverlay = document.getElementById("game-modal-overlay");
const modalCloseBtn = document.getElementById("modal-close-btn");
const modalContent = document.getElementById("game-modal-content");
const gameCards = document.querySelectorAll(".game-card");

// Initialize card click handlers
gameCards.forEach((card) => {
  card.addEventListener("click", () => {
    const gameId = card.getAttribute("data-game");
    if (gameId && GAMES_DATA[gameId]) {
      startGame(gameId);
    }
  });
});

// Close button & backdrop handlers
if (modalCloseBtn) {
  modalCloseBtn.addEventListener("click", closeModal);
}

if (modalOverlay) {
  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) {
      closeModal();
    }
  });
}

document.addEventListener("keydown", (e) => {
  if (e.key !== "Escape") return;
  const unlockOverlay = document.getElementById("badge-unlock-modal-overlay");
  const protocolOverlay = document.getElementById("final-protocol-modal-overlay");
  if (unlockOverlay && unlockOverlay.classList.contains("modal-open")) {
    return;
  }
  if (protocolOverlay && protocolOverlay.classList.contains("modal-open")) {
    return;
  }
  if (modalOverlay && modalOverlay.classList.contains("modal-open")) {
    closeModal();
  }
});

function closeModal() {
  if (gameTimerInterval) {
    clearInterval(gameTimerInterval);
    gameTimerInterval = null;
  }
  if (modalOverlay) {
    modalOverlay.classList.remove("modal-open");
    modalOverlay.setAttribute("aria-hidden", "true");
  }
  const modalContainer = document.querySelector(".game-modal-container");
  if (modalContainer) {
    modalContainer.className = "game-modal-container";
  }
  document.body.style.overflow = "";
  currentGame = null;
}

function startGame(gameId) {
  if (gameTimerInterval) {
    clearInterval(gameTimerInterval);
    gameTimerInterval = null;
  }

  currentGame = GAMES_DATA[gameId];
  currentQuestionIndex = 0;
  currentScore = 0;
  buzzerActivated = false;
  remainingAttempts = 3;
  questionAnswered = false;
  failedAttempts = [];

  const modalContainer = document.querySelector(".game-modal-container");
  if (modalContainer && currentGame.theme) {
    modalContainer.className = `game-modal-container theme-${currentGame.theme}`;
  }

  if (modalOverlay) {
    modalOverlay.classList.add("modal-open");
    modalOverlay.setAttribute("aria-hidden", "false");
  }
  document.body.style.overflow = "hidden";

  if (currentGame.hasTimer) {
    remainingTime = currentGame.timeLimit || 20;
    startTimer();
  }

  renderQuestion();
}

function startTimer() {
  if (gameTimerInterval) clearInterval(gameTimerInterval);
  gameTimerInterval = setInterval(() => {
    remainingTime--;
    const timerEl = document.getElementById("timer-sec");
    if (timerEl) {
      timerEl.textContent = String(remainingTime);
    }
    if (remainingTime <= 0) {
      clearInterval(gameTimerInterval);
      gameTimerInterval = null;
      endGame();
    }
  }, 1000);
}

function renderQuestion() {
  if (!currentGame) return;

  const q = currentGame.questions[currentQuestionIndex];
  questionAnswered = false;
  failedAttempts = [];

  if (currentGame.hasBuzzer) {
    buzzerActivated = false;
  }
  if (currentGame.attemptsPerQuestion) {
    remainingAttempts = currentGame.attemptsPerQuestion;
  }

  let statusBadgeHtml = "";
  if (currentGame.hasTimer) {
    statusBadgeHtml = `<div class="modal-status-badge timer-active">⏱ <span id="timer-sec">${remainingTime}</span>s REMAINING</div>`;
  } else if (currentGame.attemptsPerQuestion) {
    statusBadgeHtml = `<div class="modal-status-badge attempts-badge">ATTEMPTS: <span id="attempts-val">${remainingAttempts}</span>/3</div>`;
  }

  let questionBodyHtml = "";
  if (currentGame.isBinary) {
    questionBodyHtml = `
      <div class="modal-question-area">
        <span class="question-tag">STATEMENT 0${currentQuestionIndex + 1}</span>
        <div class="modal-statement">"${q.statement}"</div>
      </div>
    `;
  } else if (q.clues) {
    questionBodyHtml = `
      <div class="modal-question-area">
        <span class="question-tag">CHALLENGE 0${currentQuestionIndex + 1} · 3 CLUES</span>
        <h3 class="modal-question-text">Guess the technology from the clues:</h3>
        <div class="clues-list">
          ${q.clues.map((clue, idx) => `
            <div class="clue-box">
              <span class="clue-label">CLUE 0${idx + 1}</span>
              <p class="clue-text">${clue.replace(/^CLUE \d:\s*/, "")}</p>
            </div>
          `).join("")}
        </div>
      </div>
    `;
  } else {
    questionBodyHtml = `
      <div class="modal-question-area">
        <span class="question-tag">QUESTION 0${currentQuestionIndex + 1}</span>
        <h3 class="modal-question-text">${q.question}</h3>
      </div>
    `;
  }

  let buzzerHtml = "";
  if (currentGame.hasBuzzer) {
    buzzerHtml = `
      <div class="buzzer-box">
        <button class="buzzer-trigger" id="buzzer-btn" aria-label="Buzz in to answer">
          BUZZ IN! ⚡
        </button>
        <span class="buzzer-hint" id="buzzer-hint">Tap the buzzer to unlock answering!</span>
      </div>
    `;
  }

  const isLocked = currentGame.hasBuzzer && !buzzerActivated;
  let optionsHtml = "";

  if (currentGame.isBinary) {
    optionsHtml = `
      <div class="modal-options-grid binary-grid">
        ${q.options.map((opt, idx) => `
          <button class="modal-option-btn binary-option-btn ${opt.toLowerCase()} ${isLocked ? 'locked' : ''}" data-index="${idx}" ${isLocked ? 'disabled' : ''}>
            ${opt === 'REAL' ? '✓ ' : '✕ '}${opt}
          </button>
        `).join("")}
      </div>
    `;
  } else {
    optionsHtml = `
      <div class="modal-options-grid">
        ${q.options.map((opt, idx) => `
          <button class="modal-option-btn ${isLocked ? 'locked' : ''}" data-index="${idx}" ${isLocked ? 'disabled' : ''}>
            <span class="option-num-badge">${idx + 1}</span>
            <span class="option-text">${opt}</span>
          </button>
        `).join("")}
      </div>
    `;
  }

  modalContent.innerHTML = `
    <div class="modal-kicker">UPTIME ULTIMATUM · PRACTICE MODE</div>
    <div class="modal-header-row">
      <div class="modal-title-group">
        <h2 class="modal-game-title">${currentGame.title}</h2>
        <p class="modal-game-instruction">${currentGame.instructions}</p>
      </div>
      ${statusBadgeHtml}
    </div>

    ${buzzerHtml}
    ${questionBodyHtml}
    ${optionsHtml}

    <div id="game-feedback"></div>
    <div id="game-action-row" class="modal-action-row" style="display: none;"></div>

    <div class="modal-bottom-divider">
      <span class="modal-progress-text">CHALLENGE ${currentQuestionIndex + 1} / ${currentGame.totalQuestions}</span>
      <span class="modal-score-text" id="footer-score-val">SCORE: ${currentScore}</span>
    </div>
  `;

  // Attach buzzer trigger
  if (currentGame.hasBuzzer) {
    const buzzerBtn = document.getElementById("buzzer-btn");
    const buzzerHint = document.getElementById("buzzer-hint");
    if (buzzerBtn) {
      buzzerBtn.addEventListener("click", () => {
        if (!buzzerActivated) {
          buzzerActivated = true;
          buzzerBtn.classList.add("buzzed");
          buzzerBtn.textContent = "BUZZED! ✓";
          if (buzzerHint) {
            buzzerHint.textContent = "BUZZED IN! SELECT YOUR ANSWER NOW!";
            buzzerHint.classList.add("unlocked");
          }
          // Enable options
          const optionBtns = modalContent.querySelectorAll(".modal-option-btn");
          optionBtns.forEach((btn) => {
            btn.removeAttribute("disabled");
            btn.classList.remove("locked");
          });
        }
      });
    }
  }

  // Attach option clicks
  const optionBtns = modalContent.querySelectorAll(".modal-option-btn");
  optionBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const selectedIndex = parseInt(btn.getAttribute("data-index"), 10);
      handleOptionSelect(selectedIndex, btn, optionBtns);
    });
  });
}

function handleOptionSelect(selectedIndex, selectedBtn, allOptionBtns) {
  if (questionAnswered) return;
  if (!currentGame) return;

  const q = currentGame.questions[currentQuestionIndex];
  const isCorrect = selectedIndex === q.correctIndex;
  const feedbackEl = document.getElementById("game-feedback");
  const actionRow = document.getElementById("game-action-row");
  const footerScore = document.getElementById("footer-score-val");

  // Special logic for GUESS IT IN 3!
  if (currentGame.attemptsPerQuestion) {
    if (failedAttempts.includes(selectedIndex)) return;

    if (isCorrect) {
      questionAnswered = true;
      currentScore++;
      selectedBtn.classList.add("option-correct");

      allOptionBtns.forEach((btn) => btn.setAttribute("disabled", "true"));

      if (feedbackEl) {
        feedbackEl.innerHTML = `
          <div class="modal-feedback-alert feedback-success">
            <span class="feedback-symbol">✓</span>
            <div><strong>Correct!</strong> Great deduction on technology clue.</div>
          </div>
        `;
      }
      if (footerScore) footerScore.textContent = `SCORE: ${currentScore}`;
      showNextButton(actionRow);
    } else {
      remainingAttempts--;
      failedAttempts.push(selectedIndex);
      selectedBtn.classList.add("option-incorrect");
      selectedBtn.setAttribute("disabled", "true");

      const attemptsVal = document.getElementById("attempts-val");
      if (attemptsVal) attemptsVal.textContent = String(remainingAttempts);

      if (remainingAttempts > 0) {
        if (feedbackEl) {
          feedbackEl.innerHTML = `
            <div class="modal-feedback-alert feedback-error">
              <span class="feedback-symbol">✗</span>
              <div><strong>Not quite!</strong> You have ${remainingAttempts} attempt${remainingAttempts > 1 ? 's' : ''} remaining. Try another option!</div>
            </div>
          `;
        }
      } else {
        // 0 attempts remaining
        questionAnswered = true;
        allOptionBtns.forEach((btn) => {
          btn.setAttribute("disabled", "true");
          const idx = parseInt(btn.getAttribute("data-index"), 10);
          if (idx === q.correctIndex) {
            btn.classList.add("option-correct");
          }
        });

        if (feedbackEl) {
          feedbackEl.innerHTML = `
            <div class="modal-feedback-alert feedback-error">
              <span class="feedback-symbol">✗</span>
              <div><strong>Out of attempts!</strong> The correct answer is: <strong>${q.options[q.correctIndex]}</strong>.</div>
            </div>
          `;
        }
        showNextButton(actionRow);
      }
    }
    return;
  }

  // Rapid-fire logic for BEAT THE CLOCK!
  if (currentGame.hasTimer) {
    questionAnswered = true;
    allOptionBtns.forEach((btn) => btn.setAttribute("disabled", "true"));

    if (isCorrect) {
      currentScore++;
      selectedBtn.classList.add("option-correct");
    } else {
      selectedBtn.classList.add("option-incorrect");
      allOptionBtns.forEach((btn) => {
        const idx = parseInt(btn.getAttribute("data-index"), 10);
        if (idx === q.correctIndex) btn.classList.add("option-correct");
      });
    }

    if (footerScore) footerScore.textContent = `SCORE: ${currentScore}`;

    // Rapid advance after 400ms flash
    setTimeout(() => {
      advanceQuestion();
    }, 450);
    return;
  }

  // Standard feedback for Order Up, Hands Up, Crack the Clue, Real or Fake
  questionAnswered = true;
  allOptionBtns.forEach((btn) => btn.setAttribute("disabled", "true"));

  if (isCorrect) {
    currentScore++;
    selectedBtn.classList.add("option-correct");
    if (feedbackEl) {
      feedbackEl.innerHTML = `
        <div class="modal-feedback-alert feedback-success">
          <span class="feedback-symbol">✓</span>
          <div><strong>Correct!</strong> Well done.</div>
        </div>
      `;
    }
  } else {
    selectedBtn.classList.add("option-incorrect");
    allOptionBtns.forEach((btn) => {
      const idx = parseInt(btn.getAttribute("data-index"), 10);
      if (idx === q.correctIndex) btn.classList.add("option-correct");
    });
    if (feedbackEl) {
      feedbackEl.innerHTML = `
        <div class="modal-feedback-alert feedback-error">
          <span class="feedback-symbol">✗</span>
          <div><strong>Not quite!</strong> Correct answer: <strong>${q.options[q.correctIndex]}</strong>.</div>
        </div>
      `;
    }
  }

  if (footerScore) footerScore.textContent = `SCORE: ${currentScore}`;
  showNextButton(actionRow);
}

function showNextButton(actionRow) {
  if (!actionRow) return;
  const isLastQuestion = currentQuestionIndex >= currentGame.questions.length - 1;
  actionRow.style.display = "flex";
  actionRow.innerHTML = `
    <button class="black-button modal-continue-btn" id="continue-game-btn">
      ${isLastQuestion ? 'VIEW RESULTS' : 'NEXT CHALLENGE'} <span>↗</span>
    </button>
  `;

  const continueBtn = document.getElementById("continue-game-btn");
  if (continueBtn) {
    continueBtn.addEventListener("click", advanceQuestion);
  }
}

function advanceQuestion() {
  if (!currentGame) return;

  currentQuestionIndex++;
  if (currentQuestionIndex < currentGame.questions.length) {
    renderQuestion();
  } else {
    endGame();
  }
}

function endGame() {
  if (gameTimerInterval) {
    clearInterval(gameTimerInterval);
    gameTimerInterval = null;
  }

  const total = currentGame.totalQuestions;
  let performanceMsg = "Good attempt. Try again and beat your score.";

  if (currentScore === total) {
    performanceMsg = "Excellent run! You nailed it.";
  } else if (currentScore > 0) {
    performanceMsg = "Good attempt! Play again and aim for a perfect score.";
  } else {
    performanceMsg = "Tough round! Practice again to master this challenge.";
  }

  modalContent.innerHTML = `
    <div class="modal-kicker">UPTIME ULTIMATUM · PRACTICE COMPLETE</div>
    <div class="modal-title-group">
      <h2 class="modal-game-title">${currentGame.title}</h2>
      <p class="modal-game-instruction">Practice session complete. Review your performance below.</p>
    </div>

    <div class="results-card">
      <div class="results-score-wrap">
        <div class="results-giant-score">${currentScore} / ${total}</div>
        <span class="results-score-label">FINAL SCORE</span>
      </div>
      <p class="results-message">${performanceMsg}</p>

      <div class="results-btn-group">
        <button class="black-button modal-continue-btn" id="play-again-btn">
          PLAY AGAIN <span>↺</span>
        </button>
        <button class="modal-return-btn" id="return-games-btn">
          RETURN TO GAMES <span>↗</span>
        </button>
      </div>
    </div>

    <div class="modal-bottom-divider">
      <span class="modal-progress-text">PRACTICE COMPLETE</span>
      <span class="modal-score-text">FINAL SCORE: ${currentScore}</span>
    </div>
  `;

  const completedGameId = currentGame.id;

  const playAgainBtn = document.getElementById("play-again-btn");
  if (playAgainBtn) {
    playAgainBtn.addEventListener("click", () => {
      startGame(completedGameId);
    });
  }

  const returnBtn = document.getElementById("return-games-btn");
  if (returnBtn) {
    returnBtn.addEventListener("click", closeModal);
  }

  // Award achievement badge only upon genuine game completion
  handleGameCompletionBadge(completedGameId);
}

// =========================================
// 5. ACHIEVEMENT VAULT & BADGE SYSTEM
// =========================================
const BADGES_CONFIG = [
  { id: "logic-badge", slot: "BADGE 01", name: "Logic Badge", gameId: "order-up", gameName: "Order Up!", description: "Mastered sequence patterns and logical ordering in Order Up!.", accentPrimary: "#7952ec", accentSecondary: "#3b82f6", accentHighlight: "#ffd166" },
  { id: "reflex-badge", slot: "BADGE 02", name: "Reflex Badge", gameId: "hands-up", gameName: "Hands Up, Answer Up!", description: "Hit the buzzer with sharp reflexes in Hands Up, Answer Up!.", accentPrimary: "#f08354", accentSecondary: "#7952ec", accentHighlight: "#ffd166" },
  { id: "speed-badge", slot: "BADGE 03", name: "Speed Badge", gameId: "beat-clock", gameName: "Beat The Clock!", description: "Raced the countdown in rapid-fire mode in Beat The Clock!.", accentPrimary: "#3b82f6", accentSecondary: "#f08354", accentHighlight: "#ffd166" },
  { id: "observation-badge", slot: "BADGE 04", name: "Observation Badge", gameId: "crack-clue", gameName: "Crack The Clue!", description: "Decoded hidden network and visual hints in Crack The Clue!.", accentPrimary: "#7952ec", accentSecondary: "#f5b942", accentHighlight: "#3b82f6" },
  { id: "instinct-badge", slot: "BADGE 05", name: "Instinct Badge", gameId: "real-fake", gameName: "Real or Fake?", description: "Separated tech truth from fiction in Real or Fake?.", accentPrimary: "#f08354", accentSecondary: "#3b82f6", accentHighlight: "#ffd166" },
  { id: "deduction-badge", slot: "BADGE 06", name: "Deduction Badge", gameId: "guess-3", gameName: "Guess It In 3!", description: "Connected three clues to crack the mystery in Guess It In 3!.", accentPrimary: "#7952ec", accentSecondary: "#f08354", accentHighlight: "#3b82f6" }
];

const BADGE_GLYPHS = {
  "logic-badge": (_, __, c3) => `<rect x="33" y="34" width="14" height="10" rx="2.5" fill="#fff" fill-opacity="0.92"/><rect x="53" y="34" width="14" height="10" rx="2.5" fill="${c3}"/><rect x="43" y="54" width="14" height="10" rx="2.5" fill="#fff" fill-opacity="0.92"/><path d="M47 39H53M50 44V54" stroke="#fff" stroke-width="2.5" stroke-linecap="round"/>`,
  "reflex-badge": (_, __, c3) => `<circle cx="50" cy="50" r="17" stroke="${c3}" stroke-width="2.5" stroke-dasharray="4 3"/><path d="M52 33L40 51H49L47 67L60 48H51L52 33Z" fill="${c3}" stroke="#fff" stroke-width="1.5" stroke-linejoin="round"/>`,
  "speed-badge": (c1, _, c3) => `<circle cx="50" cy="52" r="15" stroke="#fff" stroke-width="2.5" fill="${c1}" fill-opacity="0.25"/><path d="M45 33H55M50 33V37M50 52L59 44" stroke="${c3}" stroke-width="3" stroke-linecap="round"/><circle cx="50" cy="52" r="2.5" fill="#fff"/>`,
  "observation-badge": (_, c2, c3) => `<path d="M30 50C35 40 42 36 50 36C58 36 65 40 70 50C65 60 58 64 50 64C42 64 35 60 30 50Z" stroke="#fff" stroke-width="2.5" fill="${c2}" fill-opacity="0.25"/><circle cx="50" cy="50" r="7.5" fill="${c3}"/><circle cx="50" cy="50" r="3" fill="#171422"/>`,
  "instinct-badge": (c1, _, c3) => `<path d="M50 32L66 39V50C66 60 58 66 50 69C42 66 34 60 34 50V39L50 32Z" fill="${c1}" fill-opacity="0.35" stroke="#fff" stroke-width="2.4"/><path d="M42.5 50.5L47.5 55.5L58 45" stroke="${c3}" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/>`,
  "deduction-badge": (_, c2, c3) => `<polygon points="50,32 67,62 33,62" fill="${c2}" fill-opacity="0.28" stroke="#fff" stroke-width="2.4" stroke-linejoin="round"/><circle cx="50" cy="48" r="3.5" fill="${c3}"/><path d="M50 51.5V57" stroke="${c3}" stroke-width="2.8" stroke-linecap="round"/>`
};

/** Modular client-side JSON storage wrapper (swap with Supabase adapter in production). */
function createJsonStorage(key, fallbackFn, sanitizeFn) {
  return {
    load() {
      try {
        const raw = window.localStorage.getItem(key);
        if (!raw) return fallbackFn();
        return sanitizeFn(JSON.parse(raw));
      } catch (_err) {
        return fallbackFn();
      }
    },
    save(value) {
      try {
        window.localStorage.setItem(key, JSON.stringify(value));
      } catch (_err) {
        // Ignore private-mode or quota errors gracefully
      }
    }
  };
}

const BadgeStorageAdapter = createJsonStorage(
  "uptime_ultimatum_earned_badges_v1",
  () => [],
  (parsed) => {
    if (!Array.isArray(parsed)) return [];
    const valid = new Set(BADGES_CONFIG.map((b) => b.id));
    return Array.from(new Set(parsed.filter((id) => valid.has(id))));
  }
);

const BadgeManager = {
  earnedIds: new Set(),
  init() { this.earnedIds = new Set(BadgeStorageAdapter.load()); },
  hasBadge(id) { return this.earnedIds.has(id); },
  getEarnedCount() { return this.earnedIds.size; },
  getTotalCount() { return BADGES_CONFIG.length; },
  isQuestComplete() { return this.earnedIds.size >= BADGES_CONFIG.length; },
  awardForGame(gameId) {
    const badge = BADGES_CONFIG.find((b) => b.gameId === gameId);
    if (!badge || this.earnedIds.has(badge.id)) return { newlyUnlocked: false, badge: badge || null };
    this.earnedIds.add(badge.id);
    BadgeStorageAdapter.save(Array.from(this.earnedIds));
    return { newlyUnlocked: true, badge };
  }
};

function getBadgeSvgMarkup(badge) {
  const { id, accentPrimary: c1, accentSecondary: c2, accentHighlight: c3 } = badge;
  const glyph = (BADGE_GLYPHS[id] || (() => `<circle cx="50" cy="50" r="12" fill="${c3}"/>`))(c1, c2, c3);
  return `
    <svg class="badge-svg" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs><linearGradient id="grad-${id}" x1="14" y1="10" x2="86" y2="90" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="${c1}"/><stop offset="55%" stop-color="${c2}"/><stop offset="100%" stop-color="${c3}"/></linearGradient></defs>
      <polygon points="50,5 89,27.5 89,72.5 50,95 11,72.5 11,27.5" fill="url(#grad-${id})" fill-opacity="0.22" stroke="url(#grad-${id})" stroke-width="3"/>
      <polygon points="50,13 82,31.5 82,68.5 50,87 18,68.5 18,31.5" fill="#181427" fill-opacity="0.72" stroke="rgba(255,255,255,0.22)" stroke-width="1.4"/>
      <circle cx="50" cy="13" r="2.2" fill="${c3}"/><circle cx="50" cy="87" r="2.2" fill="${c3}"/>
      ${glyph}
    </svg>`;
}

function getStatusIconMarkup(isUnlocked) {
  return isUnlocked
    ? `<svg class="badge-status-icon" viewBox="0 0 20 20" fill="none" aria-hidden="true"><circle cx="10" cy="10" r="8.5" stroke="currentColor" stroke-width="1.8"/><path d="M6.5 10.2L8.9 12.6L13.8 7.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`
    : `<svg class="badge-status-icon" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M6.5 8.5V6.5C6.5 4.567 8.067 3 10 3C11.933 3 13.5 4.567 13.5 6.5V8.5" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/><rect x="4.5" y="8.5" width="11" height="8.5" rx="2" stroke="currentColor" stroke-width="1.7"/></svg>`;
}

function syncBodyScrollLock() {
  const anyOpen = Boolean(document.querySelector(".game-modal-overlay.modal-open, .badge-unlock-overlay.modal-open, .protocol-modal-overlay.modal-open"));
  document.body.style.overflow = anyOpen ? "hidden" : "";
}

function setOverlayOpen(overlayId, isOpen) {
  const el = document.getElementById(overlayId);
  if (!el) return;
  el.classList.toggle("modal-open", isOpen);
  el.setAttribute("aria-hidden", String(!isOpen));
  syncBodyScrollLock();
}

function bindOverlayClose(overlayId, closeBtnId, closeHandler) {
  const overlay = document.getElementById(overlayId);
  const closeBtn = document.getElementById(closeBtnId);
  if (closeBtn) closeBtn.addEventListener("click", closeHandler);
  if (overlay) overlay.addEventListener("click", (e) => { if (e.target === overlay) closeHandler(); });
}

function renderAchievementVault(justUnlockedId = null) {
  const earned = BadgeManager.getEarnedCount();
  const total = BadgeManager.getTotalCount();
  const pct = total > 0 ? (earned / total) * 100 : 0;
  const formattedPct = Number.isInteger(pct) ? `${pct}%` : `${pct.toFixed(2)}%`;

  const setText = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
  setText("badges-collected-count", `${earned} / ${total}`);
  setText("badges-collected-percent", formattedPct);

  const bar = document.getElementById("vault-progressbar");
  const fill = document.getElementById("vault-progress-fill");
  const banner = document.getElementById("vault-quest-banner");
  const bonusPill = document.getElementById("vault-bonus-status-pill");
  if (bar) bar.setAttribute("aria-valuenow", String(earned));
  if (fill) fill.style.width = formattedPct;
  if (banner) banner.hidden = !BadgeManager.isQuestComplete();
  if (bonusPill) bonusPill.hidden = !OperationCiscoManager.hasMasterBadge();

  const badgeGrid = document.getElementById("badge-grid");
  if (badgeGrid) {
    badgeGrid.innerHTML = BADGES_CONFIG.map((badge) => {
      const unlocked = BadgeManager.hasBadge(badge.id);
      const pill = unlocked
        ? `<span class="badge-indicator-pill"><span class="badge-unlocked-dot" aria-hidden="true"></span>UNLOCKED</span>`
        : `<span class="badge-indicator-pill">LOCKED</span>`;
      return `
        <article class="badge-card ${unlocked ? "is-unlocked" : "is-locked"} ${justUnlockedId === badge.id ? "is-newly-unlocked" : ""}" data-badge-id="${badge.id}">
          <div class="badge-card-top"><span class="badge-slot-code">${badge.slot}</span>${pill}</div>
          <div class="badge-artwork-wrap">${getBadgeSvgMarkup(badge)}</div>
          <span class="badge-game-tag">${badge.gameName}</span>
          <h3 class="badge-name">${badge.name}</h3>
          <p class="badge-desc">${badge.description}</p>
          <div class="badge-status-footer">${getStatusIconMarkup(unlocked)}<span>${unlocked ? "BADGE EARNED" : "NOT EARNED YET"}</span></div>
        </article>`;
    }).join("");
  }

  renderSeventhBonusBadge();
  updateFinalProtocolSection(Boolean(justUnlockedId) && BadgeManager.isQuestComplete());
}

function updateFinalProtocolSection(animateUnlock = false) {
  const card = document.getElementById("final-protocol-card");
  if (!card) return;
  const unlocked = BadgeManager.isQuestComplete();
  const statusEl = document.getElementById("protocol-status-text");
  const grantedEl = document.getElementById("protocol-access-granted");
  const ctaEl = document.getElementById("protocol-cta-wrap");
  const enterBtn = document.getElementById("enter-final-protocol-btn");

  card.classList.toggle("is-unlocked", unlocked);
  card.classList.toggle("is-locked", !unlocked);
  if (unlocked && animateUnlock) {
    card.classList.add("is-unlocking");
    setTimeout(() => card.classList.remove("is-unlocking"), 900);
  } else if (!unlocked) {
    card.classList.remove("is-unlocking");
  }

  if (statusEl) {
    statusEl.textContent = unlocked
      ? (OperationCiscoManager.hasMasterBadge() ? "MISSION ACCOMPLISHED · 7TH BADGE EARNED" : "PROTOCOL UNLOCKED · 6 / 6 BADGES")
      : `ENCRYPTED · ${BadgeManager.getEarnedCount()} / ${BadgeManager.getTotalCount()} BADGES`;
  }
  if (grantedEl) grantedEl.hidden = !unlocked;
  if (ctaEl) ctaEl.hidden = !unlocked;
  if (enterBtn && unlocked) {
    const label = OperationCiscoManager.hasMasterBadge()
      ? "REVISIT OPERATION CISCO"
      : (OperationCiscoManager.state.stage1Solved ? "RESUME OPERATION CISCO" : "ENTER THE FINAL PROTOCOL");
    enterBtn.innerHTML = `${label} <span>↗</span>`;
  }
}

function spawnConfettiOnStage(stageId = "badge-confetti-stage") {
  const stage = document.getElementById(stageId);
  if (!stage) return;
  stage.innerHTML = "";
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const colors = ["#7952ec", "#b6de80", "#f08354", "#ffd166", "#3b82f6", "#ffffff"];
  for (let i = 0; i < 34; i++) {
    const piece = document.createElement("span");
    piece.className = "confetti-piece";
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.background = colors[i % colors.length];
    piece.style.setProperty("--drift-x", `${((Math.random() - 0.5) * 140).toFixed(1)}px`);
    piece.style.setProperty("--spin-deg", `${(220 + Math.random() * 440).toFixed(0)}deg`);
    piece.style.setProperty("--fall-dur", `${(1.6 + Math.random() * 1.1).toFixed(2)}s`);
    piece.style.animationDelay = `${(Math.random() * 0.28).toFixed(2)}s`;
    stage.appendChild(piece);
  }
}

function showBadgeUnlockModal(badge) {
  if (!badge) return;
  const artwork = document.getElementById("badge-unlock-artwork");
  const name = document.getElementById("badge-unlock-name");
  const game = document.getElementById("badge-unlock-game");
  const desc = document.getElementById("badge-unlock-desc");
  if (artwork) artwork.innerHTML = getBadgeSvgMarkup(badge);
  if (name) name.textContent = badge.name.toUpperCase();
  if (game) game.textContent = `EARNED IN ${badge.gameName.toUpperCase()}`;
  if (desc) desc.textContent = badge.description;

  spawnConfettiOnStage("badge-confetti-stage");
  setOverlayOpen("badge-unlock-modal-overlay", true);
}

function closeBadgeUnlockModal(alsoCloseGameModal = false) {
  const stage = document.getElementById("badge-confetti-stage");
  if (stage) stage.innerHTML = "";
  setOverlayOpen("badge-unlock-modal-overlay", false);
  if (alsoCloseGameModal) closeModal();
}

// =========================================
// 6. OPERATION CISCO – THE FINAL PROTOCOL
// =========================================
function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (ch) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch]));
}

function normalizeMysteryAnswer(value) {
  return String(value ?? "").trim().toUpperCase().replace(/\s+/g, " ");
}

function checkNormalizedAnswer(rawInput, acceptedList) {
  const norm = normalizeMysteryAnswer(rawInput);
  if (!norm) return { empty: true, matched: false };
  const valid = (acceptedList || []).map(normalizeMysteryAnswer);
  return { empty: false, matched: valid.includes(norm) };
}

function formatCompletionTimestamp(isoStr) {
  if (!isoStr) return "";
  try {
    return new Date(isoStr).toLocaleString("en-IN", { day: "2-digit", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" });
  } catch (_err) {
    return isoStr;
  }
}

function generateCompletionCode() {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  const block = (n) => Array.from({ length: n }, () => chars[Math.floor(Math.random() * chars.length)]).join("");
  return `CCVB-${block(4)}-${block(4)}`;
}

function getMasterBadgeSvgMarkup() {
  return `
    <svg class="badge-svg" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs><linearGradient id="grad-master-protocol" x1="10" y1="8" x2="90" y2="92" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="#ffd166"/><stop offset="48%" stop-color="#b6de80"/><stop offset="100%" stop-color="#7952ec"/></linearGradient></defs>
      <polygon points="50,4 64,14 82,18 86,36 96,50 86,64 82,82 64,86 50,96 36,86 18,82 14,64 4,50 14,36 18,18 36,14" fill="url(#grad-master-protocol)" fill-opacity="0.22" stroke="url(#grad-master-protocol)" stroke-width="2.8"/>
      <polygon points="50,14 81,32 81,68 50,86 19,68 19,32" fill="#171226" fill-opacity="0.86" stroke="#ffd166" stroke-width="1.6"/>
      <circle cx="50" cy="50" r="18" stroke="#b6de80" stroke-width="1.8" stroke-dasharray="3 3"/>
      <path d="M37 56L41 40L50 48L59 40L63 56H37Z" fill="#ffd166" stroke="#fff" stroke-width="1.5" stroke-linejoin="round"/>
      <circle cx="50" cy="36" r="2.6" fill="#b6de80"/><rect x="38" y="59" width="24" height="4" rx="2" fill="#b6de80"/>
    </svg>`;
}

const defaultProtocolState = () => ({
  activeStage: 1,
  activeClueIndex: 0,
  stage1Solved: false,
  solvedClues: [],
  recoveredFragments: {},
  stage3Solved: false,
  completedAt: null,
  completionCode: null,
  participantName: ""
});

const OperationCiscoStorage = createJsonStorage(
  "uptime_ultimatum_protocol_state_v1",
  defaultProtocolState,
  (parsed) => {
    const base = defaultProtocolState();
    if (!parsed || typeof parsed !== "object") return base;
    const clues = window.OPERATION_CISCO_CONFIG?.stage2?.clues || [];
    const validClueIds = new Set(clues.map((c) => c.id));
    const solvedClues = Array.isArray(parsed.solvedClues)
      ? Array.from(new Set(parsed.solvedClues.filter((id) => validClueIds.has(id))))
      : [];
    const stage1Solved = Boolean(parsed.stage1Solved);
    const stage3Solved = Boolean(parsed.stage3Solved && stage1Solved && solvedClues.length >= clues.length);
    const maxClueIdx = Math.max(0, clues.length - 1);
    const rawStage = Number.isInteger(parsed.activeStage) ? parsed.activeStage : 1;

    return {
      activeStage: Math.min(Math.max(rawStage, 1), 4),
      activeClueIndex: Math.min(Math.max(Number.isInteger(parsed.activeClueIndex) ? parsed.activeClueIndex : 0, 0), maxClueIdx),
      stage1Solved,
      solvedClues,
      recoveredFragments: parsed.recoveredFragments && typeof parsed.recoveredFragments === "object" ? parsed.recoveredFragments : {},
      stage3Solved,
      completedAt: stage3Solved && typeof parsed.completedAt === "string" ? parsed.completedAt : null,
      completionCode: stage3Solved && typeof parsed.completionCode === "string" ? parsed.completionCode : null,
      participantName: typeof parsed.participantName === "string" ? parsed.participantName.slice(0, 48) : ""
    };
  }
);

const OperationCiscoManager = {
  state: defaultProtocolState(),
  uiFeedback: null,
  showHint: false,
  newlyAwardedInSession: false,

  getConfig() { return window.OPERATION_CISCO_CONFIG || {}; },
  init() { this.state = OperationCiscoStorage.load(); },
  persist() { OperationCiscoStorage.save(this.state); },
  hasMasterBadge() { return Boolean(this.state.completedAt && this.state.stage3Solved); },

  getMaxUnlockedStage() {
    if (this.state.stage3Solved) return 4;
    const cluesLen = (this.getConfig().stage2?.clues || []).length;
    if (this.state.stage1Solved && this.state.solvedClues.length >= cluesLen) return 3;
    return this.state.stage1Solved ? 2 : 1;
  },

  setStage(stageNum) {
    if (stageNum >= 1 && stageNum <= this.getMaxUnlockedStage()) {
      this.state.activeStage = stageNum;
      this.uiFeedback = null;
      this.showHint = false;
      this.persist();
    }
  },

  setClueIndex(idx) {
    const clues = this.getConfig().stage2?.clues || [];
    if (idx >= 0 && idx < clues.length) {
      this.state.activeClueIndex = idx;
      this.uiFeedback = null;
      this.showHint = false;
      this.persist();
    }
  },

  submitStage1(rawInput) {
    const s1 = this.getConfig().stage1 || {};
    const res = checkNormalizedAnswer(rawInput, s1.acceptedAnswers);
    if (res.empty) {
      this.uiFeedback = { type: "error", text: "Enter the decoded word from the binary stream." };
      return false;
    }
    if (res.matched) {
      this.state.stage1Solved = true;
      this.state.activeStage = 2;
      this.uiFeedback = { type: "success", text: s1.unlockMessage || "Transmission decoded!" };
      this.showHint = false;
      this.persist();
      return true;
    }
    this.uiFeedback = { type: "error", text: "Signal mismatch. That does not decode the binary transmission—try again or use the hint." };
    return false;
  },

  submitStage2Clue(clueIndex, rawInput) {
    const clue = (this.getConfig().stage2?.clues || [])[clueIndex];
    if (!clue) return false;
    const res = checkNormalizedAnswer(rawInput, clue.acceptedAnswers);
    if (res.empty) {
      this.uiFeedback = { type: "error", text: "Enter your decoded answer for this clue." };
      return false;
    }
    if (res.matched) {
      if (!this.state.solvedClues.includes(clue.id)) this.state.solvedClues.push(clue.id);
      this.state.recoveredFragments[clue.id] = clue.fragmentValue;
      this.uiFeedback = { type: "success", text: `${clue.code} verified! Recovered ${clue.fragmentLabel}: ${clue.fragmentValue}` };
      this.showHint = false;
      this.persist();
      return true;
    }
    this.uiFeedback = { type: "error", text: `Incorrect input for ${clue.code}. Re-check the clue payload or open the hint.` };
    return false;
  },

  getExpectedFinalPassword() {
    const cfg = this.getConfig();
    const clues = cfg.stage2?.clues || [];
    return clues.map((c) => c.fragmentValue).join(cfg.stage3?.passwordSeparator ?? "-");
  },

  submitStage3(rawInput) {
    const s3 = this.getConfig().stage3 || {};
    const res = checkNormalizedAnswer(rawInput, [this.getExpectedFinalPassword()]);
    if (res.empty) {
      this.uiFeedback = { type: "error", text: "Combine the three recovered fragments to enter the final code." };
      return false;
    }
    if (res.matched) {
      this.state.stage3Solved = true;
      this.state.activeStage = 4;
      this.uiFeedback = { type: "success", text: `${s3.authenticatedTitle || "FINAL CODE AUTHENTICATED"} — ${s3.accessGrantedLabel || "ACCESS GRANTED"}` };
      this.showHint = false;
      if (!this.state.completedAt) {
        this.state.completedAt = new Date().toISOString();
        this.state.completionCode = generateCompletionCode();
        this.newlyAwardedInSession = true;
      } else {
        this.newlyAwardedInSession = false;
      }
      this.persist();
      return true;
    }
    this.uiFeedback = { type: "error", text: "Authentication rejected. Verify the order and hyphen format of your three recovered fragments." };
    return false;
  },

  updateParticipantName(name) {
    this.state.participantName = String(name ?? "").trim().slice(0, 48);
    this.persist();
  }
};

function renderSeventhBonusBadge() {
  const container = document.getElementById("vault-bonus-section");
  if (!container) return;
  const b7 = OperationCiscoManager.getConfig().seventhBadge || {
    id: "master-of-protocol", slot: "BONUS BADGE 07", name: "MASTER OF THE PROTOCOL",
    description: "For successfully completing Operation Cisco and uncovering the final mystery.",
    bonusNote: "Bonus achievement — not required to unlock The Final Protocol."
  };
  const unlocked = OperationCiscoManager.hasMasterBadge();
  const { completedAt, completionCode } = OperationCiscoManager.state;

  container.innerHTML = `
    <article class="bonus-badge-card ${unlocked ? "is-unlocked" : "is-locked"}" data-badge-id="${b7.id}">
      <div class="badge-artwork-wrap bonus-badge-artwork">${getMasterBadgeSvgMarkup()}</div>
      <div class="bonus-badge-info">
        <div class="bonus-badge-meta-row">
          <span class="bonus-badge-pill">${escapeHtml(b7.slot)}</span>
          <span class="bonus-badge-note">${escapeHtml(b7.bonusNote)}</span>
        </div>
        <h3 class="bonus-badge-title">${escapeHtml(b7.name)}</h3>
        <p class="bonus-badge-desc">${escapeHtml(b7.description)}</p>
        ${unlocked ? `<div class="bonus-badge-timestamp"><span>COMPLETED: ${escapeHtml(formatCompletionTimestamp(completedAt))}</span><span>CODE: ${escapeHtml(completionCode)}</span></div>` : ""}
      </div>
      <div class="bonus-badge-actions">
        <div class="bonus-badge-status-label">${getStatusIconMarkup(unlocked)}<span>${unlocked ? "7TH BADGE UNLOCKED" : "NOT EARNED YET"}</span></div>
        ${unlocked ? `<button type="button" class="protocol-enter-btn" id="vault-view-cert-btn">VIEW CERTIFICATE <span>↗</span></button>` : ""}
      </div>
    </article>`;

  const viewCertBtn = document.getElementById("vault-view-cert-btn");
  if (viewCertBtn) viewCertBtn.addEventListener("click", openCertificateModal);
}

function buildCertificateCardMarkup() {
  const certCfg = OperationCiscoManager.getConfig().certificate || {};
  const state = OperationCiscoManager.state;
  const participant = state.participantName || certCfg.defaultParticipant || "AGENT / PARTICIPANT";
  const dateDisplay = formatCompletionTimestamp(state.completedAt) || "COMPLETED";
  const codeDisplay = state.completionCode || "CCVB-PROTO";

  return `
    <div class="op-certificate-card" id="op-certificate-card">
      <div class="cert-top-bar">
        <div class="cert-brand-wrap">
          <img src="assets/cisco-logo-white.png" alt="Cisco Community VIT Bhopal" class="cert-brand-logo" />
          <span class="cert-org-label">${escapeHtml(certCfg.organization || "CISCO COMMUNITY · VIT BHOPAL")}</span>
        </div>
        <span class="cert-code-chip">${escapeHtml(codeDisplay)}</span>
      </div>
      <div class="cert-main-grid">
        <div>
          <h3 class="cert-challenge-name">${escapeHtml(certCfg.challengeTitle || "OPERATION CISCO – THE FINAL PROTOCOL")}</h3>
          <p class="cert-awarded-line">AWARDED THE SEVENTH EXCLUSIVE BADGE: ${escapeHtml(certCfg.badgeTitle || "MASTER OF THE PROTOCOL")}</p>
          <div class="cert-participant-name" id="cert-participant-display">${escapeHtml(participant)}</div>
          <div class="cert-meta-row">
            <span>EVENT: ${escapeHtml(certCfg.eventTitle || "THE UPTIME ULTIMATUM")}</span>
            <span>DATE: ${escapeHtml(dateDisplay)}</span>
          </div>
        </div>
        <div class="cert-seal-wrap">${getMasterBadgeSvgMarkup()}</div>
      </div>
      <div class="cert-controls">
        <input type="text" class="cert-name-input" id="cert-participant-input" maxlength="48" placeholder="Optional: Enter your name or team ID for certificate" value="${escapeHtml(state.participantName || "")}" aria-label="Participant identifier for completion certificate" />
        <button type="button" class="protocol-enter-btn" id="download-cert-png-btn">DOWNLOAD CERTIFICATE <span>↓</span></button>
      </div>
    </div>`;
}

function attachCertificateHandlers(root) {
  const input = root.querySelector("#cert-participant-input");
  const display = root.querySelector("#cert-participant-display");
  const dlBtn = root.querySelector("#download-cert-png-btn");
  const fallbackName = OperationCiscoManager.getConfig().certificate?.defaultParticipant || "AGENT / PARTICIPANT";

  if (input) {
    input.addEventListener("input", (e) => {
      OperationCiscoManager.updateParticipantName(e.target.value);
      if (display) display.textContent = OperationCiscoManager.state.participantName || fallbackName;
    });
  }
  if (dlBtn) dlBtn.addEventListener("click", downloadCertificatePng);
}

function downloadCertificatePng() {
  if (!OperationCiscoManager.hasMasterBadge()) return;
  const certCfg = OperationCiscoManager.getConfig().certificate || {};
  const state = OperationCiscoManager.state;
  const participant = (state.participantName || certCfg.defaultParticipant || "AGENT / PARTICIPANT").toUpperCase();
  const dateText = formatCompletionTimestamp(state.completedAt);
  const codeText = state.completionCode || "CCVB-PROTO";

  const canvas = document.createElement("canvas");
  canvas.width = 1200;
  canvas.height = 750;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const grad = ctx.createLinearGradient(0, 0, 1200, 750);
  grad.addColorStop(0, "#171226");
  grad.addColorStop(0.55, "#2b1a58");
  grad.addColorStop(1, "#141021");
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 1200, 750);

  ctx.strokeStyle = "rgba(255,255,255,0.04)";
  ctx.lineWidth = 2;
  for (let x = -750; x < 1600; x += 26) {
    ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x + 750, 750); ctx.stroke();
  }
  ctx.strokeStyle = "#ffd166"; ctx.lineWidth = 4; ctx.strokeRect(28, 28, 1144, 694);
  ctx.strokeStyle = "rgba(182, 222, 128, 0.45)"; ctx.lineWidth = 1.5; ctx.strokeRect(42, 42, 1116, 666);

  ctx.fillStyle = "#b6de80"; ctx.font = "800 22px 'Barlow Condensed', Arial, sans-serif";
  ctx.fillText(certCfg.organization || "CISCO COMMUNITY · VIT BHOPAL", 76, 102);
  ctx.fillStyle = "#ffd166"; ctx.textAlign = "right"; ctx.font = "700 20px monospace";
  ctx.fillText(`CODE: ${codeText}`, 1124, 102); ctx.textAlign = "left";
  ctx.strokeStyle = "rgba(255,255,255,0.18)"; ctx.beginPath(); ctx.moveTo(76, 130); ctx.lineTo(1124, 130); ctx.stroke();

  ctx.fillStyle = "#f08354"; ctx.font = "800 20px 'Barlow Condensed', Arial, sans-serif";
  ctx.fillText("EVENT CHALLENGE COMPLETION CERTIFICATE", 76, 194);
  ctx.fillStyle = "#ffffff"; ctx.font = "900 54px 'Barlow Condensed', Arial, sans-serif";
  ctx.fillText(certCfg.challengeTitle || "OPERATION CISCO – THE FINAL PROTOCOL", 76, 258);
  ctx.fillStyle = "#dfdcf0"; ctx.font = "600 24px 'DM Sans', Arial, sans-serif";
  ctx.fillText("Awarded to:", 76, 338);
  ctx.fillStyle = "#b6de80"; ctx.font = "900 48px 'Barlow Condensed', Arial, sans-serif";
  ctx.fillText(participant, 76, 396);
  ctx.fillStyle = "#ffd166"; ctx.font = "800 24px 'Barlow Condensed', Arial, sans-serif";
  ctx.fillText(`BADGE UNLOCKED: ${certCfg.badgeTitle || "MASTER OF THE PROTOCOL"}`, 76, 466);

  ctx.save(); ctx.translate(980, 385);
  ctx.strokeStyle = "#ffd166"; ctx.fillStyle = "rgba(121, 82, 236, 0.35)"; ctx.lineWidth = 4;
  ctx.beginPath();
  for (let i = 0; i < 6; i++) {
    const a = (Math.PI / 3) * i - Math.PI / 2;
    i === 0 ? ctx.moveTo(Math.cos(a) * 112, Math.sin(a) * 112) : ctx.lineTo(Math.cos(a) * 112, Math.sin(a) * 112);
  }
  ctx.closePath(); ctx.fill(); ctx.stroke();
  ctx.strokeStyle = "#b6de80"; ctx.lineWidth = 2.5; ctx.beginPath(); ctx.arc(0, 0, 74, 0, Math.PI * 2); ctx.stroke();
  ctx.fillStyle = "#ffd166"; ctx.beginPath(); ctx.moveTo(-42, 24); ctx.lineTo(-28, -26); ctx.lineTo(0, 0); ctx.lineTo(28, -26); ctx.lineTo(42, 24); ctx.closePath(); ctx.fill();
  ctx.fillStyle = "#b6de80"; ctx.fillRect(-38, 34, 76, 11);
  ctx.restore();

  ctx.fillStyle = "#c8c1e6"; ctx.font = "700 18px 'Barlow Condensed', Arial, sans-serif";
  ctx.fillText(`EVENT: ${certCfg.eventTitle || "THE UPTIME ULTIMATUM"}   ·   COMPLETED: ${dateText}`, 76, 615);
  ctx.fillStyle = "rgba(255,255,255,0.6)"; ctx.font = "500 16px 'DM Sans', Arial, sans-serif";
  ctx.fillText(certCfg.recordNote || "Event Challenge Completion Record · Cisco Community VIT Bhopal", 76, 654);

  const triggerDownload = (href, revoke) => {
    const link = document.createElement("a");
    link.href = href;
    link.download = `operation-cisco-${codeText.toLowerCase()}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    if (revoke) setTimeout(() => URL.revokeObjectURL(href), 2000);
  };
  if (canvas.toBlob) {
    canvas.toBlob((blob) => (blob ? triggerDownload(URL.createObjectURL(blob), true) : triggerDownload(canvas.toDataURL("image/png"), false)), "image/png");
  } else {
    triggerDownload(canvas.toDataURL("image/png"), false);
  }
}

function buildFeedbackMarkup() {
  const fb = OperationCiscoManager.uiFeedback;
  if (!fb) return "";
  return `<div class="op-feedback-box"><div class="modal-feedback-alert ${fb.type === "success" ? "feedback-success" : "feedback-error"}"><span class="feedback-symbol">${fb.type === "success" ? "✓" : "✕"}</span><div>${escapeHtml(fb.text)}</div></div></div>`;
}

function renderStage1Panel(s1, state) {
  return `
    <div class="op-stage-panel">
      <div class="op-stage-kicker-row">
        <span class="op-stage-kicker">${escapeHtml(s1.kicker)}</span>
        <span class="signal-indicator"><span class="signal-bars" aria-hidden="true"><i></i><i></i><i></i></span>SIGNAL ACTIVE</span>
      </div>
      <h3 class="op-stage-heading">${escapeHtml(s1.heading)}</h3>
      <p class="op-stage-desc">${escapeHtml(s1.description)}</p>
      <div class="op-terminal-box"><span class="op-terminal-label">${escapeHtml(s1.signalLabel)}</span><div class="op-terminal-payload">${escapeHtml(s1.binaryMessage)}</div></div>
      <form class="op-input-form" id="op-stage1-form">
        <label class="op-input-label" for="op-stage1-input">${escapeHtml(s1.inputLabel)}</label>
        <div class="op-input-row">
          <input type="text" id="op-stage1-input" class="op-text-input" placeholder="${escapeHtml(s1.inputPlaceholder)}" autocomplete="off" value="${state.stage1Solved ? escapeHtml(s1.acceptedAnswers?.[0] || "") : ""}" />
          <button type="submit" class="op-submit-btn">DECODE SIGNAL <span>→</span></button>
        </div>
        <div class="op-controls-row">
          <button type="button" class="op-hint-btn" id="op-toggle-hint-btn">${OperationCiscoManager.showHint ? "HIDE HINT" : "NEED A HINT?"}</button>
          ${state.stage1Solved ? `<button type="button" class="protocol-enter-btn" id="op-goto-stage2-btn">CONTINUE TO STAGE 02 <span>↗</span></button>` : ""}
        </div>
        ${OperationCiscoManager.showHint ? `<div class="op-hint-box">${escapeHtml(s1.hint)}</div>` : ""}
        ${buildFeedbackMarkup()}
      </form>
    </div>`;
}

function renderStage2Panel(s2, state) {
  const clues = s2.clues || [];
  if (!clues.length) return `<div class="op-stage-panel"><p class="op-stage-desc">No clues configured.</p></div>`;
  const idx = Math.min(state.activeClueIndex, clues.length - 1);
  const clue = clues[idx];
  const solved = state.solvedClues.includes(clue.id);
  const allSolved = state.solvedClues.length >= clues.length;

  return `
    <div class="op-stage-panel">
      <div class="op-stage-kicker-row">
        <span class="op-stage-kicker">${escapeHtml(s2.kicker)}</span>
        <span class="signal-indicator">${escapeHtml(clue.progressLabel)} · ${state.solvedClues.length}/${clues.length} SOLVED</span>
      </div>
      <h3 class="op-stage-heading">${escapeHtml(s2.heading)}</h3>
      <p class="op-stage-desc">${escapeHtml(s2.description)}</p>
      <div class="op-clue-tabs">
        ${clues.map((c, i) => `
          <button type="button" class="op-clue-tab ${i === idx ? "is-active" : ""} ${state.solvedClues.includes(c.id) ? "is-solved" : ""}" data-clue-idx="${i}">
            <div class="op-clue-tab-top"><span>${escapeHtml(c.progressLabel)}</span><span>${state.solvedClues.includes(c.id) ? "✓ SOLVED" : "OPEN"}</span></div>
            <span class="op-clue-tab-title">${escapeHtml(c.code)} – ${escapeHtml(c.category)}</span>
          </button>`).join("")}
      </div>
      <div class="op-clue-card clue-variant-${escapeHtml(clue.id)}">
        <span class="op-stage-kicker">${escapeHtml(clue.code)} · ${escapeHtml(clue.category)}</span>
        <p class="op-stage-desc" style="margin-top:8px;">${escapeHtml(clue.prompt)}</p>
        <div class="op-terminal-box"><span class="op-terminal-label">${escapeHtml(clue.visualTag)}</span><div class="op-terminal-payload">${escapeHtml(clue.payloadDisplay)}</div></div>
        <form class="op-input-form" id="op-stage2-form">
          <div class="op-input-row">
            <input type="text" id="op-stage2-input" class="op-text-input" placeholder="${escapeHtml(clue.inputPlaceholder)}" autocomplete="off" value="${solved ? escapeHtml(state.recoveredFragments[clue.id] || "") : ""}" />
            <button type="submit" class="op-submit-btn">VERIFY CLUE <span>→</span></button>
          </div>
          <div class="op-controls-row">
            <button type="button" class="op-hint-btn" id="op-toggle-hint-btn">${OperationCiscoManager.showHint ? "HIDE HINT" : "CLUE HINT"}</button>
            ${solved && idx < clues.length - 1 ? `<button type="button" class="op-hint-btn" id="op-next-clue-btn">NEXT CLUE (${idx + 2}/${clues.length}) →</button>` : ""}
          </div>
          ${OperationCiscoManager.showHint ? `<div class="op-hint-box">${escapeHtml(clue.hint)}</div>` : ""}
          ${buildFeedbackMarkup()}
        </form>
      </div>
      <div class="op-fragments-bar" aria-label="Recovered secret fragments">
        ${clues.map((c) => {
          const frag = state.recoveredFragments[c.id];
          return `<div class="op-fragment-chip ${frag ? "is-found" : ""}"><span class="op-fragment-label">${escapeHtml(c.fragmentLabel)}</span><span class="op-fragment-value">${frag ? escapeHtml(frag) : "???"}</span></div>`;
        }).join("")}
      </div>
      ${allSolved ? `<div class="op-next-row"><span class="op-stage-kicker" style="color:var(--lime);">ALL THREE FRAGMENTS RECOVERED</span><button type="button" class="protocol-enter-btn" id="op-goto-stage3-btn">PROCEED TO STAGE 03: FINAL PASSWORD <span>↗</span></button></div>` : ""}
    </div>`;
}

function renderStage3Panel(s3, clues, state) {
  return `
    <div class="op-stage-panel">
      <div class="op-stage-kicker-row">
        <span class="op-stage-kicker">${escapeHtml(s3.kicker)}</span>
        <span class="signal-indicator">${escapeHtml(s3.formatLabel)}</span>
      </div>
      <h3 class="op-stage-heading">${escapeHtml(s3.heading)}</h3>
      <p class="op-stage-desc">${escapeHtml(s3.description)}</p>
      <div class="op-fragments-bar" style="margin-top:0; margin-bottom:18px;">
        ${clues.map((c) => `<div class="op-fragment-chip is-found"><span class="op-fragment-label">${escapeHtml(c.fragmentLabel)}</span><span class="op-fragment-value">${escapeHtml(state.recoveredFragments[c.id] || c.fragmentValue)}</span></div>`).join("")}
      </div>
      <form class="op-input-form" id="op-stage3-form">
        <label class="op-input-label" for="op-stage3-input">FINAL PROTOCOL PASSWORD</label>
        <div class="op-input-row">
          <input type="text" id="op-stage3-input" class="op-text-input" placeholder="${escapeHtml(s3.inputPlaceholder)}" autocomplete="off" value="${state.stage3Solved ? escapeHtml(OperationCiscoManager.getExpectedFinalPassword()) : ""}" />
          <button type="submit" class="op-submit-btn">AUTHENTICATE <span>→</span></button>
        </div>
        <div class="op-controls-row"><button type="button" class="op-hint-btn" id="op-toggle-hint-btn">${OperationCiscoManager.showHint ? "HIDE HINT" : "NEED A HINT?"}</button></div>
        ${OperationCiscoManager.showHint ? `<div class="op-hint-box">${escapeHtml(s3.hint)}</div>` : ""}
        ${buildFeedbackMarkup()}
      </form>
      ${state.stage3Solved ? `<div class="op-auth-banner"><div class="op-auth-banner-title">${escapeHtml(s3.authenticatedTitle)} · ${escapeHtml(s3.accessGrantedLabel)}</div><button type="button" class="protocol-enter-btn" id="op-goto-stage4-btn">OPEN STAGE 04: THE FINAL REVELATION <span>↗</span></button></div>` : ""}
    </div>`;
}

function renderStage4Panel(cfg) {
  const s4 = cfg.stage4 || {};
  const rev = s4.revelation || {};
  const b7 = cfg.seventhBadge || {};
  const s3 = cfg.stage3 || {};
  return `
    <div class="op-stage-panel">
      <div class="op-stage-kicker-row">
        <span class="op-stage-kicker">${escapeHtml(s4.kicker)}</span>
        <span class="access-granted-badge">${escapeHtml(s3.accessGrantedLabel || "ACCESS GRANTED")}</span>
      </div>
      <h3 class="op-stage-heading">${escapeHtml(s4.heading)}</h3>
      <p class="op-stage-desc">${escapeHtml(s4.subtitle)}</p>
      <div class="op-revelation-card">
        <span class="op-revelation-badge">${escapeHtml(rev.badge)}</span>
        <h4 class="op-revelation-title">${escapeHtml(rev.title)}</h4>
        <p class="op-revelation-msg">${escapeHtml(rev.message)}</p>
        ${rev.footerNote ? `<p class="op-revelation-note">${escapeHtml(rev.footerNote)}</p>` : ""}
      </div>
      <div class="op-seventh-reveal-box">
        <div class="op-seventh-reveal-art">${getMasterBadgeSvgMarkup()}</div>
        <div>
          <span class="bonus-badge-pill">${escapeHtml(b7.slot || "BONUS BADGE 07")} · UNLOCKED</span>
          <h4 class="bonus-badge-title" style="color:var(--lime); margin-top:6px;">${escapeHtml(b7.name || "MASTER OF THE PROTOCOL")}</h4>
          <p class="op-stage-desc" style="margin:6px 0 0;">${escapeHtml(b7.description || "")}</p>
        </div>
      </div>
      ${buildCertificateCardMarkup()}
      <div class="op-next-row">
        <span class="op-stage-kicker" style="color:var(--lime);">7TH BONUS BADGE ADDED TO YOUR ACHIEVEMENT VAULT</span>
        <button type="button" class="protocol-enter-btn" id="op-finish-vault-btn">RETURN TO ACHIEVEMENT VAULT <span>↓</span></button>
      </div>
    </div>`;
}

function renderOperationCiscoModal() {
  const bodyEl = document.getElementById("operation-cisco-body");
  if (!bodyEl) return;

  if (!BadgeManager.isQuestComplete()) {
    const earned = BadgeManager.getEarnedCount();
    const total = BadgeManager.getTotalCount();
    bodyEl.innerHTML = `
      <div class="op-locked-guard">
        <div class="op-kicker">CLEARANCE DENIED // ${earned} OF ${total} BADGES</div>
        <h2 class="op-title" id="protocol-modal-title">PROTOCOL <em>LOCKED</em></h2>
        <p class="op-storyline" style="margin-inline:auto;">You currently hold ${earned} / ${total} badges. Complete all six existing mini-games in The Uptime Ultimatum to unlock Operation Cisco – The Final Protocol.</p>
        <div class="protocol-modal-footer" style="margin-top:22px;"><button type="button" class="protocol-enter-btn" id="op-guard-close-btn">RETURN TO GAMES <span>↓</span></button></div>
      </div>`;
    const guardBtn = bodyEl.querySelector("#op-guard-close-btn");
    if (guardBtn) guardBtn.addEventListener("click", closeFinalProtocolModal);
    return;
  }

  const cfg = OperationCiscoManager.getConfig();
  const state = OperationCiscoManager.state;
  const maxStage = OperationCiscoManager.getMaxUnlockedStage();
  const activeStage = Math.min(state.activeStage, maxStage);

  const stages = [
    { num: 1, label: "01 TRANSMISSION", done: state.stage1Solved },
    { num: 2, label: "02 THREE CLUES", done: maxStage >= 3 },
    { num: 3, label: "03 FINAL CODE", done: state.stage3Solved },
    { num: 4, label: "04 REVELATION", done: OperationCiscoManager.hasMasterBadge() }
  ];

  const panels = {
    1: () => renderStage1Panel(cfg.stage1 || {}, state),
    2: () => renderStage2Panel(cfg.stage2 || {}, state),
    3: () => renderStage3Panel(cfg.stage3 || {}, cfg.stage2?.clues || [], state),
    4: () => renderStage4Panel(cfg)
  };

  bodyEl.innerHTML = `
    <div class="op-header">
      <div class="op-kicker">${escapeHtml(cfg.meta?.organization || "CISCO COMMUNITY · VIT BHOPAL")}</div>
      <h2 class="op-title" id="protocol-modal-title">OPERATION <em>CISCO</em> — THE FINAL PROTOCOL</h2>
      <div class="op-tagline">${escapeHtml(cfg.meta?.tagline || "SIX GAMES. SIX BADGES. ONE FINAL MYSTERY.")}</div>
      <p class="op-storyline">${escapeHtml(cfg.meta?.storyline || "")}</p>
    </div>
    <div class="op-stepper" role="tablist" aria-label="Operation Cisco stages">
      ${stages.map((st) => `<button type="button" class="op-step-btn ${st.num === activeStage ? "is-active" : ""} ${st.done ? "is-done" : ""}" data-stage-nav="${st.num}" ${st.num > maxStage ? "disabled" : ""}><span class="op-step-num">${st.done ? "✓ VERIFIED" : st.num > maxStage ? "🔒 LOCKED" : "ACTIVE"}</span><span class="op-step-name">${st.label}</span></button>`).join("")}
    </div>
    ${panels[activeStage]()}`;

  const on = (sel, ev, fn) => { const el = bodyEl.querySelector(sel); if (el) el.addEventListener(ev, fn); };
  bodyEl.querySelectorAll("[data-stage-nav]").forEach((b) => b.addEventListener("click", () => { OperationCiscoManager.setStage(+b.dataset.stageNav); renderOperationCiscoModal(); }));
  bodyEl.querySelectorAll("[data-clue-idx]").forEach((t) => t.addEventListener("click", () => { OperationCiscoManager.setClueIndex(+t.dataset.clueIdx); renderOperationCiscoModal(); }));
  on("#op-toggle-hint-btn", "click", () => { OperationCiscoManager.showHint = !OperationCiscoManager.showHint; renderOperationCiscoModal(); });
  on("#op-goto-stage2-btn", "click", () => { OperationCiscoManager.setStage(2); renderOperationCiscoModal(); });
  on("#op-goto-stage3-btn", "click", () => { OperationCiscoManager.setStage(3); renderOperationCiscoModal(); });
  on("#op-goto-stage4-btn", "click", () => { OperationCiscoManager.setStage(4); renderOperationCiscoModal(); });
  on("#op-next-clue-btn", "click", () => { OperationCiscoManager.setClueIndex(OperationCiscoManager.state.activeClueIndex + 1); renderOperationCiscoModal(); });

  on("#op-stage1-form", "submit", (e) => {
    e.preventDefault();
    OperationCiscoManager.submitStage1(bodyEl.querySelector("#op-stage1-input")?.value);
    renderAchievementVault();
    renderOperationCiscoModal();
  });
  on("#op-stage2-form", "submit", (e) => {
    e.preventDefault();
    OperationCiscoManager.submitStage2Clue(OperationCiscoManager.state.activeClueIndex, bodyEl.querySelector("#op-stage2-input")?.value);
    renderOperationCiscoModal();
  });
  on("#op-stage3-form", "submit", (e) => {
    e.preventDefault();
    const ok = OperationCiscoManager.submitStage3(bodyEl.querySelector("#op-stage3-input")?.value);
    renderAchievementVault();
    renderOperationCiscoModal();
    if (ok && OperationCiscoManager.newlyAwardedInSession) {
      spawnConfettiOnStage("protocol-confetti-stage");
      OperationCiscoManager.newlyAwardedInSession = false;
    }
  });

  if (activeStage === 4) {
    attachCertificateHandlers(bodyEl);
    on("#op-finish-vault-btn", "click", () => {
      closeFinalProtocolModal();
      document.getElementById("achievement-vault")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }
}

function openFinalProtocolModal() {
  OperationCiscoManager.uiFeedback = null;
  OperationCiscoManager.showHint = false;
  renderOperationCiscoModal();
  setOverlayOpen("final-protocol-modal-overlay", true);
}

function closeFinalProtocolModal() {
  const stage = document.getElementById("protocol-confetti-stage");
  if (stage) stage.innerHTML = "";
  setOverlayOpen("final-protocol-modal-overlay", false);
}

function openCertificateModal() {
  if (!OperationCiscoManager.hasMasterBadge()) return;
  const bodyEl = document.getElementById("certificate-modal-body");
  if (!bodyEl) return;
  bodyEl.innerHTML = `<div class="op-header" style="margin-bottom:16px;"><div class="op-kicker">VERIFIED COMPLETION RECORD</div><h2 class="op-title" id="cert-modal-heading">COMPLETION <em>CERTIFICATE</em></h2></div>${buildCertificateCardMarkup()}`;
  attachCertificateHandlers(bodyEl);
  setOverlayOpen("certificate-modal-overlay", true);
}

function closeCertificateModal() {
  setOverlayOpen("certificate-modal-overlay", false);
}

function handleGameCompletionBadge(gameId) {
  const result = BadgeManager.awardForGame(gameId);
  if (result.newlyUnlocked && result.badge) {
    renderAchievementVault(result.badge.id);
    showBadgeUnlockModal(result.badge);
  }
}

function initBadgeVault() {
  BadgeManager.init();
  OperationCiscoManager.init();
  renderAchievementVault();

  bindOverlayClose("badge-unlock-modal-overlay", "badge-unlock-close-btn", () => closeBadgeUnlockModal(false));
  bindOverlayClose("final-protocol-modal-overlay", "protocol-modal-close-btn", closeFinalProtocolModal);
  bindOverlayClose("certificate-modal-overlay", "certificate-modal-close-btn", closeCertificateModal);

  document.getElementById("badge-unlock-return-btn")?.addEventListener("click", () => {
    closeBadgeUnlockModal(true);
    document.getElementById("achievement-vault")?.scrollIntoView({ behavior: "smooth", block: "start" });
  });
  document.getElementById("enter-final-protocol-btn")?.addEventListener("click", openFinalProtocolModal);

  document.addEventListener("keydown", (e) => {
    if (e.key !== "Escape") return;
    if (document.getElementById("certificate-modal-overlay")?.classList.contains("modal-open")) closeCertificateModal();
    else if (document.getElementById("badge-unlock-modal-overlay")?.classList.contains("modal-open")) closeBadgeUnlockModal(false);
    else if (document.getElementById("final-protocol-modal-overlay")?.classList.contains("modal-open")) closeFinalProtocolModal();
  });
}

initBadgeVault();

// =========================================
// 7. VENUE SATELLITE MAP (LEAFLET)
// =========================================
function initVenueMap() {
  const mapEl = document.getElementById("venue-leaflet-map");
  if (!mapEl || typeof window.L === "undefined") return;

  const coords = [23.07372, 76.85585];
  const map = window.L.map(mapEl, {
    center: coords,
    zoom: 17,
    scrollWheelZoom: false
  });

  window.L.tileLayer(
    "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
    { maxZoom: 19, attribution: "Tiles © Esri" }
  ).addTo(map);

  window.L.tileLayer(
    "https://services.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}",
    { maxZoom: 19, opacity: 0.85 }
  ).addTo(map);

  const ab2Icon = window.L.divIcon({
    className: "",
    iconSize: [0, 0],
    html: `<div class="ab2-map-pin"><span class="ab2-map-pin-label">AB2 · VIT BHOPAL</span><span class="ab2-map-pin-dot"></span></div>`
  });

  window.L.marker(coords, { icon: ab2Icon, interactive: false }).addTo(map);
}

initVenueMap();
