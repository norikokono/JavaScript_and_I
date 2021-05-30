import React, {Component} from 'react';

class KeyPadComponent extends Component {

    render() {
        return (
            <div className="calculator_button">
                <button style={{width: 100, height: 70, backgroundColor:"grey"}} name="(" onClick={e => this.props.onClick(e.target.name)}>(</button>
                <button style={{width: 100, height: 70, backgroundColor:"grey"}} name="CE" onClick={e => this.props.onClick(e.target.name)}>CE</button>
                <button style={{width: 100, height: 70, backgroundColor:"grey"}} name=")" onClick={e => this.props.onClick(e.target.name)}>)</button>
                <button style={{width: 100, height: 70, backgroundColor:"grey"}} name="C" onClick={e => this.props.onClick(e.target.name)}>C</button><br/>


                <button style={{width: 100, height: 70, backgroundColor:"grey"}} name="1" onClick={e => this.props.onClick(e.target.name)}>1</button>
                <button style={{width: 100, height: 70, backgroundColor:"grey"}} name="2" onClick={e => this.props.onClick(e.target.name)}>2</button>
                <button style={{width: 100, height: 70, backgroundColor:"grey"}} name="3" onClick={e => this.props.onClick(e.target.name)}>3</button>
                <button style={{width: 100, height: 70, backgroundColor:"grey"}} name="+" onClick={e => this.props.onClick(e.target.name)}>+</button><br/>


                <button style={{width: 100, height: 70, backgroundColor:"grey"}} name="4" onClick={e => this.props.onClick(e.target.name)}>4</button>
                <button style={{width: 100, height: 70, backgroundColor:"grey"}} name="5" onClick={e => this.props.onClick(e.target.name)}>5</button>
                <button style={{width: 100, height: 70, backgroundColor:"grey"}} name="6" onClick={e => this.props.onClick(e.target.name)}>6</button>
                <button style={{width: 100, height: 70, backgroundColor:"grey"}} name="-" onClick={e => this.props.onClick(e.target.name)}>-</button><br/>

                <button style={{width: 100, height: 70, backgroundColor:"grey"}} name="7" onClick={e => this.props.onClick(e.target.name)}>7</button>
                <button style={{width: 100, height: 70, backgroundColor:"grey"}} name="8" onClick={e => this.props.onClick(e.target.name)}>8</button>
                <button style={{width: 100, height: 70, backgroundColor:"grey"}} name="9" onClick={e => this.props.onClick(e.target.name)}>9</button>
                <button style={{width: 100, height: 70, backgroundColor:"grey"}} name="*" onClick={e => this.props.onClick(e.target.name)}>x</button><br/>


                <button style={{width: 100, height: 70, backgroundColor:"grey"}} name="." onClick={e => this.props.onClick(e.target.name)}>.</button>
                <button style={{width: 100, height: 70, backgroundColor:"grey"}} name="0" onClick={e => this.props.onClick(e.target.name)}>0</button>
                <button style={{width: 100, height: 70, backgroundColor:"grey"}} name="=" onClick={e => this.props.onClick(e.target.name)}>=</button>
                <button style={{width: 100, height: 70, backgroundColor:"grey"}} name="/" onClick={e => this.props.onClick(e.target.name)}>÷</button><br/>
            </div>
        );
    }
}


export default KeyPadComponent;