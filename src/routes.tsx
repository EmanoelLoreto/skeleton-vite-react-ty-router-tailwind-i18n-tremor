import { createBrowserRouter } from 'react-router-dom';
import App from './screens/app';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
]);

export default router;