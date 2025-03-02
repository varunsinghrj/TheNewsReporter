import React, { useEffect, useState } from 'react';
import nbv from '../components/newsbox.module.css';
import NewsItem from '../components/NewsItem';
import Foot from '../components/Foot';
export default function Newsbox() {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const newsPerPage = 20;

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          'https://newsapi.org/v2/everything?q=tesla&from=2025-02-01&sortBy=publishedAt&apiKey=0a972b6ca18643f28df18279cc0e394f'
        );
        const data = await response.json();
        setArticles(data.articles || []);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, []);

  // Pagination logic
  const startIndex = (currentPage - 1) * newsPerPage;
  const endIndex = startIndex + newsPerPage;
  const displayedArticles = articles.slice(startIndex, endIndex);

  const nextPage = () => {
    if (endIndex < articles.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
    <div className={nbv.container}>
      <h1 className={nbv.heading}>Latest Tesla News</h1>
      
      <div className={nbv.newsbox}>
        {displayedArticles.length > 0 ? (
          <div className={nbv.gridContainer}>
            {displayedArticles.map((article, index) => (
              <NewsItem
                key={index}
                title={article.title}
                description={article.description}
                imageUrl={article.urlToImage}
                newsUrl={article.url}
              />
            ))}
          </div>
        ) : (
          <p className={nbv.loading}>Loading news...</p>
        )}
      </div>

      {/* Pagination Buttons */}
      <div className={nbv.pagination}>
        <button onClick={prevPage} disabled={currentPage === 1}>
          ◀ Previous
        </button>
        <span>Page {currentPage}</span>
        <button onClick={nextPage} disabled={endIndex >= articles.length}>
          Next ▶
        </button>
      </div>
    </div>
    <Foot/>
    </>
  );
}
