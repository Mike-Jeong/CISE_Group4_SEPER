import axios from 'axios';

var articles = [axios.get('http://localhost:5000/api/userarticles')

.then(res => {

console.log(res.data);

articles = res.data

})

.catch(err => {

console.log(err);

})

];
  
  export default articles;