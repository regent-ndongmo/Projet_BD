package com.dicap.cycle.controller;

import com.dicap.cycle.model.Cycle;
import com.dicap.cycle.service.CycleService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/cycle")
@CrossOrigin(origins = {"http://192.168.22.96:3000", "http://localhost:3000", "http://127.0.0.1:3000" })
public class CycleController {

    private final CycleService cycleService;

    public CycleController(CycleService cycleService) {
        this.cycleService = cycleService;
    }

    @PostMapping
    public Cycle create(@RequestBody Cycle cycle){
        return cycleService.creer(cycle);
    }

    @GetMapping
    public List<Cycle> read(){
        return cycleService.lire();
    }

    @GetMapping(path = "/{id}")
    public Cycle update(@PathVariable Long id){
        return cycleService.getCycleById(id);
    }

    @DeleteMapping(path = "/{id}")
    public String delete(@PathVariable Long id){
        return cycleService.supprimer(id);
    }

}
