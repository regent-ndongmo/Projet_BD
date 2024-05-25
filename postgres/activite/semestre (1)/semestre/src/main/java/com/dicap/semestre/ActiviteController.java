package com.dicap.semestre;

import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "/activite")
@CrossOrigin(origins = {"http://192.168.22.96:3000", "http://localhost:3000", "http://127.0.0.1:3000" })
public class ActiviteController {

    private final ActiviteRepository activiteRepository;

    public ActiviteController(ActiviteRepository activiteRepository) {
        this.activiteRepository = activiteRepository;
    }

    @GetMapping
    public List<Activite> findAll() {
        return activiteRepository.findAll();
    }

    @GetMapping(path = "/{id}")
    public Activite findById(@PathVariable Long id) {
        Optional<Activite> optional = activiteRepository.findById(id);
        if (!optional.isPresent()) {
            throw new RuntimeException("activity not found with id " + id);
        }
        return optional.get();
    }




    @DeleteMapping(path = "/{id}")
    public String deleteById(@PathVariable Long id) {
        Optional<Activite> sequenceOptional = activiteRepository.findById(id);
        if (!sequenceOptional.isPresent()) {
            throw new RuntimeException("activity not found with id " + id);
        }
        activiteRepository.deleteById(id);
        return "Activité suppriméé";
    }

    @PostMapping
    public Activite save(@RequestBody Activite activite) {
        return activiteRepository.save(activite);
    }


}
