import { useContext, useEffect } from "react";
import { DataContext } from '../context/DataContext.js'

/**
 *  hook create to fetch the data
 */

const useFetchData = ({ search }) => {      

    const { setResults } = useContext(DataContext);
    
    useEffect(() => {
        const fetchedData = async () => {
            try{
            await fetch(`https://openlibrary.org/search.json?q=${search}`)
                .then(res => res.json())
                .then(json => setResults(json));
            } catch (error){
            console.error(error);
            }
        }
        fetchedData();
        }, [search]);
}

export default useFetchData;