import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';

export class News extends Component {
    constructor (){
        super();
        // console.log("Hello this is constuructor from news component...");
        this.state={
            articles: [],
            loading: false,
            page:1
        }   
    }
    async componentDidMount(){
        // console.log("cdm");
        let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=4c9aa85049b0480cb2cb46ebbdd5410f&page=1&pageSize=${this.props.pageSize}`;
        this.setState({loading:true});
        let data  = await fetch(url);
        let parseData = await data.json();
        // console.log(parseData);
        this.setState({articles:parseData.articles,
             totalResults:parseData.totalResults,
            loading:false,
        });
    }
    handleNextClick = async ()=>{
        console.log("Next click")
        if(!(this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
            let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=4c9aa85049b0480cb2cb46ebbdd5410f&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
            this.setState({loading:true});
            let data  = await fetch(url);
            let parseData = await data.json();
            this.setState({articles:parseData.articles});

            this.setState({
                page:this.state.page+1,
                articles: parseData.articles,
                loading:false, 
            })
        }
       
    }

    handlePreviousClick = async ()=>{
        console.log("Previous click")
        let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=4c9aa85049b0480cb2cb46ebbdd5410f&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true});
        let data  = await fetch(url);
        let parseData = await data.json();
        console.log(parseData);
        this.setState({articles:parseData.articles});

        this.setState({
            page:this.state.page-1,
            articles: parseData.articles,
            loading:false,
        })
    }

    render() {
        return (
            <div className="container my-3">
                <h1 className="text-center">NewsMonkey - Top Headlines</h1>
                {this.state.loading && <Spinner/>}
                <div className="row">
                {!this.state.loading && this.state.articles.map((element)=>{
                    return <div className="col-md-4" key={element.url}>
                        <NewsItem  title={element.title?element.title.slice(0,38):""} description={element.description?element.description.slice(0,133):""} imageUrl={element.urlToImage} newsUrl={element.url}/>
                    </div>
                })}
                </div>
                <div className="container d-flex justify-content-between">
                    <button type="button" disabled={this.state.page<=1} className="btn btn-dark" onClick={this.handlePreviousClick}>&larr; Previous</button>
                    <button type="button" disabled={this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)} className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News
