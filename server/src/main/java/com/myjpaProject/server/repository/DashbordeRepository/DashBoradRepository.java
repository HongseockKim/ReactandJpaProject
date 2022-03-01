package com.myjpaProject.server.repository.DashbordeRepository;

import com.myjpaProject.server.modalEntity.TodoEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DashBoradRepository extends JpaRepository<TodoEntity,Long>, DashBoradRepositroyCustom {
}
