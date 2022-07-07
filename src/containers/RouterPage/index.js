import { Routes, Route } from "react-router-dom";

import Nav from '../../components/Nav';
import LayoutPage from '../LayoutPage';
import StatePage from '../StatePage';
import PropPage from '../PropPage';
import RefPage from '../RefPage';
import ContextPage from '../ContextPage';
import ReducerPage from '../ReducerPage';
import OnlinePage from '../OnlinePage';
import ReduxPage from '../ReduxPage';
import SassPage from '../SassPage';
import BootstrapPage from '../BootstrapPage';
import AuthPage from '../AuthPage';
import NoPage from '../NoPage';

const RouterPage = () => {
  return (
    <Routes>
      <Route path="/" element={<Nav />}>
        <Route index element={<LayoutPage />} />
        <Route path="state" element={<StatePage />} />
        <Route path="prop" element={<PropPage />} />
        <Route path="ref" element={<RefPage />} />
        <Route path="context" element={<ContextPage />} />
        <Route path="reducer" element={<ReducerPage />} />
        <Route path="online" element={<OnlinePage />} />
        <Route path="redux" element={<ReduxPage />} />
        <Route path="sass" element={<SassPage />} />
        <Route path="bootstrap" element={<BootstrapPage />} />
        <Route path="auth" element={<AuthPage />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  );
}

export default RouterPage;