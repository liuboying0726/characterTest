/**
 * Created by dell on 2018/1/10.
 */
import React, { Component } from 'react';

class TodoFooter extends Component {
    constructor (props) {
        super(props);
        this.handleDeleteAllCompleted = this.handleDeleteAllCompleted.bind(this);
    }
    handleDeleteAllCompleted(){
        this.props.deleteAllCompleted(this.props.item)
    }

    render() {
        return (
            <div className="footer-wrap" style={{display: this.props.display}}>
                <div className="pull-left">{this.props.nums} item left</div>
                <div className="pull-right"><a href="#" className="delete-btn" onClick={this.handleDeleteAllCompleted}>Clear completed</a></div>
                <div className="select">
                    <button>All</button>
                    <button>Active</button>
                    <button>Completed</button>
                </div>
            </div>
        )
    }
}

export default TodoFooter;