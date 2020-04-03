import React from 'react';
import routes from '../routes/routes';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

export default function Layout () {
    return ( 
     <Router>  
         <Switch>
            {
              routes.map((route, k) => {
                return (
                  <Route key={route.name} path={route.path} render={() => route.component} exact={route.exact}/>
                )
              })
            }
         </Switch>   
      </Router>   
    )
}