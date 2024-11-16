const Options = ({ onUpdate, total, onReset }) => {
  return (
    <>
      <button onClick={() => onUpdate("good")}>Good</button>
      <button onClick={() => onUpdate("neutral")}>Neutral</button>
      <button onClick={() => onUpdate("bad")}>Bad</button>
      {total ? <button onClick={() => onReset()}>Reset</button> : null}
    </>
  );
};

export default Options;
