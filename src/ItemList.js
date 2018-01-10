/**
 * Created by dell on 2018/1/10.
 */
import React, { Component } from 'react';

class ItemList extends Component {
    constructor (props) {
        super(props);
        this.handleFinished = this.handleFinished.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }
    // 切换任务
    handleFinished(){
        var status = this.props.item.status;
        status = (status === 0 ? 1 : 0);
        var obj = {
            id: this.props.item.id,
            name: this.props.item.name,
            status: status
        }
        this.props.finishChange(obj);
    }
    handleDelete(){
        this.props.toggleChange(this.props.item)
    }
    render() {
        var item = this.props.item;
        var itemChecked;
        if(item.status === 1){
            itemChecked = true;
        }else{
            itemChecked = false;
        }
        return (

            <li>
                <input type="checkbox" checked={itemChecked} onChange={this.handleFinished}/>
                <label htmlFor="">{item.name}</label>
                <a href="#" className="pull-right delete-btn" onClick={this.handleDelete}>&times;</a>
            </li>


        )
    }
}
export default ItemList;