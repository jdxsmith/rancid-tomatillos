const movieData = () => {
  return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
  .then(response => response.json())
}


// Potential method for dealing with server errors 👇
// const movieData = async () => {
//   // const response = await fetch('https://httpstat.us/500');
//   const response = await fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies');
//   if (response.status >= 200 && response.status <= 299) {
//     const jsonResponse = await response.json();
//     return jsonResponse;
//   } 
// }

export { movieData };