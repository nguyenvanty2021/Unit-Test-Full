import React, { useEffect, useState } from "react";
import "./FollowersList.css";
import axios from "axios";
import { Link } from "react-router-dom";

export default function FollowersList() {
  const [followers, setFollowers] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchFollowers = async () => {
      try {
        setLoading(true);
        const data = await axios.get("https://randomuser.me/api/?results=5");
        setFollowers(data?.data?.results);
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };

    fetchFollowers();
  }, []);

  return (
    <div className="followerslist-container">
      {loading ? "Loading..." : null}

      <div>
        {followers?.length > 0 &&
          followers.map((follower, index) => (
            <div
              key={index}
              data-testid={`follower-item-${index}`}
              className="follower-item"
            >
              <img alt="" src={follower.picture.large} />
              <div className="followers-details">
                <div className="follower-item-name">
                  <h4>{follower.name.first}</h4> <h4>{follower.name.last}</h4>
                </div>
                <p>{follower.login.username}</p>
              </div>
            </div>
          ))}
      </div>
      <div className="todo-footer">
        <Link to="/">Go Back</Link>
      </div>
    </div>
  );
}
