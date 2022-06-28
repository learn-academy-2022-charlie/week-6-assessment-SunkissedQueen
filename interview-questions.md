# ASSESSMENT 6: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?
From Full Stacker Michael
Your answer:
  So it looks like you are creating a model called Cohort that will have a child model called Students. Foreign key columns need to be in the child model, so you would have to use a Rails migration to add “cohort_id” to Students.
  Researched answer:
  So it looks like you are creating a model called Cohort that will have a child model called Students. Foreign key columns need to be in the child table, so you would have to use a Rails migration to add “cohort_id” to the Students table. The “cohort_id” should match the primary key of the Cohort object it is attached to. Along with “has_many” on Cohort model, you need to add “belongs_to” to the Students model to finish creating the association.



2. Which RESTful routes must always be passed params? Why?
From Full Stacker Stephen
Your answer: The RESTful routes that need params are show, create, update, edit, and maybe destroy. These routes need params to allow for specific data in the table to be created, edited, or manipulated. I said maybe for destroy because you might need to pass params if you are destroying a specific id or column in a table.

Researched answer: The Restful routes that must always be passed params are: show, edit, update, and destroy. These routes must be passed params because they need to alter something specific in the table being accessed. At LEARN academy I had to create a wildlife tracking API. To be able to show a specific animal, I had to pass params in the route, otherwise I would get an error because the request was not sure which animal to show.



3. Name three rails generator commands. What is created by each?
From Full Stacker Lance
Your answer: Generate Model creates a model for the corresponding database. Generate migration creates a class for making a change to the structure of the model. Generate Resource creates a model, its associated controller, helpers, views, and assets files. 

  Researched answer: Generate Scaffold creates the model, controller, views, and test suite to test it all. Generate controller creates a controller to manipulate the model as well as other directories like a JS file and a stylesheet.



4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?
From Full Stacker Damien

action: "GET" location: /students

The route action would be index and the method would return all student records

action: "POST" location: /students

The route action would be create and the method would create a new record in the student table

action: "GET" location: /students/new

The route action would be new and the method would display a form to be used in creating a new record

action: "GET" location: /students/2

The route action would be show and would display the student record with the id of 2

action: "GET" location: /students/2/edit

The route action would be edit and would be to display an edit form to be used to update a record with the id of 2

action: "PATCH" location: /students/2

The route action would be patch and the method would update an item with the id of 2

action: "DELETE" location: /students/2

The route action would be destroy and the method would delete an item with the id of 2   



5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

From Full Stacker Nic
As a user, I can see a landing page that shows a title of the application and has the todo's listed
- As a user, I can click on a todo and be routed to a page where I see the title of the todo and a short description of the todo
- As a user, I can navigate from the individual todo page back to the home page
- As a user, I see a button where I can create a todo
- As a user, when I click on the button I will be routed to the page with a form to create the todo
- As a user, I can click on the submit button which adds a new to do to the database
- As a user, when I submit the form I will be redirected to the home page and see the new todo
- As a user, I can click a button to edit a todo
- As a user, I will be routed to a new form to update the post selected
- As a user, I can click a button to delete a todo
- As a user, I will be shown a 'Are you Sure You Want To Delete' if clicked yes will permanently delete todo from database if clicked no will cancel the delete