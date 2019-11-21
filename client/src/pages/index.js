import React, { Component } from 'react';
import Store from "../store/index";

// Action-types
import { addState } from "../action/index";

window.Store = Store;
window.addState = addState;

console.log('Donnée initiale :', Store.getState());

Store.subscribe(() => console.log('Changement de la donnée :', Store.getState())); // Called for each data changing
Store.dispatch(addState({
    id: 1,
    title: "Première interaction avec REDUX"
}));
Store.dispatch(addState({
    id: 2,
    title: "Seconde interaction avec REDUX"
}));

export default class A extends Component {

    render(){
        return (
            <div></div>
        )
    }
}