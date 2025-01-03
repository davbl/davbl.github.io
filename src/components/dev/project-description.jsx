import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  SquareArrowUpRight,
  Construction,
  SquareArrowRight,
} from "lucide-react";
import "./project-description.css";

const getIcon = (isUnderConstruction, isLocal, color) => {
  if (isUnderConstruction) {
    return (
      <Construction
        className="icon under-construction"
        style={{ color: color }}
        size={18}
        strokeWidth={2}
      />
    );
  } else if (isLocal) {
    return (
      <SquareArrowRight
        className="icon is-local"
        style={{ color: color }}
        size={18}
        strokeWidth={2}
      />
    );
  }
  return (
    <SquareArrowUpRight
      className="icon"
      style={{ color: color }}
      size={18}
      strokeWidth={2}
    />
  );
};

const ProjectDescription = ({
  title,
  link,
  text,
  color = "#FFF",
  chips = [],
  isUnderConstruction = false,
  isLocal = false,
  onMouseEnter,
}) => {
  // if local route, use <Link>, else use <a> for external link
  const LinkElement = isLocal ? (
    <Link to={link} className="project-title" onMouseEnter={onMouseEnter}>
      <h4>{title}</h4>
      {getIcon(isUnderConstruction, isLocal, color)}
    </Link>
  ) : (
    <a href={link} className="project-title" target="_blank" rel="noopener">
      <h4>{title}</h4>
      {getIcon(isUnderConstruction, isLocal, color)}
    </a>
  );

  // Render
  return (
    <div className="project-description">
      {/* Project title and icon */}
      {LinkElement}

      {/* Description text */}
      <p className="project-text">{text}</p>

      {/* Chips */}
      <div className="chips-container">
        {chips.map((chip, index) => (
          <div
            key={index}
            className="chip"
            style={{
              color: color,
              backgroundColor: `${color}25`, // 20 is approx 12% opacity
            }}>
            {chip}
          </div>
        ))}
      </div>
    </div>
  );
};

ProjectDescription.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string,
  text: PropTypes.node.isRequired,
  color: PropTypes.string.isRequired,
  chips: PropTypes.arrayOf(PropTypes.string.isRequired),
  isUnderConstruction: PropTypes.bool,
  isLocal: PropTypes.bool,
  onMouseEnter: PropTypes.func,
};

export default ProjectDescription;
