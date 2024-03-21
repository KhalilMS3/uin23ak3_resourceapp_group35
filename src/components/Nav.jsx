import React from 'react'
import { resources } from '../assets/resources'
import '../styles/main.scss'


export default function Nav({onCategorySelect}) {
  return (
    <nav>
      <ul>
        {resources.map((resource, index) => (
          <li key={index}>
            <button onClick={() => onCategorySelect(resource.category)}>
              {resource.category}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
