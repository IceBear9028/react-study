import { useState, useEffect } from "react";

const UseEffectTest1 = () => {
  const [state, setState] = useState(0);

  const plusOne = () => setState((prev) => prev + 1);

  useEffect(() => {
    console.log("state", state);
  }, [state]);

  return (
    <>
      <p>{state}</p>
      <button onClick={plusOne}>+ 1</button>
    </>
  );
};

export default UseEffectTest1;
