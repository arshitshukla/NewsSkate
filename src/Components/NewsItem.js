import React from 'react'

const NewsItem=(props)=> {

    return (
      <div className='d-flex justify-content-around my-3'>
        <div className="card" style={{width:"18rem"}}>
          <img src={!props.imgurl?"https://media.istockphoto.com/id/1440979913/photo/view-of-stacked-newspapers-on-blurred-background.webp?b=1&s=170667a&w=0&k=20&c=6Kn30RmS2WQthvlh9sTX1BKbaXMYtMQw57_h3zJ5RzM=":props.imgurl} className="card-img-top" alt="..."/>
          <div className="card-body">
              <h5 className="card-title">{props.title}</h5>
              <p className="card-text">{new Date(props.time).toLocaleString()}</p>
              <p className="card-text text-justify">{props.description}</p>
              <a href={props.url} target="blank" className="btn btn-primary">Read more...</a>
          </div>
        </div>
      </div>
    )
  }
export default NewsItem;
