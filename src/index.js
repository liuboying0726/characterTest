import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import registerServiceWorker from './registerServiceWorker';

class Todoadd extends React.Component{
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
        var newid = len > 0 ? len : 0;
        var value = this.refs.myText.value.trim();
        if(value !== '') {
            var obj = {
                id: newid,
                name: value,
                status: 0
            };
            this.refs.myText.value = '';
            this.props.addNewTask(obj);
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
class Todoitem extends React.Component{
    constructor (props) {
        super(props);
        this.handleFinished = this.handleFinished.bind(this);
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
                    <label for="">{item.name}</label>
                </li>


        )
    }
}
class Todofooter extends React.Component{
    constructor (props) {
        super(props);

    }

    render() {
        return (
            <div className="footer-wrap">
                <div className="pull-left">{this.props.nums} item left</div>
                <div className="pull-right"><a href="#">Clear completed</a></div>
                <div className="select">
                    <button>All</button>
                    <button>Active</button>
                    <button>Completed</button>
                </div>
            </div>
        )
    }
}
class Todolist extends React.Component{
    constructor (props){
        super(props);

        // 初始化
        this.state = {
            list: [],
            finished: 0
        }
    }

    // 添加新任务
    addTask (newitem) {
        var allTask = this.state.list;
        allTask.push(newitem);
        this.setState({
            list: allTask
        });
    }

    // 更新完成的任务
    updateFinished (todoItem) {
        var sum = 0;
        this.state.list.forEach((item) => {
            if(item.id === todoItem.id){
                item.status = todoItem.status;
            }
            if(item.status === 1){
                sum++;
            }
        });
        this.setState({
            finished: sum
        })
    }
    // 更新任务总数
    updateTotal (todoItem) {
        var obj = [], sum = 0;
        this.state.list.forEach((item) => {
            if(item.id !== todoItem.id){
                obj.push(item);
                if(item.status === 1){
                    sum++;
                }
            }
        });
        this.setState({
            list: obj,
            finished: sum
        });
    }
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1>todos</h1>
                </header>
                <Todoadd addNewTask={this.addTask.bind(this)} nums={this.state.list.length}/>
                <ul className="items-wrap">
                    {this.state.list.map((item, index) => (
                        <Todoitem
                            item={item}
                            finishChange={this.updateFinished.bind(this)}
                            toggleChange={this.updateTotal.bind(this)}
                            key={index}
                            />
                        ))
                    }
                </ul>
                <Todofooter nums={this.state.list.length - this.state.finished}/>
            </div>
        )
    }
}

ReactDOM.render(<Todolist />, document.getElementById('root'));
registerServiceWorker();
