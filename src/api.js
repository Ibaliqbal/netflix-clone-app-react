import axios from "axios";
import Swal from "sweetalert2";

const apiKey = import.meta.env.VITE_API_KEY;
const baseUrl = import.meta.env.VITE_API_URL;

export const getAllList = async (resource, pageRandom) => {
  const response = await axios.get(
    `${baseUrl}${resource}?api_key=${apiKey}&page=${pageRandom}`
  );
  const data = await response.data.results;
  return data;
};

export const getMoviesSearchDisplay = async (resource, query) => {
  const response = await axios.get(
    `${baseUrl}${resource}?query=${query}&api_key=${apiKey}`
  );
  const data = await response.data.results;
  return data;
};

export const getDetail = async (resource, query) => {
  const response = await axios.get(
    `${baseUrl}${resource}/${query}?api_key=${apiKey}`
  );
  const data = await response.data;
  return data;
};

export const getRandomMovie = (data, gap) => {
  const first = ~~(Math.random() * (data.length - gap) + 1);
  const last = first + gap;
  const response = data.slice(first, last);
  return response;
};

export const getTvList = async (endpoint) => {
  const pageRandom = ~~(Math.random() * 500 + 1);
  const response = await axios.get(
    `${baseUrl}${endpoint}?api_key=${apiKey}&page=${pageRandom}`
  );
  const data = await response.data.results;
  return data;
};

export const getMoviesAndTvLists = async (series, keyword) => {
  const pageRandom = ~~(Math.random() * 500 + 1);
  const response = await axios.get(
    `${baseUrl}${series}/${keyword}?api_key=${apiKey}&page=${pageRandom}`
  );
  const data = await response.data.results;
  return data;
};
export const getMoviesAndTvListsTrending = async (series, keyword) => {
  const pageRandom = ~~(Math.random() * 500 + 1);
  const response = await axios.get(
    `${baseUrl}${keyword}/${series}/week?api_key=${apiKey}&page=${pageRandom}`
  );
  const data = await response.data.results;
  return data;
};

export const getVideos = async (series, id) => {
  const response = await axios.get(
    `${baseUrl}${series}/${id}/videos?api_key=${apiKey}`
  );
  const data = await response.data.results;
  if (data.length > 0) {
    const key = data[0].key;
    const videoUrl = `https://www.youtube.com/watch?v=${key}`;
    window.location.href = videoUrl;
  } else {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
    });
    Toast.fire({
      icon: "error",
      title: "Video not available",
    });
  }
};

export const getSearchLists = async (endpoint, query) => {
  const response = await axios.get(
    `${baseUrl}${endpoint}?api_key=${apiKey}&query=${query}`
  );
  const result = await response.data.results;
  return result
};
