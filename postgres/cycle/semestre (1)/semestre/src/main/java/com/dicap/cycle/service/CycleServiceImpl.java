package com.dicap.cycle.service;

import com.dicap.cycle.model.Cycle;
import com.dicap.cycle.repository.CycleRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CycleServiceImpl implements CycleService{

    private final CycleRepository cycleRepository;

    public CycleServiceImpl(CycleRepository cycleRepository) {
        this.cycleRepository = cycleRepository;
    }

    @Override
    public Cycle creer(Cycle cycle) {
        return cycleRepository.save(cycle);
    }

    @Override
    public List<Cycle> lire() {
        return cycleRepository.findAll();
    }

    @Override
    public Cycle getCycleById(Long id) {
        Optional<Cycle> cycleOptional = cycleRepository.findById(id);

        if (!cycleOptional.isPresent()) {
            throw new RuntimeException("Cycle not found with id " + id);
        }

        return cycleOptional.get();
    }

    @Override
    public String supprimer(Long id) {

        Optional<Cycle> cycleOptional = cycleRepository.findById(id);
        if (!cycleOptional.isPresent()) {
            throw new RuntimeException("Cycle not found with id " + id);
        }

        cycleRepository.deleteById(id);
        return "Cycle supprime";
    }
}
