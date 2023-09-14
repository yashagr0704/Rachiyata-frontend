import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchBannerSectionImg1 } from "./hero.api";

export const useHero1 = () => {
  const { data, isLoading, isError, error, isFetching } = useQuery(
    ["use-hero1"],
    fetchBannerSectionImg1
  );
  return { data, isLoading, isError, error, isFetching };
};
