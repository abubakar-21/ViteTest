import React from 'react';

const Progress = ({ value, max }) => {
  return (
    <progress value={value} max={max} />
  );
}

export default Progress;
