import { useState } from "react";

import './index.css';

const StatePage = () => {
  const [color, setColor] = useState("white");

  const colors = ["white", "black", "red", "green", "blue", "yellow"];
  const listItems = colors.map((item) =>
    <li key={item} onClick={() => setColor(item)}>{item}</li>
  );

  return (
    <div style={{border: "5px solid white"}} className="state">
      This is StatePage.
      <table>
      <tbody>
      <tr>
        <td><ul>{listItems}</ul></td>
        <td><h1 style={{color: (color)}}>My color is {color}!</h1></td>
      </tr>
      </tbody>
      </table>
    </div>
  );
}

export default StatePage;