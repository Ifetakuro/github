import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { convertDate } from "../components/convertDate";
import useFetch from "../hooks/useFetch";
import "../css/repos.css";
import { MdArrowForwardIos, MdOutlineArrowBackIos } from "react-icons/md";
import Loader from "../components/Loader";
import { useErrorHandler } from "react-error-boundary";
import SearchForm from "../components/form";
import { useSearchParams } from "react-router-dom";

export const AllRepos = () => {
  const handleError = useErrorHandler();
  const [page, setPage] = useState(1);
  let [searchParams, setSearchParams] = useSearchParams();

  const { loading, error, data } = useFetch(
    "https://api.github.com/users/ifetakuro/repos"
  );

  if (!loading && error) {
    handleError(error);
  }

  const CustomNavLink = ({ to, ...props }) => {
    return (
      <NavLink
        className={({ isActive }) =>
          isActive ? "repos-boxes active-box" : "repos-boxes"
        }
        to={to}
        end
        {...props}
      />
    );
  };

  let newData = data?.filter((repo) => {
    let filter = searchParams.get("filter");
    if (!filter) return true;
    let name = repo.name.toLowerCase();
    return name.includes(filter.toLowerCase());
  });

  const per_page = 8;
  const total = newData && newData.length;
  const skip = page * per_page - per_page;
  const pages = Math.ceil(total / per_page);

  return (
    <div className="container">
      <h1>Repos</h1>
      <Outlet />
      {data && !loading && (
        <div className="pag-search">
          <SearchForm
            searchParams={searchParams}
            setSearchParams={setSearchParams}
            searchParamsValue={searchParams.get("filter") || ""}
          />
          <p>
            Pages: {page} of {pages}
          </p>
        </div>
      )}
      {loading && !data ? (
        <Loader />
      ) : (
        <div className="repos-div-div">
          <div className="repos-div">
            {newData &&
              newData.slice(skip, skip + per_page).map((repo) => {
                return (
                  <CustomNavLink to={`/repos/${repo.name}`} key={repo.id}>
                    <p>
                      <span>Name of Repository:</span> {repo.name}
                    </p>
                    <p>
                      <span>Visibility:</span> {repo.visibility}
                    </p>
                    <p>
                      <span>Created on</span> {convertDate(repo.created_at)}{" "}
                    </p>
                  </CustomNavLink>
                );
              })}
          </div>
        </div>
      )}
      {data && !loading && (
        <div className="pag-div">
          <div>
            <button
              disabled={page <= 1}
              onClick={() => setPage((prev) => prev - 1)}
              className="pag-btn"
            >
              <MdOutlineArrowBackIos />
            </button>

            {Array.from({ length: pages }, (value, index) => index + 1).map(
              (each, id) => (
                <button
                  onClick={() => setPage(each)}
                  className={`pag-btn ${each === page ? "pag-active" : ""}`}
                  key={id}
                >
                  {each}
                </button>
              )
            )}

            <button
              disabled={page >= pages}
              aria-disabled={page >= pages}
              onClick={() => setPage((prev) => prev + 1)}
              className="pag-btn"
            >
              <MdArrowForwardIos />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllRepos;
