# Express vs Fastify

We can use either Express or Fasitfy as a plugin for HTTPS implementations in NEST JS.


# Request Response cycle in NEST JS

A Request in the Nest followed through the following steps:

1- Pipe -> Validates the data in the request payload

2- Guard -> Do the user Authorization

3- Controller -> Route the request to the specific function

4- Services -> Write the business logic

5- Repositories -> Access the Database

And at the last we send the " response  " to the user.

There are also modules that groups together:
Controller, Services and Repositories 

