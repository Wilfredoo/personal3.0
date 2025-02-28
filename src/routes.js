// Pages
import Home from './components/Home';
import Curriculum from './components/Curriculum';
import FilmCurriculum from './components/FilmCurriculum';
import Scripts from './components/Scripts';
import Acting from './components/Acting/Acting';
import FilmEquipment from './components/FilmEquipment/FilmEquipment';

// Redirect Components
import Redirector from './components/Redirector';

// Cacao Components
import Cacao from './components/Cacao/Cacao';
import BatchOrders from './components/Cacao/BatchOrders';

// Misc
import SellSheet from './components/AyakuchoSellsheet/AyakuchoSellSheet';

const routes = [
    { path: "/", component: <Home /> },
    { path: "/cv", component: <Curriculum /> },
    { path: "/acting", component: <Acting /> },
    { path: "/filmequipment", component: <FilmEquipment /> },
    { path: "/videography", component: <FilmEquipment /> },
    { path: "/resume", component: <FilmCurriculum /> },
    { path: "/ayakucho", component: <SellSheet /> },
    { path: "/cacao", component: <Cacao /> },
    { path: "/kakao", component: <Cacao /> },
    { path: "/cacao/batch/:batchName", component: <BatchOrders /> },
    { path: "/kakao/batch/:batchName", component: <BatchOrders /> },
    { path: "/:type", component: <Redirector /> },
    { path: "/scripts", component: <Scripts /> }

];

export default routes;
