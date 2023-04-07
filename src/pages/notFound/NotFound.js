//ce code utilise la bibliothèue react pour créer le composant "NotFound" qui représente la page d'erreur 404 d'une application 
//la page affiche un message indiquant que la page demandée n'existe pas, ainsi qu'un lien pour retourner sur la page d'accueil de l'application 
//le composant utilise également un fichier un fichier de styles css

import './notFound.scss' //importe le fichier "notFound.scss" qui contient les styles css pour la page d'erreur 404
import Header from "../../components/header/Header"; //importe le composant "Header" depuis le fichier "Header.js" situé dans le dossier "componoents/header"
import { Link } from 'react-router-dom'; //importe la méthode "link" de la bibliothèque "react-router-dom"
//"link" est une méthode qui permet de créer un lien vers une autre page de l'application

//définit le composant "NotFound" qui représente la page d'erreur 404
export default function NotFound() {
	return (
		<div className='notFound'> //créer un élement "div" avec une classe css "notFound"
			<Header /> //affiche le composant "header"
			<div className="notFound_infos"> //créer un élément "div" avec une classe css "notFound_infos"
				<h1 className='notFound_infos_title'>404</h1> //affiche le titre de la page d'erreur 404
				<p className='notFound_infos_content'>La page que vous recherchez n'existe pas.</p> //affiche un message indiquant que la page demandés n'existe pas
			</div>
				<Link className='notFound_infos_return' to='/'>Retourner sur la page d'accueil</Link> //créer un lien pour sur la page d'accueil de l'application
	
		</div>
	)
}
