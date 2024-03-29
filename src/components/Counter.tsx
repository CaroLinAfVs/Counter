import { useState } from 'react';

function Counter() {
  const [value, setValue] = useState(0);

  function sum() {
    setValue(value + 1);
  }

  function rest() {
    if (value > 0) {
      setValue(value - 1);
    }
  }
  function reset() {
    setValue(0);
  }

  return (
    <div className="">
      <span>{value}</span>
      <button className="" onClick={() => sum()}>+</button>{' '}
      <button onClick={() => rest()}>-</button>
      <button onClick={() => reset()}>Reset</button>
    </div>
  );
}

export default Counter;
