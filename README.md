# Installation du client React.js

```
npx create-react-app client
cd client
yarn start
```
L'installation de react, react-dom et react-scripts a été effectué
Accéder au front via http://192.168.33.10:3000/

## Gestion du routing

Installation de react-router-dom pour gérer le route de l'application facilement
```
npm install react-router-dom 
npm install --save-dev react-dev-utils
```
Source : https://reacttraining.com/react-router/web/guides/quick-start


# Symfony 4 Api Project

Création du projet avec la couche Api Platform
--

```bash
cd server && docker exec -it php-apache composer create-project symfony/skeleton .
```

Requirements
--
```bash
docker exec -it php-apache composer require --dev symfony/profiler-pack
```
```bash
docker exec -it php-apache composer require maker --dev
```
```bash
docker exec -it php-apache composer req api
```
# Stack pour nouveau projet à partir d'un clonage Github
* 1/Supprimer les instances docker via docker-compose down (et éventuellement via docker rm -f XXXXXXX
* 2/ cloner https://github.com/karudev/reactjs-symfony4-api-base (modifié) 
* 3/ docker-compose up -d
* 4/ Installation de l'api symfony 4 -> cd server && docker exec -it php-apache composer install
* 5/ Dans une fenêtre de terminal à part, démarrage du client React.js -> cd client && yarn install && yarn start

* Sur Chrome,
> Accès à API Platform du projet : 192.168.33.10/api
> Accès au front ReactJS : 192.168.33.10:3000
> Accès base de données : 192.168.33.10:8080 (root/XXXX - utf8mb4_unice_ci - nombase:api)
> Dans un terminal, mise à jour de la bdd : 
cd ../server/
docker exec -it php-apache php bin/console d:s:u --force

* Configuration IDE

