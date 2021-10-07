import { useState } from "react";
import { store } from "../index";

function PhoneForm() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    // First Name 
    const changeInputFirstName = e => {
        setFirstName(e.target.value);
    }

    // Last Name
    const changeInputLastName = e => {
        setLastName(e.target.value);
    }

    // Phone Numbere
    const  changeInputPhoneNumbere = e => {
        setPhoneNumber(e.target.value);
    }

    const formSubmit = e => {
        e.preventDefault();
        if ((firstName !== "" && firstName.length <= 15) || ((lastName !== "" && lastName.length <= 15) && phoneNumber !== "")) {
            e.preventDefault();
            store.dispatch({ type: "ADD", payload:{ firstName:firstName, lastName: lastName, phoneNumber:phoneNumber} })
            setFirstName("");
            setLastName("");
            setPhoneNumber("");
        }
    }

    return (
     
        
        <form onSubmit={formSubmit} className="form_all" >
        <h4>Add new contact</h4>
        <div className = "form">
            <input
                type="text" value={firstName}
                placeholder = "first name"
                pattern="^[a-zA-Zа-яА-Я]+$"
                title="the field must contain only letters no more than 15"
                onChange={changeInputFirstName}
                
            />
               <input
                type="text" value={lastName}
                placeholder = "last name"
                pattern="^[a-zA-Zа-яА-Я]+$"
                title="the field must contain only letters no more than 15"
                onChange={changeInputLastName}
                
            />
               <input
                type="tel" value={phoneNumber}
                placeholder=" +70000000000"
                pattern="^[+][0-9]{11}$"
                title=" ex: +70000000000 "
                onChange={changeInputPhoneNumbere}
                
            />

            <button type="submit"> Add </button>
            </div>
        </form>
    )
}
export default PhoneForm;