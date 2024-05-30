import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';

const ScrollToBottomButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (
        window.pageYOffset + window.innerHeight <
        document.documentElement.scrollHeight
      ) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  return (
    <Button
      variant="dark"
      className="scroll-button scroll-button-bottom"
      onClick={scrollToBottom}
      style={{ display: isVisible ? 'inline' : 'none' }}
    >
      ▼
    </Button>
  );
};

export default ScrollToBottomButton;
