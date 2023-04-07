import React from 'react'; //importe la bibliothèque react
import ReactDOM from 'react-dom/client'; //importe la méthode "reactDOM.CreateRoot" de la bibliothèque "react-dom" 
//la méthode "creatRoot" permet de créer une racine pour l'application react, qui peut ensuite être utilisée pour afficher l'application
import App from './App'; //importe le composant "app" depuis le fichier "App.js" dans le même répertoire

const root = ReactDOM.createRoot(document.getElementById('root')); //crée une une racine pour l'application en utilisant la méthode "ReactDOM.createRoot"
//la racine est associée à l'élément DOM avec l'ID "root"

root.render( //affiche le contenu de l'application à l'aide de la méthode "render()" de la racine créee précédemment 
	<React.StrictMode>
		<App  /> //affiche le composant "App"
	</React.StrictMode> //enveloppe le composant "App" dans un composant "StrictMode"
	//"StrictMode" est un composant spécial de react qui permet d'activer des vérifications supplémentaires pour les erreurs potentielles dans l'application
);

//ce code crée une racine pour l'application React, y affiche le composant "App" enveloppé dans un composant "StrictMode"
//cette structure permet de s'assurer que l'application est correctement structurée et d'éviter les erreurs potentielles
