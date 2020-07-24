import React from 'react';
import Todo from './Todo';

export default function TodoList({todos, toggleTodo}) {
    return (
        todos.map(todo => {
            // key is needed to allow React to notice that each element is different and only rerenders the specific todo
            return <Todo key = {todo.id} toggleTodo = {toggleTodo} todo = {todo} />
        })
    )
}