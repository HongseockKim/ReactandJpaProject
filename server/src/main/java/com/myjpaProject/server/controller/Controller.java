package com.myjpaProject.server.controller;

import com.myjpaProject.server.modal.DashBoradData;
import com.myjpaProject.server.modal.TodoDTO;
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

    @GetMapping("/main")
    public HashMap getTodo() {
        System.out.println("메인");

        HashMap result = new HashMap();
        result.put("result", true);
        return result;
    }

    @PostMapping("/todo")
    public Boolean getRegistrationTodo(@RequestBody DashBoradData dashBoradData){

        System.out.println("dashBoradData = " + dashBoradData.getTododto());
        System.out.println("dashBoradData.getTododto().getTodo() = " + dashBoradData.getTododto().getTodo());

        return  true;
    }

}
