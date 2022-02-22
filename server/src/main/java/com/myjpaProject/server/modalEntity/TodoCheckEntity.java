package com.myjpaProject.server.modalEntity;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "todo_check_entity")
public class TodoCheckEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String todoCheckCN;
    private String todoCheck;
    private  long todoId;
    private LocalDateTime createdTodo;


    public TodoCheckEntity(long id, String todoCheckCN, String todoCheck, long todoId, LocalDateTime createdTodo) {
        this.id = id;
        this.todoCheckCN = todoCheckCN;
        this.todoCheck = todoCheck;
        this.todoId = todoId;
        this.createdTodo = createdTodo;
    }

    public TodoCheckEntity() {

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
