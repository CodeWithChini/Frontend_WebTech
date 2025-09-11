import React, { useState } from 'react';

function ProductCrud() {
    const [products, setProducts] = useState([]);

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [editId, setEditId] = useState(null);

  const handleSubmit = (e) => {
      e.preventDefault();
      
    if (editId === null) {
      const newProduct = {
        id: Date.now(),
        name,
        price: parseFloat(price).toFixed(2),
        quantity: parseInt(quantity, 10),
      };
      setProducts([...products, newProduct]);
    } else {
      const updatedProducts = products.map((product) =>
        product.id === editId
          ? { ...product, name, price: parseFloat(price).toFixed(2), quantity: parseInt(quantity, 10) }
          : product
      );
      setProducts(updatedProducts);
      setEditId(null);
    }

    setName('');
    setPrice('');
    setQuantity('');
  };

  const handleDelete = (id) => {
    setProducts(products.filter((product) => product.id !== id));
    if (editId === id) {
      setEditId(null);
      setName('');
      setPrice('');
      setQuantity('');
    }
  };

  const handleEdit = (product) => {
    setEditId(product.id);
    setName(product.name);
    setPrice(product.price);
    setQuantity(product.quantity.toString());
  };

  const handleCancel = () => {
    setEditId(null);
    setName('');
    setPrice('');
    setQuantity('');
  };

  return (
    <div style={styles.container}>
      <h2 style={{ textAlign: 'center' }}>Product CRUD</h2>

      <div style={styles.flexRow}>
        {/* Form Card */}
        <div style={styles.card}>
          <h3>{editId === null ? 'Add New Product' : 'Edit Product'}</h3>
          <form onSubmit={handleSubmit} style={styles.form}>
            <input
              type="text"
              placeholder="Product Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={styles.input}
            />
            <input
              type="number"
              step="0.01"
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              style={styles.input}
            />
            <input
              type="number"
              min="0"
              placeholder="Quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              style={styles.input}
            />
            <div style={styles.buttonRow}>
              <button type="submit" style={styles.primaryButton}>
                {editId === null ? 'Add Product' : 'Update Product'}
              </button>
              {editId !== null && (
                <button type="button" onClick={handleCancel} style={styles.secondaryButton}>
                  Cancel
                </button>
              )}
            </div>
          </form>
        </div>

        {/* Products List Card */}
        <div style={{ ...styles.card, flex: 1, marginLeft: 20 }}>
          <h3>Products List</h3>
          {products.length === 0 ? (
            <p style={{ fontStyle: 'italic' }}>No products added yet.</p>
          ) : (
            <table style={styles.table}>
              <thead>
                <tr>
                  <th style={styles.th}>Name</th>
                  <th style={styles.th}>Price ($)</th>
                  <th style={styles.th}>Quantity</th>
                  <th style={styles.th}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map(({ id, name, price, quantity }) => (
                  <tr key={id} style={styles.tr}>
                    <td style={styles.td}>{name}</td>
                    <td style={styles.td}>{price}</td>
                    <td style={styles.td}>{quantity}</td>
                    <td style={styles.td}>
                      <button onClick={() => handleEdit({ id, name, price, quantity })} style={styles.actionButton}>
                        Edit
                      </button>{' '}
                      <button onClick={() => handleDelete(id)} style={{ ...styles.actionButton, ...styles.deleteButton }}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: 900,
    margin: '40px auto',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: '#333',
  },
  flexRow: {
    display: 'flex',
    alignItems: 'flex-start',
  },
  card: {
    backgroundColor: '#f9f9f9',
    padding: 20,
    borderRadius: 8,
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    width: 350,
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    padding: 10,
    marginBottom: 15,
    fontSize: 16,
    borderRadius: 4,
    border: '1px solid #ccc',
  },
  buttonRow: {
    display: 'flex',
    gap: 10,
  },
  primaryButton: {
    flex: 1,
    padding: '10px 15px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: 4,
    cursor: 'pointer',
    fontWeight: 'bold',
  },
  secondaryButton: {
    flex: 1,
    padding: '10px 15px',
    backgroundColor: '#6c757d',
    color: 'white',
    border: 'none',
    borderRadius: 4,
    cursor: 'pointer',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  th: {
    textAlign: 'left',
    borderBottom: '2px solid #ddd',
    padding: '10px 8px',
  },
  tr: {
    borderBottom: '1px solid #eee',
  },
  td: {
    padding: '10px 8px',
  },
  actionButton: {
    padding: '5px 10px',
    marginRight: 5,
    borderRadius: 4,
    border: 'none',
    cursor: 'pointer',
    backgroundColor: '#17a2b8',
    color: 'white',
  },
  deleteButton: {
    backgroundColor: '#dc3545',
  },
};

export default ProductCrud;
