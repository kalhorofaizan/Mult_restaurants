import React, {Component} from 'react';
import Menu from '../component/Menu'
import {Container} from '@material-ui/core'
import {BrowserRouter as Router ,Switch,Route} from 'react-router-dom'
import Home from "./Home";
import Restaurant from "./Restaurants";
class Deshboard extends Component {
    render() {
        return (
            <div>

                    <Router >
                        <Menu/>
                        <Switch>
                            <Route exact path={'/'} component={Home}  />
                            <Route exact path={'/restaurants'} component={Restaurant}  />
                        </Switch>
                    </Router>
            </div>
        );
    }
}

export default Deshboard;