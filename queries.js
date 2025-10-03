// crude operations
const { MongoClient } = require("mongodb");

// same URI you used in insert_books.js
const uri = "mongodb://Daniel:danielyaw44@localhost:27017/plp_bookstore?authSource=admin";
const dbName = "plp_bookstore";
const collectionName = "books";

async function runQueries() {
  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log("Connected to MongoDB for queries");

    const db = client.db(dbName);
    const Book = db.collection(collectionName);

    // Task 2
// find all book in a specific genre
    // const books = await Book.find({ genre: 'Fiction' });
    // console.log("Books with genre 'Fiction':", books);

// find books published after a certain year
//    const books = await Book.find({ published_year: { $gt: 1855 } }).toArray();
//    console.log("Books published after 1855:", books);

// find books by a specific author
    // const books = await Book.find({ author: 'Paulo Coelho' }).toArray();
    // console.log("Books by Paulo Coelho:", books);

// // update the price of a specific book
    // const books = await Book.updateOne(
    //     { title: 'The Alchemist' },
    //     {$set: {price: 29.89} }
    // );

// // delete a book by its title
    // const result = await Book.deleteOne(
    //     {title: 'Animal Farm'}
    // );    

     // Task 3

// write a query to find books that are both in stock and published after 2010
    // const books = await Book.find({ in_stock: true, published_year: { $gt: 2010 } }).toArray();
    // console.log("Books in stock and published after 2010:", books);

// use projection to return only the title, author, and price fields in your queries
    // const books = await Book.find({}, { title: 1, author: 1, price: 1  }).toArray();
    // console.log("Books with only title, author, and price fields:", books);

// implement sorting to display books by price (both ascending and descending)
    //  const booksAsc = await Book.find({}).sort({ price: 1 }).toArray();
    //  console.log("Books sorted by price (ascending):", booksAsc);

    //  const booksDesc = await  Book.find({}).sort({ price: -1 }).toArray();
    //  console.log("Books sorted by price (descending):", booksDesc);

// use the limit and skip methods to implemnent pagination ( 5 books per page)
    //  const page = 1; // Change this to get different pages
    //  const limit = 5;
    //  const books = await  Book.find({})
    //      .skip((page - 1) * limit)
    //      .limit(limit).toArray();
    //  console.log(`Books on page ${page}:`, books);


               // Task 4 
    // create an aggregation pipeline to calculate the average price of books by genre
    //    const avgPriceByGenre = await  Book.aggregate([
    //           { $group: { _id: "$genre", avgPrice: { $avg: "$price" } } }
    //           ]).toArray();
    //      console.log("Average price of books by genre:", avgPriceByGenre);
    
    // create an aggregation pipeline to find the author with the most books in the collection
        //   const authorWithMostBooks = await  Book.aggregate([
        //       { $group: { _id: "$author", bookCount: { $sum: 1 } } },
        //       { $sort: { bookCount: -1 } },
        //       { $limit: 1 }
        //   ]).toArray();
        //     console.log("Author with the most books:", authorWithMostBooks);

    // implement a pipeline that groups books by publication decade and counts them
        // const booksByDecade = await Book.aggregate([
        //     { $group: { _id: { $concat: [ { $toString: { $multiply: [ { $floor: { $divide: [ "$published_year", 10 ] } }, 10 ] } }, "s" ] }, count: { $sum: 1 } } },
        //     { $sort: { _id: 1 } }
        // ]).toArray();
        //   console.log("Books grouped by publication decade:", booksByDecade);
     
                  // Task 5
    // create an index on the title field for faster searches
        // await Book.createIndex({ title: 1 });
        // console.log("Index created on title field.");

    // create a compound index on author and published_year
        // await Book.createIndex({ author: 1, published_year: -1 });
        // console.log("Compound index created on author and published_year.");


// use the explain method to demonstrate the performance improvement with your indexes
    //    const queryWithoutIndex = await Book.find({ author: 'George Orwell' }).explain("executionStats");
    //    console.log("Query execution stats without index:", queryWithoutIndex);

    //    const queryWithIndex = await Book.find({ author: 'George Orwell' }).explain("executionStats");
    //    console.log("Query execution stats with index:", queryWithIndex);

} catch (err) {
    console.error(err);
  } finally {
    await client.close();
    console.log("Connection closed");
  }
}

runQueries();