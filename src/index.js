import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import "react-image-gallery/styles/css/image-gallery.css";
import Home from './pages/home';
import GalleryProvider from './context/gallery-context';
import {
    Route, BrowserRouter as Router,
    Switch
} from 'react-router-dom';
import GalleryPage from './components/image-gallery';

ReactDOM.render(
    <React.StrictMode>
        <GalleryProvider>
            <Router>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/gallery:index" component={GalleryPage} />
                </Switch>
            </Router>
        </GalleryProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
