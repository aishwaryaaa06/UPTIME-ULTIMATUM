/**
 * OPERATION CISCO – THE FINAL PROTOCOL
 * Organizer Configuration File
 *
 * Edit mission copy, puzzles, hints, accepted answers, fragments,
 * final revelation message, and certificate labels here without
 * touching the core gameplay or UI code.
 *
 * SECURITY NOTE:
 * Answers stored in client-side JavaScript are visible to anyone
 * inspecting browser source code. For tamper-resistant event grading
 * in production, move answer verification and badge awarding to a
 * backend endpoint (e.g. Supabase Edge Function).
 */
window.OPERATION_CISCO_CONFIG = {
  meta: {
    title: "OPERATION CISCO – THE FINAL PROTOCOL",
    shortTitle: "OPERATION CISCO",
    tagline: "SIX GAMES. SIX BADGES. ONE FINAL MYSTERY.",
    organization: "CISCO COMMUNITY · VIT BHOPAL",
    storyline:
      "An unknown transmission has been intercepted inside the Cisco Community network. The original message has been encrypted and divided into hidden clues. Only those who have completed all six challenges can access the classified investigation. Your mission is to investigate the transmission, solve the puzzles, recover the secret code, and uncover the final revelation."
  },

  stage1: {
    kicker: "STAGE 01 // THE UNKNOWN TRANSMISSION",
    heading: "INCOMING TRANSMISSION DETECTED",
    description:
      "An unidentified signal has entered the network. Its contents are encrypted. Decode the transmission to continue.",
    signalLabel: "ENCRYPTED BINARY STREAM · 8-BIT ASCII",
    // Binary for "CISCO" (67, 73, 83, 67, 79)
    binaryMessage: "01000011  01001001  01010011  01000011  01001111",
    inputLabel: "ENTER DECODED TRANSMISSION",
    inputPlaceholder: "Type decoded word...",
    acceptedAnswers: ["CISCO"],
    hint: "Convert each 8-bit binary group to a decimal number, then match it to its uppercase ASCII letter (65 = A, 66 = B, 67 = C...).",
    unlockMessage: "Transmission decoded! Signal origin confirmed. Stage 02 clues are now unlocked."
  },

  stage2: {
    kicker: "STAGE 02 // THE THREE HIDDEN CLUES",
    heading: "INVESTIGATE THE INTERCEPTED FRAGMENTS",
    description:
      "The original payload was split across three network clues. Solve each clue to recover all three secret fragments.",
    clues: [
      {
        id: "clue-1",
        code: "CLUE 01",
        progressLabel: "CLUE 1/3",
        category: "BINARY DECODING",
        visualTag: "PACKET PAYLOAD // 8-BIT ASCII",
        prompt:
          "Decode the 3-byte binary tag embedded in the packet header to recover Fragment 1.",
        // Binary for "VIT" (86, 73, 84)
        payloadDisplay: "01010110   01001001   01010100",
        inputPlaceholder: "Decoded 3-letter tag...",
        acceptedAnswers: ["VIT"],
        hint: "86 = V, 73 = I, 84 = T. Check the binary place values (128, 64, 32, 16, 8, 4, 2, 1).",
        fragmentLabel: "FRAGMENT 1",
        fragmentValue: "VIT"
      },
      {
        id: "clue-2",
        code: "CLUE 02",
        progressLabel: "CLUE 2/3",
        category: "NETWORK INVESTIGATION",
        visualTag: "FIREWALL LOG // PORT TRACE",
        prompt:
          "A firewall trace inside the campus lab shows unencrypted HTTP traffic on port 80, followed by an encrypted HTTPS session. What standard TCP port number does HTTPS use?",
        payloadDisplay: "ALLOW TCP  10.24.8.12  ->  GATEWAY:[ ??? ]  (PROTOCOL: HTTPS)",
        inputPlaceholder: "Enter port number...",
        acceptedAnswers: ["443", "PORT 443"],
        hint: "HTTP uses port 80. Secure HTTPS uses a 3-digit port starting with 4.",
        fragmentLabel: "FRAGMENT 2",
        fragmentValue: "443"
      },
      {
        id: "clue-3",
        code: "CLUE 03",
        progressLabel: "CLUE 3/3",
        category: "THE PATTERN",
        visualTag: "ROUTING MATRIX // SEQUENCE",
        prompt:
          "Each Cisco relay node doubles the previous beacon value and adds 1. Identify the missing fifth beacon number in the sequence.",
        payloadDisplay: "03   →   07   →   15   →   31   →   [ ?? ]",
        inputPlaceholder: "Enter missing number...",
        acceptedAnswers: ["63"],
        hint: "Multiply 31 by 2 and add 1 (or notice each step adds +4, +8, +16, +32).",
        fragmentLabel: "FRAGMENT 3",
        fragmentValue: "63"
      }
    ]
  },

  stage3: {
    kicker: "STAGE 03 // THE FINAL PASSWORD",
    heading: "REASSEMBLE THE PROTOCOL KEY",
    description:
      "Combine your three recovered fragments in order, separated by hyphens, to authenticate the Final Protocol.",
    formatLabel: "EXPECTED FORMAT: FRAGMENT1-FRAGMENT2-FRAGMENT3",
    inputPlaceholder: "e.g. XXX-000-00",
    passwordSeparator: "-",
    hint: "Join Fragment 1, Fragment 2, and Fragment 3 in exact order with hyphens between them.",
    authenticatedTitle: "FINAL CODE AUTHENTICATED",
    accessGrantedLabel: "ACCESS GRANTED"
  },

  stage4: {
    kicker: "STAGE 04 // THE FINAL REVELATION",
    heading: "MISSION ACCOMPLISHED",
    subtitle: "Transmission successfully decoded. You have uncovered the final secret.",
    revelation: {
      badge: "ORGANIZER TRANSMISSION // CLASSIFIED BRIEFING",
      title: "WELCOME TO THE INNER CIRCLE AT AB2",
      message:
        "[ORGANIZER PLACEHOLDER] Replace this message in operation-cisco-config.js before event day with your exclusive Cisco Community VIT Bhopal announcement, secret checkpoint passphrase, or live finale activity at AB2 Glass Portico (05 December 2026).",
      footerNote: "Show your completion certificate or completion code at the Cisco Community desk if instructed by the event organizers."
    }
  },

  seventhBadge: {
    id: "master-of-protocol",
    slot: "BONUS BADGE 07",
    name: "MASTER OF THE PROTOCOL",
    gameName: "Operation Cisco – The Final Protocol",
    description: "For successfully completing Operation Cisco and uncovering the final mystery.",
    bonusNote: "Bonus achievement — not required to unlock The Final Protocol."
  },

  certificate: {
    organization: "CISCO COMMUNITY · VIT BHOPAL",
    eventTitle: "THE UPTIME ULTIMATUM",
    challengeTitle: "OPERATION CISCO – THE FINAL PROTOCOL",
    badgeTitle: "MASTER OF THE PROTOCOL",
    defaultParticipant: "AGENT / PARTICIPANT",
    recordNote: "Event Challenge Completion Record · Cisco Community VIT Bhopal"
  }
};
