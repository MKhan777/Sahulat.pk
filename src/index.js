import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'hover.css/css/hover-min.css'
//import Typed from 'typed.js';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
// import 'aos/dist/aos.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
// import Sample from './Components/Sample';
import {faRedoAlt,faShoppingCart, faPhone,faHeart,faSyncAlt,faUsers} from '@fortawesome/free-solid-svg-icons';
 
library.add(fab, faRedoAlt,faPhone, faHeart, faSyncAlt, faUsers,faShoppingCart);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
