import { test, expect } from 'vitest';

test('Backend is healthy', async () => {
  const response = await fetch('http://localhost:8000/api/health');
  const data = await response.json();

  expect(response.status).toBe(200);
  expect(data.status).toBe('ok');
});