# JSville Courier Management System

This is a JavaScript-based courier management system. It allows users to input package details, validate inputs, sort packages by weight, and generate unique tracking codes.

## Prerequisites

A modern web browser (Google Chrome, Mozilla Firefox, Microsoft Edge, etc.).
Internet connection to load the TailwindCSS library.
Project Structure
index.html: The main file containing the layout and UI elements.
index.js: Contains all the JavaScript logic for validation, sorting, and tracking code generation.

## How to Run the Application

#### Step 1: Clone the Repository

Download or clone the repository to your local machine:

#### git clone https://github.com/your-username/jsville-courier.git

Step 2: Open the HTML File
Navigate to the folder where the files were saved.
Open the index.html file in your browser:
Double-click on the index.html file.
Or drag and drop the file into your browser window.
Step 3: Use the Application

#### Fill in all the fields in the form:

Recipient Name: Letters only.
Package ID: Numbers only.
Delivery Address: Letters only.
Weight: Numbers only.
Click the Submit button.

###### Upon submission:

The package table will update.
Packages will be displayed in ascending order of weight.
A tracking code will be generated and displayed for each package.
Features
Input Validation:
Rejects empty or invalid fields.
Displays error messages below problematic fields in red.

## Sorting:

Sorts packages by weight (lightest to heaviest).
Tracking Code Generation:
Uses bitwise operations to create unique codes based on the package ID and weight.
Example Usage
Input:
Name: John Doe
Package ID: 123
Delivery Address: 123 Elm Street
Weight: 50
Click Submit.
Result:
The package will be added to the table.

## A unique tracking code will be generated and displayed.

Technologies Used
HTML5: For the page structure.
CSS with TailwindCSS: For styling.
JavaScript: For validation, sorting, and tracking logic.
Future Improvements
Add local storage to save packages between sessions.
Implement a backend for managing large-scale package data.
Author
Felipe Franco de Camargo // CT1009592

Feel free to reach out for questions or suggestions!
