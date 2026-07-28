import React, { createContext, useState, useEffect } from 'react';
import { officeConfig, DEFAULT_OFFICE } from '../config/officeConfig';

export const OfficeContext = createContext();

export function OfficeProvider({ children }) {
  const [activeOfficeId, setActiveOfficeId] = useState(() => {
    // Check localStorage on initial load
    const saved = localStorage.getItem('office');
    if (saved && officeConfig[saved]) {
      return saved;
    }
    return DEFAULT_OFFICE;
  });

  const [isSwitcherOpen, setIsSwitcherOpen] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Update localStorage and analytics whenever the office changes
  useEffect(() => {
    localStorage.setItem('office', activeOfficeId);
    
    // Office Analytics Hook (Simulation)
    console.log(`📊 [Analytics]: User switched office to ${activeOfficeId.toUpperCase()}`);
    // In the future: window.gtag('event', 'office_change', { office: activeOfficeId });

  }, [activeOfficeId]);

  const activeOffice = officeConfig[activeOfficeId];

  const switchOffice = (id) => {
    if (officeConfig[id] && activeOfficeId !== id) {
      setIsSwitcherOpen(false); // Close modal immediately
      setIsTransitioning(true); // Trigger the cinematic preloader
      
      // Wait for the overlay to cover the screen before swapping the data
      setTimeout(() => {
        setActiveOfficeId(id);
      }, 500); 

      // Remove the overlay
      setTimeout(() => {
        setIsTransitioning(false);
      }, 1500);
    }
  };

  const value = {
    activeOffice,
    activeOfficeId,
    switchOffice,
    isSwitcherOpen,
    setIsSwitcherOpen,
    isTransitioning
  };

  return (
    <OfficeContext.Provider value={value}>
      {children}
    </OfficeContext.Provider>
  );
}
