package com.myjpaProject.server.repository.DashbordeRepository;

import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;

import javax.persistence.EntityManager;

@RequiredArgsConstructor
public class DashBoradRepositoryImpl implements DashBoradRepositroyCustom {

    private final EntityManager em;
    private final JPAQueryFactory jpaQueryFactory;
}
