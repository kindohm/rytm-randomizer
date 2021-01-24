import './Randomize.css';

const Randomize = ({ onRandomize, disabled }) => {
  return (
    <div className="container">
      <button
        className="randomizeButton"
        onClick={onRandomize}
        disabled={disabled}
      >
        Randomize
      </button>
    </div>
  );
};
export default Randomize;
