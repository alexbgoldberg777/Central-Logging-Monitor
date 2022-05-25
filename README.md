# Central-Logging-Monitor
The CLOG Monitor is a web-based application that takes log event data from a MySQL database and displays it, allowing users to search for and filter log events according
to specified criteria. The frontend views (found in the front-end folder) are programmed using Javascript, primarily with the React library, and include a login screen and
dashboard, a "business process view" which categorizes the log events by specific business attributed, and a "log view" which allows a user to see details of a specific
log event. The backend server (found in the backend.server folder) is programmed using Java, primarily with the Spring Boot framework, and handles API calls to bridge
between the database and the user interface. The MySQL folder contains a script written in Python to generate sample data which can be used to test the Monitor. Tests for
the frontend were written using Cypress, and continuous integration and continuous deployment was integrated utilizing a Jenkins pipeline. The pipeline was set up so that
anytime a contributor made a pull request, their code would be automatically tested by the Cypress tests in the front-end folder, and if it failed any tests the pull request
would be rejected. \

I acted as the team leader of the CI/CD team. My contributions included project management of the CI/CD as well as the integration phase where code written by all of the 
frontend and backend teams was combined for the final product, setting up and maintaining the Jenkins pipeline and integrating it with Github, review and approval of all
of the Cypress tests written and with all code during the integration phase, setting up and maintaining the MySQL test database, acting as a communication liaison between
all of the teams, and general programming and infrastructure where needed. \

The Cetral Logging Monitor was created during David Fisher's Spring 2022 Software Engineering Course, and was designed to work with ISO New England's log data.
