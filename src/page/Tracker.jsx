import { useState } from "react";
import { addTransaction } from "../api/api";

export default function Tracker(){

    const expenseCategories = [
        'Food',
        'Transport',
        'Bills',
        'Clothes',
        'Electronics',
        'Other'
    ]

    const incomeCategories = [
        'Salary',
        'Savings',
        'Gifts',
        'Investments',
        'Other'
    ]
    const [category,setCategory] = useState([
        ...expenseCategories
    ]);

    const [form,setForm] = useState({
        incomeOrExpense:'',
        category:'',
        description:'',
        amount:'',
        date:''
    });


    return (
        <>
        
<form>
<div className="grid gap-6 w-1/2" style={{marginLeft:'25%'}}>
        
<select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={(e)=>{
    setForm({...form,incomeOrExpense:e.target.value})
    console.log("E")
    if(e.target.value=="in"){
        setCategory([...incomeCategories])
    }else{
        setCategory([...expenseCategories])
    }
}} >
<option selected>Select Income or Expense</option>
  <option value="in">Income</option>
  <option value="ex">Expense</option>
  
</select>


<select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onSelect={(e)=>{
    setForm({...form,category:e.target.value})
}}>
  <option selected>Categories</option>
    {
        category.map((item, index)=>{
            return(
                <option key={index} value={item}>{item}</option>
            )
        })
    }
  
</select>
            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Description" required onChange={(e)=>{
    setForm({...form,description:e.target.value})
            }} />

            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Amount" required onChange={(e)=>{
    setForm({...form,amount:e.target.value})
            }}/>
            <input type="date" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Amount" required onChange={(e)=>{
    setForm({...form,date:e.target.value})
            }}/>

    </div>
    <button onClick={()=>{
        addTransaction(form)
    }} type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-6 w-full">Add Transaction</button>
</form>

        </>
    )
}