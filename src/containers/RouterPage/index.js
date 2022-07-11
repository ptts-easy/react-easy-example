import { Routes, Route } from "react-router-dom";

import Nav from '../../components/Nav';
import LayoutPage from '../LayoutPage';
import RoutePage from '../RoutePage';
import StatePage from '../StatePage';
import PropPage from '../PropPage';
import ContainPage from '../ContainPage';
import RefPage from '../RefPage';
import ContextPage from '../ContextPage';
import ReducerPage from '../ReducerPage';
import ReduxPage from '../ReduxPage';
import BootstrapPage from '../BootstrapPage';
import SassPage from '../SassPage';
import OnlinePage from '../OnlinePage';
import AuthPage from '../AuthPage';
import NoPage from '../NoPage';

import {Component1, Component2, Component3, Component4, Component5, ErrorComponent} from '../RoutePage';

const RouterPage = () => {
  return (
    <Routes>
      <Route path="/" element={<Nav />}>
        <Route index element={<LayoutPage />} />
        <Route path="route" element={<RoutePage />}>
          <Route index element={<Component1 />} />
          <Route path="component2" element={<Component2 />} />
          <Route path="component3" element={<Component3 />} />
          <Route path="component4" element={<Component4 />} />
          <Route path="component5" element={<Component5 />} />
          <Route path="*" element={<ErrorComponent />} />
        </Route>
        <Route path="state" element={<StatePage />} />
        <Route path="prop" element={<PropPage />} />
        <Route path="contain" element={<ContainPage />} />
        <Route path="ref" element={<RefPage />} />
        <Route path="context" element={<ContextPage />} />
        <Route path="reducer" element={<ReducerPage />} />
        <Route path="redux" element={<ReduxPage />} />
        <Route path="bootstrap" element={<BootstrapPage />} />
        <Route path="sass" element={<SassPage />} />
        <Route path="online" element={<OnlinePage />} />
        <Route path="auth" element={<AuthPage />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  );
}

export default RouterPage;