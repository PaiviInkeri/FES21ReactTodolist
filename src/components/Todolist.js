import React from 'react';

//props(=todos array) is sent to this function as an argument from app.js
export default function Todolist(props) {
    return(
        <div>
            <table>
                <tbody>
                <tr><th>Date</th><th>Description</th></tr>
                { 
                props.todos.map((todo, index) => 
                    <tr key={index}>
                    <td>{todo.date}</td>
                    <td>{todo.desc}</td>
                    <button id={index} onClick = {props.delete}>Delete</button>
                    </tr>
                )
                }
                </tbody>
        </table>
        </div>
    );

}