import { useState, useEffect } from "react";
import './index.css';
/*
function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  } else {
    return <GuestGreeting />;
  }
}

function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}


function LoginControl() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  let button;

  if (isLoggedIn) {
    button = <LogoutButton onClick={this.handleLogoutClick} />;
  } else {
    button = <LoginButton onClick={this.handleLoginClick} />;
  }

  function handleLoginClick() {
    setLoggedIn(true);
  }

  function handleLogoutClick() {
    setLoggedIn(false);
  }

  return (
    <div>
      <Greeting isLoggedIn={isLoggedIn} />
      {button}
    </div>
  );
}
*/

const BindPage = () => {
  let m_var = "This is Class member var";

  const [title, setTitle] = useState(document.title);

  const titleChange = (e) => {
    setTitle(e.target.value);
    document.title = title;
  };

  const name = 'Josh Perez';

  const user = {
    firstName: 'Harper',
    lastName: 'Perez'
  };

  function formatName(user) {
    return user.firstName + ' ' + user.lastName;
  }

  let clock_id = 0;
  const [time, setTime] = useState("00:00:00");

  function tick() {
    setTime(
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
    );
  }

  useEffect(() => {
    tick();
    clock_id = setInterval(() => {tick(); }, 1000);

    return () => {
      if (clock_id) {
        clearInterval(clock_id);
      }
    }
  }, []);

  const numbers = [1, 2, 3, 4, 5];
  const listItems = numbers.map((number) =>
    <li key={number.toString()}>
      {number}
    </li>
  );

  const heros = [
    { id: 12, name: 'Dr. Nice' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr. IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
  ];

  const listHeros = heros.map((hero) =>
    <li key={hero.id}>
      {hero.name}
    </li>
  );

  return (
    <div style={{border: "5px solid white"}}>
      This is BindPage.
      <p>
        class member var = {m_var}
      </p>
      <p>=================== set title ===================</p>
      <label>
        Title &nbsp;:&nbsp; 
        <input 
          type="text" 
          id="title" 
          name="title"
          value={title}
          onChange={titleChange}
        />
      </label>
      <p>=================== JSX ===================</p>
      <h1>Hello, {name}</h1>
      <h1>
        Hello, {formatName(user)}!
      </h1>
      <p>=================== Rendering an Element ===================</p>
      <div>{time}</div>
      <p>=================== Condition Render/For===================</p>
      <ul>{listItems}</ul>
      <ul>{listHeros}</ul>
    </div>
  );
}

export default BindPage;