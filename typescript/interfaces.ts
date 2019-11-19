/* function showToDo(todo: { title: string; text: string }) {
  console.log(todo.title + " " + todo.text);
}
*/

//can create interface instead of manual typing
interface Todo {
  title: string;
  text: string;
}
function showToDo(todo: Todo) {
  console.log(todo.title + " " + todo.text);
}

showToDo({
  title: "learn typescript",
  text: "Learn ts and add it to your resume"
});
