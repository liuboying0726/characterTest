import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AddItem from './AddItem';
import ItemList from './ItemList';
import TodoFooter from './TodoFooter';

import registerServiceWorker from './registerServiceWorker';

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

    // 删除
    deleteAllItems () {
        var obj = [], sum = 0;
        this.state.list.forEach((item) => {
            if(item.status === 0){
                obj.push(item);
            }

        });
        this.setState({
            list: obj,
            finished: sum
        });
    }

    render() {
        var style = this.state.list.length !== 0 ? 'block' : 'none';
        return (
            <div className="App">
                <header className="App-header">
                    <h1>todos</h1>
                </header>
                <AddItem addNewTask={this.addTask.bind(this)} nums={this.state.list.length}/>
                <ul className="items-wrap">
                    {this.state.list.map((item, index) => (
                        <ItemList
                            item={item}
                            finishChange={this.updateFinished.bind(this)}
                            toggleChange={this.updateTotal.bind(this)}
                            key={index}
                            />
                        ))
                    }
                </ul>
                <TodoFooter display={style}
                            nums={this.state.list.length - this.state.finished}
                            deleteAllCompleted={this.deleteAllItems.bind(this)}
                    />

            </div>
        )
    }
}

ReactDOM.render(<Todolist />, document.getElementById('root'));
registerServiceWorker();
