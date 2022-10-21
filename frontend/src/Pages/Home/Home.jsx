import React, { useEffect, useState } from "react";
import Card from "../../Components/Card/Card";
import TopNav from "../../Components/Nav/TopNav/TopNav";
import BotNav from "../../Components/Nav/BotNav/BotNav";
import SearchBar from "../../Components/SearchBar/SearchBar";
import axios from "axios";
import "./home.css";
const URL = "http://localhost:4000/api/v1";

const Home = () => {
  const [claims, setClaims] = useState([]);
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    const getClaims = async () => {
      let query;
      let response;
      if (search.length === 0) {
        const { data: array } = await axios.get(`${URL}/claims`);
        response = array;
        setClaims(response.data);
      } else {
        if (Number(search)) {
          query = Number(search);
          const { data: array } = await axios.get(`${URL}/claims/${query}`);
          response = array;
          setClaims([response.data]);
        } else {
          query = `title=${search}&institution=${search}&category=${search}&offset=${1}&limit=${10}`;
          const { data: array } = await axios.get(`${URL}/claims?${query}`);
          response = array;
          setClaims(response.data);
        }
      }
      console.log(response);
    };
    getClaims();
  }, [search]);

  return (
    <React.Fragment>
      <TopNav text={"Hello Bitchies!!"}></TopNav>
      <BotNav></BotNav>
      <section className="sectionHome">
        <SearchBar handleSearch={handleSearch} placeholder="Busca un reclamo" />
        <div className="sectionHomeContainerCards">
          {claims.length > 0 &&
            claims.map(({ title, description, status, address }) => {
              return (
                <Card
                  key={crypto.randomUUID()}
                  title={title}
                  description={description}
                  status={status}
                  address={address}
                ></Card>
              );
            })}
        </div>
      </section>
      {/* <ButtonClaim></ButtonClaim> */}
    </React.Fragment>
  );
};

export default Home;
