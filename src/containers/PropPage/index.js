import { useState, useEffect } from "react";

import ColorList from '../../components/ColorList';
import './index.css';

const Child = (props) => {

  const changeColor = (newColor) => {
    props.change(newColor);
  }

  return (
    <div style={{border: "3px dotted red"}}>
      This is Child Component.   
      <table>
      <tbody>
      <tr>
        <td><h1 style={{color: (props.color)}}>Parent color is {props.color}!</h1></td>
        <td><ColorList color={props.color} change={changeColor} /></td>
      </tr>
      </tbody>
      </table>        
    </div>
  );
}

const Parent = (props) => {
  const [color, setColor] = useState("white");
  const [childColor, setChildColor] = useState("white");

  useEffect(() => {
    console.log("Runs on every render");

    return () => {
      console.log("Finishs on every render");
    }
  });

  useEffect(() => {
    console.log("Runs only on the first render");

    return () => {
      console.log("Finishs only on the first render");
    }
  }, []);

  useEffect(() => {
    console.log("Runs on the first render And any time prop value changes");

    return () => {
      console.log("Finishs any time prop value changes");
    }
  }, [props]);

  useEffect(() => {
    console.log("Runs on the first render And any time color value changes");

    return () => {
      console.log("Finishs any time color value changes");
    }
  }, [color]);

  useEffect(() => {
    console.log("Runs on the first render And any time childColor value changes");

    return () => {
      console.log("Finishs any time childColor value changes");
    }
  }, [childColor]);

  return (
    <div style={{border: "5px dashed green"}}>
      This is Parent Component.
      <table>
      <tbody>
      <tr>
        <td><ul><ColorList color={color} change={setChildColor} /></ul></td>
        <td><h1 style={{color: (color)}}>Child color is {color}!</h1></td>
      </tr>
      </tbody>
      </table>
      <Child color={childColor} change={setColor}/>
    </div>
  );
}

const PropPage = () => {
  return (
    <div style={{border: "5px solid white"}} className="props">
      This is PropPage(useEffect).
      <Parent />
    </div>   
  );
}

export default PropPage;