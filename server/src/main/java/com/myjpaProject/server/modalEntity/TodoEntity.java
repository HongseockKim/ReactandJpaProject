package com.myjpaProject.server.modalEntity;



import javax.persistence.*;

@Entity
@Table(name = "dashbord_data_todo_entity")
public class TodoEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String todo;
    private String todoCn;


    public TodoEntity() {
    }

    public TodoEntity(long id, String todo, String todoCn) {
        this.id = id;
        this.todo = todo;
        this.todoCn = todoCn;
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
