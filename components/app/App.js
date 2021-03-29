import React, { Component } from 'react';

import HeaderApp from "../header-app/header-app";
import SearchPanel from "../search-panel/search-panel";
import TodoList from "../todo-list/todo-list";
import AddItemBTN from "../add-item-todo-list/add-item-todo-list";

import './app.css';

export default class App extends Component {

    maxID = 100;

    state ={
        todoData: [
            this.createTodoItem('Drink Coffee'),
            this.createTodoItem('Make Awesome app'),
            this.createTodoItem('Have a lunch')
        ]
    }

    createTodoItem (label) {
        return {
            label,
            important: false,
            id: this.maxID++,
            done:false
        }
    }

    deleteItem = (id) => {
        this.setState(( { todoData } ) => {
            const idx = todoData.findIndex((el) => el.id === id);

            const newArray = [
                ...todoData.slice(0, idx),
                ...todoData.slice(idx + 1)
            ];

            return {
                todoData: newArray
            }
        });
    };

    addItem = (label) => {
        const newItem = this.createTodoItem(label)
        // add element in array
        this.setState(({ todoData }) => {
            const newArr = [
                ...todoData,
                newItem
            ];
            return {
                todoData: newArr
            }
        });

    };

    toggleProperty(arr, id, propName) {

            const idx = arr.findIndex((el) => el.id === id);
            //1.Update object
            const oldItem = arr[idx];
            const newItem = {...oldItem, [propName]: !oldItem[propName]};

            //2.construct new array

            return [
                ...arr.slice(0, idx),
                newItem,
                ...arr.slice(idx + 1)
            ]
    }

    onToggleImportant = (id) => {
        this.setState(({ todoData }) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'done')
            };
        });
    };

    onToggleDone = (id) => {
        this.setState(({ todoData }) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'important')
            };
        });
    };

render() {

    const doneCounter = this.state.todoData
                        .filter(el => el.done).length;
    const todoCounter = this.state.todoData.length - doneCounter;


    return (

    <div className="ToDo">
        <HeaderApp toDo={todoCounter} done={doneCounter}/>
        <SearchPanel />
        <TodoList
            todos={this.state.todoData}
            onDeleted={this.deleteItem}
            onToggleImportant={this.onToggleImportant}
            onToggleDone={this.onToggleDone}
        />
        <AddItemBTN
            addItem={this.addItem}
        />

    </div>
);
}
}

