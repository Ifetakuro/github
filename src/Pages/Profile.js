import React from "react";
import useFetch from "../hooks/useFetch";
import "../css/profile.css";
import { convertDate } from "../components/convertDate";
import Loader from "../components/Loader";
import { useErrorHandler } from "react-error-boundary";

export const Profile = () => {
  const handleError = useErrorHandler();
  const { loading, error, data } = useFetch(
    "https://api.github.com/users/ifetakuro"
  );

  if (!loading && error) {
    handleError(error);
  }

  return (
    <div className="container">
      {loading && !data ? (
        <Loader />
      ) : (
        <main className="profile-main">
          <div className="profile-info">
            <p>Name: {data && data.name}</p>
            <p>Number of Repos: {data && data.public_repos}</p>
            <p>Location: Nigeria</p>
            <div>
              <span>Followers: {data && data.followers}</span>&nbsp; &nbsp;
              <span>Following: {data && data.following}</span>
            </div>
            <div>
              <p>Profile created on {convertDate(data && data.created_at)} </p>
              <p>Last updated {convertDate(data && data.updated_at)} </p>
            </div>
          </div>
          <div className="profile-image">
            <img src={data && data.avatar_url} alt={data && data.name} />
          </div>
        </main>
      )}
    </div>
  );
};

export default Profile;
