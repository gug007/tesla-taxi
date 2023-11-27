import Box from "@mui/material/Box";

import done from "../../icons/done.svg";
import doneSecondary from "../../icons/done-secondary.svg";
import whatWeNeedFromYouIcon from "../../icons/what we need from you.svg";
import whatYouGetFromUsIcon from "../../icons/what you get from us.svg";

const list1 = [
  "CA residency",
  "At least 18 years old",
  "Safe driving record",
  "Completed application",
  "Insurance coverage",
];

const list2 = [
  "Flexible, affordable terms",
  "The option to renew or buy",
  "Routine maintenance (restrictions apply)",
  "A Level 1 home charger",
  "A team of EV Support Specialists",
];

export default function Description() {
  return (
    <>
      <Box
        mt="48px"
        ml="4px"
        display="flex"
        p="23px 18px"
        bgcolor="#F1FCFF"
        sx={{
          borderLeft: "4px solid #74E5FF",
        }}
      >
        <Box
          component="img"
          src={whatWeNeedFromYouIcon}
          width="43px"
          height="41px"
          alt=""
        />
        <Box ml="20px">
          <Box pb={0.5} fontSize="16px">
            What we need from you
          </Box>
          {list1.map((v) => (
            <Box key={v} mt={0.5} fontSize="12px" color="#1D323D">
              <Box component="img" src={done} mr={1} />
              {v}
            </Box>
          ))}
        </Box>
      </Box>
      <Box
        mt="35px"
        ml="4px"
        display="flex"
        p="23px 18px"
        bgcolor="rgba(250, 238, 255, 0.46)"
        sx={{
          borderLeft: "4px solid #EFCEFE",
        }}
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          width="41px"
          height="39px"
          border="1px solid #EFCEFE"
          borderRadius="8px"
        >
          <Box
            component="img"
            src={whatYouGetFromUsIcon}
            width="22px"
            height="22px"
            alt=""
          />
        </Box>
        <Box ml="20px">
          <Box pb={0.5} fontSize="16px">
            What you get from us
          </Box>
          {list2.map((v) => (
            <Box key={v} mt={0.5} fontSize="12px" color="#1D323D">
              <Box component="img" src={doneSecondary} mr={1} />
              {v}
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
}
