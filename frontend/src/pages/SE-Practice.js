//import articles from "../dummydata/articles.js";
import Styles from "../components/tablestyle.js";
import Table from "../components/evidencetable.js";
import tablecolumns from "../components/tablecolumns.js";
import Dropdown from "../components/Dropdown.js";
import axios from 'axios';
import { useState } from "react";



const SEPractice = () => {

  const [articles, setArticles] = useState([]);
  
  axios.get("http://localhost:5000/api/userarticles")
    .then(res => {
      setArticles(res.data);
    })
    .catch(err =>{
      console.log('Error in SE-Practice');
    })



    return (
      <div>
        <h2>Select SE Practice to get evidence for the claimed benefits</h2>
        <option value="">Select an SE Practice </option>

        <Dropdown/>
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
