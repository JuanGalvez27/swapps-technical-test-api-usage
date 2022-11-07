import { useState } from "react";
import useFetchData from "../hooks/useFetchData";

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

/**
 * handlers
 */
  const handleSearchInput = (e) =>{
    setTerm(e.target.value.toLowerCase().replaceAll(' ', '+'));
  }

  const handleForm = (e) => {
    e.preventDefault();
    setSearch(term);
  } 

  return (
    <div className="bg-[url('https://assets.weforum.org/article/image/responsive_big_webp_hySrQhk9QgN45B-0z8PR0bd8ZRyDZ9LnvzPSGaIb91Q.webp')] flex  h-screen justify-center items-center w-screen">
      <div className="container bg-yellow-700 w-9/12 p-12 rounded-3xl">
        <div className="text-3xl mb-2">
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
            className="ml-5 py-2 bg-gray-500 px-5 rounded-2xl hover:bg-gray-800"
          >Search
          </button>
        </form>
      </div>
    </div>
  )
}
