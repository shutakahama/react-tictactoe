// tutorial from https://ja.reactjs.org/tutorial/tutorial.html

import React from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Game } from "./game";
import './index.css';
import { Provider } from 'react-redux'
import store from './store'

// ReactDOM.render(
//     <React.StrictMode>
//         <Provider store={store}>
//             <Router>
//                 <div className="App">
//                     <Route exact path="/" component={Game} />
//                 </div>
//             </Router>
//         </Provider>
//     </React.StrictMode>,
//     document.getElementById('root')
// );

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Game />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
