import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import PublicRouter from './Public';

const MainRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/public" />} />
        <Route path='/public'>
          {PublicRouter}
        </Route>
        <Route path='/game' />
      </Routes>
    </BrowserRouter>
  );
}

export default MainRouter;
