import React, { Component, Fragment } from 'react';
import ProductDashboard from '../ProductDashboard';
import Setting from '../Setting/Loadable';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import Layout from '../../hoc/Layout/Layout';

class App extends Component {
    render() {
        const routes = (
            <Switch>
              <Route path="/settings" component={Setting} />               
              <Route path="/" exact component={ProductDashboard} />
              <Redirect to="/" />
            </Switch>
          )

        return (
            <Fragment>
                <Layout>
                    {routes}
                </Layout>                
            </Fragment>
        )
    }
}

export default App;