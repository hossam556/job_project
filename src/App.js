import React from 'react';
import Layout from './hoc/Layout';
import Dashboard from './components/Dashboard/Dashboard'
import Tasks from './components/Tasks/Tasks'
import Calendar2 from './UI/Calendar/Calender2'

function App() {
  return (
    <div className="App">
       <Layout>
         {/* <Dashboard/> */}
         <Tasks/>
         {/* <Calendar2/> */}
       </Layout>
    </div>
  );
}

export default App;
