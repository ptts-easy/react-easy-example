import { useState, useContext } from "react";

import ColorContext from '../../services/Context/color-context';
import ColorList from '../../components/ColorList';

const Component1 = () => {
  return (
    <div style={{border: "5px solid green"}}>
      This is Component1.
      <Component2 />
    </div>
  );
}

const Component2 = () => {
  return (
    <div style={{border: "5px solid yellow"}}>
      This is Component2.
      <Component3 />
    </div>
  );
}

const Component3 = () => {
  return (
    <div style={{border: "5px solid blue"}}>
      This is Component3.
      <Component4 />
    </div>
  );
}

const Component4 = () => {
  return (
    <div style={{border: "5px solid red"}}>
      This is Component4.
      <Component5 />
    </div>
  );
}

const Component5 = () => {
  const color = useContext(ColorContext);

  return (
    <div style={{border: "5px solid green"}}>
      This is Component5.
      <h1 style={{color: (color)}}>ContextPage color is {color}!</h1>
    </div>
  );
}

const ContextPage = () => {
  const [color, setColor] = useState("white");

  return (
    <ColorContext.Provider value={color}>
      <div style={{border: "5px solid white"}} className="context">
        This is ContextPage.
        <ColorList color={color} change={setColor} />
        <Component1 />
      </div>
    </ColorContext.Provider>
  );
}

export default ContextPage;