const AnswerSection = ({ options, handle }) => {
  return (
    <div className="answer-section">
      {options.map((answerOption, i) => (
        <button key={i} onClick={() => handle(answerOption.isCorrect)}>
          {answerOption.answerText}
        </button>
      ))}
    </div>
  );
};

export default AnswerSection;
