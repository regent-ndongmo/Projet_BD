package com.dicap.springmongo;


import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "/professeur")
@CrossOrigin(origins = {"http://192.168.22.96:3000", "http://localhost:3000", "http://127.0.0.1:3000" })
public class ProfesseurController {

    private  final ProfesseurRepository professeurRepository;

    public ProfesseurController(ProfesseurRepository professeurRepository) {
        this.professeurRepository = professeurRepository;
    }

    @GetMapping
    public List<Professeur> getAllEnseignants() {
        return professeurRepository.findAll();
    }

    @GetMapping(path = "/{id}")
    public List<Professeur> getEnseignantById(@PathVariable String id) {
        List<Professeur> enseignant = professeurRepository.searchByAnyField(id);
        if (!enseignant.isEmpty()) {
            return enseignant;
        } else {
            throw new RuntimeException("pas de professeur correspondant a l'id "+id);
        }
    }


    @PostMapping
    public Professeur createEnseignant(@RequestBody Professeur enseignant) {
        return professeurRepository.save(enseignant);
    }

    @DeleteMapping("/{id}")
    public String deleteEnseignant(@PathVariable String id) {
        if (professeurRepository.findById(id).isPresent()) {
            professeurRepository.deleteById(id);
            return "Professeur supprimé";
        } else {
            throw new RuntimeException("pas de professeur correspondant a l'id "+id);
    }
}}
