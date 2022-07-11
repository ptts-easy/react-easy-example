import './index.css';

const ColorList = (props) => {

  const colors = ["white", "black", "red", "green", "blue", "yellow", "magenta", "cyan"];

  const changeColor = (newColor) => {
    props.change(newColor);
  }

  const listItems = colors.map((item) =>
    <li key={item} style={{color: item}} onClick={() => changeColor(item)}>{item}</li>
  );

  return (
    <div className="colorlist">
      <ul>{listItems}</ul>
    </div>
  );
}

export default ColorList;