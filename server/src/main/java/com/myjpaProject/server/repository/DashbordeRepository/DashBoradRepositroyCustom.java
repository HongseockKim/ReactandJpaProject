package com.myjpaProject.server.repository.DashbordeRepository;


import com.myjpaProject.server.modalEntity.DashbordDataTodoEntity;

import java.util.List;

public interface DashBoradRepositroyCustom{
    List<DashbordDataTodoEntity> finAllDashBoardItem();
    DashbordDataTodoEntity findGetById(long id);
    long deleteTodo(long id);
}
