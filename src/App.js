import React, { Component, Suspense } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoadingIndicator from "./components/common/LoadingIndicator"

class App extends Component {

  render() {
    const Login = React.lazy(() => import('./components/Login/loginUser'));
    const DashBoard = React.lazy(() => import('./components/Dashboard/Dashboard'));
    const ManageUsers = React.lazy(() => import('./components/ManageUser/ManageUsers'));
    const ManageExpenses = React.lazy(() => import('./components/ManageExpense/ManageExpenses'));
    const Error = React.lazy(() => import('./components/common/Error'));

    return (
      <div>
        <BrowserRouter>
          <Suspense fallback={<LoadingIndicator />}>
            <Switch>
              <Route path="/" component={Login} exact />
              <Route path="/Login" component={Login} exact />
              <Route path="/dashboard" component={DashBoard} />
              <Route path="/ManageUsers" component={ManageUsers} />
              <Route path="/ManageExpenses" component={ManageExpenses} />
              <Route component={Error} />
            </Switch>
          </Suspense>
        </BrowserRouter>
      </div >
    );
  }
}

export default App;
