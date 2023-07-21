import React, { useEffect, memo, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCode, faStar } from "@fortawesome/free-solid-svg-icons";

export default memo(function TeamMember({ github }) {
  const [info, setInfo] = useState(null);
  const [repos, setRepos] = useState(null);
  useEffect(() => {
    (async () => {
      let req = await fetch("https://api.github.com/users/" + github);
      let json = await req.json();
      setInfo(json);
    })();
    (async () => {
      let req = await fetch(
        "https://api.github.com/users/" + github + "/repos"
      );
      let json = await req.json();
      setRepos(json.filter((repo) => !repo.fork));
      console.log(repos);
    })();
  }, [github]);
  return (
    info &&
    repos && (
      <div className="team-member">
        <img src={info.avatar_url} alt="" className="team-avatar" />
        <div className="details">
          <a href={info.html_url}>
            <h3>
              {info.name} <FontAwesomeIcon icon={faGithub} /> ({info.login})
            </h3>
          </a>
          <hr className="seperator" />
          <div className="info">
            <div className="detail">
              <FontAwesomeIcon icon={faCode} /> &nbsp;
              {repos
                .sort(() => Math.random() - Math.random())
                .slice(0, 4)
                .map((repo, i) => {
                  return (
                    <a href={repo.html_url} key={repo.id} target="_blank">
                      {repo.name} {i < 3 && " | "}
                    </a>
                  );
                })}
              and
              <a href={info.repos_url} target="_blank">
                {" "}
                {info.public_repos - 4} more repos{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  );
});
