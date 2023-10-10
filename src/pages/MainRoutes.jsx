import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import ErrorPage from './ErrorPage';
import About from './About';
import ProductsPage from './ProductsPage';
import PrivateRoute from '../hoc/PrivateRoute';


const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path='/about'element={<About/>}/>
            <Route path='/products' element={<PrivateRoute><ProductsPage/></PrivateRoute>}/>
            <Route path="*" element={<ErrorPage />} />

        </Routes>
    )
}

export default MainRoutes;