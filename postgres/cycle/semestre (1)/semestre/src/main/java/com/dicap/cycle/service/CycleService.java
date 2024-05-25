package com.dicap.cycle.service;

import com.dicap.cycle.model.Cycle;

import java.util.List;

public interface CycleService {
    Cycle creer(Cycle cycle);

    List<Cycle> lire();

    Cycle getCycleById(Long id);

    String supprimer(Long id);
}
