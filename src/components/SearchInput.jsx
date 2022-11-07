import { useState } from "react";
import useFetchData from "../hooks/useFetchData";


/**
 * 1. Mount
 * 2. cilo de vida
 * 3. rerenders
 * 4. unmount
 */
/**
 * TODO: 
 * ESLint
 * Prettier
 */

export const SearchInput = () => {
  const [search, setSearch] = useState('diana+uribe');
  const [term, setTerm] = useState('');

/**
 * Custom hook to fetch data
 */
  useFetchData({ search });

  // ----
  // methods
  // ----

  const handleSearchInput = (e) =>{
    setTerm(e.target.value.toLowerCase().replaceAll(' ', '+'));
  }

  const handleForm = (e) => {
    e.preventDefault();
    setSearch(term);
  } 

  // ----
  // lifecycle
  // ----

  // ----
  // view
  // ----

  return (
    <div>
      <form onSubmit={handleForm}>
        <input onChange={handleSearchInput} type="text" placeholder="E.g. Diana Uribe"></input>
        <button type="submit" >Search</button>
      </form>
    </div>
  )
}
