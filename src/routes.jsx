import {createBrowserRouter} from 'react-router-dom';
import {MainLayout} from './layouts/MainLayout';
import {Catalog} from './pages/Catalog';
import {Statistic} from './components/Statistic';
import {Ant} from './components/Ant';
import {Success} from './components/Success';
import {Cancel} from './components/Cancel';
import {NotFound} from './components/NotFound.jsx';

export const router = createBrowserRouter([
        {
            path: '/',
            element: <MainLayout/>,
            children:
                [
                    {index: true, element: <Catalog/>},
                    {path: 'statistic', element: <Statistic/>},
                    {path: 'ant', element: <Ant/>},
                ],
        },

        {path: '/success', element: <Success/>},
        {path: '/cancel', element: <Cancel/>},
        {path: '*' ,  element: <NotFound />}
    ],
    {
        future: {
            v7_relativeSplatPath: true,
        }
    });
