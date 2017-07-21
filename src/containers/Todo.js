import React from 'react';
import style from './Todo.css';

const Todo = props => (
	<li className={style.Todo} onClick={() => props.remove(props.id)}>{props.idx} {props.text}</li>
);

export default Todo;