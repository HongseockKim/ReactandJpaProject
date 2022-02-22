package com.myjpaProject.server.modal;

import com.myjpaProject.server.modalEntity.TodoCheckEntity;

import java.time.LocalDateTime;

public class TodoCheck {

    private long id;

    private String todoCheckCN;

    private String todoCheck;

    private  long todoId;

    private LocalDateTime createdTodo;


    public TodoCheckEntity todoCheckEntity(){
        return new TodoCheckEntity(0L,todoCheckCN,todoCheck,todoId,createdTodo);
    }


    public LocalDateTime getCreatedTodo() {
        return createdTodo;
    }

    public void setCreatedTodo(LocalDateTime createdTodo) {
        this.createdTodo = createdTodo;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getTodoCheckCN() {
        return todoCheckCN;
    }

    public void setTodoCheckCN(String todoCheckCN) {
        this.todoCheckCN = todoCheckCN;
    }

    public String getTodoCheck() {
        return todoCheck;
    }

    public void setTodoCheck(String todoCheck) {
        this.todoCheck = todoCheck;
    }

    public long getTodoId() {
        return todoId;
    }

    public void setTodoId(long todoId) {
        this.todoId = todoId;
    }
}
