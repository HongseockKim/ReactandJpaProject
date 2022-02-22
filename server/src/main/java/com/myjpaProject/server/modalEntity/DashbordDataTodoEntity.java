package com.myjpaProject.server.modalEntity;



import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "dashbord_data_todo_entity")
public class DashbordDataTodoEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String todoCN;
    private String todoTitle;
    private String todoData;

    private LocalDateTime createTime;

    private Boolean todo;

    public DashbordDataTodoEntity() {

    }

    public DashbordDataTodoEntity(long id, String todoCN, String todoTitle, String todoData, LocalDateTime createTime, Boolean todo) {
        this.id = id;
        this.todoCN = todoCN;
        this.todoTitle = todoTitle;
        this.todoData = todoData;
        this.createTime = createTime;
        this.todo = todo;
    }

    public Boolean getTodo() {
        return todo;
    }

    public void setTodo(Boolean todo) {
        this.todo = todo;
    }

    public long getId() {
        return id;
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
        return todoTitle;
    }

    public void setTodoTitle(String todoTitle) {
        this.todoTitle = todoTitle;
    }

    public String getTodoData() {
        return todoData;
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
}
