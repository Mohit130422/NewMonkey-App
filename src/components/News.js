import React, {useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";



const News = (props) => {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)
    

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const updateNews =async()=> {
        props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true)
        let data = await fetch(url);
        props.setProgress(30);
        let parseData = await data.json();
        props.setProgress(70);
        // console.log(parseData);
        setArticles(parseData.articles);
        setTotalResults(parseData.totalResults);
        setLoading(false);
        props.setProgress(100);
    }
    useEffect(() => {
        updateNews();
        document.title = `${capitalizeFirstLetter(props.category)} - NewMonkey Update`
        // eslint-disable-line-using for remove unwanted warnings...
    }, [])

    // const handleNextClick = async () => {
    //     setPage(page+1)
    //     updateNews();

    // }

    // const handlePreviousClick = async () => {
    //     setPage(page-1)
    //     updateNews();
    // }
    const fetchMoreData = async() => {
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
        setPage(page+1);
        setLoading(true);
        let data = await fetch(url);
        let parseData = await data.json();
        // console.log(parseData);
        setArticles(articles.concat(parseData.articles))
        setTotalResults(parseData.totalResults)
    }
        return (
            <div>
                <h1 className="text-center" style={{ margin: '35px 0px', marginTop:'90px' }}>NewsMonkey - Top Headlines from {capitalizeFirstLetter(props.category)}</h1>
                {loading && <Spinner/>}
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    loader={<Spinner />}>
                    <div className="container">
                        <div className="row">
                            {articles.map((element) => { 
                                return <div className="col-md-4" key={element.url}>
                                    <NewsItem title={element.title?element.title.slice(0,60):""} description={element.description ? element.description.slice(0, 133) : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
                                </div>
                            })}
                        </div>
                    </div>
                </InfiniteScroll>
            </div>
        )
    
}
News.defaultProps = {
    country: 'in',
    pageSize: 6,
    category: 'general',
}
News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}

export default News
