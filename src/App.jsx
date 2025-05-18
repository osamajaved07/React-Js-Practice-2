import React, { useState } from "react";

const App = () => {
  const [num, setnum] = useState(2);
  return (
    <div className="p-12">
      <h1 className="text-xl bg-blue-200 px-6 py-6 ">Number is {num}</h1>
      <button onClick={() => setnum(num + 1)} className="bg-zinc-800 text-white px-8 py-2 my-4">
        Increment
      </button>
      <button onClick={() => setnum(num - 1)} className="bg-zinc-800 text-white px-8 py-2 my-4 mx-2">
        Decrement
      </button>
      <button onClick={() => setnum(2)} className="bg-zinc-800 text-white px-8 py-2 my-4 mx-2 ">
        Reset
      </button>
    </div>
  );
};

export default App;
