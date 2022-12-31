import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchData from "../middleware/fetchData";
import PostCard from "./PostCard";

export default function Product() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const api = "https://jsonplaceholder.typicode.com/posts";

  useEffect(() => {
    fetchData(dispatch, api);
  }, []);

  return (
    <div>
      <div>Product</div>
      {state.loading && <h1>data is loading..............</h1>}
      {state.error && <h1>{state.error}</h1>}
      {state.products && <PostCard products={state.products} />}
    </div>
  );
}
