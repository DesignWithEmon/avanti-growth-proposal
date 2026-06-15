document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('[data-print-button]').forEach((button) => {
    button.addEventListener('click', () => window.print());
  });

  const root = document.querySelector('[data-page-root]');
  if (root) root.classList.add('page-root-ready');

  const sheets = Array.from(document.querySelectorAll('.AvantiProposal-module__aWpJ8q__sheet'));
  sheets.forEach((sheet) => sheet.classList.add('proposal-stage'));

  if ('IntersectionObserver' in window && sheets.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.14, rootMargin: '0px 0px -6% 0px' });

    sheets.forEach((sheet) => observer.observe(sheet));
  } else {
    sheets.forEach((sheet) => sheet.classList.add('is-visible'));
  }
});
