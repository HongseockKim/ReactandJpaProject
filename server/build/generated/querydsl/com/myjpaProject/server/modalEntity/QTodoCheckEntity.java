package com.myjpaProject.server.modalEntity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;


/**
 * QTodoCheckEntity is a Querydsl query type for TodoCheckEntity
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QTodoCheckEntity extends EntityPathBase<TodoCheckEntity> {

    private static final long serialVersionUID = 412831283L;

    public static final QTodoCheckEntity todoCheckEntity = new QTodoCheckEntity("todoCheckEntity");

    public final DateTimePath<java.time.LocalDateTime> createdTodo = createDateTime("createdTodo", java.time.LocalDateTime.class);

    public final NumberPath<Long> id = createNumber("id", Long.class);

    public final StringPath todoCheck = createString("todoCheck");

    public final StringPath todoCheckCN = createString("todoCheckCN");

    public final NumberPath<Long> todoId = createNumber("todoId", Long.class);

    public QTodoCheckEntity(String variable) {
        super(TodoCheckEntity.class, forVariable(variable));
    }

    public QTodoCheckEntity(Path<? extends TodoCheckEntity> path) {
        super(path.getType(), path.getMetadata());
    }

    public QTodoCheckEntity(PathMetadata metadata) {
        super(TodoCheckEntity.class, metadata);
    }

}

