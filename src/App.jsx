import React, { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom'
import Layout from './components/Layout';
import Resource from './components/Resource';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const navigate = useNavigate()

  const handleCategorySelect = (category) => {
    setSelectedCategory(category)
    navigate(`/${category}`.toLowerCase().replaceAll(" ", "-"))
  };
  
  return (
    <Layout selectedCategory={selectedCategory} onCategorySelect={handleCategorySelect}>
      <Routes>
        <Route path={"/:category"} element={<Resource category={selectedCategory} />}/>
      </Routes>
    </Layout>
  );
}
