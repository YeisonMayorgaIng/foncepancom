const baseUrl =
  process.env.NODE_ENV === 'production'
    ? 'https://foncepan.com'
    : 'http://localhost:3000';

export default baseUrl;
