import React, { Component } from "react";
//import logo from './logo.svg';
//import './App.css';

/* //Don't know if I still need this?
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "Taylor White", //use your name here
      todoItems: [
        {action: "Complete Lab 2", done: false},
        {action: "Publish to Github", done: false},
        {action: "Sumbit Assignment", done: false}
      ]
    };
    
  }

  /* // Code for name-change button
  changeStateData = () => {
    this.setState({
      userName:
      this.state.userName === "Taylor White" ? "Dalton" : 
      "Taylor White"
    });
  };
  */

  updateNewTextValue = event => {
    this.setState({ newItemText: event.target.value });
  };

  createNewTodo = () => {
    if (
      !this.state.todoItems.find(item => item.action === this.state.newItemText)
    ) {
      this.setState({
        todoItems: [
          ...this.state.todoItems,
          {
            action: this.state.newItemText,
            done: false
          }
        ],
      });
    }
  };

  toggleTodo = todo =>
    this.setState({
      todoItems: this.state.todoItems.map(item =>
          item.action === todo.action ? { ... item, done: !item.done } : item
        )
    });

    todoTableRows = () =>
      this.state.todoItems.map(item =>(
        <tr key={item.action}>
            <td>{item.action}</td>
            <td>
              <input
                type="checkbox"
                checked={item.done}
                onChange={ () => this.toggleTodo(item)}
              />
            </td>
        </tr>
      ));

  render = () => {
    return (
      <div>
        <h4 className="bg-primary text-white text-center p-2">
          {this.state.userName}'s To Do List
        </h4>
        <div className="containerfluid">
          <div classname="my-1">
            <input
              classname="form-control"
              value={this.state.newItemText}
              onChange={this.updateNewTextValue}
            />
        <button className="btn btn-primary m-2" onClick={this.createNewTodo}>
          Add
        </button>
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Description</th>
              <th>Done</th>
            </tr>
          </thead>
          <tbody>{this.todoTableRows()}</tbody>
        </table>
      </div>
     </div>
    </div>
    );
  }
}
