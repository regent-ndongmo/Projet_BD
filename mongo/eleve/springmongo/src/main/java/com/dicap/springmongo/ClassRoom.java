package com.dicap.springmongo;

public class ClassRoom {
    private  Long id;
    private String libelle;
    private int effectif;
    private int salle_id;
    private int professeur_id;
    private int cycle_id;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getLibelle() {
        return libelle;
    }

    public void setLibelle(String libelle) {
        this.libelle = libelle;
    }

    public int getEffectif() {
        return effectif;
    }

    public void setEffectif(int effectif) {
        this.effectif = effectif;
    }

    public int getSalle_id() {
        return salle_id;
    }

    public void setSalle_id(int salle_id) {
        this.salle_id = salle_id;
    }

    public int getProfesseur_id() {
        return professeur_id;
    }

    public void setProfesseur_id(int professeur_id) {
        this.professeur_id = professeur_id;
    }

    public int getCycle_id() {
        return cycle_id;
    }

    public void setCycle_id(int cycle_id) {
        this.cycle_id = cycle_id;
    }

    public ClassRoom(Long id, String libelle, int effectif, int salle_id, int professeur_id, int cycle_id) {
        this.id = id;
        this.libelle = libelle;
        this.effectif = effectif;
        this.salle_id = salle_id;
        this.professeur_id = professeur_id;
        this.cycle_id = cycle_id;
    }
}
