// src/app/features/user/components/UserCard.tsx
import React from 'react';
import { useUserData } from '../hooks/useUserData';

/**
 * UserCard コンポーネント
 * カスタムフック useUserData で取得したユーザーデータを表示する
 */
const UserCard: React.FC = () => {
  const { data, error, isLoading } = useUserData();

  if (isLoading) return <div>読み込み中...</div>;
  if (error) return <div>エラーが発生しました。</div>;

  return (
    <div>
      <h2>ユーザー情報</h2>
      <p>名前: {data.name}</p>
      <p>メール: {data.email}</p>
    </div>
  );
};

export default UserCard;
