const ComponentA1 = () => {
  return (
    <div style={{border: "3px dotted red"}}>
      This is ComponentA1.
    </div>
  );
}

const ComponentA2 = () => {
  return (
    <div style={{border: "3px dotted red"}}>
      This is ComponentA2.
    </div>
  );
}

const ComponentA = () => {
  return (
    <div style={{border: "5px dashed green"}}>
      This is ComponentA.
      <table style = {{width: "100%"}}>
      <tbody>
      <tr>
        <td><ComponentA1 /></td>
        <td><ComponentA2 /></td>
      </tr>
      </tbody>
      </table>
    </div>
  );
}

const ComponentB1 = () => {
  return (
    <div style={{border: "3px dotted red"}}>
      This is ComponentB1.
    </div>
  );
}

const ComponentB2 = () => {
  return (
    <div style={{border: "3px dotted red"}}>
      This is ComponentB2.
    </div>
  );
}

const ComponentB = () => {
  return (
    <div style={{border: "5px dashed green"}}>
      This is ComponentB.
      <table style = {{width: "100%"}}>
      <tbody>
      <tr>      
        <td><ComponentB1 /></td>
        <td><ComponentB2 /></td>
      </tr>
      </tbody>
      </table>
    </div>
  );
}

const LayoutPage = () => {
  return (
    <div style={{border: "5px solid white"}}>
      This is LayoutPage.
      <table style = {{width: "100%"}}>
      <tbody>
      <tr>
        <td><ComponentA /></td>
      </tr>
      <tr>
        <td><ComponentB /></td>
      </tr>
      </tbody>
      </table>
    </div>
  );
}

export default LayoutPage;