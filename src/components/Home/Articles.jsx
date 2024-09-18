import React from 'react';
import './styles/articles.css';
import Article from './Article';

export default function Articles({ articles }) {
    const deployArticles=()=>{
        return articles.map(( article, inx )=>{
            return <Article url={articles[inx].url} image={articles[inx].image}/>
        })
    }
  return (
    <div className='articles'>
        <h1 className='articles_header' dir='rtl'>מאמרים וכתבות</h1>
        <div className='articles_container'>
            {deployArticles()}
        </div>
    </div>
  )
}
