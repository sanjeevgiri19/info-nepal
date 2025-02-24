


import  { useEffect, useState } from 'react'
import Card from './Card'
import Navbar from '../Navbar/Navbar';

const NewsApp = () => {

    const [newsData, setNewsData] = useState(null);
    const [searchData, setSearchData] = useState("nepal");

    const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

    const getData = async() => {
      try {
          const response =await fetch(`https://newsapi.org/v2/everything?q=${searchData}&apikey=${API_KEY}&language=en`)
          const jsonData =await response.json();
          // console.log(jsonData.articles);
          setNewsData(jsonData.articles) ;
      } catch (error) {
        console.error(error);
        
      }
    }

    useEffect(() => {
        getData();
    },[searchData]);

    const handleInput = (e) => {
        console.log(e.target.value);
        setSearchData(e.target.value)
    }
    const userInput = (e) => {
        // console.log(e.target.value);
        setSearchData(e.target.value);
    }

  return (
    <>
    <Navbar getData={getData} handleInput={handleInput} searchData={searchData} userInput={userInput} />

    {
        newsData ?  (<div className=' w-full p-6'>
            <Card newsData={newsData} />
          </div>) : (<h1 className='mt-20 text-center text-8xl font-extrabold hover:text-red-600'>No News Available</h1>)
    }
    </>
  )
}

export default NewsApp
