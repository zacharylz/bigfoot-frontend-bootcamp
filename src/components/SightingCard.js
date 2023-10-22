import React from "react";
import { useNavigate } from "react-router";

const SightingCard = ({ sighting }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/sightings/${sighting.REPORT_NUMBER}`)}
      className="flex flex-col w-full border-[1px] rounded-sm py-1 px-2 cursor-pointer hover:ring-inset hover:ring-2 hover:ring-blue-900"
    >
      <div className="font-semibold text-gray-800">
        Report {sighting.REPORT_NUMBER} - {sighting.REPORT_CLASS}
      </div>
      <div className="flex justify-between">
        <div>
          {sighting.STATE}, {sighting.COUNTY}
        </div>
        <div>
          {sighting.YEAR}, {sighting.SEASON}
        </div>
      </div>
    </div>
  );
};

export default SightingCard;
