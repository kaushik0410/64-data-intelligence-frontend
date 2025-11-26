import { useState } from 'react';
import data1 from '../data/response1.json';
import data2 from '../data/response2.json';
import Category from './Category';
import Frequents from './Frequents';

const Catalogue = () => {
  const [selectedCategoryOption, setSelectedCategoryOption] = useState("India & States");
  const [currentData, setCurrentData] = useState(data1);

  const handleCategoryOption = (openCategoryOption) => {
      setSelectedCategoryOption(openCategoryOption);
      if (openCategoryOption === "IMF"){
          setCurrentData(data2);
      } else {
          setCurrentData(data1);
      }
  }

  return (
    <div style={{ display: "flex", flexDirection: "row", height: "calc(100vh - 100px - 70px)" }}>
      <Category currentData={currentData} selectedCategoryOption={selectedCategoryOption} onCategoryOptionChange={handleCategoryOption} />
      <Frequents currentData={currentData} />
    </div>
  )
}

export default Catalogue
