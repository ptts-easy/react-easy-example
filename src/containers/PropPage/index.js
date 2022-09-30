import { useState } from "react";

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
      This is PropPage.
      <Parent />
    </div>   
  );
}

export default PropPage;