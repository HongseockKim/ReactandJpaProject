package com.myjpaProject.server.repository.DashbordeRepository;

import com.myjpaProject.server.modalEntity.DashbordDataTodoEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DashBoradRepository extends JpaRepository<DashbordDataTodoEntity,Long>, DashBoradRepositroyCustom {
}
