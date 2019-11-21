import React from 'react';
import List from './list'
import Form from './form'

const App = () => (
    <>
        <div>
            <h2>Data</h2>
            <List/>
        </div>
        <div>
            <h2>Add a new data</h2>
            <Form/>
        </div>
    </>
);

export default App;