const Database = require('better-sqlite3');
const db = new Database('freaky-fashion.db', { verbose: console.log });


const createProductsTable = "CREATE TABLE IF NOT EXISTS products(id varchar PRIMARY KEY, name varchar, pris int, brand varchar, description varchar, img_src varchar);"
db.exec(createProductsTable);

const fetchData = () => {
    try {
        const products = db.prepare("SELECT * FROM products").all();        
        return products;
    } catch (error) {
        console.error("Error fetching data:", error);
        return [];
    }
}

const insertData = (id, name, pris, brand, description, imgSrc) => {
    console.log(id, name, pris, brand, description, imgSrc, ' id, name, pris, brand, description, imgSrc');
    
    try {
      // Insert data into the products table
      const insert = db.prepare("INSERT INTO products (id, name, pris, brand, description, img_src) VALUES (?, ?, ?, ?, ?, ?)")
      const result = insert.run(id, name, pris, brand, description, imgSrc)
      console.log(`Success: Inserted row with id ${result.lastInsertRowid}`);
      return result
    } catch (error) {
      console.error(`Error inserting data: ${error.message}`);
      return error
    }
}

const fetchProduct = (product_id) => {
    try {
        const product = db.prepare('SELECT * FROM products WHERE id=' + product_id).get();
        return product;
    } catch (error) {
        console.error("Error fetching product:", error);
        return []; // Return an empty array if there's an error
    }
}

module.exports = { fetchData, fetchProduct, insertData };