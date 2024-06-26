package org.zerock.mallapi.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.zerock.mallapi.domain.Todo;


// pk Type:Long
public interface TodoRepository extends JpaRepository<Todo,Long> {

}
