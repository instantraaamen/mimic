// src/app/features/user/hooks/useUserData.ts
import { useQuery } from '@tanstack/react-query';

/**
 * useUserData
 * TanStack Query を使って、ユーザーデータをフェッチするカスタムフック
 */
export const useUserData = () => {
  return useQuery(['userData'], async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    if (!response.ok) {
      throw new Error('データの取得に失敗しました');
    }
    return response.json();
  });
};
