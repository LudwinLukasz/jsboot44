import React from 'react';
import style from './TodoList.css';
import Todo from './Todo';

const TodoList = props => (
	<ul className={style.TodoList}>
		{props.list.map(todo => {
			return <Todo key={todo.id} id={todo.id} text={todo.text} remove={props.remove}/>
		})}
	</ul>
);
export default TodoList;