import React, { useState } from 'react';
import '../App.css';

const CollapsibleText = ({ title, children, isOpen = false }) => {
  const [isExpanded, setIsExpanded] = useState(isOpen);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="collapsible-container">
      <div 
        className="collapsible-header" 
        onClick={toggleExpanded}
      >
        <h3 className="collapsible-title">{title}</h3>
        <span className={`chevron ${isExpanded ? 'expanded' : ''}`}>
          ▼
        </span>
      </div>
      <div className={`collapsible-content ${isExpanded ? 'expanded' : ''}`}>
        <div className="collapsible-inner">
          {children}
        </div>
      </div>
    </div>
  );
};

export default CollapsibleText; 