import axios from "axios";

const url = process.env.REACT_APP_BACKEND_URL;

export const getSightings = async () => {
  const sightings = await axios.get(`${url}/sightings`);
  return sightings;
};

export const getSpecificSighting = async (report_number) => {
  const sightingData = await axios.get(`${url}/sightings/${report_number}`);
  return sightingData;
};

export const addSighting = async (date, location, notes) => {
  await axios
    .post(`${url}/sightings`, {
      date: date,
      location: location,
      notes: notes,
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

export const getSpecificComments = async (report_number) => {
  const commentData = await axios.get(
    `${url}/sightings/${report_number}/comments`
  );
  return commentData;
};

export const addComment = async (report_number, date, content) => {
  await axios
    .post(`${url}/sightings/${report_number}/comments`, {
      date: date,
      content: content,
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};
