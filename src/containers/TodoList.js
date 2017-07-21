import React from 'react';
import style from './TodoList.css';
import Todo from './Todo';

const TodoList = props => (
	<ul className={style.TodoList}>
		{props.list.map((todo,idx) => {
			return <Todo key={todo.id} id={todo.id} idx={idx+1} text={todo.text} remove={props.remove}/>
		})}
	</ul>
);
		
export default TodoList;