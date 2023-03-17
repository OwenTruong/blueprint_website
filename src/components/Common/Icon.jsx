import PropTypes from "prop-types";

function Icon({ svgPath, url }) {
  return (
    <a
      href={url}
      className="text-gray-100 hover:text-gray-100"
      rel="noreferrer noopener"
      target="_blank"
    >
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d={svgPath} />
      </svg>
    </a>
  );
}

Icon.propTypes = {
  svgPath: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Icon;
