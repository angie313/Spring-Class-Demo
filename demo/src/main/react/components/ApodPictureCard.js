import React from 'react';

const ApodPictureCard = (props) => {
    const { url, title, description, mediaType, date } = props

    return <>
        <div className="card">
            {mediaType == "video"
                ? <iframe height="450" src={url} />
                : <img height="450" className="card-img-top" src={url} alt={title && "No Image for the day"} />
            }
            <div className="card-body">
                <h4 className="card-title">{title}</h4>
                <p className="card-text">{description}</p>
                <p className='card-text text-end'><small className='text-body-secondary fs-5'>{date}</small></p>
            </div>
        </div>
    </>

}

export default ApodPictureCard;