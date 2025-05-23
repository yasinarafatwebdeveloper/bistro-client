import { useEffect, useState } from "react";

const useHookMenu=()=>{

 const [menu, setMenu] = useState([]);
const[loading,setLoading]=useState(true)
 useEffect(() => {
        fetch("http://localhost:5000/data")
            .then((res) => res.json())
            .then(data=>{
                setMenu(data);
                setLoading(false)
            })
    }, []); 

    return[menu,loading];

}
export default useHookMenu;


