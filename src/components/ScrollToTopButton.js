import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import './ScrollButtons.css';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Button
      variant="dark"
      className="scroll-button"
      onClick={scrollToTop}
      style={{ display: isVisible ? 'inline' : 'none' }}
    >
      ▲
    </Button>
  );
};

export default ScrollToTopButton;
