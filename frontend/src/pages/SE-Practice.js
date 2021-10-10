//import articles from "../dummydata/articles.js";
import Styles from "../components/tablestyle.js";
import Table from "../components/evidencetable.js";
import tablecolumns from "../components/tablecolumns.js";
import Dropdown from "../components/Dropdown.js";
import axios from "axios";
import React from "react";
import articles from "../dummydata/articles.js";

class SEPractice extends React.Component{

  constructor(props)
  { 
    super(props);
    this.state = { articles: []};

    axios
      .get(`/api/userarticles/`)
      .then((res) => {
        this.setState({articles:res.data});
      })
      .catch((err) => {
        console.log("Error in SE-Practice: Cannot fetch data from database.");
      });



    this.handlePractice = this.handlePractice.bind(this);
  }

  handlePractice(optionItems)
  {

    if (optionItems == "") {

      axios
      .get(`/api/userarticles/`)
      .then((res) => {
        this.setState({articles:res.data});
      })
      .catch((err) => {
        console.log("Error in SE-Practice: Cannot fetch data from database.");
      });
      
    }

    else 
    { axios
      .get(`/api/userarticles/option/${optionItems}`)
      .then((res) => {
        this.setState({articles:res.data});
      })
      .catch((err) => {
        console.log("Error in SE-Practice: Cannot fetch data from database.");
      });
    }

  }

  

  render(){return (
    <div>
      <h2>Select SE Practice to get evidence for the claimed benefits</h2>
      <option value="">Select an SE Practice </option>
      <Dropdown onDropdown={this.handlePractice}/>
      <Styles>
        <Table data={this.state.articles} columns={tablecolumns} />
      </Styles>
    </div>
  );
};}

export default SEPractice;
