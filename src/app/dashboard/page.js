'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import styles from './dashboard.module.css';

const inventoryData = [
  {
    id: 1,
    name: "Laptop Dell XPS 13",
    category: "Electronics",
    stock: 25,
    price: 1299.99,
    status: "In Stock"
  },
  {
    id: 2,
    name: "iPhone 13 Pro",
    category: "Electronics",
    stock: 15,
    price: 999.99,
    status: "Low Stock"
  },
  {
    id: 3,
    name: "Office Desk Chair",
    category: "Furniture",
    stock: 30,
    price: 199.99,
    status: "In Stock"
  },
  {
    id: 4,
    name: "Samsung 4K TV",
    category: "Electronics",
    stock: 0,
    price: 799.99,
    status: "Out of Stock"
  },
  {
    id: 5,
    name: "Wireless Mouse",
    category: "Accessories",
    stock: 50,
    price: 29.99,
    status: "In Stock"
  },
  {
    id: 6,
    name: "Mechanical Keyboard",
    category: "Accessories",
    stock: 8,
    price: 149.99,
    status: "Low Stock"
  },
  {
    id: 7,
    name: "USB-C Hub",
    category: "Accessories",
    stock: 40,
    price: 49.99,
    status: "In Stock"
  },
  {
    id: 8,
    name: "External SSD 1TB",
    category: "Storage",
    stock: 12,
    price: 159.99,
    status: "In Stock"
  },
  {
    id: 9,
    name: "Gaming Monitor",
    category: "Electronics",
    stock: 5,
    price: 349.99,
    status: "Low Stock"
  },
  {
    id: 10,
    name: "Wireless Earbuds",
    category: "Audio",
    stock: 0,
    price: 129.99,
    status: "Out of Stock"
  },
  {
    id: 11,
    name: "Desk Lamp",
    category: "Lighting",
    stock: 20,
    price: 39.99,
    status: "In Stock"
  },
  {
    id: 12,
    name: "Webcam HD",
    category: "Electronics",
    stock: 18,
    price: 79.99,
    status: "In Stock"
  },
  {
    id: 13,
    name: "Printer",
    category: "Electronics",
    stock: 7,
    price: 299.99,
    status: "Low Stock"
  },
  {
    id: 14,
    name: "Standing Desk",
    category: "Furniture",
    stock: 0,
    price: 499.99,
    status: "Out of Stock"
  },
  {
    id: 15,
    name: "Coffee Maker",
    category: "Appliances",
    stock: 15,
    price: 89.99,
    status: "In Stock"
  }
];

export default function DashboardPage() {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
      router.push('/login');
    }
  }, [router]);

  const filteredData = inventoryData.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const getStatusClass = (status) => {
    switch (status.toLowerCase()) {
      case 'in stock':
        return styles.statusInStock;
      case 'low stock':
        return styles.statusLowStock;
      case 'out of stock':
        return styles.statusOutStock;
      default:
        return '';
    }
  };

  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.dashboardHeader}>
        <h1>Inventory Dashboard</h1>
        <div className={styles.searchContainer}>
          <input
            type="text"
            placeholder="Search inventory..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={styles.searchInput}
          />
        </div>
      </div>

      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Category</th>
              <th>Stock</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.category}</td>
                <td>{item.stock}</td>
                <td>${item.price.toFixed(2)}</td>
                <td>
                  <span className={getStatusClass(item.status)}>
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className={styles.pagination}>
        {Array.from({ length: Math.ceil(filteredData.length / itemsPerPage) }).map((_, index) => (
          <button
            key={index}
            onClick={() => paginate(index + 1)}
            className={`${styles.pageButton} ${currentPage === index + 1 ? styles.activePage : ''}`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
