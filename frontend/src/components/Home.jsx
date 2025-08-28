import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

import { Loader, Card, FormField } from "../components/index";

// For rendering search image cards
const RenderCards = ({ data, title }) => {
  if (data?.length > 0) {
    return data.map((post) => <Card key={post._id} {...post} />);
  }
  return (
    <h2 className="mt-6 font-semibold text-blue-500 text-sm sm:text-base text-center">{title}</h2>
  );
};

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [allPosts, setAllPosts] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [searchedResults, setSearchResults] = useState(null);
  const [searchTimeout, setSearchTimeout] = useState(null);

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://ai-image-generation-8495.onrender.com/postImage", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const result = await response.json();
        setAllPosts(result.data.reverse());
      }
    } catch (err) {
      toast.error("Error occurred while fetching images!");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleSearchChange = (e) => {
    clearTimeout(searchTimeout);
    setSearchText(e.target.value);
    setSearchTimeout(
      setTimeout(() => {
        const searchResult = allPosts.filter(
          (item) =>
            item.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
            item.prompt.toLowerCase().includes(e.target.value.toLowerCase())
        );
        setSearchResults(searchResult);
      }, 500)
    );
  };

  return (
    <section className="max-w-7xl mx-auto px-2 sm:px-4 md:px-8 py-6 sm:py-12">
      <div className="text-center mb-8 sm:mb-10">
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-blue-400 tracking-tight">
          Welcome to the Creator's Gallery
        </h1>
        <p className="mt-3 text-gray-600 text-xs sm:text-sm md:text-base max-w-sm sm:max-w-xl mx-auto">
          Discover extraordinary artwork crafted by our talented community using AI. Share your vision and be part of the creative revolution.
        </p>
      </div>

      {/* Search Section */}
      <div className="w-full max-w-[95%] sm:max-w-2xl mx-auto">
        <FormField
          labelName="Search posts"
          type="text"
          name="text"
          placeholder="Search by name or prompt..."
          value={searchText}
          handleChange={handleSearchChange}
        />
      </div>

      {/* Image Results Section */}
      <div className="mt-8 sm:mt-12">
        {loading ? (
          <div className="flex justify-center items-center">
            <Loader />
          </div>
        ) : (
          <>
            {searchText && (
              <h2 className="text-gray-700 text-sm sm:text-lg font-medium mb-4 sm:mb-6 text-center">
                Showing results for <span className="text-blue-700">"{searchText}"</span>
              </h2>
            )}
          </>
        )}

        <div className="grid gap-4 sm:gap-6 grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {searchText ? (
            <RenderCards data={searchedResults} title="No results found." />
          ) : (
            <RenderCards data={allPosts} title="No posts available." />
          )}
        </div>
      </div>
    </section>
  );
};

export default Home;
