package org.zerock.mallapi.domain;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.*;

import java.time.LocalDate;

@Entity
@ToString           // Lombok을 추가해서 string으로
@Getter             // 불변
@Builder
@AllArgsConstructor // Builder랑 세트1
@NoArgsConstructor  // Builder랑 세트2
public class Todo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long tno;

    private String title;

    private String content;

    private boolean complete;

    private LocalDate dueDate;

}
