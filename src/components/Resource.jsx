import React from 'react'
import { resources } from '../assets/resources'
import ContentCard from './ContentCard'

export default function Resource({ category }) {
  const filteredResources = category ? resources.filter(resource => resource.category === category) : [];

  return (
    <>
      {filteredResources.map((resource, index) => (
        <ContentCard
          key={index}
          category={resource.category}
          text={resource.text}
          sources={resource.sources}
        />
      ))}
    </>
  );
}

