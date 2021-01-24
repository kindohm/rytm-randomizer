import React, { useState } from 'react';
import Pages from './Pages';
import './Advanced.css';

const Advanced = ({ pages, onParamToggled, onPageToggled }) => {
  const [showAdvanced, setShowAdvanced] = useState(false);

  const handleAdvancedToggle = () => {
    setShowAdvanced(!showAdvanced);
  };

  return (
    <div>
      <div className="container">
        <button className="linkButton" onClick={handleAdvancedToggle}>
          {showAdvanced ? 'Hide advanced options' : 'Show advanced options'}
        </button>
      </div>

      {showAdvanced ? (
        <div className="container pagesContainer">
          <Pages
            pages={pages}
            onParamToggled={onParamToggled}
            onPageToggled={(pageName, enabled) =>
              onPageToggled(pageName, enabled)
            }
          />
        </div>
      ) : null}
    </div>
  );
};

export default Advanced;
