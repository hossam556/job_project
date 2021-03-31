import React from 'react';
import {Route , Switch} from 'react-router-dom';
import Layout from './hoc/Layout';
import Dashboard from './components/Dashboard/Dashboard'
import Tasks from './components/Tasks/Tasks'
import Profile from './components/Profile/Profile'
import Proxies from './components/Proxies/Proxies'
import Account from './components/Account/Account'
import Setting from './components/Settings/Setting'
import Renewal from './components/Revewal/Renewal'

function App() {
  return (
    <div className="App">
       <Layout>
         <Switch>
          <Route path='/tasks' component={Tasks}/>
          <Route path='/profile' component={Profile}/>
          <Route path='/proxies' component={Proxies}/>
          <Route path='/account' component={Account}/>
          <Route path='/setting' component={Setting}/>
          <Route path='/renewal' component={Renewal}/>
          <Route path='/' component={Dashboard}/>
         </Switch>
       </Layout>
    </div>
  );
}

export default App;
