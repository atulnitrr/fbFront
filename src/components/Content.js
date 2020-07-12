import React, { useEffect, useState } from "react";
import Axios from "axios";
import "../css/Content.css";
import SIngleNews from "./SIngleNews";

function Content() {
  const [ids, setIds] = useState([]);
  useEffect(() => {
    async function getData() {
      try {
        const response = await Axios.get(
          "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty"
        );

        setIds(response.data);
      } catch (error) {}
    }

    if (ids.length == 0) {
      getData();
    }
    const interVale = setInterval(() => {
      console.log("runnin againag");
      getData();
    }, [7 * 24 * 60 * 100]);
    return () => {
      clearInterval(interVale);
    };
  }, []);
  return (
    <div className="content-wrapper">
      <h3>Top hacker news stories</h3>
      {ids.map((id) => {
        return <SIngleNews key={id} id={id}></SIngleNews>;
      })}
    </div>
  );
}

export default Content;
