package com.dicap.semestre.controller;



import com.dicap.semestre.entity.Semestre;
import com.dicap.semestre.repository.SemestreRepository;

import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("/semestre")
public class SemestreController {

    private final SemestreRepository semestreRepository;

    public SemestreController(SemestreRepository semestreRepository) {
        this.semestreRepository = semestreRepository;
    }

    @GetMapping
    public List<Semestre> findAll() {
        return semestreRepository.findAll();
    }

    @GetMapping(path = "/{id}")
    public Semestre findById(@PathVariable Long id) {
        Optional<Semestre> optional = semestreRepository.findById(id);
        if (!optional.isPresent()) {
            throw new RuntimeException("semestre not found with id " + id);
        }
        return optional.get();
    }

    @PostMapping
    public Semestre save(@RequestBody Semestre semestre) {
        return semestreRepository.save(semestre);
    }

    @DeleteMapping(path = "/{id}")
    public String deleteById(@PathVariable Long id) {
        Optional<Semestre> sequenceOptional = semestreRepository.findById(id);
        if (!sequenceOptional.isPresent()) {
            throw new RuntimeException("Semestre not found with id " + id);
        }

        semestreRepository.deleteById(id);
        return "Semestre suppriméé";
    }
}
