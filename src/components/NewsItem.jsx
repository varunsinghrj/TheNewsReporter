import React from 'react';
import niv from '../components/newitem.module.css';

export default function NewsItem({ title, description, imageUrl, newsUrl }) {
  return (
    <div className={niv.card}>
      <div className={niv.imgContainer}>
        <img src={imageUrl || 'https://via.placeholder.com/300'} alt="News" />
      </div>
      <div className={niv.details}>
        <h3 className={niv.title}>{title}</h3>
        <p className={niv.description}>{description}</p>
        <a className={niv.button} href={newsUrl} target="_blank" rel="noopener noreferrer">
          Read More
        </a>
      </div>
    </div>
  );
}
