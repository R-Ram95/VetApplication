# Final-Project
607 final project

Video link: 

## Contributions:
- Manage Animal: Brandon Quan
- Manage Users: Emily Wang
- Search Patient: Rohinesh Ram
- Peer programming for everything else

## Design Overview: Tools Used
- Front End: React with Bulma CSS framework
- Back End: Spring Boot with JPA repository
- DataBase: SQL
- Authentication: Auth0 and JSON Web Tokens (JWT)

We used Axios to create http requests from the front end.

## How to Run
- navigate to ```final-project-uofeng607-057-1\src\main\resources\application.properties```
- Add your credentials:
  ```
  spring.datasource.url=jdbc:mysql://localhost:3306/VETDATA
  spring.datasource.username="YOUR USERNAME HERE"
  spring.datasource.password="YOUR PASSWORD HERE"
  ```
- navigate to ```\final-project-uofeng607-057-1\FrontEnd\vet-application```
- ```npm install``` to download all required libraries for the Front End on your IDE of choice
- navigate to ```\final-project-uofeng607-057-1\src\main\resources```
- run the ```VetDatabase.sql``` script in MySQL Workbench
- navigate to ```\final-project-uofeng607-057-1\src\main\java\com\vetapp\application```
- run the Spring application: ```Application.java``` file
- on ```\final-project-uofeng607-057-1\FrontEnd\vet-application``` enter ```npm start``` to start the react application 

## Questions?
Please contact Brandon Quan, brandon.quan@ucalgary.ca

Thank you so much!
