import { Route } from 'react-router-dom';
import GamePage from '../../pages/Game';
import CharSelectRouter from './CharSelect';

const PrivateRouter: JSX.Element = (
  <Route path="">
    {CharSelectRouter}
    <Route path='game' element={<GamePage />} />
  </Route>
);

export default PrivateRouter;
