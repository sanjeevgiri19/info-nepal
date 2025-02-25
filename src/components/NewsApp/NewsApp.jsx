import { useEffect, useState } from "react";
import Card from "./Card";
import Navbar from "../Navbar/Navbar";
import Loader from "../things/Loader";

const NewsApp = () => {
  const [newsData, setNewsData] = useState([]);
  const [searchData, setSearchData] = useState("nepal");
  const [searchDataChange, setSearchDataChange] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_URL = `https://news-api-nitesh.onrender.com/news/${encodeURIComponent(
    searchData
  )}`;

  const getData = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(API_URL, {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch data: ${response.status}`);
      }

      const jsonData = await response.json();
      setNewsData(jsonData?.response?.articles || []);
    } catch (error) {
      console.error(error);
      setError("Failed to fetch news. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, [searchData]);

  const handleInput = (e) => {
    setSearchData(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    getData();
  };

  const userInput = (e) => {
    setSearchData(e.target.value);
    setSearchDataChange((prev) => !prev);
  };

  return (
    <>
      <Navbar
        getData={handleSearch}
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
