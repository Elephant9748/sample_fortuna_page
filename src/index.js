import React from 'react';
import ReactDOM from 'react-dom';
import './root.css';
// import WarehouseExtend from './component/warehouse/warehouse_extend';
// import Warehouse from "./component/warehouse/warehouse";
import MainDashboard from './component/dashboard/main';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<MainDashboard />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
