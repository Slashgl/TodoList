import React, {Component} from 'react';

import './add-item-todo-list.css';

export default class AddItemBTN extends Component{
    state = {
        label: ''
    }

    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        });
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addItem(this.state.label);
        this.setState({
            label:''
        })
    }

   render() {
       return (
           <form className='add-item-todo-list d-flex'
                 onSubmit={this.onSubmit}>
               <input type='text'
                      className='form-control'
                      onChange={this.onLabelChange}
                      placeholder='What needs to be done'
                      value={this.state.label}/>

               <button className='btn btn-outline-secondary'>
                   Add Item
               </button>
           </form>
       )
   }
}

