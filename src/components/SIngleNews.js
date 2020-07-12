import React, { useState, useEffect } from "react";
import Axios from "axios";
import "../css/SIngleNews.css";

function SIngleNews(props) {
  const { id } = props;
  const [newsData, setNewsData] = useState({});
  useEffect(() => {
    async function getSingleNewsData() {
      try {
        const response = await Axios.get(
          `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`
        );
        setNewsData(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getSingleNewsData();
  }, [id]);
  return (
    <div className="sn-wrapper">
      <a href={newsData.url} target="_blank">
        {newsData.title}{" "}
      </a>
    </div>
  );
}

export default SIngleNews;
