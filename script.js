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
  if (e.key === "Escape" && modalOverlay && modalOverlay.classList.contains("modal-open")) {
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

  const playAgainBtn = document.getElementById("play-again-btn");
  if (playAgainBtn) {
    playAgainBtn.addEventListener("click", () => {
      startGame(currentGame.id);
    });
  }

  const returnBtn = document.getElementById("return-games-btn");
  if (returnBtn) {
    returnBtn.addEventListener("click", closeModal);
  }
}
