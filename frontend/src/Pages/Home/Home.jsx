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
  const [search, setSearch] = useState(null);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    const getClaims = async () => {
      const { data: response } = await axios.get(`${URL}/claims`);
      console.log(response.data);
      setClaims(response.data);
    };
    getClaims();
  }, []);

  useEffect(() => {
    // const query = `${search}`;
    const getClaims = async () => {
      let query;
      let data;
      if (Number(search)) {
        query = Number(search);
        data = await axios.get(`${URL}/claims/${query}`);
      } else {
        query = `title=${search}`;
        data = await axios.get(`${URL}/claims?${query}`);
      }
      console.log(data);
      // const { data: response } = console.log(response.data);
      setSearch(data.data);
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
