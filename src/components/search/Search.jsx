import { useEffect, useState } from "react";

const Search = () => {
  const [breeds, setBreeds] = useState([]);
  const [setInputValue] = useState("");
  useEffect(() => {
    fetch("https://api.thecatapi.com/v1/breeds").then((response) =>
      response.json().then((data) => setBreeds(data))
    );
  }, []);
  const handleSearch = (e) => {
    setInputValue(e.targe.value);
  };
  return (
    <>
      <input
        id="breedInput"
        list="catBreedList"
        placeholder="Iveskite kates veisle.."
        onChange={setInputValue}
      />
      <datalist id="catBreedList">
        {breeds?.map((breeds) => (
          <option key={breeds.id} value={breeds.name}></option>
        ))}
      </datalist>
    </>
  );
};
export default Search;
