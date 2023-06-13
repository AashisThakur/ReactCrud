import { hot } from 'react-hot-loader';
import React from 'react';
import "./App.css";
import Todo from './components/Todo/Todo';
import TodoList from './components/TodoList/TodoList';

const App = () => (
    <div className="App"> 
        <h1>Hurray Your App is working!!</h1>
        <Todo />
        <TodoList />
    </div>
);

export default hot(module)(App);
