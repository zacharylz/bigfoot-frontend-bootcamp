import React, { useState, useEffect } from "react";
import { getSightings, getSpecificSighting } from "../api/backend";
import SightingCard from "../components/SightingCard";
import { useNavigate } from "react-router";

const Home = () => {
  const [sightings, setSightings] = useState([]);

  const navigate = useNavigate();

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
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold">Bigfoot Sightings</h2>
          <div
            onClick={() => navigate("/new")}
            className="text-lg self-start px-2 py-1 border-[1px] rounded-sm cursor-pointer hover:ring-inset hover:ring-2 hover:ring-blue-900"
          >
            Report New Sighting
          </div>
        </div>

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
