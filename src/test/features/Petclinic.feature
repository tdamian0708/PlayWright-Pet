@AllPets
Feature: : Como usuario de la aplicación Petclinic  quiero poder gestionar la información de los dueños de mascotas


  Background:
    Given Navego en la web de Pet Clinic
    When accedo al modulo de Find owners

  @ListOwners
  Scenario: Listar todos los owners
    And click al boton de Find Owner
    Then se validar una lista de todos los owners


  @AddOwner
  Scenario Outline: Agregar un nuevo owner y su mascota
    And agrego un nuevo owner con los datos de "<firstName>", "<lastName>", "<address>", "<city>", "<telephone>"
    Then se valida la alerta creacion del owner
    And se busca el apellido del owner "<lastName>"
    And se valida que el owner se encuentre en la lista de owners
    Examples:
      | firstName | lastName | address  | city | telephone  |
      | ana       | munoz    | belaunde | lima | 9876543211 |


  @EditOwner
  Scenario Outline: Editar un owner
    And se busca el apellido del owner "<lastName>"
    And selecciono el primer owner de la busqueda
    And selecciono el boton en editar
    And actualizo el primer nombre "<firstName>"
    Then se valida la alerta de edicion del owner
    Examples:
      | lastName | firstName  |
      | damian   | Capitanazo6 |

  @Agregar2Pets
  Scenario Outline: Agregar dos mascotas a un owner
    And se busca el apellido del owner "<lastName>"
    And selecciono el primer owner de la busqueda
    And selecciono el boton en agregar mascota
    And agrego mascota al owner "<petName1>", "<birthDate1>", "<type1>"
    Then se valida la mascota agregada "<petName1>" en el owner
    And selecciono el boton en agregar mascota
    And agrego mascota al owner "<petName2>", "<birthDate2>", "<type2>"
    And se valida la mascota agregada "<petName2>" en el owner
    Examples:
      | lastName | petName1 | birthDate1 | type1 | petName2 | birthDate2 | type2 |
      | damian   | gatita25  | 2021-01-01 | cat   | gatita26  | 2021-01-01 | cat   |

  @AddVisit
  Scenario Outline: Agregar una visita a una mascotaS
    And se busca el apellido del owner "<lastName>"
    And selecciono el primer owner de la busqueda
    And selecciono el boton en agregar mascota
    And agrego mascota al owner "<petName>", "<birthDate>", "<type>"
    Then se valida la mascota agregada "<petName>" en el owner
    And selecciono el boton en agregar visita de la "<petName>"
    And agrego visita a la mascota "<date>", "<description>"
    And se seleccionar el boton add visit
    Then se valida la description de la visita agregada "<description>" en la mascota "<petName>"
    Examples:
      | lastName | petName  | birthDate  | type | date       | description          |
      | damian   | negrita6 | 2021-01-01 | cat  | 2024-12-29 | vacuna para la rabia |


  @EditPet
  Scenario Outline: Editar una mascota
    And se busca el apellido del owner "<lastName>"
    And selecciono el primer owner de la busqueda
    And selecciono el boton en agregar mascota
    And agrego mascota al owner "<petName>", "<birthDate>", "<type>"
    Then se valida la mascota agregada "<petName>" en el owner
    And selecciono el boton en editar mascota "<petName>"
    And actualizo la mascota "<UpdatepetName>", "<UpdatebirthDate>", "<Updatetype>"
    And se seleccionar el boton update pet
    Then se valida la alerta de edicion de la mascota
    Examples:
      | lastName | petName          | birthDate  | type | UpdatepetName | UpdatebirthDate | Updatetype |
      | damian   | garrita de bronce | 2024-01-01 | cat  | michi         | 2021-01-01      | dog        |

