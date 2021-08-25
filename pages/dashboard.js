import React, { Component } from "react";
import DashboardComponent from "../components/dashboard/Index";

class Dashboard extends Component {
    static getInitialProps() {
        return {
            namespacesRequired: ['common']
        }
    }

    render() {
        return (
            <DashboardComponent />
        );
    }
}

export default Dashboard;