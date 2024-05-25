package com.dicap.semestre;

import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "/sequence")
@CrossOrigin(origins = {"http://192.168.22.96:3000", "http://localhost:3000", "http://127.0.0.1:3000" })
public class SequenceController {

    private  final SequenceRepository sequenceRepository;

    public SequenceController(SequenceRepository sequenceRepository) {
        this.sequenceRepository = sequenceRepository;
    }

    @PostMapping
    public Sequence create(@RequestBody Sequence sequence){
        return sequenceRepository.save(sequence);
    }

    @GetMapping
    public List<Sequence> read(){
        return sequenceRepository.findAll();
    }

    @GetMapping("/{id}")
    public Sequence update(@PathVariable Long id){
        Optional<Sequence> sequenceOptional = sequenceRepository.findById(id);
        if (!sequenceOptional.isPresent()) {
            throw new RuntimeException("sequence not found with id " + id);
        }
        return sequenceOptional.get();
    }

    @DeleteMapping("/{id}")
    public String delete(@PathVariable Long id){
        Optional<Sequence> sequenceOptional = sequenceRepository.findById(id);

        if (!sequenceOptional.isPresent()) {
            throw new RuntimeException("sequence not found with id " + id);
        }

        sequenceRepository.deleteById(id);
        return "sequence supprime";
    }
}
