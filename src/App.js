import React from 'react';
import './App.css';
import {connect} from 'react-redux'
import {Add} from './redux/action';
import Deshboard from "./pages/Deshboard";
const  mapDispatchToProps=(dispatch)=>({
  Add:()=>{dispatch(Add())}
});
const mapStateToProps=(state)=>({
  number:state.user.number
});

function App(props) {
  console.log(props.number);
  return (
    <div>
        <Deshboard/>
    </div>
  );
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
