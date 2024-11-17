document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('fetch-all-products-button')?.addEventListener('click', async () => {
        const getAllProducts = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/all-products');
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return await response.json();
            } catch (error) {
                console.error('Error fetching products:', error);
                return null;
            }
        };

        const renderTable = async () => {
            const products = await getAllProducts();
    
            // Reference to the table body
            const tableBody = document.getElementById('products-table-body');
    
            // Clear existing rows (if any)
            tableBody.innerHTML = '';
    
            // Populate table with products
            products.forEach((product) => {
                const row = document.createElement('tr'); // Create a row
    
                // Create and append cells
                const nameCell = document.createElement('td');
                nameCell.textContent = product.name;
                row.appendChild(nameCell);
    
                const skuCell = document.createElement('td');
                skuCell.textContent = product.id;
                row.appendChild(skuCell);
    
                const priceCell = document.createElement('td');
                priceCell.textContent = product.pris;
                row.appendChild(priceCell);
    
                // Append the row to the table body
                tableBody.appendChild(row);
            });
        };
    
        // Call the renderTable function to populate the table
        renderTable();

    });

    const productForm = document.getElementById('submit_product_form');

    // Handle form submission
    productForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the default form submission behavior

        
        // Gather form data
        const formData = new FormData(productForm);

        // Create a product object
        const product = {
            name: formData.get('product-name'),
            description: formData.get('product-description'),
            img_src: formData.get('product-image'), // File input
            brand: formData.get('product-brand'),
            id: formData.get('product-sku'),
            price: parseFloat(formData.get('product-price')),
        };

        // Log the product data (for demonstration)

        // Example: Send product data to a server via an API
        fetch('http://localhost:3000/api/products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(product), // Send as JSON
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                console.log('Product added successfully:', data);
                alert('Product added successfully!');
                productForm.reset(); // Reset the form after successful submission
            })
            .catch((error) => {
                console.error('Error adding product:', error);
                alert('Failed to add product!');
            });
    });
});

