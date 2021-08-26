import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const HistoryResult = () => {
    const url = useLocation()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    const [price, setPrice] = useState<string[]>([]);
    let  btcprice:string[] = [];



    useEffect(() => {

        setLoading(true)
        axios.get(`https://api.coindesk.com/v1/bpi/historical/close.json?currency=THB&start=${url.search.substring(7, 17)}&end=${url.search.substring(22, 32)}`)
            .then(response => {
                
                // setDate(response.data.time.updated)
                const reprices:Record<string,number> = response.data.bpi;

                for (const [key, value] of Object.entries(reprices)) {
                    
                    btcprice.push(key+" - "+value.toLocaleString());
                    
                    console.log(`${key}: ${value}`);
                }
                setPrice(btcprice)
                setLoading(false)
            })
            .catch(error => {
                setError(true)
                setLoading(false)
                console.log(error)
            })
    }, [])



    const history = () => {
        if (loading) {
            return <p className='text-2xl'>Loading ...</p>
        }
        else if (error) {
            return <p className='text-2xl text-red-500'>There was an error. Please try again later.</p>
        }
        else {
            return (
                <div>
                    <p className="text-xl font-semibold"> ( From {url.search.substring(7, 17)} To {url.search.substring(22, 32)})</p>
                    {stat()}
                </div>
            )
        }
    }

    const stat = () => {
        return (
            <ul>
                {price.map( (e,index)  => <li className = 'text-xl' key = {index}> {e} </li>) }
            </ul>
        )
    }

    return (
        <div className='text-center space-y-3'>
            <p className='text-2xl font-semibold'>Historical price</p>
            {/* Put function here */}
            {history()}
        </div>
    )
}

export default HistoryResult