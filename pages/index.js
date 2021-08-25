import React, { Component } from "react";
import IndexComponent from "../components/home/Index";

class Index extends Component {
    static getInitialProps() {
        return {
            namespacesRequired: ['common']
        }
    }

    render() {
        return (
            <IndexComponent />
        );
    }
}

export default Index;