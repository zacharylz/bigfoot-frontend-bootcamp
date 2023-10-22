import axios from "axios";

const url = process.env.REACT_APP_BACKEND_URL;

export const getSightings = async () => {
  const sightings = await axios.get(`${url}/sightings`);
  return sightings;
};

export const getSpecificSighting = async (report_number) => {
  const sighting = await axios.get(`${url}/sightings/${report_number}`);
  return sighting;
};
