import { createBrowserRouter } from 'react-router-dom';
import Layout from '../pages/Layout';
import HomePage from '../pages/Home';
import PromotionPage from '../pages/Promotion';
import LoginPage from '../pages/Login';
import RegisterPage from '../pages/Register';
import ChangePasswordPage from '../pages/ChangePassword';
import PlayHistoryPage from '../pages/PlayHistory';
import Topup from '../pages/Topup';
import Withdraw from '../pages/Withdraw';
import TransferLog from '../pages/TransferLog';
import HomeTabsPage from '../pages/HomeTabs';
import HistoryPage from '../pages/History';
import GameLogPage from '../pages/GameLog';
import ProfilePage from '../pages/Profile';
import NewPlayerChangePassword from '../pages/NewPlayerChangePassword';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <HomeTabsPage />,
      },
      {
        path: '/user',
        element: <HomePage />
      },
      {
        path: '/promotion',
        element: <PromotionPage />,
      },
      {
        path: '/profile',
        element: <ProfilePage />
      },
      {
        path: '/history',
        element: <HistoryPage />,
      },
      {
        path: '/game-log',
        element: <GameLogPage />,
      },
      {
        path: '/new-player-change-password',
        element: <NewPlayerChangePassword />,
      },
      {
        path: '/change-password',
        element: <ChangePasswordPage />,
      },
      {
        path: '/play-history',
        element: <PlayHistoryPage />,
      },
      {
        path: '/login',
        element: <LoginPage />,
      },
      {
        path: '/register',
        element: <RegisterPage />,
      },
      {
        path: '/topup',
        element: <Topup />,
      },
      {
        path: '/withdraw',
        element: <Withdraw />,
      },
      {
        path: '/transferlog',
        element: <TransferLog />,
      },
    ],
  },


]);

export default router;
