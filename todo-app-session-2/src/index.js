import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            todos: [],
        };
    }

    addTodo() {
        this.setState({
            todos: [
                ...this.state.todos,
                {
                    id: Date.now(),
                    name: 'Todo #' + ( this.state.todos.length + 1 ),
                }
            ],
        });
    }

    removeTodo(id) {
        this.setState({
            todos: this.state.todos.filter(todo => todo.id !== id),
        });
    }

    render() {
        const { todos } = this.state;
        return (
            <div>
              <button
                  onClick={ this.addTodo.bind(this) }>
                  Hi!
              </button>
              <ul>
                {
                    todos.map(todo => (
                        <li key={ todo.id }>
                            { todo.name }
                            <button onClick={
                                () => this.removeTodo(todo.id)
                            }>X</button>
                        </li>
                    ))
                }
              </ul>
            </div>
        );
    }
}

const root = document.getElementById('root');

ReactDOM.render(<App />, root);
