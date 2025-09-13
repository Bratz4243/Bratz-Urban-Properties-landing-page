// Theme tokens for Bratz Urban Properties (Dark Orange version)

(function () {
  const styles = `
    .token-header {
      background: #0E2A33; /* dark teal/navy */
    }
    .token-cta {
      background: #C2410C; /* dark orange */
      color: #ffffff;
    }
    .token-section {
      background: #ffffff;
    }
    .nav-chip {
      display: inline-block;
      padding: 0.35rem 0.75rem;
      border-radius: 9999px;
      background: rgba(194, 65, 12, 0.15); /* soft orange tint */
      color: #0E2A33;
      font-size: 0.875rem;
      font-weight: 500;
      transition: background 0.2s, color 0.2s;
    }
    .nav-chip:hover {
      background: #C2410C;
      color: white;
    }
  `;
  const styleEl = document.createElement("style");
  styleEl.innerHTML = styles;
  document.head.appendChild(styleEl);
})();
