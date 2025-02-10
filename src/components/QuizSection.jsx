import React, { useState } from 'react';

function QuizSection() {
  const [answer, setAnswer] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can do something with the answer here, like show a different message
    // based on their choice in AnswerSection.jsx
    setAnswer(e.target.quizAnswer.value);
  }

  return (
    <div>
      <h2>BBB</h2>

    </div>
  );
}

export default QuizSection;
