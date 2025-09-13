// Theme tokens for Bratz Urban Properties (Full Dark Orange theme)

(function () {
  const styles = `
    /* Header & Footer */
    .token-header {
      background: #9A3412; /* burnt dark orange */
    }

    /* Call-to-Action blocks */
    .token-cta {
      background: #C2410C; /* dark orange */
      color: #ffffff;
    }

    /* Section backgrounds */
    .token-section {
      background: #ffffff;
    }

    /* Navigation pills */
    .nav-chip {
      display: inline-block;
      padding: 0.35rem 0.75rem;
      border-radius: 9999px;
      background: rgba(255, 255, 255, 0.15); /* lighter orange tint */
      color: #ffffff;
      font-size: 0.875rem;
      font-weight: 500;
      transition: background 0.2s, color 0.2s;
    }
    .nav-chip:hover {
      background: #C2410C; /* dark orange hover */
      color: #ffffff;
    }
  `;
  const styleEl = document.createElement("style");
  styleEl.innerHTML = styles;
  document.head.appendChild(styleEl);
})();
