import { useState } from "react";

import './index.css';

const DirectivePage = () => {
  const [myclass, setMyClass] = useState("class_white");
  const [color, setColor] = useState("white");

  const colors = ["white", "black", "red", "green", "blue", "yellow", "magenta", "cyan"];

  const listClasses = colors.map((item) =>
    <li key={item} style={{color: item}} onClick={() => setMyClass("class_"+item)}>{item}</li>
  );

  const listStyles = colors.map((item) =>
    <li key={item} style={{color: item}} onClick={() => setColor(item)}>{item}</li>
  );

  return (
    <div style={{border: "5px solid white"}} className="directive">
      This is DirectivePage(class, style).
      <table>
      <tbody>
      <tr>
        <td><ul>{listClasses}</ul></td>
        <td><h1 className={myclass}>My class is {myclass}!</h1></td>
      </tr>
      </tbody>
      </table>

      <table>
      <tbody>
      <tr>
        <td><ul>{listStyles}</ul></td>
        <td><h1 style={{color: (color)}}>My color is {color}!</h1></td>
      </tr>
      </tbody>
      </table>
    </div>
  );
}

export default DirectivePage;