import React, { Component, Fragment } from 'react';
import {withAlert} from 'react-alert';

export class AlertsTest extends Component {

    componentDidMount(){
        console.log("TES")
        this.props.alert.show('It works')
    }


    render() {
        return <Fragment/>
    }
}

export default withAlert(AlertsTest)
