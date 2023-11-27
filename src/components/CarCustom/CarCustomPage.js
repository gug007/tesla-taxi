import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import Hidden from "@mui/material/Hidden";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import ButtonBase from "@mui/material/ButtonBase";
import CircularProgress from "@mui/material/CircularProgress";

import { REACT_APP_SERVER_URL } from "../../config";
import CarTitle from "../Car/CarTitle";
import CarImages from "../Car/CarImages";
import PriceComparison from "../Car/PriceComparison";
import CarInfo from "../Car/CarInfo";
import GasSavings from "../Car/GasSavings";
import Description from "../Car/Description";
import Questions from "../Car/Questions";
import CustomizePlan from "./CustomizePlan";
import CarCustomFooterMobile from "./CarCustomFooterMobile";
import CarItems from "../Car/CarItems";
import arrowLeft from "../../icons/arrow-left-outlined.svg";
import arrowRight from "../../icons/arrow-right-outlined.svg";
import Header from "./Header";

export default function CarCustomPage() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [image, setImage] = useState(0);
  const [car, setCar] = useState();

  useEffect(() => {
    fetch(`${REACT_APP_SERVER_URL}/v1/app/vehicles/${id}`)
      .then((response) => response.json())
      .then((response) => {
        setCar(response.data);
        setLoading(false);
      });
  }, [id]);

  const handleNextImage = () => {
    const length = car.attributes.vehicle_images.length;
    setImage((v) => (v === length - 1 ? 0 : v + 1));
  };

  const handlePrevImage = () => {
    const length = car.attributes.vehicle_images.length;
    setImage((v) => (v === 0 ? length - 1 : v - 1));
  };

  return loading ? (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
      <CircularProgress />
    </Box>
  ) : (
    <Box>
      <Header item={car.attributes} />
      <Hidden mdUp>
        <Box mt="32px" mx="20px">
          <CarTitle item={car.attributes} />
          <Box>
            <CarImages
              image={image}
              item={car.attributes}
              onChange={setImage}
            />
            <CustomizePlan item={car.attributes} />
            <CarItems />
            <Box mt="35px" fontSize="25px" fontWeight={700}>
              How we compare
            </Box>
          </Box>
        </Box>
      </Hidden>
      <Hidden mdDown>
        <Box borderBottom="1px solid #D0D5DD">
          <Container>
            <Box
              height="734px"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Box height="100%">
                <ButtonBase sx={{ mt: "200px" }} onClick={handlePrevImage}>
                  <Box component="img" src={arrowLeft} />
                </ButtonBase>
              </Box>
              <Box flexGrow={1} display="flex" justifyContent="center">
                <Box
                  component="img"
                  src={car.attributes.vehicle_images[image].data.attributes.url}
                />
              </Box>
              <Box height="100%">
                <ButtonBase sx={{ mt: "200px" }} onClick={handleNextImage}>
                  <Box component="img" src={arrowRight} />
                </ButtonBase>
              </Box>
            </Box>
          </Container>
        </Box>
        <Container>
          <Grid container spacing={6}>
            <Grid item md={8}>
              <Box mt={4}>
                <CarItems />
              </Box>
              <Typography mt="70px" fontSize="48px" fontWeight={700}>
                How we compare
              </Typography>
              <PriceComparison
                data={car.attributes.comparison_table.data.attributes}
              />
            </Grid>
            <Grid item md={4}>
              <Box height={3000} position="absolute">
                <Box top={140} position="sticky">
                  <CustomizePlan item={car.attributes} />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Hidden>
      <Hidden mdUp>
        <Container>
          <PriceComparison
            data={car.attributes.comparison_table.data.attributes}
          />
        </Container>
      </Hidden>
      <CarInfo item={car.attributes} />
      <GasSavings />
      <Hidden mdUp>
        <Description />
      </Hidden>
      <Hidden mdDown>
        <Container>
          <Grid container spacing={1}>
            <Grid item xs={12} md={7}>
              <Description />
            </Grid>
          </Grid>
        </Container>
      </Hidden>
      <Questions />
      <Hidden mdUp>
        <CarCustomFooterMobile item={car.attributes} />
      </Hidden>
    </Box>
  );
}
