import React from 'react';
import './indexx.css';


function Card(props) {
    return (
        <>
            <div className="cards">
                <div className="card">
                    <img src={props.imgSrc} alt="myPic" className="card__img" />
                    <div className="card__info">
                        <span className="card__category">{props.title} </span>
                        <h3 className="card__title">{props.sname}</h3>
                        <a href={props.link} target="_blank">
                            <button className='bu'> Want to look?</button>
                        </a>

                    </div>
                </div>
            </div>
        </>
    )
}
export default Card;