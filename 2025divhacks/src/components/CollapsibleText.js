import React from 'react';
import '../App.css';

const CollapsibleText = ({ title, children, isExpanded = false, onToggle }) => {
  return (
    <div className="collapsible-container">
      <div 
        className="collapsible-header" 
        onClick={onToggle}
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