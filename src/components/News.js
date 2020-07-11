import React, { useEffect, useState } from "react";
import Axios from "axios";

function News() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count > 0) {
      async function getData() {
        try {
          const response = await Axios.get(
            "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty"
          );
          console.log(response);
        } catch (error) {}
      }
      getData();
      console.log(count);
    }
  }, [count]);

  return (
    <div className="news-container">
      <button onClick={(e) => setCount(count + 1)}> Get latest news</button>
      <h3>news channel</h3>
      <h4>{count}</h4>
    </div>
  );
}

export default News;
