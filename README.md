# PLP Bookstore Assignment

## Description
This repository contains scripts for the PLP Bookstore assignment. The goal is to populate a MongoDB database with sample book data and run queries to explore the data.

---

## Files Included
- `insert_books.js` – Script to insert sample book data into MongoDB using Mongoose.
- `queries.js` – Script containing MongoDB queries to interact with the `books` collection.
- `README.md` – This file, explaining how to run the scripts.
- `screenshot.png` – Screenshot of MongoDB Compass or Atlas showing the `books` collection and sample data.

---

## How to Run

1. **Install dependencies**

```bash
npm install mongoose
Run the insert_books.js script
This will populate the books collection in the plp_bookstore database:

bash
Copy code
node insert_books.js
You should see a console log of all inserted books.

Run queries
Use queries.js to run MongoDB queries against your books collection.

Example Queries
Some example queries you can run in queries.js or MongoDB shell:

Find all books:

js
Copy code
db.books.find()
Find books by a specific author:

js
Copy code
db.books.find({ author: "George Orwell" })
Find books published after 1950:

js
Copy code
db.books.find({ published_year: { $gt: 1950 } })
Find books in a specific genre:

js
Copy code
db.books.find({ genre: "Fiction" })
Find in-stock books:

js
Copy code
db.books.find({ in_stock: true })
Notes
Make sure MongoDB is running locally, or update the connection string to your MongoDB Atlas URI.

Running insert_books.js multiple times will clear the existing collection before inserting new data.

Author: Daniel Yaw Dadzie
Course: MERN fullstack
 