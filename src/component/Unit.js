import React from "react";

class Unit extends React.Component {
    render() {
        return (
            <div>
                <input id="input-div" style={{width:208}} type={"number"}/>
                <br/>
                <select id="input-div">
                    {
                        this.props.list.map(function (player, i) {
                            return <option key={i}>{player}</option>
                        })
                    }
                </select>
            </div>
        )
    }
}

export default Unit;