import React from 'react';
import SEPractices from "../dummydata/SEPractices"
import { useState } from 'react';

  const optionItems = SEPractices.map((SEPractice) =>
                <option key={SEPractice.practice}>{SEPractice.practice}</option>
            );
  const Dropdown = (props) => {const [selectValue, setValue] = useState("")

   

  const handleSelect = (e) => {

    setValue(e.target.value);

    props.onDropdown(e.target.value);

  }
  return (

    <div>

         <select value={selectValue} onChange={handleSelect}>

            <option value="">Select an SE Practice </option>

            {optionItems}

         </select>

     </div>



)

}

export default Dropdown;