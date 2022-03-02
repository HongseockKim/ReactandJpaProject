package com.myjpaProject.server.modalEntity;



import javax.persistence.*;

@Entity
@Table(name = "dashbord_data_todo_entity")
public class TodoEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String todo;
    private Boolean todoCheck;
    private String todoCn;


    public TodoEntity() {
    }

    public TodoEntity(long id, String todo, Boolean todoCheck, String todoCn) {
        this.id = id;
        this.todo = todo;
        this.todoCheck = todoCheck;
        this.todoCn = todoCn;
    }

    public Boolean getTodoCheck() {
        return todoCheck;
    }

    public void setTodoCheck(Boolean todoCheck) {
        this.todoCheck = todoCheck;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getTodo() {
        return todo;
    }

    public void setTodo(String todo) {
        this.todo = todo;
    }

    public String getTodoCn() {
        return todoCn;
    }

    public void setTodoCn(String todoCn) {
        this.todoCn = todoCn;
    }
}
