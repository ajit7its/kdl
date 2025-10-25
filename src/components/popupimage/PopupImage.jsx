import React, { useState, useEffect } from 'react';

const PopupImage = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Check if popup has been shown before
    const hasSeenPopup = localStorage.getItem('hasSeenPopup');
    if (!hasSeenPopup) {
      setShowPopup(true);
    }
  }, []);

  const handleClose = () => {
    setShowPopup(false);
    localStorage.setItem('hasSeenPopup', 'true');
  };

  if (!showPopup) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="close-btn" onClick={handleClose}>×</button>
        <img
          src="img/popup/popup.png"
          alt="Welcome"
          className="popup-image"
        />
      </div>
    </div>
  );
};

export default PopupImage;
