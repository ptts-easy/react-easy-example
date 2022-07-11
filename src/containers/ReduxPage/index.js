import { Provider } from 'react-redux'
import store1 from '../../services/Redux/slice-redux/store';
import store2 from '../../services/Redux/counter-redux/store';

import ReduxPageContent from './content';
import Cotainer from './countContainer';

const ReduxPage = () => {
  return (
    <div>
      <Provider store={store1}>
        <ReduxPageContent />
      </Provider>    
      <Provider store={store2}>
        <Cotainer />
      </Provider>
    </div>
  );
}

export default ReduxPage;