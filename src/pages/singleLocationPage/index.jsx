import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleLocation } from "../../store/slices/singleLocationSlice";

import LocationResidents from "../../components/locationResidents";
import GoBackButton from "../../assets/buttons/goBackButton";
import styles from "./style.module.css";

const SingleLocationPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { name, info, residents, status, error } = useSelector(
    (state) => state.singleLocation
  );

  useEffect(() => {
    dispatch(fetchSingleLocation(id));
  }, [dispatch, id]);

  return (
    <div>
      <div className={styles.locationDesc}>
        <GoBackButton /> <h1 style={{ margin: "auto" }}>{name}</h1>
      </div>

      {/* Loader */}
      {status === "loading" && <div className={styles.loader}>Loading...</div>}

      {/* Error */}
      {status === "failed" && <p className={styles.error}>Error: {error}</p>}

      {/* Location Info */}
      {status === "succeeded" && (
        <div>
          <div>
            {info.map((item, index) => (
              <div key={index}>
                <strong>{item.title}:</strong> {item.data}
              </div>
            ))}
          </div>

          {/* Residents */}
          {residents.length > 0 ? (
            <LocationResidents residents={residents} />
          ) : (
            <p>Who Knows What Or Who living here...</p>
          )}
        </div>
      )}
    </div>
  );
};

export default SingleLocationPage;
