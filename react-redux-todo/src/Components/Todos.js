import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import InboxIcon from "@material-ui/icons/Inbox";

const Todos = ({ todos, removeTask }) => {
  return (
    <div>
      <List component="nav" />
      {todos.map((todo, i) => {
        return (
          <ListItem key={todo.id} onClick={() => removeTask(todo.id)} button>
            <ListItemIcon>{i + 1}</ListItemIcon>
            <ListItemText primary={todo.task} />
          </ListItem>
        );
      })}
    </div>
  );
};

export default Todos;
