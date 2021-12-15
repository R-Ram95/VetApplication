package com.vetapp.application.user;

import com.vetapp.application.animals.Animal;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserService {

    @Autowired
    UserRepository repository;

    TokenManager tokenManager;

    public UserService(){
        tokenManager = new TokenManager();
    }

    // method to validate user by creating TokenManager
    public String validateUser(String uname, String pword){
        // query db
        User user = repository.findByusername(uname);
        // credientials dont match in db
        if(user == null || !user.getPassword().equals(pword) || user.getIsactive() == false){
            return null;
        }
        // create jwt from uname and pword
        // respond with jwt
        return tokenManager.createToken(user.getUserid(), user.getUsername(), user.getPassword(), user.getRole());
    }

    public User getUserFromDB(User user){
        User userFromDB = repository.findById(user.getUserid()).get();
        return userFromDB;
    }

//    public User

    public User setUserFromDB(User userFromDB, User user){

        // set all attributes -> this is a problem when we have many attributes
        if(user.getFname() != ""){
            userFromDB.setFname(user.getFname());
        }
        if(user.getLname() != ""){
            userFromDB.setLname(user.getLname());
        }
        if(user.getUsername() != ""){
            userFromDB.setUsername(user.getUsername());
        }
        if(user.getEmail() != ""){
            userFromDB.setEmail(user.getEmail());
        }
        repository.save(userFromDB);
        return userFromDB;
    }

    public User getUserById(int id){
        User userFromDB = repository.findById(id).get();
        return userFromDB;
    }


    public boolean checkIdExists(int id){
        if(repository.existsById(id)){
            return true;
        }
        else{
            return false;
        }
    }

    public String deleteUser(boolean userAnswer, int id){
        if(repository.existsById(id)){
            User userToDelete = repository.getById(id);
            repository.delete(userToDelete);
            return "User has been deleted";
        }
        return "Cannot delete user";
    }

    public boolean checkIsActive(User user){
        if(user.getIsactive() == true) {
            return true;
        }
        else{
            return false;
        }
    }

    public List<User> getIsBlocked(List<User> user){
    	
    	List<User> blockedUsers = new ArrayList<User>();
    	
        for(int i = 0 ; i<user.size(); i++){
            if(user.get(i).getIsactive() == false) {
                blockedUsers.add(user.get(i));
            }
        }

        return blockedUsers;
    }

    public User setIsActive(User userFromDB, User user){

        userFromDB.setIsactive(user.getIsactive());
        repository.save(userFromDB);
        System.out.println("user:" + user.getIsactive());
        System.out.println("userFromDB:" + userFromDB.getIsactive());
        return userFromDB;
    }

    public List<User> getAllUsers(){
        return repository.findAll();
    }

    public User saveUser(User newUser){
        repository.save(newUser);
        return newUser;
    }

    //gets all users with the name
    public List<User> getByName(String name, String role){
        List<User> nameFound = new ArrayList<User>();

        nameFound.addAll(repository.findByfnameContaining(name));
        nameFound.addAll(repository.findBylnameContaining(name));


        if(role.equals("Staff")) {
            for (int i = 0; i < nameFound.size(); i++) {
                if (!nameFound.get(i).getRole().equals("Teaching Technician") && !nameFound.get(i).getRole().equals("Health Technician") && !nameFound.get(i).getRole().equals("Care Attendant")) {
                    nameFound.remove(i);
            }
        }
            return nameFound;
        }
        else {
            for (int i = 0; i < nameFound.size(); i++) {
                if (!nameFound.get(i).getRole().equals(role)) {
                    nameFound.remove(i);
                }
            }
            return nameFound;
        }
    }

    /*
        get user by first and last name
     */
    public User getByFNameAndLName(String fName, String lName){
        System.out.println(fName);
        System.out.println(lName);
        return repository.findByfnameAndlname(fName, lName);
    }

    public String setPassword(User userFromDB, User user){
        try{
            userFromDB.setPassword(user.getPassword());
            repository.save(userFromDB);
            return "Password has been changed successful";
        }catch(Exception e){
            return "Password change is unsucessful";
        }
    }

    public boolean checkValidPassword(String password, User userFromDB){
        if(userFromDB.getPassword().equals(password)){
            return true;
        }
        return false;
    }
}
