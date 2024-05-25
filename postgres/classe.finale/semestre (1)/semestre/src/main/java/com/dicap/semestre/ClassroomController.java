package com.dicap.semestre;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "/classe")
@CrossOrigin(origins = {"http://192.168.22.96:3000", "http://localhost:3000", "http://127.0.0.1:3000" })
public class ClassroomController {

    private final ClassroomRepository classroomRepository;
    @Autowired
    private final RestTemplate restTemplate;

    public ClassroomController(ClassroomRepository classroomRepository, RestTemplate restTemplate) {
        this.classroomRepository = classroomRepository;
        this.restTemplate = restTemplate;
    }

    @GetMapping
    public List<ClassRoom> findAll() {
        return classroomRepository.findAll();
    }

    @GetMapping(path = "/{id}")
    public ClassRoom findById(@PathVariable Long id) {
        Optional<ClassRoom> s = classroomRepository.findById(id);
        if (!s.isPresent()) {
            throw new RuntimeException(" not found with id " + id);
        }
        return s.get();
    }

    @PostMapping
    public ClassRoom save(@RequestBody ClassRoom classRoom) {
        return classroomRepository.save(classRoom);
    }

    @DeleteMapping(path = "/{id}")
    public String deleteById(@PathVariable Long id) {
        Optional<ClassRoom> s = classroomRepository.findById(id);
        if (!s.isPresent()) {
            throw new RuntimeException(" not found with id " + id);
        }
        classroomRepository.deleteById(id);
        return "Classe supprimée";

    }
}
