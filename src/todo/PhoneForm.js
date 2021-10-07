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
        if (firstName !== "" || (lastName !== "" && phoneNumber !== "")) {
            e.preventDefault();
            store.dispatch({ type: "ADD", payload:{ firstName:firstName, lastName: lastName, phoneNumber:phoneNumber} })
            setFirstName("");
            setLastName("");
            setPhoneNumber("");
        }
    }

    return (
        <form onSubmit={formSubmit} className="form" >
            <input
                type="text" value={firstName}
                placeholder = "first name"
                onChange={changeInputFirstName}
                
            />
               <input
                type="text" value={lastName}
                placeholder = "last name"
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
        </form>
    )
}
export default PhoneForm;