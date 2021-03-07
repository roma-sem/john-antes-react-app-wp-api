import React, {
    lazy,
    Suspense
} from 'react';
import './App.scss';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

import ViewFrameOverlay from './components/ViewFrameOverlay/ViewFrameOverlay';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const Home = lazy(() => import("./pages/Home"));
const Work = lazy(() => import("./pages/Work/Work"));
const SingleWork = lazy(() => import('./pages/SingleWork/SingleWork'));
const Shop = lazy(() => import('./pages/Shop/Shop'));
const Contact = lazy(() => import('./pages/Contact/Contact'));

export default function App() {
    return (
        <Router>
            <div className="App">
                <div className="container header-container">
                    <Header />
                </div>

                <div className="container all-content-wrapper">
                    <div className="inner-container">
                        <ViewFrameOverlay />
                        <Suspense fallback={<h1 style={{fontSize: "30px", textAline: "centered"}}>L O A D I N G ...</h1>}>
                            <Switch>
                                <Route path="/" exact component={Home} />
                                <Route path="/work" exact component={Work} />2
                                <Route path="/work/:id" component={SingleWork} />
                                <Route path="/shop" exact component={Shop} />
                                <Route path="/contact" exact component={Contact} />
                            </Switch>
                        </Suspense>
                        <Footer />
                    </div>
                </div>
            </div>
        </Router>
  );
}
