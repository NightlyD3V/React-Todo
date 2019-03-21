import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
// Import CSS
import './components/TodoComponents/Todo.css';

const TheData = [
  
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
      super();
      this.state = {
      theList: TheData,
      task: '',
      }
  }

  handleChanges = event => {
      // console.log('event: ', event.target.value)
      this.setState({
          [event.target.name] : event.target.value
      });
  }

  updateList = event => {
      event.preventDefault();
      if (this.state.task === '') {
        return '';
      }
      const newItem = {
        task: this.state.task, 
        id: Date.now(),
        completed: false,
      }
      this.setState({
        theList: [...this.state.theList, newItem],
        task: '',
      })
  }

  toggleItem = (id) => {
    //console.log(id);
   const newToggleObj =  this.state.theList.map(function (item) {
      if(item.id === id) {
        item.completed = !item.completed
        return item;
      } else {
        return item;
      }
    });
    this.setState({theList : newToggleObj});
  }

  removeFromList = event => {
    event.preventDefault();
    const newRemoveObj = this.state.theList.filter(item => item.completed === false);
    this.setState({theList : newRemoveObj});
  }

  render() {
      return (
          <div className="app-wrapper">
            <div className="logo-container">
            <h2 className="app-header_text">Todo App</h2>
            <img className="logo" src="img/checklist.svg" alt="List Logo"/>
            </div>
              <TodoForm className="app-todoform"
                  task={this.state.task}
                  handleChanges={this.handleChanges}
                  updateList={this.updateList}
                  removeFromList={this.removeFromList}
              />
              <TodoList task={this.state.theList} toggleItem={this.toggleItem}/>
          </div>
      )
  }
}
 
export default App;
