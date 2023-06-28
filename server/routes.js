

module.exports = function(app) {
    var todoList = require('./controller');

    app
    .route("/todos")
    .get(todoList.listAllTodos)
    .post(todoList.createNewTodo);

    app
    .route("/todos/:id")
    .put(todoList.updateTodo)
    .delete(todoList.deleteTodo);
}