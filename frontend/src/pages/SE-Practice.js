//import articles from "../dummydata/articles.js";
import Styles from "../components/tablestyle.js";
import Table from "../components/evidencetable.js";
import tablecolumns from "../components/tablecolumns.js";
import Dropdown from "../components/Dropdown.js";
import axios from 'axios';
import { useState } from "react";



const SEPractice = () => {

  const [articles, setArticles] = useState([]);
  
  if (articles.length == 0) {

    axios.get("/api/userarticles")
    .then(res => {
      setArticles(res.data);
    })
    .catch(err =>{
      console.log('Error in SE-Practice: Cannot fetch data from database.');
    })

    return (
      <div>
        <h2>Select SE Practice to get evidence for the claimed benefits</h2>
        <option value="">Select an SE Practice </option>

        <Dropdown/>
        <br/>
        <Styles>
        <Table
        data= {articles}
        columns={tablecolumns}
        />
        </Styles>
      </div>
    );


}
 
export default SEPractice;  
