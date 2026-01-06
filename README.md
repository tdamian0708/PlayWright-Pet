# PlayWright-Pet
Si se quiere ejecutar por ambientes aqui los comandos

***development***
$env:NODE_ENV=dev; npx cucumber-js --tags "@AllPets"

***certificacion***
NODE_ENV=cert npx cucumber-js --tags "@AllPets"

***default***
NODE_ENV=default npx cucumber-js --tags "@AllPets"
 

***comando para visualizar el reporte***
npm run report