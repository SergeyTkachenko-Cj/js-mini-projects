
const randomGenre = (() => {

  const getGenre = () => {
    return fetch('https://cors-anywhere.herokuapp.com/https://binaryjazz.us/wp-json/genrenator/v1/genre/1')
            .then(resp => resp.json())
  }
  
  const printGenre = getGenre()
            .then(data => console.log(data))
            .catch(e => console.log('Ooops! Something went wrong.'));
})(); 