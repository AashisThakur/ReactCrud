import React from 'react';
import { connect } from 'react-redux';
import './Todo.css';
import { CreateTodo } from '../../redux/actions';

const Todo = ({todoList, onCreatepressed}) => {
    const [newText, setNewText] = React.useState("");
    return (
        <div className='new-todo'>
            <input type='text'
            className='new-todo-input'
            placeholder='Task Title'
            value={newText}
            onChange={e => setNewText(e.target.value)} 
            />
            <div className='button-container'>
                <button
                onClick={() => {
                    const isDuplicate = todoList.some(todo => todo.text === newText)
                    if(!isDuplicate){
                        onCreatepressed({"text":newText,"status":true});
                        setNewText('');
                    }
                }}
                className='add-button'
                >Create Button
                </button>
            </div>
        </div>
    );
};
const mapStateToProps = state => ({
    todoList: state.todosReducer
});

const mapDispatchToProps = dispath => ({
    onCreatepressed: text => dispath(CreateTodo(text)),
});

export default connect(mapStateToProps,mapDispatchToProps)(Todo);;