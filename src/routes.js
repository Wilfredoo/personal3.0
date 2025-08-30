// Pages
import Home from './components/Home';
import Curriculum from './components/Curriculum';
import Workandtravelsecure from './components/Workandtravel/Workandtravelsecure';
import Scripts from './components/Scripts';
import Acting from './components/Acting/Acting';
import FilmEquipment from './components/FilmEquipment/FilmEquipment';
import Film from './components/Film/Film';
import Referenceletter from './components/Referenceletter'

// Redirect Components
import Redirector from './components/Redirector';

// Cacao Components
import Cacao from './components/Cacao/Cacao';
import BatchOrders from './components/Cacao/BatchOrders';

// Misc
import SellSheet from './components/AyakuchoSellsheet/AyakuchoSellSheet';
import TheWoodlandsSellSheet from './components/TheWoodlandsSellsheet/TheWoodlandsSellSheet';

const routes = [
    { path: "/", component: <Home /> },
    { path: "/cv", component: <Curriculum /> },
    { path: "/acting", component: <Acting /> },
    { path: "/reference_letter", component: <Referenceletter /> },

    { path: "/film", component: <Film /> },
    { path: "/filmequipment", component: <FilmEquipment /> },
    { path: "/videography", component: <FilmEquipment /> },
    { path: "/ayakucho", component: <SellSheet /> },
    { path: "/thewoodlands", component: <TheWoodlandsSellSheet /> },
    { path: "/workandtravel", component: <Workandtravelsecure /> },
    { path: "/cacao", component: <Cacao /> },
    { path: "/kakao", component: <Cacao /> },
    { path: "/cacao/batch/:batchName", component: <BatchOrders /> },
    { path: "/kakao/batch/:batchName", component: <BatchOrders /> },
    { path: "/:type", component: <Redirector /> },
    { path: "/scripts", component: <Scripts /> }

];

export default routes;
