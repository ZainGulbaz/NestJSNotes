# NEST JS NOTES

## Express vs Fastify

We can use either Express or Fasitfy as a plugin for HTTPS implementations in NEST JS.


## Request Response cycle in NEST JS

A Request in the Nest followed through the following steps:

1- Pipe -> Validates the data in the request payload

2- Guard -> Do the user Authorization

3- Controller -> Route the request to the specific function

4- Services -> Write the business logic

5- Repositories -> Access the Database

And at the last we send the " response  " to the user.

There are also modules that groups together:
Controller, Services and Repositories


## NEST JS Naming Files Conventions

1- One Class Per File
2- The file should contain the name of the class

## How to install Nest CLI?

yarn add -g @nestjs/cli

## NEST CLI Important commands

1- Create a new project -> nest new [project_name]

2- Create a new module -> nest g m [module_name]

3- Crate a new controller -> nest g c [controller_name]

## Validation Pipe

npm i class-validator npm i class-transformer ==> enable dtos

Nest uses built in validation pipe from nestjs/common module

we add it in globalvalidations

Validation Pipe works in three main steps:

[1]- The request body json is converted in to "DTO Instance".

[2]- The request body new instance is compared with the existing DTO.

[3]- If there are errors then response is send with specified error message.

[How type info is preserved?]

## Inversion of Control

Inversion of Control is a Principle that states that:

   [A class should not inititate its own dependencies]

## Intra Services

We can use service of one module into another

1- Add the service to the exports key of module decorator
2- Add module to the imports of the module in which we want to use the service from another module

## How to add TypeORM to the nest project ?

install @nestjs/typeorm and typeorm with database package you want to use.

[1]-Establish the Connection 
Import "Typeorm" from @nestjs/common, add it to providers of main project and write credentials in the object

