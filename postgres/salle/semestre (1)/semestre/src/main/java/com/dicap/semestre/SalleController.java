package com.dicap.semestre;

import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "/salle")
@CrossOrigin(origins = {"http://192.168.22.96:3000", "http://localhost:3000", "http://127.0.0.1:3000" })
public class SalleController {

    private  final  SalleRepository salleRepository;

    public SalleController(SalleRepository salleRepository) {
        this.salleRepository = salleRepository;
    }

    @GetMapping
    public List<Salle> findAll() {
        return salleRepository.findAll();
    }

    @GetMapping(path = "/{id}")
    public Salle findById(@PathVariable Long id) {
        Optional<Salle> optional = salleRepository.findById(id);
        if (!optional.isPresent()) {
            throw new RuntimeException("sequence not found with id " + id);
        }
        return optional.get();
    }

    @PostMapping
    public Salle save(@RequestBody Salle salle) {
        return salleRepository.save(salle);
    }

    @DeleteMapping(path = "/{id}")
    public String deleteById(@PathVariable Long id) {
        Optional<Salle> sequenceOptional = salleRepository.findById(id);
        if (!sequenceOptional.isPresent()) {
            throw new RuntimeException("sequence not found with id " + id);
        }

        salleRepository.deleteById(id);
        return "Salle suppriméé";
    }
}
