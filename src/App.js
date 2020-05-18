import React from 'react';
import Form from './component/Form.jsx';
import './App.css';

class App extends React.Component {
    render() {
        return (
            <div style={{border:"thin solid grey", width:500, height:220, paddingLeft:40,margin:20}}>
                <div className="app">
                    <h2 style={{marginLeft: 120}}> Quantity Converter </h2><br/>
                    <br/>
                </div>
                <Form/><br/>
            </div>
        );
    }
}

export default App;
