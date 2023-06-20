function PreFilterSVG() {
  return (
    <svg
      className="pageSVG"
      preserveAspectRatio="xMidYMid slice"
      viewBox="10 10 80 80"
    >
      <path
        fill="#EA9C90"
        className="out-top"
        d="M50 10
    C90 10, 90 90, 50 90
    C10 90, 10 10, 50 10
    Z"
      />
      <path
        fill="#E2CFE1"
        className="in-top"
        d="M50 10
    C90 10, 90 90, 50 90
    C10 90, 10 10, 50 10
    Z"
      />
      <path
        fill="#C2D293"
        className="out-bottom"
        d="M50 10
    C90 10, 90 90, 50 90
    C10 90, 10 10, 50 10
    ZZ"
      />
      <path
        fill="#A7C0CB"
        className="in-bottom"
        d="M50 10
    C90 10, 90 90, 50 90
    C10 90, 10 10, 50 10
    Z"
      />
    </svg>
  );
}

export default PreFilterSVG;
