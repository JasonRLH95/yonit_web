import React from 'react';
import './styles/article.css';
import { useNavigate } from 'react-router-dom';

export default function Article({ url, image }) {
    // const nav = useNavigate();
    // onClick={()=>{return nav(url)}}
  return (
    // <div>
        <a className='article' href={url} target='_blank' alt="article_img" style={{backgroundImage:`url(${image})`}}>מעבר לכתבה</a>
    // </div>
  )
}
