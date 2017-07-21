import React from 'react';
import style from './TodoForm.css';

const TodoForm = props => (
	<div className={style.TodoForm}>
		<input type='text' placeholder='New List Element'
			value={props.inputVal}
			onChange={e => props.changeInputValue(e.target.value)}/>
		<button type='submit' onClick={() => props.add(props.inputVal)}> Add </button>
	</div>
);

export default TodoForm;