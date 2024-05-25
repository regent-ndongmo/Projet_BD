package com.dicap.springmongo;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.temporal.Temporal;
import java.util.Date;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Document(collection = "professeurs")
public class Professeur {

    @Id
    private String id;

    private String nom;
    private String prenom;
    private Date dateNaiss;
    private String sexe;
    private String matricule;
    private int experience; // Nombre d'années d'expérience

}
