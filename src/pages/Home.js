import React, { useState, useEffect } from "react";
import { getSightings } from "../api/backend";
import SightingCard from "../components/SightingCard";

const Home = () => {
  const [sightings, setSightings] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const sightingsList = await getSightings();
      setSightings(sightingsList.data);
    };
    fetchData();
  }, []);

  return (
    <div className="flex w-full justify-center">
      <div className="flex flex-col max-w-screen-xl w-full py-4 gap-4">
        <h2 className="text-2xl font-bold">Bigfoot Sightings</h2>
        <div className="flex flex-col w-full gap-1 self-center">
          {sightings.map((sighting) => (
            <SightingCard sighting={sighting} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
