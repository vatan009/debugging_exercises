import React, { useState } from "react";
import "./CollapsibleSection.css";

const CollapsibleSection = ({ title = "Collapsible Section", children }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded((isExpanded) => !isExpanded);
  };

  return (
    <div className="collapsible-section" data-testid="collapsible-section">
      <div className="collapsible-header" data-testid="collapsible-header">
        <h3 data-testid="collapsible-title">{title}</h3>
        <button
          data-testid="collapsible-toggle"
          aria-controls="collapsible-content"
          aria-expanded={isExpanded}
          onClick={toggleExpand}
        >
          {isExpanded ? "Hide" : "Show"}
        </button>
      </div>
      <div
        id="collapsible-content"
        data-testid="collapsible-content"
        aria-hidden={!isExpanded}
        className="collapsible-content"
      >
        {isExpanded && (children || <p>No content available</p>)}
      </div>
    </div>
  );
};

export default CollapsibleSection;
