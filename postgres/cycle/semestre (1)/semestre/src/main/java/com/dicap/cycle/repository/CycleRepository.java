package com.dicap.cycle.repository;

import com.dicap.cycle.model.Cycle;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CycleRepository extends JpaRepository<Cycle, Long> {
}
