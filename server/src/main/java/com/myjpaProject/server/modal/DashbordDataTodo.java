package com.myjpaProject.server.modal;


import com.myjpaProject.server.modalEntity.DashbordDataTodoEntity;

import java.time.LocalDateTime;

public class DashbordDataTodo {
    private long id;
    private String todoCN;
    private String todoTitle;
    private String todoData;
    private LocalDateTime createTime;

    private Boolean todo;


    public DashbordDataTodoEntity todoEntity(){
        return new DashbordDataTodoEntity(0L,todoCN, todoTitle, todoData, createTime,todo);
    }


    public Boolean getTodo() {
        return todo;
    }

    public void setTodo(Boolean todo) {
        this.todo = todo;
    }

    public long getId() {
        return this.id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getTodoCN() {
        return todoCN;
    }

    public void setTodoCN(String todoCN) {
        this.todoCN = todoCN;
    }

    public String getTodoTitle() {
        return this.todoTitle;
    }

    public void setTodoTitle(String todoTitle) {
        this.todoTitle = todoTitle;
    }

    public String getTodoData() {
        return this.todoData;
    }

    public void setTodoData(String todoData) {
        this.todoData = todoData;
    }

    public LocalDateTime getCreateTime() {
        return createTime;
    }

    public void setCreateTime(LocalDateTime createTime) {
        this.createTime = createTime;
    }

    @Override
    public String toString() {
        return "DashbordDataTodo{" +
                "id=" + id +
                ", todoTitle='" + todoTitle + '\'' +
                ", todoData='" + todoData + '\'' +
                '}';
    }
}
