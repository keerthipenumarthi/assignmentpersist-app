// components/Menu.js
import React from 'react';
import { Link } from 'react-router-dom';

const Menu = ({ items }) => (
  <nav className="p-4 bg-gray-800 text-white">
    <ul className="flex space-x-4">
      {items.map(item => (
        <li key={item.path}>
          <Link to={item.path} className="hover:underline">
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

export default Menu;