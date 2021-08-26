import { useState } from "react";
import { useHistory } from "react-router";





const HistorySelect = () => {
    let history = useHistory();


    const [start , setStart] = useState("")
    const [end , setEnd] = useState("")
    const checkDate = () => {
        let startDate = start.split('-').map(e => parseInt(e));
        let endDate = end.split('-').map(e => parseInt(e));
        
       
        let Newdate1 = new Date(startDate[0], startDate[1], startDate[2])
        let Newdate2 = new Date(endDate[0], endDate[1], endDate[2])
        


        if (Newdate1>Newdate2 || start === "" || end === "") {
            
            return alert("Please select start date and end date correctly");
            
        }
        else{
            
            return history.replace(`./result?start=${start}?end=${end}`)
        }
    }


    return(
        //{/* template for /history/select */}
        <div className='text-center space-y-3 space-x-3'>
        <p className='text-2xl font-semibold'>Select historical range</p>
        <span>From date</span>
        <input type='date' onChange={e => setStart(e.target.value)}></input>
        <span>To date</span>
        <input type='date' onChange={e => setEnd(e.target.value)}></input>
        <br />
        <button onClick={checkDate}>Get data</button>
      </div>
    )
}

export default HistorySelect