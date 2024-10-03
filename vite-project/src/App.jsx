import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigation from './Components/Navigation';
import Home from './Pages/Home';
import Blog from './Pages/Blog';
import Post from './Pages/Post';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/post/:id" element={<Post />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
