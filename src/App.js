import React from 'react';
import './App.css';
import Todolist from './Components/Todolist/Todolist';

const USER_API = 'https://jsonplaceholder.typicode.com/users';
const TODOS_API = 'https://jsonplaceholder.typicode.com/todos';
class App extends React.Component {
  state = {
    todos: [],
    isLoading: false,
    hasError: false,
    isLoaded: false,
  };

  getTodosWithUsers = () => {
    this.setState({
      isLoading: true,
    });

    Promise.all([fetch(USER_API), fetch(TODOS_API)])
      .then(responses => Promise.all(responses.map(respons => respons.json())))
      .then(([usersDate, todosDate]) => this.setState({
        todos: todosDate.map(item => (
          {
            ...item,
            user: usersDate.find(user => user.id === item.userId),
          }
        )),
        isLoading: false,
        hasError: false,
        isLoaded: true,
      }))
      .catch(() => this.setState({
        hasError: true,
        isLoading: false,
      }));
  }

  sortByTitle = todos => (
    this.setState(prevState => ({
      todos: prevState.todos.sort((a, b) => (a.title > b.title ? 1 : -1)),
    }))
  );

  sortByUser = todos => (
    this.setState(prevState => ({
      todos: prevState.todos.sort((a, b) => (a.user.name > b.user.name
        ? 1
        : -1)),
    }))
  );

  sortByCompleted = todos => (
    this.setState(prevState => ({
      todos: prevState.todos.sort((a, b) => (a.completed > b.completed
        ? -1
        : 1)),
    }))
  );

  render() {
    const {
      todos,
      isLoading,
      hasError,
      isLoaded,
    } = this.state;

    if (hasError) {
      return (
        <>
          <p>Conection problem</p>
          <button
            type="button"
            className="button-load"
            onClick={this.getTodosWithUsers}
            disabled={isLoading}
          >
            {isLoading
              ? 'Loading...'
              : 'Load'}
          </button>
        </>
      );
    }

    return (
      <div className="App">
        <h1>Dynamic list of todos</h1>
        <Todolist
          todoList={todos}
          isLoaded={isLoaded}
          sortByTitle={this.sortByTitle}
          sortByUser={this.sortByUser}
          sortByCompleted={this.sortByCompleted}
        />
        {!isLoaded && (
          <button
            type="button"
            className="button-load"
            onClick={this.getTodosWithUsers}
            disabled={isLoading}
          >
            {isLoading
              ? 'Loading...'
              : 'Load'}
          </button>
        )}
      </div>
    );
  }
}

export default App;
