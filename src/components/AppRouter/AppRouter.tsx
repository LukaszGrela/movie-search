import React from 'react';
import Home from '../Home/Home';
import Results from '../Results/Results';
import { Paths } from './enums';
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: Paths.HOME,
    element: <Home />,
  },
  {
    path: Paths.RESULTS,
    element: <Results />,
  },
  {
    path: Paths.MOVIE,
    element: <p>Implement Movie detail Path</p>,
  },
  {
    path: '*',
    element: <Navigate to={Paths.HOME} />,
  },
]);

const AppRouter: React.FC = (): JSX.Element => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
