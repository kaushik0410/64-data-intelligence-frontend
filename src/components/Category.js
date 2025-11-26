import { useState } from 'react';

const Category = ({ currentData, selectedCategoryOption, onCategoryOptionChange }) => {
    // const [currentData, setCurrentData] = useState(data1);
    const [openCategory, setOpenCategory] = useState(null);
    const [openCategoryOption, setOpenCategoryOption] = useState(false);
    // const [selectedCategoryOption, setSelectedCategoryOption] = useState("India & States");
    const categories = Object.entries(currentData.categories);

    const options = [
        "India & States",
        "Global data",
        "BIS",
        "IMF",
        "World Bank",
        "United Nations"
    ]

    const handleCategoryOption = (openCategoryOption) => {
        onCategoryOptionChange(openCategoryOption)
        // setSelectedCategoryOption(openCategoryOption);
        setOpenCategoryOption(false);
        // if (openCategoryOption === "IMF"){
        //     setCurrentData(data2);
        // } else {
        //     setCurrentData(data1);
        // }
        setOpenCategory(null);
    }
    const handleCategory = (categoryName) => {
        setOpenCategory(openCategory === categoryName ? null : categoryName)
    }

    return (
        <div className="hide-scrollbar" style={{ height: "100%", width: "400px", overflowY: "auto" }}>
            <div style={{position: "relative", width: "100%"}}>
                <div style={{margin: "0 5px", padding: "5px", backgroundColor: "#f3f3f3ff", borderRadius: "10px", cursor: "pointer"}} onClick={() => setOpenCategoryOption(!openCategoryOption)}>
                    <p>Category: </p>
                    <p style={{fontWeight: "bold"}}>{selectedCategoryOption}</p>
                </div>
                {openCategoryOption && (
                    <div style={{margin: "0 5px", padding: "5px", position: "absolute", width: "95%", backgroundColor: "white", borderRadius: "10px", boxShadow: "0px 4px 10px rgba(0,0,0,0.15)", cursor: "pointer", zIndex: 100}}>
                        {options.map(option => (
                            <div key={option} onClick={() => handleCategoryOption(option)}>
                                {option}
                            </div>
                        ))}
                    </div>
                )}
            </div>
            {categories.map(([categoryName, subCategoryName]) => (
                <div key={categoryName} style={{ backgroundColor: "#f3f3f3ff", borderRadius: "5px", padding: "5px", margin: "5px", cursor: "pointer" }} onClick={() => handleCategory(categoryName)}>
                    <p style={{ fontWeight: "bold" }}>{categoryName}</p>
                    {openCategory === categoryName && (
                        <ul style={{ listStyle: "none" }}>{Object.keys(subCategoryName).map((sc) => (
                            <li key={sc}>{sc}</li>
                        ))}</ul>
                    )}
                </div>
            ))}
        </div>
    )
}

export default Category
