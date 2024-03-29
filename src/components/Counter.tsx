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
    <div className="flex items-center justify-center flex-col">
      <span className=" text-6xl">{value}</span>
      <div className="flex justify-around w-52 text-2xl mt-2">
        <button
          className="px-4 py-2 bg-gray-500 text-white rounded-md"
          onClick={() => sum()}
        >
          +
        </button>{' '}
        <button
          className="px-4 py-2 bg-gray-500 text-white rounded-md"
          onClick={() => rest()}
        >
          -
        </button>
      </div>

      <button
        className=" mt-2  px-6 py-2 bg-blue-500 text-white rounded-md text-2xl"
        onClick={() => reset()}
      >
        Reset
      </button>
    </div>
  );
}

export default Counter;
