import React, { Component } from "react";
import Todos from "./Components/Todos";
import { Button, Snackbar, IconButton, Typography } from "@material-ui/core";
import { CloseIcon } from "@material-ui/icons/Close";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [{ id: "0", task: "do leetcode" }, { id: "1", task: "study 3sh3" }],
      snackbar: false,
      undoTask: {},
      undoTaskIndex: null
    };
  }
  removeTask = id => {
    let newtodos = [],
      undoTask = {},
      undoTaskIndex = null;
    this.state.todos.forEach((todo, i) => {
      if (todo.id === id) {
        undoTask = todo;
        undoTaskIndex = i;
      } else {
        newtodos.push(todo);
      }
    });

    this.setState({
      todos: newtodos,
      snackbar: true,
      undoTask: undoTask,
      undoTaskIndex: undoTaskIndex
    });
  };
  closeSnackbar = () => {
    let newtodos = [...this.state.todos];

    newtodos.splice(this.state.undoTaskIndex, 0, this.state.undoTask);
    this.setState({
      snackbar: false,
      todos: newtodos
    });
    console.log(newtodos);
  };
  render() {
    return (
      <div className="App">
        <Typography component="h2" variant="h1" gutterBottom>
          To Do List
        </Typography>
        <Todos todos={this.state.todos} removeTask={this.removeTask} />
        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left"
          }}
          open={this.state.snackbar}
          autoHideDuration={6000}
          onClose={() => this.setState({ snackbar: false })}
          ContentProps={{
            "aria-describedby": "message-id"
          }}
          message={<span id="message-id">Task Completed</span>}
          action={[
            <Button key="undo" color="secondary" size="small" onClick={this.closeSnackbar}>
              UNDO
            </Button>
          ]}
        />
      </div>
    );
  }
}

export default App;
