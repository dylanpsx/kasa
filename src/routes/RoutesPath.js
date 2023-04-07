//ce code défini un système de routage en utilisant la bibliothèque "react-router-dom"
//les différentes routes de l'application sont définies à l'aide des composants 'Routes" et "Route"
//avec un "path" correspondant à l'url de la page et un "element" correspondant au composant à afficher
//les composants à afficher pour chaque route sont importés depuis d'autres fichiers 
//le code permet également de définir une route par défauts pour les url qui ne correspondent à une aucune des routes définies

import React from "react"; //importe la bibliothèque react
import { HashRouter, Routes, Route, Navigate } from "react-router-dom"; //importe les méthodes "HashRouter, Routes, Route et Navigate" de la bibliothèque
//"HashRouter" est une méthode qui permet de créer un objet de routage basé sur l'url 
//"Routes" est un composant qui contiendra toutes les routes de l'application
//"Route" est un composant qui permet de définir une route spécifique
//avec un "path" correspondant à l'url de la page, et une "element" correspondant au composant à afficher lorsque cette url est visitée
// "Navigate" est une méthode qui permet de rediriger l'utilisateur vers une autre page
import Layout from "../layouts/Layout" //importe le composant "Layout" depuis le fichier "Layout.js" situé dans le dossier "Layouts"
import Accueil from "../pages/Accueil/Accueil"; //importe le composant "Acc
import Fiche from '../pages/Fiche-logement/Fiche';
import APropos from "../pages/A-propos/APropos";
import Erreur404 from "../pages/404/404";


function RoutesPath() {
return(
<HashRouter>
<Layout>
<Routes>
<Route element={<Navigate replace to="/accueil" />} path="/" />
<Route path="/accueil" element={<Accueil />}/>
<Route path="/logement/:id" element={<Fiche />}/>
<Route path="/a-propos" element={<APropos />}/>
<Route path="*" element={<Erreur404 />}/>
</Routes>
</Layout>
</HashRouter>
);
}

export default RoutesPath;
