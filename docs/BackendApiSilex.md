# Backend - Api Silex

### @todo { Fill - About }
 
### @todo { Fill - Tecnologies } 

All steps below needs to be executed inside ```api_silex``` folder.

### Steps to make environment works:

- [x] ```docker run --rm -v $(pwd):/app composer:1.5.1 install```
- [x] ```docker-compose up -d```
- [x] Modify the file ```bootstrap.php``` setting your database configs which you have inside ```docker-compose.yaml``` file in ```$dbParams``` variable

### To create data structure:
- [x] ``` docker exec -it silex_api_container bash ```
- [x] ``` cd /api/ ```
- [x] ``` ./bin/doctrine orm:schema-tool:create ```

### Testing API: 

    http://localhost:8080/v1/beers