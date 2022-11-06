import React from "react";
import { useErrorHandler } from "react-error-boundary";
import { useParams } from "react-router-dom";
import { convertDate } from "../components/convertDate";
import Loader from "../components/Loader";
import useFetch from "../hooks/useFetch";

export const Repo = () => {
  const { repoId } = useParams();
  const handleError = useErrorHandler();

  const { loading, error, data } = useFetch(
    `https://api.github.com/repos/Ifetakuro/${repoId}`
  );

  if (!loading && error) {
    handleError(error);
  }

  return (
    <div>
      {loading && !data ? (
        <Loader />
      ) : (
        <div className="repo-box">
          <p>
            <span>Name of Repository:</span> {data && data.name}
          </p>
          <p>
            <span>Visibility:</span> {data && data.visibility}
          </p>
          <p>
            <span>Github: </span>
            <a href={data && data.html_url} target="_blank" rel="noreferrer">
              {data && data.html_url}
            </a>
          </p>
          <p>
            <span>Created on</span> {convertDate(data && data.created_at)}{" "}
          </p>
          <p>
            <span>Last updated on</span> {convertDate(data && data.updated_at)}{" "}
          </p>
          <p>
            <span>Pushed on</span>
            {convertDate(data && data.pushed_at)}
          </p>
        </div>
      )}
    </div>
  );
};

export default Repo;
