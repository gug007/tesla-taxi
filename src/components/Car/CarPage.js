import { useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Hidden from "@mui/material/Hidden";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";

import HeaderMobile from "../Header/HeaderMobile";
import CarColors from "./colors/CarColors";
import CarPrice from "./CarPrice";
import CarInfo from "./CarInfo";
import Description from "./Description";
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
  const [image, setImage] = useState(0);
  const [car, setCar] = useState({
    attributes: {
      name: "test",
      vehicle_images: [
        { data: { attributes: { url: "https://via.placeholder.com/150" } } },
      ],
      colors: [],
    },
  });

  const handleNextImage = () => {
    const length = car.attributes.vehicle_images.length;
    setImage((v) => (v === length - 1 ? 0 : v + 1));
  };

  const handlePrevImage = () => {
    const length = car.attributes.vehicle_images.length;
    setImage((v) => (v === 0 ? length - 1 : v - 1));
  };

  return (
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
          </Container>
        </Box>
        <Box mt="600px" />
        Yerevan > Dilijan -
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
