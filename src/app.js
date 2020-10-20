import React, { useState, Suspense } from "react";
import Layout from "./Layout/Layout";
import { Switch, Route, Redirect } from "react-router";
import Home from "./Pages/Home";
import "./styles.css";
import { ThemeProvider } from "@material-ui/core";
import theme from "./ThemeProvider";
import Fallback from "./Components/Util/Fallback/Fallback";

const Details = React.lazy(() => import("./Pages/Details"));
const Booking = React.lazy(() => import("./Pages/Booking"));
const Auth = React.lazy(() => import("./Pages/Auth"));
const Dashboard = React.lazy(() => import("./Pages/Dashboard"));

const App = () => {
    const [token, setToken] = useState('')
    const [localId, setLocalId] = useState('')
    const fetchAuth = (token,localId) => {   
        setToken(token);
        setLocalId(localId);
    }
    let route;
    if(token && localId){
        route = (
            <Switch>
                <Route path="/dashboard" render={props => <Dashboard token={token} localId={localId} {...props}/>} />
                <Redirect to="/"/>
            </Switch>
        )
    }
    else{
        route = (
          <Switch>
            <Route path="/dashboard" render={props => <Dashboard token={token} localId={localId} {...props}/>} />
            <Route path="/auth" render={props => <Auth fetchAuth={fetchAuth} {...props}/>} />
            <Route path="/details" render={props => <Details {...props}/>} />
            <Route path="/booking" render={props => <Booking {...props}/>} />
            <Route path="/" component={Home} />
            <Redirect to="/"/>
          </Switch>
        )
    }
    return (
    <ThemeProvider theme={theme}>
        <Suspense fallback={<Fallback/>}>
         { route }
        </Suspense>
    </ThemeProvider>
  );
};

export default App;
