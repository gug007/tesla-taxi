import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Hidden from "@mui/material/Hidden";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";

import { REACT_APP_SERVER_URL } from "../../config";
import HeaderMobile from "../Header/HeaderMobile";
import CarImages from "./CarImages";
import CarColors from "./colors/CarColors";
import CarPrice from "./CarPrice";
import CarInfo from "./CarInfo";
import Description from "./Description";
import PriceComparison from "./PriceComparison";
import GasSavings from "./GasSavings";
import Questions from "./Questions";
import CarTitle from "./CarTitle";
import arrowRight from "../../icons/arrow-right-outlined.svg";
import arrowLeft from "../../icons/arrow-left-outlined.svg";
import CarItems from "./CarItems";
import CarCardDesktop from "./CarCardDesktop";
import HeaderCarDesktop from "../Header/HeaderCarDesktop";
import CarFooterMobile from "./CarFooterMobile";
import CarImagesList from "./CarImagesList";
import getCarTitle from "../../utils/getCarTitle";

export default function CarPage() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [image, setImage] = useState(0);
  const [car, setCar] = useState();

  useEffect(() => {
    setCar({
      attributes: {
        name: "test",
        vehicle_images: [
          { data: { attributes: { url: "https://via.placeholder.com/150" } } },
        ],
        colors: [],
      },
    });
    setLoading(false);
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
      <Hidden mdUp>
        <HeaderMobile item={car?.attributes} />
      </Hidden>
      <Hidden mdDown>
        <HeaderCarDesktop item={car?.attributes} />
      </Hidden>
      <Hidden mdUp>
        <Box mt="32px" mx="20px">
          <CarTitle item={car?.attributes} />
          <Box>
            <CarImages
              image={image}
              item={car?.attributes}
              onChange={setImage}
            />
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              mt="17px"
            >
              <CarColors colors={car?.attributes?.colors} />
              <CarPrice item={car.attributes} />
            </Box>
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
            <Box mt="69px">
              <CarTitle item={car?.attributes} />
            </Box>
            <Box
              height="416px"
              display="flex"
              alignItems="center"
              justifyContent="center"
              overflow="hidden"
            >
              <Box height="100%">
                <ButtonBase sx={{ mt: "67px" }} onClick={handlePrevImage}>
                  <Box component="img" src={arrowLeft} />
                </ButtonBase>
              </Box>
              <Box flexGrow={1} display="flex" justifyContent="center">
                <Box
                  component="img"
                  sx={{ maxWidth: "100%" }}
                  src={car.attributes.vehicle_images[image].data.attributes.url}
                />
              </Box>
              <Box height="100%">
                <ButtonBase sx={{ mt: "67px" }} onClick={handleNextImage}>
                  <Box component="img" src={arrowRight} />
                </ButtonBase>
              </Box>
            </Box>
            <Box my={5} display="flex" justifyContent="center">
              <CarImagesList
                selected={image}
                images={car.attributes.vehicle_images}
                onChange={setImage}
              />
            </Box>
          </Container>
        </Box>
        <Container>
          <Grid container spacing={6}>
            <Grid item md={8}>
              <Box mt={4}>
                <CarItems />
              </Box>
              <Typography mt="101px" fontSize="48px" fontWeight={700}>
                How we compare
              </Typography>
            </Grid>
            <Grid item md={4}>
              <Box height={3000} position="absolute">
                <Box top={140} position="sticky">
                  <CarCardDesktop item={car.attributes} />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Hidden>
      <CarInfo item={car.attributes} />
      <GasSavings item={car.attributes} />
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
        <CarFooterMobile title={getCarTitle(car.attributes)} />
      </Hidden>
    </Box>
  );
}
