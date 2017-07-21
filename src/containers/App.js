import React from 'react';
import uuid from 'uuid';
import style from './App.css';
import Title from './Title';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

var newtodo = "";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [{
				id: 1,
				text: 'clean room'
				},
				{
				id: 2,
				text: 'wash the dishes'
				},
				{
				id: 3,
				text: 'feed my cat'
				}
			],
			inputValue: ''
		};
	}

	addTodo(val) {
		if(val.length) {
			const todo = {
				text: val,
				id: uuid.v4(),
			};
			const data = [...this.state.data, todo];
			this.setState({data: data, inputValue: ''});
		}
	}

	removeTodo(id) {
		const remainder = this.state.data.filter(todo => todo.id !== id);
		this.setState({data: remainder});
	}

	changeInputValue(newVal) {
		this.setState({inputValue: newVal});
	}

	render() {	
		return (
			<div className={style.TodoApp}>
				<Title title={this.state.data.length}/>
				<TodoList list={this.state.data} remove={(id) => this.removeTodo(id)}/>
				<TodoForm 
					inputVal={this.state.inputValue}
					add={(val) => this.addTodo(val)}
					changeInputValue={(val) => this.changeInputValue(val)}
				/>
			</div>
		);
	}
}

export default App;