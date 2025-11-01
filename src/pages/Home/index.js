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
      setData(response?.data);
    };
    getData();
    return () => {};
  }, []);
  return (
    <div className="home-container">
      <ul>
        {data
          ? data.map(
              ({
                id,
                username,
                email,
                full_name,
                is_active,
                is_superuser,
                created_at,
                updated_at,
              }) => {
                return (
                  <li key={id}>
                    Username: {username}, Email: {email}, Full Name: {full_name}
                    , Is Active: {is_active.toString()}, Is Superuser:{" "}
                    {is_superuser.toString()}, Created At: {created_at}, Updated
                    At: {updated_at}
                  </li>
                );
              }
            )
          : "Loading..."}
      </ul>
    </div>
  );
};

export default Home;
