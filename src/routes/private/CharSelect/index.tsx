import { Route } from 'react-router-dom';
import CharSelectPage from '../../../pages/CharSelect';

const CharSelectRouter: JSX.Element = (
  <Route path="personagens">
    <Route path="" element={<CharSelectPage />} />
  </Route>
);

export default CharSelectRouter;
