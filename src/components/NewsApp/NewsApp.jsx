import { useEffect, useState } from "react";
import Card from "./Card";
import Navbar from "../Navbar/Navbar";
import Loader from "../Loader";

const NewsApp = () => {
  const [newsData, setNewsData] = useState([]); // Initialize as an empty array
  const [searchData, setSearchData] = useState("nepal");
  const [loading, setLoading] = useState(false); // Add loading state
  const [error, setError] = useState(null); // Add error state

  const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

  const getData = async () => {
    setLoading(true); // Set loading to true when fetching data
    setError(null); // Reset error state

    try {
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=${searchData}&apikey=${API_KEY}&language=en`
      );

      if (!response.ok) {
        throw new Error(`Failed to fetch data: ${response.status}`);
      }

      const jsonData = await response.json();
      setNewsData(jsonData.articles || []); // Ensure articles is an array
    } catch (error) {
      console.error(error);
      setError("Failed to fetch news. Please try again later."); // Set error message
    } finally {
      setLoading(false); // Set loading to false after fetching
    }
  };

  useEffect(() => {
    getData();
  }, [searchData]);

  const handleInput = (e) => {
    setSearchData(e.target.value); // Update search term
  };

  const handleSearch = (e) => {
    e.preventDefault(); // Prevent form submission
    getData(); // Fetch data based on the new search term
  };

  const userInput = (e) => {
    console.log(e.target.value);
    setSearchData(e.target.value);
  };

  return (
    <>
      <Navbar
        getData={handleSearch} // Pass handleSearch for form submission
        handleInput={handleInput}
        searchData={searchData}
        userInput={userInput}
      />

      {loading ? (
        <Loader />
      ) : error ? (
        <h1 className="mt-20 text-center text-4xl font-bold text-red-600">
          {error}
        </h1>
      ) : newsData.length > 0 ? (
        <div className="w-full p-6">
          <Card newsData={newsData} />
        </div>
      ) : (
        <h1 className="mt-20 text-center text-4xl font-bold hover:text-red-600">
          No News Available
        </h1>
      )}
    </>
  );
};

export default NewsApp;

// import  { useEffect, useState } from 'react'
// import Card from './Card'
// import Navbar from '../Navbar/Navbar';

// const NewsApp = () => {

//     const [newsData, setNewsData] = useState(null);
//     const [searchData, setSearchData] = useState("nepal");

//     const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

//     const getData = async() => {
//       try {
//           const response =await fetch(`https://newsapi.org/v2/everything?q=${searchData}&apikey=${API_KEY}&language=en`)
//           const jsonData =await response.json();
//           // console.log(jsonData.articles);
//           setNewsData(jsonData.articles) ;
//       } catch (error) {
//         console.error(error);

//       }
//     }

//     useEffect(() => {
//         getData();
//     },[searchData]);

//     const handleInput = (e) => {
//         console.log(e.target.value);
//         setSearchData(e.target.value)
//     }
//     const userInput = (e) => {
//         // console.log(e.target.value);
//         setSearchData(e.target.value);
//     }

//   return (
//     <>
//     <Navbar getData={getData} handleInput={handleInput} searchData={searchData} userInput={userInput} />

//     {
//         newsData ?  (<div className=' w-full p-6'>
//             <Card newsData={newsData} />
//           </div>) : (<h1 className='mt-20 text-center text-8xl font-extrabold hover:text-red-600'>No News Available</h1>)
//     }
//     </>
//   )
// }

// export default NewsApp
