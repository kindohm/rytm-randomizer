import './Complexity.css';

const Complexity = ({ onComplexityChange, complexity }) => {
  return (
    <div className="container">
      <p>Randomization complexity:</p>
      <p>
        <input
          type="range"
          value={complexity}
          min="0"
          max="1"
          step="0.01"
          onChange={onComplexityChange}
        />
      </p>
    </div>
  );
};

export default Complexity;
