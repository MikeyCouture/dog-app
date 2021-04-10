import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import ImageItem from "./ImageItem";
import Header from "./Header";

const App = () => {
  const [breedGroup, setBreedGroup] = useState("");
  const [breedList, setBreedList] = useState("");
  const [images, setImages] = useState("");
  const [selected, setSelected] = useState("pug");

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get(
        "https://dog.ceo/api/breeds/list/all",
        {}
      );

      setBreedGroup(Object.values(data.message));
      setBreedList(Object.keys(data.message));
    };
    search();
  }, []);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get(
        `https://dog.ceo/api/breed/${selected}/images/random/3`,
        {}
      );
      setImages(data.message);
    };
    search();
  }, [selected]);

  return (
    <div>
      <Header />
      <SearchBar
        selected={selected}
        onSelectedChange={setSelected}
        breedGroup={breedGroup}
        breedList={breedList}
      />
      <ImageItem images={images} />
    </div>
  );
};

export default App;
