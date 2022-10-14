import axios from 'axios';
import React, { useState } from 'react'

const AddBudget = ({toggleBudget, setBudgetData}) => {

    const [budgetDetails, setBudgetDetails] = useState({
        amount: 0,
        category: "All",
        timeFrame: "Monthly"
    })
    const expenseCategories = [
        "All",
        "Food",
        "Social Life",
        "Self-Development",
        "Transportation",
        "HouseHold",
        "Health",
        "Apparel",
        "Other",
      ];

    const onChange =(e)=>{
        switch (e.target.name){
            case "inputAmount":
                setBudgetDetails({...budgetDetails, amount: Number(e.target.value)})
            break;
            case "categories":
                setBudgetDetails({...budgetDetails, category: e.target.value})
            break;
        }
    }


    const handleAddButton = () =>{

        budgetDetails.amount===0?
        alert("input an amount")
        :
        
        axios.post("http://localhost:8080/api/v1/budgets",budgetDetails).then(
        toggleBudget()
        )
        
        
        
    }

    const categoryOptions = expenseCategories.map( category=>
        <option key={category} value={category}>{category}</option>
    )
  return (
    <div>
        <h2>Add a monthly budget</h2>
        <label>Amount: </label>
        <input type="number" name='inputAmount' onChange={onChange} value={AddBudget.amount}></input>
        <label>Choose a category: </label>
        <select name="categories" onChange={onChange} >{categoryOptions}</select>

        <div>
        <button onClick={handleAddButton}>Add Budget</button>
        <button onClick={()=>toggleBudget()}>Cancel</button>
        </div>
    </div>
  )
}

export default AddBudget