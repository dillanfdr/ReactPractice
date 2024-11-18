import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div className="flex justify-center items-center h-screen bg-[#121212]">
      <div className="bg-[#1E1E1E] p-8 rounded-lg shadow-lg w-96">
        <h1 className="text-3xl font-semibold text-center text-[#E0E0E0] mb-6">
          Counter: {count}
        </h1>
        <div className="flex justify-center space-x-4">
          <button
            onClick={increment}
            className="w-32 py-2 bg-[#591818] text-white rounded-lg hover:bg-[#3D0000] focus:outline-none"
          >
            Increment
          </button>
          <button
            onClick={decrement}
            className="w-32 py-2 bg-[#591818] text-white rounded-lg hover:bg-[#3D0000] focus:outline-none"
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
