import React from 'react'
import { resources } from '../assets/resources'
import '../styles/main.scss'


export default function Nav({}) {
  return (
    <nav>
      <ul>
        {resources.map((resource, index) => (
          <li key={index}>

            <button>
              {resource.category}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
