import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import {Routes, Route, Navigate} from 'react-router-dom'
import { Context } from "..";
import { authRoutes, publicRoutes } from "../routes";



const AppRouter = observer ( () => {
    const {user} = useContext(Context)
    //user.setIsAuth(true)
    console.log(user.isAuth)
    return(
        <Routes>
            {user.isAuth && authRoutes.map(item => 
                <Route key={item.path} path={item.path} element={item.Component}/>
            )}
            { publicRoutes.map(item => 
            <Route key={item.path} path={item.path} element={item.Component}/>
            )}

        </Routes>
    )
})

export default AppRouter