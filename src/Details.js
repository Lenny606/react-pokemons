import { useState, useEffect } from "react";

function Details(props) {

    console.log(props.url)

    const [details, setDetails] = useState(null);
    const url = props.url;

    const fetchDetails = async () => {

        const response = await fetch(url);
        const data = await response.json();
        const arrayOfDetails = data;
        setDetails(arrayOfDetails)

       

    }

    useEffect(()=>{
        fetchDetails()
    },[]);
   
   
    return (
        <> {details && 
        (
            <div>
                <p>{details.weight}</p>
                <p>{details.height}</p>
                <img src={details.sprites.front_default} />
            </div>
        )}


            {/* {details.map(detail => {
                return <div>
                   {console.log(detail.weigth)}
                    <p>{detail.base_experience}</p>


                </div>
            })} */}
        </>
    )
}

export default Details;