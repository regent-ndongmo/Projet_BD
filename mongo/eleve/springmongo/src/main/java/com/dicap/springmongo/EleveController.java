package com.dicap.springmongo;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/eleve")
@CrossOrigin(origins = {"http://192.168.22.96:3000", "http://localhost:3000", "http://127.0.0.1:3000" })
public class EleveController {

    private final  EleveRepository eleveRepository;


    public EleveController(EleveRepository eleveRepository) {
        this.eleveRepository = eleveRepository;
    }

    @GetMapping
    public List<Eleve> findAll() {
        return eleveRepository.findAll();
    }

    @GetMapping(path = "/{id}")
    public List<Eleve> findById(@PathVariable String id) {
        List<Eleve> eleves = eleveRepository.searchByAnyField(id);
        if (!eleves.isEmpty()) {
            return eleves;
        } else {
            throw new RuntimeException("pas de eleve correspondant a l'id "+id);
        }

    }

    @PostMapping
    public Eleve save(@RequestBody Eleve eleve) {
        return eleveRepository.save(eleve);
    }

    @DeleteMapping(path = "/{id}")
    public String deleteById(@PathVariable String id) {
        if (eleveRepository.findById(id).isPresent()) {
            eleveRepository.deleteById(id);
            return "eleve supprimé";
        } else {
            throw new RuntimeException("pas de eleve correspondant a l'id "+id);
        }

    }
}
