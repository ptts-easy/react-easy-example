import { Alert } from 'react-bootstrap';

const Alerts = () => {
  return (
    <div style={{border: "3px dotted white"}}>
      {[
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'info',
        'light',
        'dark',
      ].map((variant) => (
        <Alert key={variant} variant={variant}>
          This is a {variant} alert—check it out!
        </Alert>
      ))}
    </div>
  );
}

export default Alerts;