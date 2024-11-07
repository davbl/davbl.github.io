import PropTypes from "prop-types";
import { SquareArrowUpRight } from "lucide-react";
import "./project-description.css";

const ProjectDescription = ({
  title,
  link,
  text,
  color = "#FFF",
  chips = [],
}) => {
  // Render
  return (
    <div className="project-description">
      {/* Project title and icon */}
      <a href={link} target="_blank" className="project-title">
        {title}
        <SquareArrowUpRight
          style={{ color: color }}
          size={20}
          strokeWidth={2}
        />
      </a>

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
              backgroundColor: `${color}20`, // 20 is approx 12% opacity
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
};

export default ProjectDescription;
