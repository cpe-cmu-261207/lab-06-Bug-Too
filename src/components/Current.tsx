import axios from "axios";
import { useEffect, useState } from "react";


const Current = () => {

    const [price, setPrice] = useState([])
    const [date, setDate] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)



    useEffect(() => {
        setLoading(true)
        axios.get('https://api.coindesk.com/v1/bpi/currentprice/thb.json')
            .then(response => {
                setPrice(response.data.bpi.THB.rate)
                setDate(response.data.time.updated)
                setLoading(false)
            })
            .catch(error => {
                setError(true)
                setLoading(false)
                console.log(error)
            })
    },[])


    let Load = (
    <div className='text-center space-y-3'>
        <p className='text-2xl'>Loading ...</p>
    </div>)
    let BTCprice = (
        <div className='text-center space-y-3'>
            <p className='text-2xl font-semibold'>Current price</p>
            <p className='text-2xl'>{price} THB</p>
            <p> (Last updated {date}) </p>
        </div>
    )
    let Err = (
        <div className='text-center space-y-3'>
        <p className='text-2xl'>ERR</p>
        </div>
    )


    if (loading) {
        return Load
    }
    else if(error){
        return Err
    }
    else{ 
        return BTCprice
    }


}

export default Current