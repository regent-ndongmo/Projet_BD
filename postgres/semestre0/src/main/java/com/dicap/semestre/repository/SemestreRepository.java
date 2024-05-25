package com.dicap.semestre.repository;

import com.dicap.semestre.entity.Semestre;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SemestreRepository extends JpaRepository <Semestre,Long> {
}
