import { useEffect, useState } from "react";

export const SearchInput = () => {

  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = (e) =>{
    e.preventDefault();
    setSearch(e.target.value.toLowerCase().replaceAll(' ', '+'))
    console.log(search);
  }

  async function fetchedData (){
      await fetch(`http://openlibrary.org/search.json?q=${search}`)
      .then(res => res.json())
      .then(json => setResults(json))
      console.log(results.docs);
}

  useEffect(() => fetchedData, [search] );

  return (
    <div>
      <form onChange={handleSearch}>
        <input type="text"></input> 
      </form>
    </div>
  )
}
