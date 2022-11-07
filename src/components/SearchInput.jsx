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
  // view
  // ----

  return (
    <div className="py-10">
      <div className="text-2xl mb-2">
        <h1>¡Search your book by title or author's name!</h1>
      </div>
      <form onSubmit={handleForm}>
        <input 
          onChange={handleSearchInput} 
          type="text" 
          placeholder="E.g. Diana Uribe"
          className="px-14 py-2 font-semibold placeholder-gray-500 text-black rounded-2xl border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2"
        />
        <button 
          type="submit" 
          className="ml-5 py-2 bg-gray-500 px-5 rounded-2xl"
        >Search
        </button>
      </form>
    </div>
  )
}
