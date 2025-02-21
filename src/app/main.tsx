// src/app/main.tsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from '@tanstack/react-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { router } from './router';

/**
 * TanStack Query のクライアントを生成
 */
const queryClient = new QueryClient();

const container = document.getElementById('root');
if (!container) throw new Error('ルート要素が見つかりません');
const root = createRoot(container);

/**
 * QueryClientProvider と RouterProvider でアプリ全体をラップする
 */
root.render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>
);
