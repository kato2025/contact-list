Project: Contact list with PostgreSQL Database

Description
This project is a simple contact list application where users can add, edit, and delete contact information. It uses Node.js and Express.js for the backend, PostgreSQL for persistent data storage, and EJS as the templating engine for rendering the front-end. The application is designed to handle basic CRUD operations (Create, Read, Update, Delete) for managing a list of contacts. Each contact contains fields such as Name, Phone Number 1, Phone Number 2, Email, and Location.

Features

- Add new contacts with details like Name, Phone Numbers, Email, and Location.
- View the list of all contacts in a table format.
- Edit existing contact details.
- Delete contacts.
- Responsive design with CSS for improved user interface.

Technologies Used

1. Node.js: JavaScript runtime used to build the server-side logic of the application.
2. Express.js: Web application framework for Node.js, used to manage routes and handle HTTP requests.
3. PostgreSQL: Relational database used for storing contacts' data persistently.
4. pg (node-postgres): PostgreSQL client for Node.js, used to communicate with the PostgreSQL database.
5. EJS (Embedded JavaScript Templates): Templating engine used to dynamically generate HTML views.
6. CSS: For styling the front-end of the application, making the UI user-friendly.
7. JavaScript: Client-side scripting for adding interactivity to the UI.
8. HTML5: Markup language used for structuring the web pages.

Structure

- Routes (routes/index.js): Contains all the routes for handling GET, POST requests for adding, editing, and deleting contacts.
- Views (views folder): Contains EJS files for rendering different views (add contact, edit contact, contact list).
  - index.ejs: Displays the list of contacts.
  - form.ejs: Form to add a new contact.
  - edit.ejs: Form to edit an existing contact.
- Database: PostgreSQL database to store contacts with fields such as name, phone numbers, email, and location.
- CSS (public/style.css): Stylesheet to provide consistent formatting for the application.

Future Improvements

- Add user authentication for managing personal contact lists.
- Implement pagination for handling large lists of contacts.
- Integrate search functionality to filter through contacts.
- Enhance UI with frameworks like Bootstrap or Tailwind CSS.

How It's Used

1. Adding a New Contact

   - Navigate to the Add Contact page by clicking the "Add New Contact" button on the main contact list screen.
   - A form will appear where you can input the following details:
     - Name: The full name of the contact.
     - Phone Number 1: Primary phone number (required).
     - Phone Number 2: Optional secondary phone number.
     - Email: The email address of the contact.
     - Location: The physical location (city, country, etc.).
   - Once all details are entered, click the Add Contact button to save the contact in the database.
   - The newly added contact will be visible in the contact list on the homepage.

2. Editing a Contact

   - On the main contact list page, each contact will have an Edit button.
   - Click the Edit button corresponding to the contact you want to modify.
   - You will be taken to the Edit Contact page where the existing details of the contact will be pre-filled in the form.
   - Modify any field you need to update (Name, Phone Numbers, Email, or Location).
   - Click Save to update the contact details in the database.
   - The changes will be reflected in the contact list on the homepage.

3. Deleting a Contact
   - Each contact entry in the list has a Delete button.
   - To delete a contact, simply click the Delete button next to the corresponding contact.
   - A confirmation prompt will appear to ensure you want to delete the contact.
   - Once confirmed, the contact will be removed from the database, and the updated list will be shown.

Credits
Developed by Dr. Kato Samuel Namuene
Email: kato.namuene@ubuea.cm
