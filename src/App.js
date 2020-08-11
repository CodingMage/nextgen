import React from 'react';
// import SideBar from './Components/SideBar';
import './CSS/style.css';
import Main from './Components/Main';
import Sidebar from './Components/Sidebar';


function App(props) {

  return (
    <div className="App">
      {/* <SideBar /> */}
      <Sidebar />

      <Main />

    </div>
  );
}

export default App;
