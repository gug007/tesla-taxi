import { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Hidden from "@mui/material/Hidden";
import Container from "@mui/material/Container";
import Skeleton from "@mui/material/Skeleton";
import LinearProgress from "@mui/material/LinearProgress";

import { REACT_APP_SERVER_URL } from "../../config";
import HeaderMobile from "../Header/HeaderMobile";
import CarItem from "./CarItem";
import Filter from "./Filter";
import Sort from "./Sort";
import HeaderDesktop from "../Header/HeaderDesktop";
import CarsFooterMobile from "./CarsFooterMobile";
import useFilterState from "../../hooks/useFilterState";
import EmptyPage from "./EmptyPage";

export const options = [
  ["", "Default"],
  ["asc", "Low to high"],
  ["desc", "High to low"],
];

export const getSearchParams = (selectedSort, selectedFilter) => {
  const order = selectedSort ? `order=${selectedSort}` : "";
  return Object.entries(selectedFilter)
    .flatMap(([key, list]) => list?.map((value) => `${key}[]=${value}`))
    .concat(order)
    .filter((v) => v)
    .join("&");
};

export default function CarsPage() {
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);
  const [openFilter, setOpenFilter] = useState(false);
  const [cars, setCars] = useState();
  const [selectedFilter, setSelectedFilter] = useFilterState();
  const [selectedSort, setSelectedSort] = useState();
  const isEmpty = !loading && !cars?.length;

  const handleLoad = (params) => {
    setUpdating(true);
    fetch(`${REACT_APP_SERVER_URL}/v1/app/vehicles?${params}`)
      .then((response) => response.json())
      .then((response) => {
        setCars(response.data);
        setUpdating(false);
      });
  };

  const handleSearch = () => {
    const params = getSearchParams(selectedSort, selectedFilter);
    handleLoad(params);
  };

  const handleSort = (v) => {
    setSelectedSort(v);
    const params = getSearchParams(v, selectedFilter);
    handleLoad(params);
  };

  useEffect(() => {
    fetch(`${REACT_APP_SERVER_URL}/v1/app/vehicles`)
      .then((response) => response.json())
      .then((response) => {
        setCars(response.data);
        setLoading(false);
      });
  }, []);

  return (
    <Box display="flex" flexDirection="column" height="100vh" flexGrow={1}>
      <Box>
        <Hidden mdUp>
          <HeaderMobile />
        </Hidden>
        <Hidden mdDown>
          <HeaderDesktop />
        </Hidden>
      </Box>
      {updating && <LinearProgress />}
      <Box
        display="flex"
        flexDirection="column"
        flexGrow={1}
        bgcolor="#F2F2F2"
        pt={{ xs: "17px", md: "22px" }}
        px="4px"
      >
        {isEmpty && <EmptyPage onEditFilters={() => setOpenFilter(true)} />}
        <Container sx={{ display: isEmpty ? "none" : undefined }}>
          <Box display="flex" justifyContent="space-between">
            <Box>
              <Typography
                fontSize={{ xs: "39px", md: "55px" }}
                fontWeight={700}
                color="#1B2F39"
                letterSpacing="-0.045em"
              >
                Choose a car
              </Typography>
              <Typography
                color="#484848"
                fontSize={{ xs: "16px", md: "22px" }}
                lineHeight="16px"
              >
                Let’s get you in your dream car.
              </Typography>
            </Box>
          </Box>
          <Hidden mdUp>
            <Box mb="14px" display="flex" justifyContent="flex-end">
              <Sort
                value={selectedSort}
                options={options}
                onChange={handleSort}
              />
              <Filter
                open={openFilter}
                setOpen={setOpenFilter}
                selected={selectedFilter}
                onChange={setSelectedFilter}
                onSearch={handleSearch}
              />
            </Box>
          </Hidden>
          <Hidden mdDown>
            <Box display="flex" justifyContent="flex-end" mt="27px" mb="28px">
              <Sort
                desktop
                value={selectedSort}
                options={options}
                onChange={handleSort}
              />
              <Filter
                desktop
                open={openFilter}
                setOpen={setOpenFilter}
                selected={selectedFilter}
                onChange={setSelectedFilter}
                onSearch={handleSearch}
              />
            </Box>
          </Hidden>
          {loading ? (
            <Grid container spacing={3}>
              {new Array(9).fill().map((v, index) => (
                <Grid key={index} item xs={12} sm={6} md={4}>
                  <Skeleton
                    variant="rounded"
                    width="100%"
                    height={350}
                    sx={{ borderRadius: "10px" }}
                  />
                </Grid>
              ))}
            </Grid>
          ) : (
            <Grid container spacing={3}>
              {cars.map((car) => (
                <Grid key={car.id} item xs={12} sm={6} md={4}>
                  <CarItem car={car} />
                </Grid>
              ))}
            </Grid>
          )}
        </Container>
      </Box>
      {!isEmpty && (
        <Hidden mdUp>
          <CarsFooterMobile />
        </Hidden>
      )}
    </Box>
  );
}
