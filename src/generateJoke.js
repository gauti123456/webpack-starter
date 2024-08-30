import axios from 'axios'
const _ = require('lodash')
function generateJoke() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  }

  console.log(_.chunk([1,3,4,5,6,7],2))

  axios.get('https://icanhazdadjoke.com', config).then((res) => {
    document.getElementById('joke').innerHTML = res.data.joke
  })
}

export default generateJoke
