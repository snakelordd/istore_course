import React, { useContext } from "react";
import {Routes, Route, Navigate} from 'react-router-dom'
import { Context } from "..";
import Shop from "../pages/Shop";
import { authRoutes, publicRoutes } from "../routes";
import { ADMIN_ROUTE, SHOP_ROUTE, BASKET_ROUTE, 
    LOGIN_ROUTE, REGISTRATION_ROUTE, DEVICE_ROUTE, HOME} 
from "../utils/consts"
import {observer} from 'mobx-react-lite'


const AppRouter = () => {
    const {user} = useContext(Context)
    //user.setIsAuth(true)
    console.log(user)
    return(
        <Routes>
            {user.isAuth && authRoutes.map(item => 
                <Route key={item.path} path={item.path} element={item.Component}/>
            )}
            { publicRoutes.map(item => 
            <Route key={item.path} path={item.path} element={item.Component}/>
            )}
            <Route path='*' element={<Navigate to={SHOP_ROUTE}/> }/>
        </Routes>
    )
}

export default AppRouter