import React from 'react';
import style from './Title.css';
const Title = props => (
	<div className={style.TodoTitle}>
		<h1>List of Todos</h1>
		<h2>Number of Todos: {props.title}</h2>
	</div>
);
export default Title;