import React from 'react';
import Layout from './hoc/Layout';
import Dashboard from './components/Dashboard/Dashboard'
import Tasks from './components/Tasks/Tasks'

function App() {
  return (
    <div className="App">
       <Layout>
         <Dashboard/>
         {/* <Tasks/> */}
       </Layout>
    </div>
  );
}

export default App;
