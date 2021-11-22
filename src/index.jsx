import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import DeviceStore from "./store/Device.store";


export const Context = createContext(null)

ReactDOM.render(
    <Context.Provider value={
        {
            device: new DeviceStore()
        }
    }>
        <App/>
    </Context.Provider>,
    document.getElementById('root')
);


