package com.dicap.semestre;


import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping(path = "/cours")
@CrossOrigin(origins = {"http://192.168.22.96:3000", "http://localhost:3000", "http://127.0.0.1:3000" })
public class CoursController {

    private final CoursRepository coursRepository;

    public CoursController(CoursRepository coursRepository) {
        this.coursRepository = coursRepository;
    }

    @GetMapping
    public List<Cours> findAll() {
        return coursRepository.findAll();
    }

    @GetMapping(path = "/{id}")
    public Cours findById(@PathVariable Long id) {

        Optional<Cours> optional = coursRepository.findById(id);
        if (!optional.isPresent()) {
            throw new RuntimeException("sequence not found with id " + id);
        }
        return optional.get();

    }

    @PostMapping
    public Cours save(Cours cours) {
        return coursRepository.save(cours);
    }

    @DeleteMapping(path = "/{id}")
    public String deleteById(@PathVariable Long id) {
        Optional<Cours> optional = coursRepository.findById(id);
        if (!optional.isPresent()) {
            throw new RuntimeException("sequence not found with id " + id);
        }

        coursRepository.deleteById(id);
        return "cours supprimé";
    }

}
