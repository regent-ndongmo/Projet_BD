package com.dicap.semestre;


import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "/horaire")
@CrossOrigin(origins = {"http://192.168.22.96:3000", "http://localhost:3000", "http://127.0.0.1:3000" })
public class HoraireController {

    private final HoraireRepository horaireRepository;

    public HoraireController(HoraireRepository horaireRepository) {
        this.horaireRepository = horaireRepository;
    }

    @GetMapping
    public List<Horaire> findAll() {
        return horaireRepository.findAll();
    }

    @GetMapping(path = "/{id}")
    public Optional<Horaire> findById(@PathVariable Long id) {
        Optional<Horaire> optional = horaireRepository.findById(id);
        if (!optional.isPresent()) {
            throw new RuntimeException("sequence not found with id " + id);
        }
        return horaireRepository.findById(id);
    }

    @PostMapping
    public Horaire save(@RequestBody Horaire horaire) {
        return horaireRepository.save(horaire);
    }

    @DeleteMapping(path = "/{id}")
    public String deleteById(@PathVariable Long id) {
        Optional<Horaire> sequenceOptional = horaireRepository.findById(id);

        if (!sequenceOptional.isPresent()) {
            throw new RuntimeException("horaire not found with id " + id);
        }
        horaireRepository.deleteById(id);
        return "horaire  suprpimée";
    }

}
