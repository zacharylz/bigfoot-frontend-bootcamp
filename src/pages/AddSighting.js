import React, { useState, useEffect } from "react";
import { addSighting } from "../api/backend";
import { useNavigate } from "react-router";

const AddSighting = () => {
  const [sightingDate, setSightingDate] = useState("");
  const [sightingLocation, setSightingLocation] = useState("");
  const [sightingNotes, setSightingNotes] = useState("");

  const navigate = useNavigate();

  const submit = async () => {
    if (sightingDate && sightingLocation && sightingNotes) {
      addSighting(sightingDate, sightingLocation, sightingNotes);
      alert("Sighting added.");
    } else {
      alert("Please enter all fields.");
      console.log(sightingDate, sightingLocation, sightingNotes);
    }
  };

  return (
    <div className="flex flex-col w-full items-center p-4">
      <div
        onClick={() => navigate("/")}
        className="text-lg self-start max-w-[150px] px-2 py-1 border-[1px] rounded-sm cursor-pointer hover:ring-inset hover:ring-2 hover:ring-blue-900"
      >
        Return to Home
      </div>
      <div className="flex flex-col max-w-screen-xl w-full py-4 gap-4 mt-4">
        {/* <div className="flex flex-col w-full"> */}
        <div className="text-xl font-bold text-gray-600 mb-2">
          Report New Sighting
        </div>
        {/* Form for new sighting */}
        <div className="flex flex-col gap-2">
          <div className="font-semibold text-gray-600">Date of sighting:</div>
          <input
            className="block w-[150px] border-2 rounded-sm p-2"
            type="date"
            name="date"
            value={sightingDate}
            onChange={(e) => setSightingDate(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <div className="font-semibold text-gray-600">
            Location of sighting:
          </div>
          <input
            className="block border-2 rounded-sm p-2"
            type="text"
            name="location"
            placeholder="Enter location here"
            value={sightingLocation}
            onChange={(e) => {
              setSightingLocation(e.target.value);
            }}
          />
        </div>
        <div className="flex flex-col gap-2">
          <div className="font-semibold text-gray-600">Sighting Details:</div>
          <textarea
            className="block border-2 rounded-sm p-2"
            type="text"
            name="notes"
            placeholder="Enter details here"
            value={sightingNotes}
            onChange={(e) => {
              setSightingNotes(e.target.value);
            }}
          />
        </div>
        <button
          className="block w-[150px] leading-6 border-2 py-2 rounded-sm self-center"
          onClick={submit}
        >
          Submit Sighting
        </button>
      </div>
      {/* </div> */}
    </div>
  );
};

export default AddSighting;
