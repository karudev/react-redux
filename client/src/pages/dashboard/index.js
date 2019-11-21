import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from '../../store/index';
import App from '../../components/App';
import { addState } from "../../action/index";

window.store = store;
window.addState = addState;

console.log('Donnée initiale :', store.getState());

store.subscribe(() => console.log('Changement de la donnée :', store.getState())); // Called for each data changing
store.dispatch(addState({
    id: 1,
    title: "Première interaction entre components"
}));
store.dispatch(addState({
    id: 2,
    title: "Seconde interaction entre components"
}));

export default class B extends Component {

    render() {
        return (
            <Provider store={ store }>
                <App/>
            </Provider>
        )
    }

}