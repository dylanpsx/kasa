//ce code créer le composant "Home" qui représente la page d'accueil de l'application
//la page est composée d'un en-tête "Header", d'une bannière "Banner, d'une galerie "Gallery" et d'un pied de page "Footer"
//le composant utilise également un fichier de styles css
import './home.scss' //importe le fichier "home.scss" qui contient les styles css de la page d'accueil 
import Header from '../../components/header/Header' //importe le composant "Header" depuis le fichier "Header.js" situé dans le dossier "components/header"
import Banner from '../../components/banner/Banner' //importe le composant "Banner" depuis le fichier "Banner.jsé" situé dans le dossier "components/banner"
import Gallery from '../../components/gallery/Gallery'//importe le composant "Gallery" depuis le fichier "Gallery.js" situé dans le dossier "components/gallery"
import Footer from '../../components/footer/Footer' //importe le composant "Footer" depuis le fichier "Footer.js" situé dans le dossier "components/footer"

//définit le composant "Home" qui représente la page d'accueil
export default function Home() {
	return (
		<div className='home'> //affiche les les composants dans un élément "div"
			<Header /> 
			<Banner />
			<Gallery />
			<Footer />
		</div>
	)
}
