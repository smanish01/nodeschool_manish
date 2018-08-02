    import React from 'react';
    
    export default class TodoBox extends React.Component {
        render() {
            return (
                <div className="todoBox">
                    <h1>Todos</h1>
                    <TodoList />
                    <TodoForm />
                </div>
            );
        }
    }
    
    class TodoList extends React.Component {
        render() {
            return (
                <div className="todoList">
                    <table styles={{border: "2px solid black"}}>
                        <tbody>
                        <Todo title="Shopping">Milk</Todo>
                        <Todo title="Hair cut">13:00</Todo>
                        </tbody>
                    </table>
                </div>
            );
        }
    }
    
    class Todo extends React.Component {
        render() {
            return(         
            <div class="todo">
            <table styles="border:2px solid black;">
              <tbody>
                <tr>
                  <td styles="border:1px solid black;">{this.props.title}</td>
                  <td styles="border:1px solid black;">{this.props.children}</td>
                </tr>
                <tr>
                  <td styles="border:1px solid black;">{this.props.title}</td>
                  <td styles="border:1px solid black;">{this.props.children}</td>
                </tr>
              </tbody>
            </table>
          </div>);
      
    }
    }

    class TodoForm extends React.Component {
        render() {
            return (
              <div className="todoForm">
              I am a TodoForm.
            </div>
            );
        }
    }