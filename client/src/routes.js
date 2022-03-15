import Admin from "./pages/Admin"
import Auth from "./pages/Auth"
import Basket from "./pages/Basket"
import DevicePage from "./pages/DevicePage"
import Shop from "./pages/Shop"
import { ADMIN_ROUTE, SHOP_ROUTE, BASKET_ROUTE, 
        LOGIN_ROUTE, REGISTRATION_ROUTE, DEVICE_ROUTE, HOME} 
from "./utils/consts"

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: <Admin/>
    },

    {
        path: BASKET_ROUTE,
        Component: <Basket/>
    }
]

export const publicRoutes = [
    {
        path: HOME,
        Component: <Shop/>
    },
    {
        path: LOGIN_ROUTE,
        Component: <Auth/>
    },

    {
        path: REGISTRATION_ROUTE,
        Component: <Auth/>
    },
    {
        path: SHOP_ROUTE,
        Component: <Shop/>
    },
    
    {
        path: DEVICE_ROUTE + '/:id',
        Component: <DevicePage/>
    }
]