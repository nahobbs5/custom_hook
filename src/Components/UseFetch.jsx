import { useState, useEffect} from "react";

// url parameter lets you specify exact url of website.
// Allows components to provide URL dynamically
const UseFetch = (url) => {
    const[data, setData] = useState();
    //used for performing side effects in fuctional components
    useEffect(() => (
        //initiate HTTP request to specified url and convert response to JSON
        //setData updates state in React functional components
        fetch(url).then((res)=>res.json())
        .then((data)=>setData(data))
    ),[])

return[data]
}

export default UseFetch
