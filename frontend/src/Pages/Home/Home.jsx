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

  useEffect(() => {
    const getClaims = async () => {
      const { data: response } = await axios.get(`${URL}/claims`);
      console.log(response.data);
      setClaims(response.data);
    };
    getClaims();
  }, []);

  return (
    <React.Fragment>
      <TopNav text={"Hello Bitchies!!"}></TopNav>
      <BotNav></BotNav>
      <section className="sectionHome">
        <SearchBar placeholder="Busca un reclamo" />

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
