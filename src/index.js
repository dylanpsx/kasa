import React from 'react'; 
import ReactDOM from 'react-dom/client';
import App from './App'; //importe le composant "app" depuis le fichier "App.js" dans le même répertoire

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render( 
	<React.StrictMode>
		<App  />
	</React.StrictMode> //enveloppe le composant "App" dans un composant "StrictMode"
);
