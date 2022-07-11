import { useEffect } from "react";

const Counter = (props) => {
  const {counter, increment, decrement, reset} = props;

  useEffect(() => {
    console.log(props);
  }, [props]);

  return (
    <div style={{border: "5px solid blue"}}>
      This is CounterPage.
      <div>
         <div>{counter}</div>
         <div>
            <button onClick = {increment}>INCREMENT BY 1</button>
         </div>
         <div>
            <button onClick = {decrement}>DECREMENT BY 1</button>
         </div>
         <button onClick = {reset}>RESET</button>
      </div>
    </div>
  );
}

export default Counter;