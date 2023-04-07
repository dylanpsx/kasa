//ce code utilise la bibliothèque "react-router-dom" pour créer un objet de routage avec la méthode "createBrowserRouter"
//cette objet de routage contiens des routes pour différentes pages de l'application, chacune étant associée à un composant spécifique
//et fournit cet objet à l'ensemble de l'application en utilisant le composant "RouterProvider"

import Home from './pages/home/Home'; //importe le composant "Home" depuis le fichier "Home.js" situé dans le dossier "pages/home"
import NotFound from './pages/notFound/NotFound'; //importe le composant "NotFound" depuis le fichier "NotFound.js" situé dans le dossier "pages/notFound
import About from './pages/about/About'; //importe le composant "About" depuis le fichier "About.js situé dans le dossier "pages/about"
import Accomodation from './pages/accomodation/Accomodation'; //importe le composant "Accomodation" depuis le fichier "Accomodation.js" situé dans le dossier "pages/accomodation"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'; //importe les méthodes "createBrowserRouter" et "RouterProvider de la bibliothèque "react-router-dom"
//"createBrowserRouter" est une méthode qui permet de créer un objet de routage qui sera utilisé pour afficher les différentes pages de l'application 
//"RouterProvider" est un composant qui permet de fournir le routage crée à l'ensemble de l'application

//créer un objet de routage en utilisant la méthode "createBrowserRouter"
//cette objet de routage contient un tableau de routes, qui sont définies sous formes d'objets
//chaque objet de route contient une propriété "path" qui correspond à l'url de la page
//et une propriété "element" qui correspond au composant à afficher lorsque cette url est visitée
const router = createBrowserRouter([ 
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

//définit le composant principal "App" de l'application
function App() {
  return (
    <>
      <RouterProvider router={router}/> //utilise le composant "RouterProvider" pour fournir le routage crée précédemment à l'ensembles de l'application
    </>
  );
}

export default App; //exporte le composant "App" pour qu'il puisse être utilisé dans d'autres fichiers de l'application
