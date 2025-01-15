import { useDispatch, useSelector } from "react-redux";

import { decrement, increment } from "@/reducers/counterSlice";
import { addTodo, removeTodo } from "@/reducers/todoSlice";

import { Todo } from "@/Todo";

export default function MyPage() {

    const counter = useSelector(state => {
        console.log(state);
        return state?.counter;
    });
    const todoItems = useSelector(state => state.todo);

    console.log(todoItems);

    const dispatch = useDispatch();

    return (
        <>
            <div style={{ display: 'flex', 'flex-direction': 'row', 'textAlign': 'center' }}>
                <div style={{ display: 'flex', 'flex-direction': 'column', 'marginRight': '100px' }}>
                    <h1>Counter Reducer</h1><br/>
                    <button onClick={() => dispatch(increment())}>INCREMENT</button>
                    <span id="counterTxt">{counter.value}</span>
                    <button onClick={() => dispatch(decrement())}>DECREMENT</button>
                </div>
                <div style={{ display: 'flex', 'flex-direction': 'column' }}>
                <h1>Todo List Reducer</h1><br/>
                    <input placeholder="to do list item" id="txtTodoItem" />
                    <br/>
                    <button onClick={() => dispatch(addTodo(document.getElementById('txtTodoItem').value))}>Add</button>
                    {todoItems && todoItems.map((t: string) => <span>{t} <button onClick={() => dispatch(removeTodo(t))}>X</button></span>)}
                </div>
            </div>
        </>
    );
}