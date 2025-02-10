import React from 'react';

function AnswerSection() {
  return (
    <div>
      <h2>So, what do you say? Be my Valentine?</h2>
      <a href="/yes" style={{ backgroundColor: 'green', color: 'white', padding: '10px 20px', textDecoration: 'none' }}>Yes! (You had me at "Hello")</a>
      <a href="/no" style={{ backgroundColor: 'red', color: 'white', padding: '10px 20px', textDecoration: 'none' }}>Let me think about it... (Just kidding, YES!)</a>
       <p style={{ fontSize: "smaller" }}>
        (P.S. Clicking "No" really just redirects to "Yes." I'm persuasive like that. 😉)
      </p>
    </div>
  );
}

export default AnswerSection;
