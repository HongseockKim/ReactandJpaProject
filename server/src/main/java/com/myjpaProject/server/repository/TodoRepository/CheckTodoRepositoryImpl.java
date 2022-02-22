package com.myjpaProject.server.repository.TodoRepository;

import com.myjpaProject.server.modalEntity.QTodoCheckEntity;
import com.myjpaProject.server.modalEntity.TodoCheckEntity;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;

import javax.persistence.EntityManager;
import java.util.List;

@RequiredArgsConstructor
public class CheckTodoRepositoryImpl implements CheckTodoCustom {

    private final EntityManager em;
    private final JPAQueryFactory jpaQueryFactory;

    QTodoCheckEntity qTodoCheckEntity = QTodoCheckEntity.todoCheckEntity;

    @Override
    public List<TodoCheckEntity> findByCheckTodoAll() {
        return jpaQueryFactory
                .selectFrom(qTodoCheckEntity)
                .orderBy(qTodoCheckEntity.id.desc())
                .fetch();
    }

    @Override
    public Long deleteCheckTodo(Long id) {
        System.out.println("Repoid = " + id);
        return jpaQueryFactory
                .delete(qTodoCheckEntity)
                .where(qTodoCheckEntity.todoId.eq(id))
                .execute();
    }
}
