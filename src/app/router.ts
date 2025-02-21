// src/app/router.ts
import React from 'react';
import { createReactRouter, RouterProvider } from '@tanstack/react-router';
import { createRoutes } from '@tanstack/react-router';
import HomePage from './routes/index';
import AboutPage from './routes/about';

/**
 * ルート定義
 * ファイルベースルーティングとして、各ページのコンポーネントを紐付ける
 */
const routes = createRoutes([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
]);

/**
 * TanStack Router の生成
 */
export const router = createReactRouter({
  routes,
});
