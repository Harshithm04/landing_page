const baseURL = 'https://jsonplaceholder.typicode.com';

export async function registerUser(data) {
  // Simulate a POST request to register user data
  const response = await fetch(`${baseURL}/posts`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('Failed to register user');
  }
  return response.json();
}
