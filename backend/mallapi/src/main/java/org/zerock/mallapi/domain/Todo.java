package org.zerock.mallapi.domain;


import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

@Entity
@ToString           // Lombok을 추가해서 string으로
@Getter             // 불변
@Builder
@AllArgsConstructor // Builder랑 세트1
@NoArgsConstructor  // Builder랑 세트2

@Table(name = "tbl_todo") // table 이름 지정 가능
public class Todo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long tno;

    @Column(length = 500, nullable = false) // varchar(255)가 기본 길이, 커스텀 가능
    private String title;

    private String content;

    private boolean complete;

    private LocalDate dueDate;

}
