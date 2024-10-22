import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

import { MainLayout, Home, About} from './components';

const basePath ='';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={basePath} element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
    </Route>,
  ),
);

const App = () => <RouterProvider router={router} />;

export default App;
