import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CounterCode = () => {

  const navigate = useNavigate();
  const [counter, setCounter] = useState<number>(0);

  return (<>
    <div className="h-screen flex flex-col justify-center items-center bg-amber-200">
      <h1 className="mb-4">The current value of counter is {counter}</h1>

      <button onClick={() => counter < 20 ? setCounter(counter + 1) : setCounter(counter)}>
        To increment the counter click me {counter}
      </button>
      <button onClick={() =>  counter > 0 ? setCounter(counter - 1) : setCounter(counter)}>
        To decrement the counter click me {counter}
      </button>
      <button onClick={() =>navigate("/passwordgen")}>to next project</button>
    </div>
    
    </>
  );
};

export default CounterCode;