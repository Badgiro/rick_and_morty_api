import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchData } from "../../utils";
import { fetchSingleLocation } from "../../store/slices/singleLocationSlice";
import { useDispatch, useSelector } from "react-redux";

import LocationResidents from "../../components/locationResidents";

const SingleLocationPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { name, type, dimension, residents } = useSelector(
    (state) => state.singleLocation
  );
  console.log(residents && residents);

  useEffect(() => {
    dispatch(fetchSingleLocation(id));
  }, [id]);

  return (
    <div>
      <LocationResidents residents={residents} />
    </div>
  );
};

export default SingleLocationPage;
