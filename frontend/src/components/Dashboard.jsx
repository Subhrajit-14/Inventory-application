import React from "react";
import "./dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard-container">
      {/* Sidebar Navigation */}
      <div className="sidebar">
        <div className="user">
          <img src="https://via.placeholder.com/50" alt="User Avatar" />
          <span>SuperAdmin</span>
        </div>
        <nav>
          <ul>
            <li><a href="#"><i className="fa fa-dashboard"></i> Dashboard</a></li>
            <li><a href="#"><i className="fa fa-users"></i> User Management</a></li>
            <li><a href="#"><i className="fa fa-cog"></i> General Settings</a></li>
            <li><a href="#"><i className="fa fa-users"></i> People</a></li>
            <li><a href="#"><i className="fa fa-product-hunt"></i> Product</a></li>
            <li><a href="#"><i className="fa fa-shopping-cart"></i> Purchase</a></li>
            <li><a href="#"><i className="fa fa-chart-line"></i> Sales</a></li>
            <li><a href="#"><i className="fa fa-warehouse"></i> Stock</a></li>
            <li><a href="#"><i className="fa fa-file-alt"></i> Reports</a></li>
          </ul>
        </nav>
      </div>

      {/* Main Dashboard Content */}
      <div className="dashboard-content">
        <h1>Dashboard</h1>
        <div className="dashboard-grid">
          <div className="dashboard-card" style={{ backgroundColor: '#6c757d' }}>
            <div className="card-header">
              <h2>6</h2>
              <p>Total Items</p>
            </div>
            <div className="card-icon">
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="10" y="10" width="10" height="10" fill="white" />
                <rect x="15" y="5" width="10" height="10" fill="white" />
                <rect x="5" y="15" width="10" height="10" fill="white" />
              </svg>
            </div>
            <div className="card-footer">
              <a href="#">More Info <span>&rarr;</span></a>
            </div>
          </div>
          
          <div className="dashboard-card" style={{ backgroundColor: '#28a745' }}>
            <div className="card-header">
              <h2>12596.18</h2>
              <p>Total Sales</p>
            </div>
            <div className="card-icon">
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 15L25 25L20 5L10 5L5 25L15 15Z" fill="white" />
              </svg>
            </div>
            <div className="card-footer">
              <a href="#">More Info <span>&rarr;</span></a>
            </div>
          </div>
          
          <div className="dashboard-card" style={{ backgroundColor: '#17a2b8' }}>
            <div className="card-header">
              <h2>9</h2>
              <p>Total Products</p>
            </div>
            <div className="card-icon">
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="10" y="10" width="10" height="10" fill="white" />
                <rect x="5" y="5" width="10" height="10" fill="white" />
                <rect x="15" y="5" width="10" height="10" fill="white" />
                <rect x="5" y="15" width="10" height="10" fill="white" />
                <rect x="15" y="15" width="10" height="10" fill="white" />
              </svg>
            </div>
            <div className="card-footer">
              <a href="#">More Info <span>&rarr;</span></a>
            </div>
          </div>
          
          <div className="dashboard-card" style={{ backgroundColor: '#007bff' }}>
            <div className="card-header">
              <h2>2</h2>
              <p>Total Members</p>
            </div>
            <div className="card-icon">
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="15" cy="15" r="8" fill="white" />
                <circle cx="18" cy="10" r="3" fill="white" />
                <circle cx="12" cy="10" r="3" fill="white" />
                <circle cx="18" cy="20" r="3" fill="white" />
                <circle cx="12" cy="20" r="3" fill="white" />
              </svg>
            </div>
            <div className="card-footer">
              <a href="#">More Info <span>&rarr;</span></a>
            </div>
          </div>
          
          <div className="dashboard-card" style={{ backgroundColor: '#4285f4' }}>
            <div className="card-header">
              <h2>8</h2>
              <p>Total Category</p>
            </div>
            <div className="card-icon">
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="5" y="5" width="10" height="10" fill="white" />
                <rect x="15" y="5" width="10" height="10" fill="white" />
                <rect x="5" y="15" width="10" height="10" fill="white" />
                <rect x="15" y="15" width="10" height="10" fill="white" />
                <rect x="5" y="25" width="10" height="10" fill="white" />
                <rect x="15" y="25" width="10" height="10" fill="white" />
              </svg>
            </div>
            <div className="card-footer">
              <a href="#">More Info <span>&rarr;</span></a>
            </div>
          </div>
          
          <div className="dashboard-card" style={{ backgroundColor: '#ffc107' }}>
            <div className="card-header">
              <h2>2</h2>
              <p>Total Elements</p>
            </div>
            <div className="card-icon">
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="10" y="10" width="10" height="10" fill="white" />
                <rect x="15" y="15" width="10" height="10" fill="white" />
              </svg>
            </div>
            <div className="card-footer">
              <a href="#">More Info <span>&rarr;</span></a>
            </div>
          </div>
          
          <div className="dashboard-card" style={{ backgroundColor: '#20c997' }}>
            <div className="card-header">
              <h2>7</h2>
              <p>Paid Orders</p>
            </div>
            <div className="card-icon">
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 15L15 20L20 15" stroke="white" strokeWidth="2" />
              </svg>
            </div>
            <div className="card-footer">
              <a href="#">More Info <span>&rarr;</span></a>
            </div>
          </div>
          
          <div className="dashboard-card" style={{ backgroundColor: '#dc3545' }}>
            <div className="card-header">
              <h2>1</h2>
              <p>UnPaid Orders</p>
            </div>
            <div className="card-icon">
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 15L15 10L20 15" stroke="white" strokeWidth="2" />
              </svg>
            </div>
            <div className="card-footer">
              <a href="#">More Info <span>&rarr;</span></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
