/**
 * Created by dell on 2018/1/10.
 */
import React, { Component } from 'react';

class AddItem extends Component {
    constructor(props){
        super(props);
        this.saveNewItem = this.saveNewItem.bind(this);
    }

    saveNewItem(e){
        if(e.keyCode !== 13){
            return;
        }
        e.preventDefault();
        var len = this.props.nums;

        var newid = len > 0 ? (len + 1) : 1;
        var value = this.refs.myText.value.trim();
        if(value !== '') {
            var obj = {
                id: newid,
                name: value,
                status: 0
            };
            this.refs.myText.value = '';
            this.props.addNewTask(obj);
            console.log(obj);
        }

    }
    render() {
        return (
            <div className="input-wrap">
                <input type="text" ref="myText" onKeyUp={this.saveNewItem} className="App-input" placeholder="What needs to be done?"/>
            </div>
        )
    }
}

export default AddItem;