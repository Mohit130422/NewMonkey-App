import React from 'react'

const NewsItem=(props)=> {

        let { title, description, imageUrl, newsUrl, author, date, source } = props;
        return (
            <div className="my-3">
                <div className="card">
                    <div style={{display:'flex', justifyContent:'flex-end', position:'absolute',right:'0'}}>
                    <span className="badge rounded-pill bg-danger">{source}</span>
                    </div>
                    <img src={!imageUrl?"https://static.guim.co.uk/sys-images/Guardian/Pix/maps_and_graphs/2011/11/14/1321289731486/Google-logo-007.jpg":imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}.....</p>
                        <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                        <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark text-right">Read More</a>
                    </div>
                </div>
            </div>
        )
    }

export default NewsItem
