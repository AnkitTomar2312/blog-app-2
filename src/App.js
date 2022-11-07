import React from 'react'
import Page1 from './pages/Page1';
import Page2 from '../src/pages/page2/Page2';
import Page3 from './pages/page3/Page3';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";


function App() {
  return (
   <div className='main-div'>
    <Router>
      <Routes>
      <Route exact path="/" element={<Page1 />} />
      <Route exact path="/bollywood" element={<Page2 />} />
      <Route exact path="/technology" element={<Page3 />} />
      
      </Routes>
      
   </Router>
   
   </div>
  );
}
 
export default App;
