import { RouterProvider } from 'react-router-dom';
import {router} from './routes';
import 'bootstrap/dist/css/bootstrap.min.css';

export const  App = () => {
    return (
        <RouterProvider router={router} />
    );
}

