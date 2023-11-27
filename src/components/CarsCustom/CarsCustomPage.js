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
import CarItem from "../Cars/CarItem";
import Filter from "../Cars/Filter";
import Sort from "../Cars/Sort";
import HeaderDesktop from "../Header/HeaderDesktop";
import { getSearchParams, options } from "../Cars/CarsPage";
import useFilterState from "../../hooks/useFilterState";
import EmptyPage from "../Cars/EmptyPage";
import QualifyMessage from "./QualifyMessage";

export default function CarsCustomPage() {
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);
  const [openFilter, setOpenFilter] = useState(false);
  const [cars, setCars] = useState();
  const [selectedFilter, setSelectedFilter] = useFilterState();
  const [selectedSort, setSelectedSort] = useState();
  const isEmpty = !loading && !cars?.length;
  const annualIncome = localStorage.getItem("annualIncome");
  const VEHICLES_URL = `${REACT_APP_SERVER_URL}/v1/app/vehicles?income=${annualIncome}`;

  const loadVehicles = (params) => {
    return fetch(`${VEHICLES_URL}&${params}`).then((response) =>
      response.json()
    );
  };

  const handleLoad = (params) => {
    setUpdating(true);
    loadVehicles(params).then((response) => {
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
    loadVehicles().then((response) => {
      setCars(response.data);
      setLoading(false);
    });
    // eslint-disable-next-line
  }, []);

  return (
    <Box display="flex" flexDirection="column" height="100vh" flexGrow={1}>
      <Hidden mdUp>
        <Box bgcolor="#1D323D">
          <HeaderMobile theme="dark" />
        </Box>
      </Hidden>
      <Hidden mdDown>
        <Box>
          <HeaderDesktop />
        </Box>
      </Hidden>
      {updating && <LinearProgress />}
      <Box
        display="flex"
        flexDirection="column"
        flexGrow={1}
        bgcolor="#1D323D"
        px="4px"
      >
        {isEmpty && <EmptyPage onEditFilters={() => setOpenFilter(true)} />}
        <Container sx={{ display: isEmpty ? "none" : undefined }}>
          <Box
            display="flex"
            justifyContent="space-between"
            pt={{ xs: "17px", md: "22px" }}
          >
            <Box>
              <Typography
                fontSize={{ xs: "39px", md: "55px" }}
                fontWeight={700}
                color="#73E5FF"
                letterSpacing="-0.045em"
              >
                Choose a car
              </Typography>
              <Typography
                color="#73E5FF"
                fontSize={{ xs: "16px", md: "22px" }}
                lineHeight="16px"
              >
                Let’s get you in your dream car!
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
              {cars.map((car, index) => (
                <Grid key={car.id} item xs={12} sm={6} md={4}>
                  <Box position="relative">
                    <CarItem car={car} url="/custom" />
                    {!car.attributes.qualified && <QualifyMessage />}
                  </Box>
                </Grid>
              ))}
            </Grid>
          )}
        </Container>
      </Box>
    </Box>
  );
}
