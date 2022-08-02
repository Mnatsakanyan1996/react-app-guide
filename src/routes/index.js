import { Routes, Route } from 'react-router-dom';

import Home from 'pages/Home';
import About from 'pages/About';
import TemplateController from 'pages/TemplateController';

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<TemplateController />} />
      <Route path="home" element={<Home />} />
      <Route path="about" element={<About />} />
    </Routes>
  );
};
