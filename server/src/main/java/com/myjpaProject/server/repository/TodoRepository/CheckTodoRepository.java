package com.myjpaProject.server.repository.TodoRepository;

import com.myjpaProject.server.modalEntity.TodoCheckEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CheckTodoRepository extends JpaRepository<TodoCheckEntity,Long>,CheckTodoCustom{
}
