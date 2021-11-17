import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";



export class News extends Component {
    static defaultProps = {
        country: 'in',
        pageSize: 6,
        category: 'general',
    }
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
    }
    capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    constructor(props) {
        super(props);
        // console.log("Hello this is constuructor from news component...");
        this.state = {
            articles: [],
            loading: true,
            page: 1,
            totalResults: 0,
        }
        document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewMonkey Update`
    }
    async updateNews() {
        this.props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        // this.setState({ loading: true });
        let data = await fetch(url);
        this.props.setProgress(30);
        let parseData = await data.json();
        this.props.setProgress(70);
        // console.log(parseData);
        this.setState({
            articles: parseData.articles,
            totalResults: parseData.totalResults,
            loading: false,
        });
        this.props.setProgress(100);
    }
    async componentDidMount() {
        // console.log("cdm");
        // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4c9aa85049b0480cb2cb46ebbdd5410f&page=1&pageSize=${this.props.pageSize}`;
        // this.setState({loading:true});
        // let data  = await fetch(url);
        // let parseData = await data.json();
        //  console.log(parseData);
        // this.setState({articles:parseData.articles,
        //      totalResults:parseData.totalResults,
        //     loading:false,
        // });
        this.updateNews();
    }
    handleNextClick = async () => {
        // console.log("Next click")
        // if(!(this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
        //     let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4c9aa85049b0480cb2cb46ebbdd5410f&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
        //     this.setState({loading:true});
        //     let data  = await fetch(url);
        //     let parseData = await data.json();
        //     this.setState({articles:parseData.articles});

        //     this.setState({
        //         page:this.state.page+1,
        //         articles: parseData.articles,
        //         loading:false, 
        //     })
        // }
        this.setState({ page: this.state.page + 1 });
        this.updateNews();

    }

    handlePreviousClick = async () => {
        // console.log("Previous click")
        // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4c9aa85049b0480cb2cb46ebbdd5410f&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
        // this.setState({loading:true});
        // let data  = await fetch(url);
        // let parseData = await data.json();
        // console.log(parseData);
        // this.setState({articles:parseData.articles});

        // this.setState({
        //     page:this.state.page-1,
        //     articles: parseData.articles,
        //     loading:false,
        // })
        this.setState({ page: this.state.page - 1 });
        this.updateNews();
    }
    fetchMoreData = async() => {
        // a fake async api call like which sends
        // 20 more records in 1.5 secs
        this.setState({ page: this.state.page + 1 });
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parseData = await data.json();
        // console.log(parseData);
        this.setState({
            articles: this.state.articles.concat(parseData.articles),
            totalResults: parseData.totalResults,
            loading: false,
        });
    }
    render() {
        return (
            <div>
                <h1 className="text-center" style={{ margin: '35px 0px', marginTop:'90px' }}>NewsMonkey - Top Headlines from {this.capitalizeFirstLetter(this.props.category)}</h1>
                {this.state.loading && <Spinner/>}
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Spinner />}>
                    <div className="container">
                        <div className="row">
                            {this.state.articles.map((element) => {    //!this.state.loading && ---this line add before this.state
                                return <div className="col-md-4" key={element.url}>
                                    <NewsItem title={element.title?element.title.slice(0,60):""} description={element.description ? element.description.slice(0, 133) : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
                                </div>
                            })}
                        </div>
                    </div>
                </InfiniteScroll>
                {/* <div className="container d-flex justify-content-between">
                    <button type="button" disabled={this.state.page <= 1} className="btn btn-dark" onClick={this.handlePreviousClick}>&larr; Previous</button>
                    <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div> */}
            </div>
        )
    }
}

export default News
