// import React, { useEffect, useState } from 'react'
// import Card from './Card'
// import Navbar from '../Navbar/Navbar';


// VITE_NEWS_API_KEY=fc16b7d092044241b6f08c7eae5cddf3
// # 2nd api=5cc49004347c4be9b7089df23c50c01d


// const NewsApp = () => {

//     const [newsData, setNewsData] = useState([]);
//     const [searchData, setSearchData] = useState("nepal");
//     const [searchDataChange,setSearchDataChange] = useState(false)
//     // const API_KEY = "5cc49004347c4be9b7089df23c50c01d";
//     const API_URL = `https://news-api-nitesh.onrender.com/news/${searchData}`

//     const getData = async() => {
//       try {
//         console.log("API Fetched");

//           const response =await fetch(API_URL, {
//             method: 'GET',
//           //   headers: {
//           //     'Content-Type': 'application/json',
//           // },
//           // body: JSON.stringify(  searchData )
//           })

//           const jsonData =await response.json();
//          setNewsData(jsonData?.response?.articles)

//       } catch (error) {
//         console.error(error);

//       }
//     }

//     useEffect(() => {
//         getData();
//     },[searchDataChange]);

//     const handleInput = (e) => {
//         console.log(e.target.value);
//         setSearchData(e.target.value)
//     }
//     const userInput = (e) => {
//         console.log(e.target.value);
//         setSearchData(e.target.value);
//         setSearchDataChange((prev)=>!prev)
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
