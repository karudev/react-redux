import React from 'react';
import { connect } from 'react-redux';

/*
 * The List component receives the prop which is a copy of the state saw in the Redux state. (it comes from the reducer)
 * The state in redux always comes from reducers.
 * "Still confused ? Understanding how connect works will take some time. But fear not, the road to learn Redux is paved with “ah-ah” moments."
 */

const mapStateToProps = state => { // Conventional name
    return ({
        data: state.data
    })
};

const ConnectedList = ({ data }) => (
    <ul>
        {
            data.map(e => (
                <li key={ e.id }>{ e.title }</li>
            ))
        }
    </ul>
);

const List = connect(mapStateToProps)(ConnectedList);
export default List;