import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useOffice } from '../hooks/useOffice';
import { officeConfig } from '../config/officeConfig';

export default function OfficeDropdown() {
  const { isSwitcherOpen, setIsSwitcherOpen, switchOffice, activeOfficeId } = useOffice();
  const dropdownRef = useRef(null);
  const offices = Object.values(officeConfig);

  // Close on click outside or ESC key
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsSwitcherOpen(false);
      }
    };
    
    const handleEsc = (e) => {
      if (e.key === 'Escape') setIsSwitcherOpen(false);
    };

    if (isSwitcherOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
      document.addEventListener('keydown', handleEsc);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleEsc);
    };
  }, [isSwitcherOpen, setIsSwitcherOpen]);

  return (
    <AnimatePresence>
      {isSwitcherOpen && (
        <motion.div
          ref={dropdownRef}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.25, type: 'spring', stiffness: 300, damping: 25 }}
          className="absolute top-[calc(100%+16px)] right-0 w-[380px] bg-[#101010]/95 backdrop-blur-xl border border-white/10 rounded-[20px] shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-6 z-[100] text-left overflow-hidden"
          role="menu"
          aria-orientation="vertical"
        >
          {/* Header */}
          <div className="mb-4">
            <h4 className="text-white/50 text-[12px] uppercase tracking-widest font-bold mb-2">
              Global Offices
            </h4>
            <p className="text-white/70 text-[14px] leading-relaxed">
              Choose which regional office represents your interaction with Fotios. This changes company information and contact details throughout the website.
            </p>
          </div>
          
          <div className="h-[1px] w-full bg-white/10 my-4" />

          {/* Office Items */}
          <div className="flex flex-col gap-3">
            {offices.map((office) => {
              const isActive = activeOfficeId === office.id;
              
              return (
                <button
                  key={office.id}
                  onClick={() => switchOffice(office.id)}
                  role="menuitem"
                  className={`group relative text-left rounded-xl transition-all duration-250 cursor-pointer p-4 border flex flex-col gap-1 overflow-hidden ${
                    isActive 
                      ? 'bg-white/5 border-gold/40' 
                      : 'bg-transparent border-transparent hover:bg-white/[0.04] hover:border-white/10'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-1">
                    <img 
                      src={office.flagUrl} 
                      alt={`${office.country} Flag`} 
                      className="w-6 h-[18px] object-cover rounded-sm shadow-sm"
                    />
                    <h3 className="text-white text-[22px] font-heading font-bold">
                      {office.displayName}
                    </h3>
                  </div>
                  
                  <div className="pl-9">
                    <p className="text-[#f5f5f5]/80 text-[13px] uppercase tracking-wider font-semibold mb-1">
                      {office.legalName}
                    </p>
                    <p className="text-white/40 text-[14px]">
                      Serving {office.country}
                    </p>
                    
                    <div className={`mt-3 flex items-center gap-2 text-[15px] font-semibold transition-colors ${isActive ? 'text-gold' : 'text-white/40 group-hover:text-white'}`}>
                      {isActive ? (
                        <>
                          <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                          <span>Current Office ✓</span>
                        </>
                      ) : (
                        <>
                          <span>Switch Office</span>
                          <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </>
                      )}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="h-[1px] w-full bg-white/10 my-4" />

          {/* Footer Help */}
          <a href="#contact" onClick={() => setIsSwitcherOpen(false)} className="flex items-center justify-between group hover:bg-white/5 p-3 -mx-3 rounded-xl transition-colors">
            <span className="text-white/40 text-[14px]">Need assistance choosing an office?</span>
            <div className="text-gold text-[13px] font-semibold flex items-center gap-1 opacity-80 group-hover:opacity-100 transition-opacity">
              Contact team
              <svg className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
