export const ScrollToTopArrow = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <button type="button" onClick={scrollToTop} className="fixed bottom-0 right-0 p-16 bg-sommerfest_sommerfest_CTA">
      {arrow_up}
    </button>
  );
};

const arrow_up = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-arrow-up"
  >
    <line x1="12" y1="19" x2="12" y2="5"></line>
    <polyline points="5 12 12 5 19 12"></polyline>
  </svg>
);
