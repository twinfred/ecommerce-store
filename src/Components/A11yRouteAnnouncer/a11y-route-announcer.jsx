import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function A11yRouteAnnouncer() {
  const [message, setMessage] = useState('');

  const location = useLocation();
  const a11yRouteAnnouncerClass = 'a11y-route-announcer';

  useEffect(() => {
    setTimeout(() => {
      setMessage(`Current page: ${document.title}`)
      document.querySelector('.' + a11yRouteAnnouncerClass).focus();
    }, 0);
  }, [location]);

  return (
    <span className={`sr-only ${a11yRouteAnnouncerClass}`} tabIndex="-1">
      {message}
    </span>
  );
};

export default A11yRouteAnnouncer;