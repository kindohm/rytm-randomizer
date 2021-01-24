import React, { useState } from 'react';
import Pages from './Pages';
import './Advanced.css';

const Advanced = ({
  pages,
  channels,
  onParamToggled,
  onPageToggled,
  onChannelToggled,
}) => {
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
            channels={channels}
            pages={pages}
            onChannelToggled={onChannelToggled}
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
