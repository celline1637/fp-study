import { Navigate, useRoutes } from 'react-router-dom';
// import { Layout } from './components/layout';
import { Home } from './pages/home';

const Routes = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <Navigate to='/intro' replace />,
    },
    // {
    //   element: <Layout />,
    //   path: '/',
    //   children: [{ path: 'intro', element: <Intro /> }],
    // },
  ]);

  return routes;
};

export default Routes;
