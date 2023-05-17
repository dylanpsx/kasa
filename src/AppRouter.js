import { useRoutes } from 'react-router-dom';
import Home from './pages/home/Home';
import NotFound from './pages/notFound/NotFound';
import About from './pages/about/About';
import Accomodation from './pages/accomodation/Accomodation';

export default function AppRouter() {
  let element = useRoutes([
    { 
      path: "/Kasa/",
      element: <Home />
    },
    {
      path: "/accomodation/:id",
      element: <Accomodation />
    },
    {
      path: '/about',
      element: <About />
    },
    {
      path: "*",
      element: <NotFound />
    },
  ]);
  return element;
}
