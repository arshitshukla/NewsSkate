import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem';
import Loader from './Loader';
import InfiniteScroll from "react-infinite-scroll-component";


const News = (props)=>{
    const [articles,SetArticles]=useState([]);
    const [page,SetPage]=useState(1);
    const [loading,SetLoading]=useState(true);
    const [totalResults,SetTotalResults]=useState(0);

    const update=async ()=>{
        props.setProgress(10);
        const url=`https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=5e90c75feaca46aeac37ce03b87ada57&page=1&pageSize=${props.page}`;
        
        SetLoading(true);
        let data=await fetch(url);
        props.setProgress(30);
        let parsedData=await data.json();
        props.setProgress(60);

        SetArticles(parsedData.articles);
        SetLoading(false);
        SetTotalResults(parsedData.totalResults);
        
        props.setProgress(100);
    }
    
    useEffect(()=>{
        
        update();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
        
    const fetchMoreData = async() => {
        SetPage(page + 1);

        let url=`https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=5e90c75feaca46aeac37ce03b87ada57&page=${page+1}&pageSize=${props.page}`;
        let data=await fetch(url);
        let parsedData=await data.json();

        SetArticles(articles.concat(parsedData.articles));
        SetTotalResults(parsedData.totalResults);
      };

    return (
    <>
    <div className='container my-3 text-center'>
        <h1 className='display-4'>{props.category.toUpperCase()} NEWS</h1>
        {loading && <Loader/>}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Loader/>}
        >
        <div className="container">
            <div className='row'>
                {articles.map((element)=>{
                    return <div className='col md-4' key={element.url}>
                        <NewsItem title={element.title} description={element.description} url={element.url} imgurl={element.urlToImage} time={element.publishedAt}/></div>
                })};
            </div>
        </div>
        </InfiniteScroll>
    </div>
    </>
    )
  }

export default News;
