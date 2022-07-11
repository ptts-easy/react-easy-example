import 'bootstrap/dist/css/bootstrap.min.css';

import Alerts from './alerts';
import Buttons from './buttons';

const BootstrapPage = () => {
  return (
    <div style={{border: "5px solid green"}} className="bootstrap">
      This is BootstrapPage.
      <Alerts />
      <Buttons />
    </div>
  );
}

export default BootstrapPage;