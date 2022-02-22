import React, {Component} from 'react';
import {Route,withRouter,Switch} from 'react-router-dom';
import Main from "./main";
import DashBoradItem from "./component/DashBoradItem";
import PopupDashbordDetail from "./component/PopupDashbordDetail";

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <Route exact path="/">
                    <Main history={this.props.history} location={this.props.location} match={this.props.match}/>
                </Route>
                <Route exact path="/dashbord">
                    <DashBoradItem history={this.props.history} location={this.props.location} match={this.props.match}/>
                </Route>
                <Route exact path="/dashbord/:id">
                    <PopupDashbordDetail history={this.props.history} location={this.props.location} match={this.props.match}/>
                </Route>
            </>
        );
    }
}

export default withRouter(App);