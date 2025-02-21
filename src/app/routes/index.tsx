// src/app/routes/index.tsx
import React from 'react';
import UserCard from '../features/user/components/UserCard';

/**
 * HomePage コンポーネント
 * アプリのルートページとして、UserCard を表示する
 */
const HomePage: React.FC = () => {
  return (
    <div>
      <h1>ホームページ</h1>
      <UserCard />
    </div>
  );
};

export default HomePage;
