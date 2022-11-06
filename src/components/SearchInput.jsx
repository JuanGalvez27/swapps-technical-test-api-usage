import { useContext, useEffect, useState } from "react";
import { DataContext } from "../context/DataContext";

export const SearchInput = () => {
  const [search, setSearch] = useState('');
  const [term, setTerm] = useState('');
  const {results, setResults} = useContext(DataContext);

  const handleSearchInput = (e) =>{
    setTerm(e.target.value.toLowerCase().replaceAll(' ', '+'));
    console.log(term);
  }

  const handleForm = (e) => {
    e.preventDefault();
    setSearch(term);
  } 

  const fetchedData = async () => {
    try{
      await fetch(`http://openlibrary.org/search.json?q=${search}`)
        .then(res => res.json())
        .then(json => setResults(json));
      console.log([results])
    } catch (error){
      console.error(error);
    }
  }

  useEffect(() => fetchedData, [search]);

  return (
    <div>
      <form onSubmit={handleForm}>
        <input onChange={handleSearchInput} type="text"></input>
        <button type="submit">Search</button>
      </form>
    </div>
  )
}
