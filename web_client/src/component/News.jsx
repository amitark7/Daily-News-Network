import React, { useContext, useEffect } from 'react'
import Card from './Card'
import { newsContext } from '../context/newsContext'

const News = ({ category }) => {

  const { news, setNews } = useContext(newsContext)

  useEffect(() => {
    setNews(category)
  }, [category])

  return (
    <div>
      <h1 className='news_head'>Daily News Network -- Top Headlines</h1>
      <div className='news_cards'>
        {
          news?.map((item, index) => {
            return (
              <Card item={item} key={index} />
            )
          })
        }
      </div>
    </div>
  )
}

export default News
