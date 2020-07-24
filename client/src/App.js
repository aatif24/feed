import React, {  Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Loader from "./components/Loader";
import Layout from "./layout/Index";


import Feeds from "./features/feeds/Feeds";

function App() {
    return (
        <Router>
            <Layout>
                <Suspense className="" fallback={<Loader />}>
                    <Switch>
                        <Route path="/" component={Feeds} />
                    </Switch>
                </Suspense>
            </Layout>
        </Router>
    );
}

export default App;
