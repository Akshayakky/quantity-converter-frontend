import React from 'react';
import UnitType from './component/UnitType.jsx';
import './App.css';

class App extends React.Component {
    render() {
        return (
            <div style={{border: "thin solid #d5cccc", width: 500, height: 220, paddingLeft: 40, margin: 20}}>
                <div className="app">
                    <h2 style={{marginLeft: 120}}> Quantity Converter </h2><br/>
                    <br/>
                </div>
                <UnitType/><br/>
            </div>
        );
    }
}

export default App;
