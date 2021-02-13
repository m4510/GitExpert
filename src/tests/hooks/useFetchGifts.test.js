import React from 'react';
import { useFetchGifts } from '../../hooks/useFetchGifts';
import { renderHook } from '@testing-library/react-hooks';

describe('Test useFetchGifts', () => {
  test('should return initial state', async () => {
    const category = 'One Punch';
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifts(category)
    );
    const { data, loading } = result.current;

    await waitForNextUpdate();
    expect(data.length).toBe(0);
    expect(loading).toBe(true);
  });

  test('should render updated data state', async () => {
    const category = 'One Punch';
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifts(category)
    );
    await waitForNextUpdate();
    const { data, loading } = result.current;

    expect(data.length).toBe(10);
    expect(loading).toBe(false);
  });
});
