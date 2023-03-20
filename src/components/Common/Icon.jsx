import PropTypes from "prop-types";

function Icon({ svgPath, url, size }) {
  return (
    <a
      href={url}
      className="text-gray-100 hover:text-gray-100"
      rel="noreferrer noopener"
      target="_blank"
    >
      <svg className={size} fill="black" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d={svgPath} clipRule="evenodd" />
      </svg>
    </a>
  );
}

Icon.propTypes = {
  svgPath: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  size: PropTypes.string,
};

Icon.defaultProps = {
  size: "w-20 h-20",
};

export default Icon;
