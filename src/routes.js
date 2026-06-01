// Pages
import Home from './components/Home';
import HomePolished from './components/HomePolished';
import HomeNew from './components/HomeNew';
import Curriculum from './components/Curriculum';
import Workandtravelsecure from './components/Workandtravel/Workandtravelsecure';
import Scripts from './components/Scripts';
import ActingPolished from './components/Acting/ActingPolished';
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
import HostelParadisoSellSheet from './components/HostelParadisoSellsheet/HostelParadisoSellSheet';
import HealingIsForgetting from './components/HealingIsForgetting/HealingIsForgetting';
import EmailProof from './components/EmailProof';
import ReadShakespearePrivacyPolicy from './components/ReadShakespearePrivacyPolicy';
import TheBabciaPolicy from './components/TheBabciaPolicy';
import Decameron from './components/Decameron/Decameron';
import Apps from './components/Apps';
import TheExplorationMap from './components/TheExplorationMap';
import BoardGames from './components/BoardGames';

import TreeCloudMountainSea from './components/TreeCloudMountainSea/TreeCloudMountainSea';

const routes = [
    { path: "/", component: <HomeNew /> },
    { path: "/home-a", component: <HomePolished /> },
    { path: "/home-legacy", component: <Home /> },
    { path: "/cv", component: <Curriculum /> },
    { path: "/acting", component: <ActingPolished /> },
    { path: "/reference_letter", component: <Referenceletter /> },
    { path: "/healingisforgetting", component: <HealingIsForgetting /> },
    { path: "/emailproof", component: <EmailProof /> },
    { path: "/read-shakespeare-privacy-policy", component: <ReadShakespearePrivacyPolicy /> },
    { path: "/the-babcia-policy", component: <TheBabciaPolicy /> },
    { path: "/decameron", component: <Decameron /> },
    { path: "/apps", component: <Apps /> },
    { path: "/the-exploration-map", component: <TheExplorationMap /> },
    { path: "/board-games", component: <BoardGames /> },
    { path: "/boardgames", component: <BoardGames /> },

    { path: "/treecloudmountainsea", component: <TreeCloudMountainSea /> },

    { path: "/film", component: <Film /> },
    { path: "/filmequipment", component: <FilmEquipment /> },
    { path: "/videography", component: <FilmEquipment /> },
    { path: "/ayakucho", component: <SellSheet /> },
    { path: "/hostelparadiso", component: <HostelParadisoSellSheet /> },
    { path: "/multiversehotel", component: <HostelParadisoSellSheet /> },
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
