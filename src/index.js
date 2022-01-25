import React from 'react';
import ReactDOM from 'react-dom';
import Car1 from './Car.js';



const myfirstelement = <h1>Hello React!</h1>
const myArray = ['apple', 'banana', 'orange','apple', 'banana', 'orange'];
const [car, truck, suv] = myArray;
const myList = myArray.map((item) => <p>{item}</p>)
ReactDOM.render(
    myList,document.getElementById('root')
);

const myelement = (
    <table>
        <tr>
            <th>Name</th>
        </tr>
        <tr>
            <td>John</td>
        </tr>
        <tr>
            <td>Elsa</td>
        </tr>
    </table>
);

ReactDOM.render(myelement, document.getElementById('root'));

const myelement1 = <input type="text" />;

ReactDOM.render(myelement1, document.getElementById('root'));
const x = 5;
let text = "Goodbye";
if (x < 10) {
    text = "Hello";
}
const myelement2 = <h1>{(x) > 10 ? "Hello" : "Goodbye"}</h1>;
ReactDOM.render(myelement2, document.getElementById('root'));

function Car2(props) {
    return <h2>Hi, I am a {props.color} Car!</h2>;
}

function Garage() {
    return (
        <>
            <h1>Who lives in my Garage?</h1>
            <Car2 />
        </>
    );
}

ReactDOM.render(<Garage/>, document.getElementById('root'));

ReactDOM.render(<Car1 />, document.getElementById('root'));

class Car extends React.Component {
    constructor() {
        super();
        this.state = {color: "red"};
    }
    render() {
        return <h2>I am a {this.state.color} Car!</h2>;
    }
}

class Garage1 extends React.Component {
    render() {
        return (
            <div>
                <h1>Who lives in my Garage?</h1>
                <Car />
            </div>
        );
    }
}

ReactDOM.render(<Garage1 />, document.getElementById('root'));

function Football() {
    const shoot = (a,b) => {
        alert(b.type);
    }

    return (
        <button onClick={(event)=>shoot("Goal!",event)}>Take the shot!</button>
    );
}

ReactDOM.render(<Football />, document.getElementById('root'));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

