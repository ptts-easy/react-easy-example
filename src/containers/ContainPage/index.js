import { useState, useEffect } from "react";

function WrapComponent(props) {
  return (
    <div style={{border: "5x solid green"}}>
      This is WrapComponent.
      <div style={{border: "3px solid red", color: props.color}}>
        {props.children}
      </div>
    </div>
  );
}

function WrapedComponent() {
  return (
    <div>
      This is WrapedComponent.
    </div>
  );
}

function PropComponent(props) {

  useEffect(() => {
    props.setText1("change text1");
    props.setText2("change text2");
  }, [props]);

  return (
    <div style={{border: "5x solid red"}}>
      This is PropComponent.
      <div style={{border: "3px solid green", color: "green"}}>
        {props.left}
      </div>
      <div style={{border: "3px solid blue", color: "blue"}}>
        {props.right}
      </div>
    </div>
  );
}

function Component1(props) {
  return (
    <div>
      This is Component1 {props.text}.
    </div>
  );
}

function Component2(props) {
  return (
    <div>
      This is Component2 {props.text}.
    </div>
  );
}

const ContainPage = () => {
  let text1 = "text1";
  const [text2, setText2] = useState("text2");

  const setText1 = (text) => {
    text1 = text;
  }

  return (
    <div style={{border: "5px solid white"}}>
      This is ContainPage.
      <WrapComponent color="blue">
        <WrapedComponent />
      </WrapComponent>
      <PropComponent setText1={setText1} setText2={setText2} left={<Component1 text={text1}/>} right={<Component2  text={text2}/>} />
    </div>
  );
}

export default ContainPage;