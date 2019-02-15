import React, {Component, Fragment} from 'react';
import ReactDOM from 'react-dom';

import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

import Header from './layout/Header';
import Dashboard from './leads/Dashboard';
import AlertsTest from './layout/AlertsTest';

import {Provider} from 'react-redux';
import store from '../store'

// Alert option
const options = {
    position: positions.BOTTOM_CENTER,
    timeout: 3000
}
class App extends Component{
    render(){
        return(
            <Provider store={store}>
                <AlertProvider template={AlertTemplate} {...options}>
                    <Fragment>
                        <Header/>
                        <AlertsTest/>
                        <div className="container">
                            <Dashboard/>
                        </div>
                    </Fragment>
                </AlertProvider>
            </Provider>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('app'))