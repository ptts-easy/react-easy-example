
const JSXPage = () => {
  const name = 'Josh Perez';

  const user = {
    firstName: 'Harper',
    lastName: 'Perez'
  };

  function formatName(user) {
    return user.firstName + ' ' + user.lastName;
  }

  return (
    <>
      <h1>Hello, {name}</h1>
      <h1>
        Hello, {formatName(user)}!
      </h1>      
    </>
  );
}

export default JSXPage;