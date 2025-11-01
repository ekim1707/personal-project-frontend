import React, { useEffect } from "react";
import "./styles.css";
import content from "./content";
import basicHttpService from "../../services/basicHttpService";

const Home = () => {
  const [data, setData] = React.useState(null);
  useEffect(() => {
    const getData = async () => {
      const response = await basicHttpService.getRequest(
        "http://localhost:8000/users/"
      );
      setData(response.data);
    };
    getData();
    return () => {};
  }, []);
  return (
    <div className="homeComponentContainer">
      {data ? "connected, but no data yet" : data}
    </div>
  );
};

export default Home;
