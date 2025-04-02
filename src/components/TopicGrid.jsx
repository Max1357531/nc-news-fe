import { useState } from "react";
import { Link } from "react-router-dom";
import { CommentInteraction } from "./commentInteraction";
import { dateToPrettyString } from "../utils/dateTime";

export const TopicGrid = ({ articles }) => {
  const [hoveredBox, setHoveredBox] = useState(0);

  function getGridSection(num) {
    return (
      <div
        onMouseEnter={() => handleMouseEnter(num)}
        className="topicGridSection"
      >
        {(articles.length > num - 1) ? (
          <Link to={`../articles/${articles[num-1].article_id}`}><img
            className={hoveredBox===num? "gridImage":"gridImage faded"}
            src={articles[num - 1].article_img_url}
          ></img>
          </Link>
        ) : (
          <div />
        )}
      </div>
    );
  }

  function getGridHalf() {
    return (
      <div>
        {(articles.length > hoveredBox - 1) ? (
          <div className="boxInnerGrid">
          <h4>{articles[hoveredBox-1].title}</h4>
          <h5 className ="date">{dateToPrettyString(articles[hoveredBox-1].created_at)}</h5>
          </div>
        ) : (
          <div />
        )}
      </div>
    );
  }
  function handleMouseEnter(num) {
    setHoveredBox(num);
  }
  function handleMouseLeave() {
    setHoveredBox(0);
  }
  return (
    <div onMouseLeave={handleMouseLeave} className="topicGrid">
      {![4, 5, 6].includes(hoveredBox) ? (
        <div className="topicGridHalf">
          {getGridSection(1)}
          {getGridSection(2)}
          {getGridSection(3)}
        </div>
      ) : (
        <div onMouseEnter={() => handleMouseEnter(1)} className="topicGridHalfExpanded">
          {getGridHalf()}
        </div>
      )}

      {![1, 2, 3].includes(hoveredBox) ? (
        <div className="topicGridHalf">
          {getGridSection(4)}
          {getGridSection(5)}
          {getGridSection(6)}
        </div>
      ) : (
        <div onMouseEnter={() => handleMouseEnter(4)} className="topicGridHalfExpanded">
          {getGridHalf()}
        </div>
      )}
    </div>
  );
};
