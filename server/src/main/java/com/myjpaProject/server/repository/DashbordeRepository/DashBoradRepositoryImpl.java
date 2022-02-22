package com.myjpaProject.server.repository.DashbordeRepository;

import com.myjpaProject.server.modalEntity.DashbordDataTodoEntity;
import com.myjpaProject.server.modalEntity.QDashbordDataTodoEntity;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;

import javax.persistence.EntityManager;
import java.util.List;

@RequiredArgsConstructor
public class DashBoradRepositoryImpl implements DashBoradRepositroyCustom {

    private final EntityManager em;
    private final JPAQueryFactory jpaQueryFactory;
    QDashbordDataTodoEntity qDashbordDataTodoEntity = QDashbordDataTodoEntity.dashbordDataTodoEntity;
    @Override
    public List<DashbordDataTodoEntity> finAllDashBoardItem() {
        return jpaQueryFactory
                .selectFrom(qDashbordDataTodoEntity)
                .orderBy(qDashbordDataTodoEntity.id.desc())
                .offset(0)
                .limit(20)
                .fetch();
    }
    @Override
    public DashbordDataTodoEntity findGetById(long id) {
        return jpaQueryFactory
                .selectFrom(qDashbordDataTodoEntity)
                .from(qDashbordDataTodoEntity)
                .where(qDashbordDataTodoEntity.id.eq(id))
                .fetchOne();
    }
    @Override
    public long deleteTodo(long id) {
        return jpaQueryFactory
                .delete(qDashbordDataTodoEntity)
                .where(qDashbordDataTodoEntity.id.eq(id))
                .execute();
    }
}
