const Feedback = ({ feedback: { good, neutral, bad }, total }) => {
  
  const positive = Math.round((good / total) * 100) || 0;
 

  return (
    <>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive: {positive}%</p>
    </>
  );
};

export default Feedback;
