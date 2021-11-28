package com.vetapp.application.alert;

import com.vetapp.application.prescription.Prescription;
import com.vetapp.application.prescription.PrescriptionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class AlertController {
    @Autowired
    AlertRepository repository;

    AlertController(AlertRepository repository){
        this.repository = repository;
    }

    @GetMapping("/api/animals/{animalid}/alert")
    public ResponseEntity<List<Alert>> all(@PathVariable String animalid) {
        return new ResponseEntity<>(repository.findByAnimalidContaining(animalid), HttpStatus.OK);
    }

    @PostMapping("/api/animals/{animalid}/alert")
    public ResponseEntity<Alert> create(@PathVariable String animalid, @RequestBody Alert newAlert) {
        newAlert.setAnimalid(animalid);
        Alert alert = repository.save(newAlert);
        return new ResponseEntity<>(alert, HttpStatus.CREATED);
    }

    @DeleteMapping("/api/animals/alert/{alertid}")
    public ResponseEntity<Alert> deleteAlert(@PathVariable long alertid){
        try{
            Optional<Alert> alert = repository.findById(alertid);
            if(alert.isPresent()){
                repository.delete(alert.get());
            }
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }catch(Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}