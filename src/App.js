import React from 'react';
import './App.css';
import {connect} from 'react-redux'
import {Add} from './redux/action';
import Deshboard from "./pages/Deshboard";
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import UserLogin from "./pages/UserLogin";
import UserSignup from "./pages/UserSignup";
import Landing from "./pages/Landing";
const  mapDispatchToProps=(dispatch)=>({
  Add:()=>{dispatch(Add())}
});
const mapStateToProps=(state)=>({
  number:state.user.number
});

function App(props) {
  console.log(props.number);
  return (
    <Router>
          <Switch>
            <Route path={'/'} exact component={Landing}  />
            <Route path={'/Userlogin'} component={UserLogin} />
            <Route path={'/Usersignup'} component={UserSignup} />
            <Route path={'/dashboard'} component={Deshboard}  />
          </Switch>

    </Router>
  );
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
