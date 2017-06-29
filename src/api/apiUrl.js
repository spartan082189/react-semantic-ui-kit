const apiUrl = process.env.NODE_ENV === 'development' ? 'http://localhost/dev/src/api.php' : 'http://localhost/prod/src/api.php';

export default apiUrl;
