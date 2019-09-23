import React from 'react';
import './App.css';
import Todolist from './Components/Todolist/Todolist';

const USER_API = 'https://jsonplaceholder.typicode.com/users';
const TODOS_API = 'https://jsonplaceholder.typicode.com/todos';
class App extends React.Component {
  state = {
    todoList: [],
    usersList: [],
    isLoading: false,
    hasError: false,
  };

  getTodosWithUsers = () => {
    this.setState({
      isLoading: true,
    });

    fetch(USER_API)
      .then(response => response.json())
      .then(date => this.setState({
        usersList: date,
      }))
      .catch(() => this.setState({
        hasError: true,
        isLoading: false,
      }));

    fetch(TODOS_API)
      .then(response => response.json())
      .then(date => this.setState(prevState => ({
        todoList: date.map(item => (
          {
            ...item,
            user: prevState.usersList.find(user => user.id === item.userId),
          }
        )),
        isLoading: false,
        hasError: false,
      })));
  }

  render() {
    const { todoList, isLoading, hasError } = this.state;
    console.log(todoList);

    if (isLoading) {
      return (
        <p>Loading...</p>
      );
    }

    if (hasError) {
      return (
        <>
          <p>Conection problem</p>
          <button
            type="button"
            className="button-load"
            onClick={this.getTodosWithUsers}
          >
          Load
          </button>
        </>
      );
    }

    return (
      <div className="App">
        <h1>Dynamic list of todos</h1>
        <Todolist todoList={todoList} />
        <button
          type="button"
          className="button-load"
          onClick={this.getTodosWithUsers}
        >
        Load
        </button>
      </div>
    );
  }
}

export default App;
