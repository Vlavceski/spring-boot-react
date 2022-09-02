import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';
import {ExportToExcel} from "./components/ExportToExcel";
import axios from "axios";
function App() {
    const [data, setData] = React.useState([])
    const fileName = "myfile"; // here enter filename for your excel file

    React.useEffect(() => {
        const fetchData = () =>{
            axios.get('http://localhost:9090/api/v1/employees').then(r => setData(r.data) )
        }
        fetchData()
    }, [])
  return (
    <div>
        <Router>
              <HeaderComponent />
                <div className="container">
                    <Switch> 
                          <Route path = "/" exact component = {ListEmployeeComponent}></Route>
                          <Route path = "/employees" component = {ListEmployeeComponent}></Route>
                          <Route path = "/add-employee/:id" component = {CreateEmployeeComponent}></Route>
                          <Route path = "/view-employee/:id" component = {ViewEmployeeComponent}></Route>
                        <Route path = "/update-employee/:id" component = {UpdateEmployeeComponent}></Route>
                        <Route path = "/download" component = {ExportToExcel}> <ExportToExcel apiData={data} fileName={fileName} /></Route>
                    </Switch>
                </div>


            <FooterComponent />
        </Router>
    </div>
    
  );
}

export default App;
