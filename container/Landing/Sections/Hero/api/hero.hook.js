import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchBannerSectionImg } from "./hero.api";

export const useHero = () => {
  const { data, isLoading, isError, error, isFetching } = useQuery(
    ["use-hero"],
    fetchBannerSectionImg
  );
  return { data, isLoading, isError, error, isFetching };
};
