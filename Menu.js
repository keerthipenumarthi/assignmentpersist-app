import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Menu = ({ items }) => {
  const location = useLocation();

  return (
    <nav
      style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '2rem',
        padding: '1rem',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        borderBottom: '1px solid rgba(255,255,255,0.1)',
      }}
    >
      {items.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          style={{
            color: location.pathname === item.path ? '#FFD700' : '#fff',
            textDecoration: 'none',
            fontWeight: 'bold',
            transition: 'color 0.3s',
          }}
          onMouseOver={(e) => e.target.style.color = '#FFD700'} // Hover effect
          onMouseOut={(e) => e.target.style.color = location.pathname === item.path ? '#FFD700' : '#fff'} // Revert back
        >
          {/* Optionally, add icons */}
          {item.icon && <i className={`fas fa-${item.icon}`}></i>}
          {item.label}
        </Link>
      ))}
    </nav>
  );
};

export default Menu;
