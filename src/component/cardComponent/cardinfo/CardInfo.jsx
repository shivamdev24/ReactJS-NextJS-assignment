import React from "react";
import "./style.scss";

const Card = ({
	imgSrc,
	heading,
	buttonText,
	badge,
	badgeTitle,
  count,
  imgName,
  headingPara,
  mainHighlightsPara,
  mainHighlights,
  showsvg,
  showmore,
  rating,
  ratingComment,
  visibility
}) => {
	return (
		<div className="card">
			<div  className={`badge ${visibility === 'hidden' ? 'hiddenBadge' : 'block'} `}>
				<p>{badge}</p><p>{badgeTitle}</p>
			</div>
			<div className="count">{count}</div>
			<div className="cardMain">
				<div className="imgSection">
          <div className="imgContainer"><img src={imgSrc} alt={heading} />
          <p>{imgName}</p>
          </div>
				</div>
        <div className="mainSection">
          <div className="details">
            <p className="heading">
              <span className="strong">{heading}</span>
              {headingPara}
            </p>
            <p className="mainHighlights">
              <p className="mainHeading">{mainHighlights}
              <p className="highlightPara">{mainHighlightsPara}</p>
              </p>
              
            </p>
            <span className="showMore"><span>Show more </span><span><svg className="svg" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.98043 5.64645C4.17569 5.45118 4.49228 5.45118 4.68754 5.64645L8.33398 9.29289L11.9804 5.64645C12.1757 5.45118 12.4923 5.45118 12.6875 5.64645C12.8828 5.84171 12.8828 6.15829 12.6875 6.35355L8.68754 10.3536C8.49228 10.5488 8.17569 10.5488 7.98043 10.3536L3.98043 6.35355C3.78517 6.15829 3.78517 5.84171 3.98043 5.64645Z" fill="#1B88F4"/>
</svg>
</span> </span>
            </div>
            
        </div>

        <div className="rateBtn">
          <div className="rateSection">
            <p className="rating">{rating}</p>
            <p className="ratingComment">{ratingComment}</p>
            <p className="star">&#9733;&#9733;&#9733;&#9733;&#9733;</p>
          </div>

          <button className="btn">
          {buttonText}</button>
        </div>

			</div>
		</div>
	);
};

export default Card;
