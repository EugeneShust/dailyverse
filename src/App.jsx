import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MainLayout } from './components';
import { Home, About } from './pages';

const basePath = '';
const router = createBrowserRouter([
  {
    path: basePath,
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
    ],
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;
