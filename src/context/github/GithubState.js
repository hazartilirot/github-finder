import React, { useReducer } from "react";
import axios from "axios";
import GithubContext from "./githubContext";
import GithubReducer from "./githubReducer";
import {
  CLEAR_USERS,
  GET_REPOS,
  GET_USER,
  SEARCH_USERS,
  SET_LOADING,
} from "../types";

const GithubState = (props) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  const searchUsers = async (text) => {
    setLoading();
    const res = await axios.get("https://api.github.com/search/users", {
      params: {
        q: text,
        client_id: process.env.REACT_APP_GITHUB_CLIENT_ID,
        client_secret: process.env.REACT_APP_GITHUB_CLIENT_SECRET,
      },
    });
    dispatch({ type: SEARCH_USERS, payload: res.data.items });
  };

  const getUser = async (username) => {
    setLoading();
    const res = await axios.get(`https://api.github.com/users/${username}`, {
      params: {
        client_id: process.env.REACT_APP_GITHUB_CLIENT_ID,
        client_secret: process.env.REACT_APP_GITHUB_CLIENT_SECRET,
      },
    });
    dispatch({ type: GET_USER, payload: res.data });
  };

  const getRepos = async (username) => {
    setLoading();
    const res = await axios({
      baseURL: "https://api.github.com",
      url: `/users/${username}/repos`,
      method: "get",
      params: {
        per_page: 5,
        sort: "created:asc",
        client_id: process.env.REACT_APP_GITHUB_CLIENT_ID,
        client_secret: process.env.REACT_APP_GITHUB_CLIENT_SECRET,
      },
    });
    dispatch({ type: GET_REPOS, payload: res.data });
  };

  const clearUsers = () => dispatch({ type: CLEAR_USERS });

  const setLoading = () => dispatch({ type: SET_LOADING });

  const { users, user, repos, loading } = state;

  return (
    <GithubContext.Provider
      value={{
        users,
        user,
        repos,
        loading,
        searchUsers,
        clearUsers,
        getUser,
        getRepos,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;