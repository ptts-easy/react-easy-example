import { useState, useEffect, useRef } from "react";

const RefPage = () => {
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);
  const inputElement = useRef();

  const focusInput = () => {
    inputElement.current.focus();
  };

  const blurInput = () => {
    inputElement.current.blur();
  };

  const redInput = () => {
    inputElement.current.style = "color:red;";
  };

  const blueInput = () => {
    inputElement.current.style = "color:blue;";
  };

  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <div style={{border: "5px solid white"}}>
      This is RefPage.
      <div>
        <input
          type="text"
          value={inputValue}
          ref={inputElement}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
      <div>
        <button onClick={focusInput}>Focus Input</button>
        <button onClick={blurInput}>Blur Input</button>
        <button onClick={redInput}>Red</button>
        <button onClick={blueInput}>Blue</button>
      </div>
      <h1>Render Count: {count.current}</h1>
    </div>
  );
}

export default RefPage;