package com.myjpaProject.server.service;

import com.myjpaProject.server.modal.DashbordData;
import com.myjpaProject.server.modal.DashbordDataTodo;
import com.myjpaProject.server.modal.TodoCheck;
import com.myjpaProject.server.modalEntity.DashbordDataTodoEntity;
import com.myjpaProject.server.modalEntity.TodoCheckEntity;
import com.myjpaProject.server.repository.DashbordeRepository.DashBoradRepository;
import com.myjpaProject.server.repository.TodoRepository.CheckTodoRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

@Service
@RequiredArgsConstructor
public class MyService {
    @Autowired
    private  final DashBoradRepository dashBoradRepository;
    @Autowired
    private  final CheckTodoRepository checkTodosRepository;


    @Transactional
    public DashbordDataTodoEntity getRequestData(DashbordData dashbordData) {
        DashbordDataTodo dashbordDataDTO = dashbordData.getDashbordDataTodo();
        System.out.println("dashbordDataDTO = " + dashbordDataDTO.getTodoData());
        LocalDateTime dateTime = LocalDateTime.now();
        dashbordDataDTO.setCreateTime(dateTime);
        dashbordDataDTO.setTodoCN("com.myjpaProject.server.modal.DashbordDataTodo");
        DashbordDataTodoEntity dashbordDataTodoEntity =  dashBoradRepository.save(dashbordDataDTO.todoEntity());

        // todo 체크 시 todo 등록 됨
        if(dashbordDataTodoEntity.getTodo().equals(true)) {
            TodoCheck todoCheck = new TodoCheck();

            todoCheck.setTodoId(dashbordDataTodoEntity.getId());
            todoCheck.setTodoCheck(dashbordDataTodoEntity.getTodoData());
            todoCheck.setCreatedTodo(dashbordDataTodoEntity.getCreateTime());
            todoCheck.setTodoCheckCN("com.myjpaProject.server.modal.TodoCheck");
            checkTodosRepository.save(todoCheck.todoCheckEntity());
        }

        return dashbordDataTodoEntity;
    }

    @Transactional
    public DashbordDataTodo getDetail(long id){
        DashbordDataTodoEntity todo = dashBoradRepository.findGetById(id);
        DashbordDataTodo dashbordDataTodo = new DashbordDataTodo();

        BeanUtils.copyProperties(todo, dashbordDataTodo);

        return dashbordDataTodo;
    }


    @Transactional
    public HashMap responDataView(){
        List <DashbordDataTodoEntity>  data = dashBoradRepository.finAllDashBoardItem();
        List <TodoCheckEntity> todoCheckEntityList = checkTodosRepository.findByCheckTodoAll();
        List <DashbordDataTodo> dashbordDataTodoList = new ArrayList<>();
        List <TodoCheck> todoCheckList = new ArrayList<>();

        HashMap<String, List<?>> todoList = new HashMap<>();

        for(DashbordDataTodoEntity todo : data){
            DashbordDataTodo dashbordDataTodo = new DashbordDataTodo();
            BeanUtils.copyProperties(todo, dashbordDataTodo);
            dashbordDataTodoList.add(dashbordDataTodo);
            todoList.put("todoList",dashbordDataTodoList);
        }

        for(TodoCheckEntity todoCheckInfo : todoCheckEntityList){
            TodoCheck todoCheck = new TodoCheck();
            BeanUtils.copyProperties(todoCheckInfo, todoCheck);
            todoCheckList.add(todoCheck);
            todoList.put("todoCheckList",todoCheckList);
        }




        return todoList;
    }

    @Transactional
    public boolean deleteTodo(long id){
        DashbordDataTodoEntity dashbordDataTodoEntity =  dashBoradRepository.findGetById(id);
        System.out.println("id = " + id);
        System.out.println("dashbordDataTodoEntity.getTodoData() = " + dashbordDataTodoEntity.getTodoData());
        if(dashbordDataTodoEntity.getTodo().equals(true)) {
            System.out.println("들어옴");
            checkTodosRepository.deleteCheckTodo(id);
        }

        dashBoradRepository.deleteTodo(id);
        return true;
    }


}
