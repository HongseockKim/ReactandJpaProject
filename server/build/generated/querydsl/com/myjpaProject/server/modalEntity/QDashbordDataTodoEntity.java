package com.myjpaProject.server.modalEntity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;


/**
 * QDashbordDataTodoEntity is a Querydsl query type for DashbordDataTodoEntity
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QDashbordDataTodoEntity extends EntityPathBase<DashbordDataTodoEntity> {

    private static final long serialVersionUID = -789132234L;

    public static final QDashbordDataTodoEntity dashbordDataTodoEntity = new QDashbordDataTodoEntity("dashbordDataTodoEntity");

    public final DateTimePath<java.time.LocalDateTime> createTime = createDateTime("createTime", java.time.LocalDateTime.class);

    public final NumberPath<Long> id = createNumber("id", Long.class);

    public final BooleanPath todo = createBoolean("todo");

    public final StringPath todoCN = createString("todoCN");

    public final StringPath todoData = createString("todoData");

    public final StringPath todoTitle = createString("todoTitle");

    public QDashbordDataTodoEntity(String variable) {
        super(DashbordDataTodoEntity.class, forVariable(variable));
    }

    public QDashbordDataTodoEntity(Path<? extends DashbordDataTodoEntity> path) {
        super(path.getType(), path.getMetadata());
    }

    public QDashbordDataTodoEntity(PathMetadata metadata) {
        super(DashbordDataTodoEntity.class, metadata);
    }

}

