package com.dicap.springmongo;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.temporal.Temporal;
import java.util.Date;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@Document(collection = "eleves")
public class Eleve {

    @Id
    private String id;

    private String nom;
    private String prenom;
    private Date dateNaiss;
    private String sexe;
    private int classe_id;
}
