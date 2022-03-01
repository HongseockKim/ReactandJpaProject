package com.myjpaProject.server.service;

import com.myjpaProject.server.repository.DashbordeRepository.DashBoradRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class MyService {
    @Autowired
    private  final DashBoradRepository dashBoradRepository;

    }

