import { Switch, Route, useHistory } from "react-router-dom";
import React, { useEffect } from "react";
import LoginPage from "./components/LoginPage/LoginPage";
import RegisterPage from "./components/RegisterPage/RegisterPage";
import ChatPage from "./components/CahtPage/ChatPage";
import firebase from "./firbase";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "./redux/actions/user_action";

function App() {
  const history = useHistory();
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.user.isLoading);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        history.push("/");
        dispatch(setUser(user));
      } else {
        history.push("/login");
      }
    });
  }, []);

  if (isLoading) {
    return <div> ...loading </div>;
  } else {
    return (
      <Switch>
        <Route exact path="/" component={ChatPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/register" component={RegisterPage} />
      </Switch>
    );
  }
}

export default App;
