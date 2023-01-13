const QuestionCount = ({ current, length }) => {
  return (
    <div className="question-count">
      <div className="question-count">
        <span>Question {current + 1}</span>/{length}
      </div>
    </div>
  );
};

export default QuestionCount;
