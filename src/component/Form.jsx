import React from 'react';
import Unit from "./Unit";

class Form extends React.Component {
    constructor() {
        super();
        this.state = {
            List: [
                "Feet",
                "Inch",
                "Centimeter",
                "Yard"
            ]
        }
    }

    handleChange = (event) => {
        let Length =
            [
                "Feet",
                "Meter",
                "Centimeter",
                "Yard"
            ];
        let Weight =
            [
                "Kilogram",
                "Gram",
                "Tonne"
            ];
        let Volume =
            [
                "Litre",
                "Millilitre",
                "Gallon"
            ];

        let Temperature =
            [
                "Celcius",
                "Fahrenheit"
            ];
        let list = event.target.value;
        let array;
        if (list === "Length")
            array = Length;
        else if (list === "Weight")
            array = Weight;
        else if (list === "Temperature")
            array = Temperature;
        else
            array = Volume;
        this.setState({
                unitType: event.target.value,
                List: array
            }
        )
    }

    render() {
        return (
            <form className="form">
                <div className="unit-type">
                    <select id="myList" defaultValue={"Length"} onChange={this.handleChange}>
                        <option>Length</option>
                        <option>Weight</option>
                        <option>Temperature</option>
                        <option>Volume</option>
                    </select>
                </div>
                <br/>
                <div className="form">
                    <Unit list={this.state.List}/>
                </div>
                <h3 className={"form"} style={{padding: 10, paddingBottom: 30}}>= </h3>
                <div className="form">
                    <Unit list={this.state.List}/>
                </div>
            </form>
        )
    }
}

export default Form;