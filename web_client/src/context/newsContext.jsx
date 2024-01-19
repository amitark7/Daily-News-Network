import { createContext, useState } from "react";

export const newsContext = createContext({
  news: [],
  setNews: (category) => { },
  search: false,
  setSearch: (search) => { },
});

const NewsProvider = ({ children }) => {

  const [news, setnews] = useState([]);
  const [search, setsearch] = useState(false);

  const setNews = async (category) => {
    const country = 'in';
    const response = await fetch(`http://localhost:8080/${search?'search':'news'}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(search?{ search:category }:{category, country})
    })
    const data = await response.json()
    console.log(data);
    setnews(data.articles)
  };

  const setSearch = (city) => { 
    setsearch(true)
    setNews(city)

    console.log(search);
  };
  return (
    <newsContext.Provider value={{
      setNews, setSearch, news, search
    }}>
      {children}
    </newsContext.Provider>
  );
};

export default NewsProvider;
