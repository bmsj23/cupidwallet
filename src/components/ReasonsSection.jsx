import React from 'react';
import ScrollReveal from 'scrollreveal';
import { useEffect } from 'react';


function ReasonsSection() {
  useEffect(() => {
    ScrollReveal().reveal('.reasons-item', { 
      delay: 200, 
      distance: '50px', 
      origin: 'bottom', 
    });
  }, []);
  return (
    <div>
      <h2>BBB</h2>

    </div>
  );
}

export default ReasonsSection;
