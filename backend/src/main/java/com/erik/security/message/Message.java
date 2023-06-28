package com.erik.security.message;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "_message")
public class Message {

    @Id
    @GeneratedValue
    private Integer id;
    @ElementCollection
    private List<String> text;
}
