
import { useState } from "react";
import { store } from "./../index";

const Item = ({ info, num }) => {
    const [editFN, setEditFN] = useState(false);
    const [editLN, setEditLN] = useState(false);
    const [editPN, setEditPN] = useState(false);
    const [firstName1, setFirstName1] = useState(info.firstName);
    const [lastName1, setLastName1] = useState(info.lastName);
    const [phoneNumber1, setPhoneNumber1] = useState(info.phoneNumber);
    const [submit, setSubmit] = useState(false);


    const formSubmit = e => {
        e.preventDefault();
        if (firstName1 !== "" || (lastName1 !== "" && phoneNumber1 !== "")) {
            e.preventDefault();
            store.dispatch({ type: "CHENGE", payload: { id: info.id, firstName: firstName1, lastName: lastName1, phoneNumber: phoneNumber1 } });
            setEditPN(!editPN);
            setEditLN(!editLN);
            setEditFN(!editFN);
            setSubmit(false);
        }
    }


    return (
        <div key={info.id} className="item" >

            {/* block check */}

            <span className="num">{num}</span>

            {/* block info */}
            <div className = "context">

                {editFN ? <input className="edit_input"
                    type="text"
                    value={firstName1}
                    onChange={e => setFirstName1(e.target.value)}
                /> : <p key="300"> {info.firstName} </p>}
                {editLN ? <input
                    className="edit_input"
                    type="text" value={lastName1}
                    onChange={e => setLastName1(e.target.value)}
                /> : <p key="301"> {info.lastName} </p>}
                {editPN ? <input
                    className="edit_input"
                    type="tel"
                    value={phoneNumber1}
                    pattern="^[+][0-9]{11}$"
                    title=" ex: +70000000000 "
                    onChange={e => setPhoneNumber1(e.target.value)}
                /> : <p key="302"> {info.phoneNumber} </p>}

            </div>
            {/* block delete and edit*/}
            {!submit ?
                <div className="delete_edit">
                    <div className="delete_item" onClick={() => store.dispatch({ type: "REMOVE", payload: info.id })}>
                        X
                    </div>

                    <div className="edit_item"
                        onClick={() => {
                            setEditFN(!editFN);
                            setEditLN(!editLN);
                            setEditPN(!editPN);
                            setSubmit(true);
                        }}
                    >
                        Edit
                    </div>
                </div> : <div className="edit_item" onClick={formSubmit} > Update</div>}

        </div>

    )

}
export default Item;