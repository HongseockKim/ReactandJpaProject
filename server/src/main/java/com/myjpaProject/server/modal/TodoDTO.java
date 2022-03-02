package com.myjpaProject.server.modal;

import lombok.Data;

@Data
public class TodoDTO {
    private Long id;
    private String todo;
    private Boolean todoCheck;
    private String todoCn;
}
