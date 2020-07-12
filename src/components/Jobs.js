import React, { useState, useEffect } from "react";
import Axios from "axios";
import SIngleNews from "./SIngleNews";
const JOB_PATH =
  "https://hacker-news.firebaseio.com/v0/jobstories.json?print=pretty";

function Jobs() {
  const [ids, setIds] = useState([]);
  useEffect(() => {
    async function getData() {
      try {
        const response = await Axios.get(JOB_PATH);
        if (response.status == 200) {
          setIds(response.data);
        }
      } catch (error) {}
    }
    getData();
  }, []);
  return (
    <div className="content-wrapper">
      <h3>Jobs</h3>
      {ids.map((id) => {
        return <SIngleNews key={id} id={id}></SIngleNews>;
      })}
    </div>
  );
}

export default Jobs;
