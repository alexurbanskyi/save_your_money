import './App.css';
import {Route, Routes, Link} from 'react-router-dom'

import MyIncome from "./Components/MyIncome/MyIncome";
import MyPurchase from "./Components/MyPurchase/MyPurchase";
import MyCosts from "./Components/MyCosts/MyCosts";
import Layout from "./Components/Layout/Layout";



function App() {
  return (
    <div className="App">

        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={ <MyCosts/>}/>
                {/* <Route path='/income' element={ <MyIncome/>}/> */}
                <Route path='/purchase' element={ <MyPurchase/>}/>
            </Route>

        </Routes>
    </div>
  );
}

export default App;
