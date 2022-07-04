import React from 'react';
import { Navigate, Route } from 'react-router-dom';
import LoginPage from '../../pages/Login';

const PublicRouter: JSX.Element = (
  <Route path="">
    <Route path="" element={<Navigate to="login" />} />
    <Route path="login" element={<LoginPage />} />
  </Route>
);

export default PublicRouter;
