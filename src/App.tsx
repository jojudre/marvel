import React from 'react';
import {
  Route, Routes, Navigate,
} from 'react-router-dom';
import { AppRoutes } from 'appConstants';
import CatalogPage from 'pages/CatalogPage';
import MainLayout from 'layout/MainLayout';
import HeroPage from 'pages/HeroPage';

const App = () => (
  <MainLayout>
    <Routes>
      <Route path={`${AppRoutes.Heroes}/:slug`} element={<HeroPage />} />
      <Route path={AppRoutes.Heroes} element={<CatalogPage />} />
      <Route path="" element={<Navigate to={AppRoutes.Heroes} replace />} />
    </Routes>
  </MainLayout>
  
)
export default App;
