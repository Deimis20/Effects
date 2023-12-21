import { useEffect } from "react";
import { useState } from "react";
import Cat from "../cat/Cat";
import Search from "../search/Search";
const App = () => {
  const [cats, setCats] = useState([]);
const [search, setsearch] = useState(false)
const handleSearch=(data)=>{
  setsearch(data);
}
  useEffect(() => {{
    if(search)
    try{
        fetch(`https://ap.thecatapi.com/v1/images/search?breed_ids=${Search}`)
          .then(response => response.json()
          .then(data => setCats(data)));
        }catch (msg) {
          console.log(msg);
        }
  }}, [search]);
  return (
    <>
    <h1>Kates nuotrauka pagal veisle</h1>
      <Search onSearch={handleSearch}></Search>
      {cats?.map((cats) => (
        <Cat key={cats.id} url={cats.url} />
      ))}
    </>
  );
};

export default App;
