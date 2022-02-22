package com.myjpaProject.server.repository.TodoRepository;

import com.myjpaProject.server.modalEntity.TodoCheckEntity;

import java.util.List;

public interface CheckTodoCustom {
    List<TodoCheckEntity> findByCheckTodoAll();
    Long deleteCheckTodo(Long id);
}
