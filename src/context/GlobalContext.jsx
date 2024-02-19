import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";


export const GlobalContext = createContext(null);


export default function GlobalState({children}) {
    const [searchParam, setSearchParam] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState([]);
    const [favList, setFavList] = useState([]);
    const navigate = useNavigate();
    

    function handleFav(itemId) {
        let cpyFavList = [...favList];

        const itemIndex = cpyFavList.findIndex(item => item === itemId);

        if (itemIndex === -1) {
            cpyFavList.push(itemId);
        } else {
            cpyFavList.splice(itemIndex, 1);
        }

        setFavList(cpyFavList)

        console.log(cpyFavList);
    }


    async function handleSubmit(event) {
        event.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchParam}`);
            if (!response.ok) throw new Error(response.statusText);
            const result = await response.json();
            setError(null);
            if (result?.meals) {
                setData(result.meals);
            } else {
                throw new Error("No Result Found");
            }
        } catch(e) {
            setError("An error occured while Loading data");
            
        } finally {
            document.getElementById('searchInput').blur();
            setLoading(false);
            navigate('/search')
        }
    }

    function handleSearch(query) {
       
    }

    // async function handleSearch(event) {
    //     event.preventDefault();
    //     setLoading(true);
    //     try {
    //         const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchParam}`);
    //         if (!response.ok) throw new Error(response.statusText);
    //         const result = await response.json();
    //         setError(null);
    //         if (result?.meals) {
    //             setData(result.meals);
    //         } else {
    //             throw new Error("No Result Found");
    //         }
    //     } catch(e) {
    //         setError("An error occured while Loading data");
            
    //     } finally {
    //         document.getElementById('navbar-search').blur();
    //         setLoading(false);
    //     }
    // }
    
    return <GlobalContext.Provider
        value={{searchParam,
            setSearchParam,
            handleSearch,
            error,
            loading,
            data,
            handleFav,
            favList,
            handleSubmit
        }}
    >
        {children}
    </GlobalContext.Provider>
}