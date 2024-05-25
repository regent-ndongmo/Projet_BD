package com.dicap.springmongo;

import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "/note")
@CrossOrigin(origins = {"http://192.168.22.96:3000", "http://localhost:3000", "http://127.0.0.1:3000" })
public class NoteController {
    private final NoteRepository noteRepository;

    public NoteController(NoteRepository noteRepository) {
        this.noteRepository = noteRepository;
    }

    @PostMapping
    public Note create(@RequestBody Note note){
        return noteRepository.save(note);
    }

    @GetMapping
    public List<Note> getAll(){
        return  noteRepository.findAll();
    }

    @GetMapping(path = "/{id}")
    public Note getById(@PathVariable String id){
        Optional<Note> notes=noteRepository.findById(id);
        if (!notes.isPresent()) throw new RuntimeException("pas de note correspondante a l'id : "+id);
        return  notes.get();
    }

    @DeleteMapping(path = "/{id}")
    public String delete(@PathVariable String id){
        Optional<Note> notice=noteRepository.findById(id);
        if (!notice.isPresent()) throw  new RuntimeException("pas de note correspondante a l'id : "+id);
        noteRepository.deleteById(id);
        return  "Note supprimé";
    }
}
