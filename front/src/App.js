import './App.css';
import Main from "./project/Main";
import {getTodo} from "./project/action/Action";
import {connect} from "react-redux";
import {useEffect} from "react";
import styled from "styled-components";
import Header from "./project/component/common/Header";

const mapDispatch = (dispatch) => {
    return {
        getTodo: () => {dispatch(getTodo())}
    }
}
const mapStateToProps = (state) =>{
    return{
        todo:state.todo,
    }
}

function App(props) {
    const Wrap = styled.div`
      max-width:100vw;min-width:500px;
      height:100vh;background:#fafafa;
      & .flex{
        display:flex;justify-content:flex-start;
        width:100%;
        & .main-content{
          background:#fff;height:100%;width:100%;
          max-width: 1600px;padding-top:50px;
        }
      }
    `;
console.log(props)


    useEffect(()=>{
        console.log("Weqweqwe");
        console.log(props.store.dispatch(getTodo()));
        console.log(props.store. getState().todo)
    },[])

  return (
    <Wrap className="App">
        <Header/>
        <div className="flex">
            <div className="main-content">
                <Main/>
            </div>
        </div>
    </Wrap>
  );
}

export default connect(mapDispatch,mapStateToProps)(App);
