import React from 'react'
import {Route} from 'react-router-dom'
export default function PrivateRoute(props) {
    return (
        <Route path={props.path} exact={props.exact} component={props.component} />
    )
}
