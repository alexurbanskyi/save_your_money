import './App.css';
import {Route, Routes, Link} from 'react-router-dom'

import MyIncome from "./Components/MyIncome/MyIncome";
import MyCoasts from "./Components/MyCoasts/MyCoasts";
import MyBudget from "./Components/MyBudget/MyBudget";
import Layout from "./Components/Layout/Layout";



function App() {
  return (
    <div className="App">

        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={ <MyBudget/>}/>
                <Route path='/coasts' element={ <MyCoasts/>}/>
                <Route path='/income' element={ <MyIncome/>}/>
            </Route>

        </Routes>
    </div>
  );
}

export default App;
