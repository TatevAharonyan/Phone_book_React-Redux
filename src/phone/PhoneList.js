
import { store } from "../index";
import Item from "./Item";


const PhoneList = () => {
    const list = store.getState();
    let num = 0;

    return (
        <div className="list" >

            {
                list.map((info) => {
                    num++
                    return <Item info={info} num={num}  key={info.id * 100} />
                })
            }

        </div>
    )
}

export default PhoneList;