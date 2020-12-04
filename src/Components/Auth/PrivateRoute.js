import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import {useAuth} from '../../contexts/AuthContext'

export default function PrivateRoute({component: Componet, ...rest}) {
    const { currentUser } = useAuth();
    return (
        <div>
            <Route
            {...rest} render={props =>{
                return currentUser ? <Componet {...props} /> : <Redirect to='/Login'/>
            }}
            >

            </Route>
            
        </div>
    )
}
