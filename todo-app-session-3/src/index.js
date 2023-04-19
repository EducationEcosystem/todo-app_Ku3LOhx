import React from 'react';
import ReactDOM from 'react-dom';

const Input = ({
    value,
    onChange,
}) => {
    return (
        <input value={ value } onChange={ e => onChange(e.target.value) } />
    );
};

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            inputValue: '',
            todos: [],
        };
    }

    componentWillMount() {
        const todos = window.localStorage.getItem('todos');

        this.setState({
            todos: todos !== null ? JSON.parse(todos) : [],
        });
    }

    componentDidUpdate() {
        const stringifiedTodos = JSON.stringify(this.state.todos);

        window.localStorage.setItem('todos', stringifiedTodos);
    }

    addTodo() {
        const { inputValue } = this.state;

        if (inputValue === '') {
            return;
        }

        this.setState({
            todos: [
                ...this.state.todos,
                {
                    id: Date.now(),
                    name: inputValue,
                }
            ],
            inputValue: '',
        });
    }

    removeTodo(id) {
        this.setState({
            todos: this.state.todos.filter(todo => todo.id !== id),
        });
    }

    onInputChange(text) {
        this.setState({
            inputValue: text,
        });
    }

    render() {
        const { todos, inputValue } = this.state;
        return (
            <div>
              <Input
                  onChange={ this.onInputChange.bind(this) }
                  value={ inputValue }
                  />
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
