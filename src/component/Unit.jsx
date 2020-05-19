import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';

class Unit extends React.Component {
    handleChange = (id) => {
        let json = {
            "inputUnit": ReactDOM.findDOMNode(document.getElementById('inputUnit')).value.toUpperCase(),
            "inputValue": ReactDOM.findDOMNode(document.getElementById('inputValue')).value,
            "outputUnit": ReactDOM.findDOMNode(document.getElementById('outputUnit')).value.toUpperCase(),
            "unitType": this.props.unitType.toUpperCase()
        }
        axios.post('http://localhost:8080/quantityconverter/convert', json).then(function (response) {
            console.log(response);
            var thisSession = JSON.parse(JSON.stringify(response.data));
            ReactDOM.findDOMNode(document.getElementById('outputValue')).value = thisSession.outputValue;
        })
            .catch(function (error) {
                console.log(error);
            });
    }

    handleChangeReverse = () => {
        let json = {
            "inputUnit": ReactDOM.findDOMNode(document.getElementById('outputUnit')).value.toUpperCase(),
            "inputValue": ReactDOM.findDOMNode(document.getElementById('outputValue')).value,
            "outputUnit": ReactDOM.findDOMNode(document.getElementById('inputUnit')).value.toUpperCase(),
            "unitType": this.props.unitType.toUpperCase()
        }
        axios.post('http://localhost:8080/quantityconverter/convert', json).then(function (response) {
            console.log(response);
            let thisSession = JSON.parse(JSON.stringify(response.data));
            ReactDOM.findDOMNode(document.getElementById('inputValue')).value = thisSession.outputValue;
        })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        return (
            <div>
                <div className={"form"}>
                    <input id="inputValue" className="input-div" defaultValue={""} onChange={this.handleChange}
                           style={{width: 208}}
                           type={"number"}/>
                    <br/>
                    <select id="inputUnit" className="input-div" onChange={this.handleChangeReverse}>
                        {
                            this.props.list.map(function (player, i) {
                                return <option key={i}>{player}</option>
                            })
                        }
                    </select>
                </div>
                <h3 className={"form"} style={{padding: 10, paddingBottom: 30}}>= </h3>
                <div className={"form"}>
                    <input id="outputValue" className="input-div" onChange={this.handleChangeReverse} defaultValue={""}
                           style={{width: 208}}
                           type={"number"}/>
                    <br/>
                    <select id="outputUnit" className="input-div" onChange={this.handleChange}>
                        {
                            this.props.list.map(function (player, i) {
                                return <option key={i}>{player}</option>
                            })
                        }
                    </select>
                </div>
            </div>
        )
    }
}

export default Unit;