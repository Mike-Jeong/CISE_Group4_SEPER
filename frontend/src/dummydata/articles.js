import axios from 'axios';

var articles = []

axios.get('http://localhost:5000/api/userarticles')

.then(res => {

console.log(res.data);

res.data.forEach(res => {
  articles.push(res.data) 
});
 
console.log(articles);
})

.catch(err => {

console.log(err);

})
  
  export default articles;