import React from 'react'
import { Link } from 'react-router-dom'

const ArticleBox = ({ article_image, pretitle, title, excerpt, button_text, button_link }) => {
    return (
        <div className="card is-shadowless is-radiusless border-all">
            <div className="card-image">
                <figure class="image is-4by3">
                    <img src={article_image} />
                    <div className="is-overlay overlayer"></div>
                </figure>
            </div>
            <div className="card-content">
                <div className="section-category">
                    <h6 className="title is-size-7 has-text-weight-light mb-0 grey-color">{pretitle}</h6>
                    <hr className="section-category__underline mt-2 mb-1" />
                </div>
                <h5 className="main-color title is-size-4 has-text-weight-light mt-4">{title}</h5>
                <p className="title mt-2 is-size-6o5 lineheight-md has-text-weight-light low-color">{excerpt}</p>

                <Link to={button_link}><button className="mybtn-reverse p-3 pl-5 pr-5">{button_text}</button></Link>
            </div>
        </div>
    )
}

export default ArticleBox
