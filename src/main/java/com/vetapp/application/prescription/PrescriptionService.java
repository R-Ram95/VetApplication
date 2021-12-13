package com.vetapp.application.prescription;

import com.vetapp.application.comment.Comment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Service
public class PrescriptionService {

    @Autowired
    PrescriptionRepository repository;

    @PersistenceContext
    public EntityManager em;

    public List<Prescription> getAllbyAnimalId(int animalid) {

        List<Object[]> results = em.createNamedQuery("findPrescriptionbyanimalid")
                .setParameter("animalid", animalid).getResultList();

        List<Prescription> prescriptions = new ArrayList<>();

        // iterate through results and map to Comment object
        for(Object[] result:results) {
            Prescription prescription = new Prescription();
            String fname = (String) result[0];
            String lname = (String) result[1];
            String thePres = (String) result[2];

            prescription.setFname(fname);
            prescription.setLname(lname);
            prescription.setPrescriptionname(thePres);
            prescriptions.add(prescription);
        }


            return prescriptions;
    }
}
