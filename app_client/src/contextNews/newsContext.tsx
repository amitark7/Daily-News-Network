import {createContext, useState} from 'react';

export const newsContext = createContext({
  news: [],
  setData: (arg0: any) => {},
});

const NewsProvider = ({children}: any) => {
  const [news, setNews] = useState<any>([]);
  
  const setData = async (category: string) => {
    const country = 'in';
    const response = await fetch(`https://daily-news-network-546a.onrender.com/news`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({category: category, country: country}),
    });
    const data = await response.json();
    setNews(data.articles);
  };
  return (
    <newsContext.Provider
      value={{
        news,
        setData,
      }}>
      {children}
    </newsContext.Provider>
  );
};

export default NewsProvider;
