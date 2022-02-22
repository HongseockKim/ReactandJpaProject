package com.myjpaProject.server.controller;

import com.myjpaProject.server.modal.DashbordData;
import com.myjpaProject.server.modal.DashbordDataTodo;
import com.myjpaProject.server.service.MyService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;


@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class Controller{
    @Autowired private final MyService service;

    @PostMapping(value = "/reg/todolist" ,produces = "application/json")
    public Boolean getDashbordData(@RequestBody DashbordData request){
        try{
            service.getRequestData(request);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return  true;
    }

    @PostMapping(value = "/tododetail/{id}")
    public DashbordDataTodo viewTodoDetail(@PathVariable long id){
        return service.getDetail(id);
    }

    @GetMapping(value = "/todolist" ,produces = "application/json")
    public HashMap viewTodoList(){
        return  service.responDataView();
    }

    @PostMapping(value = "/delete/{id}")
    public Boolean todoDelete(@PathVariable long id){
        System.out.println("id = " + id);
        return service.deleteTodo(id);
    }

}
