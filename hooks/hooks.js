'use client';

import { useEffect } from 'react';

export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

//listener for click outside of the menu
export const useClickOutside = (isVisible, refOrRefs, callback) => {
  useEffect(() => {
    const handleClickOutside = event => {
      let clickedOutside = true;
      if (Array.isArray(refOrRefs)) {
        refOrRefs.forEach(ref => {
          if (ref.current && ref.current.contains(event.target)) {
            clickedOutside = false;
          }
        });
      } else {
        clickedOutside = refOrRefs.current && !refOrRefs.current.contains(event.target);
      }

      if (isVisible && clickedOutside) {
        callback();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isVisible, refOrRefs, callback]);
};

//turn off the scroll after opening
export const useDisableBodyScroll = isEnabled => {
  useEffect(() => {
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth; // receiving scroll width

    const handleScroll = e => {
      if (isEnabled) {
        e.preventDefault();
      }
    };

    if (isEnabled) {
      document.body.style.overflow = 'hidden'; // turn off scroll for body
      document.body.style.marginRight = `${scrollbarWidth}px`; // add margin to escape side scroll
      document.addEventListener('scroll', handleScroll, { passive: false }); // scroll listener
    } else {
      document.body.style.overflow = ''; // turn on scroll for body
      document.body.style.marginRight = ''; // take off the margin
      document.removeEventListener('scroll', handleScroll); // delete scroll listener
    }

    return () => {
      document.body.style.overflow = ''; // margin off
      document.body.style.marginRight = ''; // margin off 
      document.removeEventListener('scroll', handleScroll); // delete scroll listener
    };
  }, [isEnabled]);
};

export default useDisableBodyScroll;