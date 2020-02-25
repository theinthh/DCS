import React, { Component } from 'react';
import { Route,Router } from "react-router-dom";
import Login from './containers/Login';
import Years from './containers/Years'
import StudentInfo from './containers/StudentInfo';
import Attendance from './containers/Attendence';
import LabReport from './containers/LabReport';
import Assignment from'./containers/Assignments';
import history from './history';

class App extends Component{
    render(){
        return(
            <Router history={history}>
                <div>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/" component={Login}/>
                    <Route exact path="/years" component={Years}/>
                    <Route exact path="/studentinfo" component={StudentInfo}/>
                    <Route exact path="/attendace" component={Attendance}/>
                    <Route exact path="/labreport" component={LabReport}/>
                    <Route exact path="/assignment" component={Assignment}/>
                </div>
            </Router>
        )
    }
}

export default App;
