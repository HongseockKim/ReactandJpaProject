package com.myjpaProject.server.controller;

import com.myjpaProject.server.service.MyService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class Controller{
    @Autowired private final MyService service;

 @GetMapping("/main")
    public String getTodo() {
     System.out.println("메인");
     return "메인";
 }

}
