import { useContext, useEffect, useState } from "react";
import { DataContext } from "../context/DataContext";
import BookCard from "./BookCard";

export const SearchInput = () => {
  const [search, setSearch] = useState('diana+uribe');
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

  useEffect(() => {
    const fetchedData = async () => {
      try{
        await fetch(`http://openlibrary.org/search.json?q=${search}`)
          .then(res => res.json())
          .then(json => setResults(json));
        
      } catch (error){
        console.error(error);
      }
    }
    fetchedData();
  }, [search]);

  return (
    <div>
      <form onSubmit={handleForm}>
        <input onChange={handleSearchInput} type="text" placeholder="E.g. Diana Uribe"></input>
        <button type="submit" >Search</button>
      </form>
    </div>
  )
}
