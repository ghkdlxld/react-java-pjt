package org.zerock.mallapi.repository;


import lombok.extern.log4j.Log4j2;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.zerock.mallapi.domain.Todo;

import java.time.LocalDate;
import java.util.Optional;

@SpringBootTest
@Log4j2
public class TodoRepositoryTests {

    @Autowired // 이거 안써주면 인식을 못함, 주입을 못받음
    private TodoRepository todoRepository;

    @Test
    public void test1() {

        Assertions.assertNotNull(todoRepository); //todoRepository가 null이 아니어야만 이 test가 성공하는것이다

        log.info(todoRepository.getClass().getName()); // jdk.proxy2.$Proxy112

    }

    @Test
    public void testInsert() {

        final Todo todo = Todo.builder()
                .title("Title")
                .content("Content...")
                .dueDate(LocalDate.of(2023,12,30))
                .build();

        Todo result = todoRepository.save(todo);

        log.info(result);

    }

    @Test
    public void testRead() {

        Long tno = 1L;

        Optional<Todo> result = todoRepository.findById(tno);

        Todo todo = result.orElseThrow();

        log.info(todo);

    }

    @Test
    public void testUpdate() {

        //먼저 로딩하고(가져오고) 엔티티 객체를 변경 /setter(change)
        Long tno = 1L;

        Optional<Todo> result = todoRepository.findById(tno);

        Todo todo = result.orElseThrow();

        todo.changeTitle("Update Title");
        todo.changeContent("Update content");
        todo.changeComplete(true);

        todoRepository.save(todo);


    }
}
