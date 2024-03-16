// Imports of react
import React,{ useState } from 'react'

// Function for razor-pay integration
const Razor = (props) => {
    const [amount, setamount] = useState(100);
    const handleSubmit = (e)=>{
      e.preventDefault();
      if(amount === ""){
      alert("please enter amount");
      }else{
        var options = {
          key: "rzp_test_i5N2gwFjORpxQZ",
          key_secret:"qcdRUUWcABooj2mIAjILps56",
          amount: amount*props.price,
          currency:"INR",
          name:"Vibes Verse",
          description:"Buy us a coffee",
          handler: function(response){
            alert(response.razorpay_payment_id);
          },
          prefill: {
            name:"Vedansh Jain",
            email:"vedansh.code@gmail.com",
            contact:"7415889987"
          },
          notes:{
            address:"Razorpay Corporate office"
          },
          theme: {
            color:"#3399cc"
          }
        };
        var pay = new window.Razorpay(options);
        pay.open();
      }
    }
    return (
        <button onClick={handleSubmit}  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Buy Now</button> 

       );
}

export default Razor