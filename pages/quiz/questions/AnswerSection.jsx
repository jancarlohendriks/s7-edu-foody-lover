const AnswerSection = ({ options, handle }) => {
  return (
    <div className="answer-section">
      {options &&
        options.map((option, i) => (
          <button key={i} onClick={() => handle(option.isCorrect)}>
            {option.answerText}
          </button>
        ))}
    </div>
  );
};

export default AnswerSection;
