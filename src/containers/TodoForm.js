import React from 'react';
//import style from './TodoForm.css';
const TodoForm = props => (
	<form className={'TodoForm'} onSubmit={e => props.add(props.inputVal)}>
				<input type={'text'} placeholder={'New List Element'}
				value={props.inputVal}
				onChange={e => props.changeInputValue(e.target.value)}/>
				<button type={'submit'}> Add </button>
			</form>
);
export default TodoForm;