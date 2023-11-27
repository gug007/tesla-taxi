import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import { useMediaQuery } from "@mui/material";

import { REACT_APP_SERVER_URL } from "../../config";
import filterDesc from "../../icons/filter-desc.svg";
import FilterItem from "./FilterItem";

const initialValues = {
  availability: [],
  condition: [],
  make: [],
};

export default function Filter({
  open,
  setOpen,
  selected,
  onChange,
  desktop,
  onSearch,
  theme = "light",
}) {
  const [filters, setFilters] = useState();
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const length =
    selected.availability.length +
    selected.condition.length +
    selected.make.length;

  const handleSelect = (type) => (value) => {
    onChange((values) => {
      const items = values[type];
      return {
        ...values,
        [type]: items.includes(value)
          ? items.filter((v) => v !== value)
          : items.concat(value),
      };
    });
  };
  const handleClear = () => {
    onChange(initialValues);
  };

  const handleToggle = () => {
    setOpen((v) => !v);
  };

  useEffect(() => {
    fetch(`${REACT_APP_SERVER_URL}/v1/app/vehicle_filters`)
      .then((response) => response.json())
      .then((response) => {
        setFilters(response.data);
      });
  }, []);

  return (
    <>
      {desktop ? (
        <Button
          variant="outlined"
          color="inherit"
          sx={{
            textTransform: "none",
            borderRadius: "12px",
            fontSize: "16px",
            fontWeight: 500,
            bgcolor: "#fff",
            border: "1px solid white",
            ":hover": {
              color: "white",
            },
          }}
          onClick={handleToggle}
        >
          Filter
          <Box minWidth={20} mx={1}>
            {length > 0 && (
              <Box
                bgcolor="#DCF7FF"
                color="#68DFFF"
                borderRadius="32px"
                fontSize={12}
              >
                {length}
              </Box>
            )}
          </Box>
          <Box component="img" src={filterDesc} />
        </Button>
      ) : (
        <IconButton
          sx={{
            height: 31,
            background: "#fff",
            color: "#999FAE",
            fontSize: "12px",
            textTransform: "none",
            borderRadius: "6px",
          }}
          onClick={handleToggle}
        >
          <Box component="img" src={filterDesc} />
        </IconButton>
      )}
      <Dialog
        open={open}
        fullScreen={isMobile}
        maxWidth="md"
        sx={{ p: 0 }}
        onClose={handleToggle}
        PaperProps={{
          sx: { borderRadius: isMobile ? undefined : "20px" },
        }}
      >
        <DialogContent sx={{ p: 0 }}>
          <Box
            bgcolor="white"
            display="flex"
            height="100%"
            flexDirection="column"
            minWidth={isMobile ? undefined : 700}
          >
            <Box px="20px" mt="30px">
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <IconButton
                  sx={{ boxShadow: "1px 3px 10px rgba(0, 0, 0, 0.1)" }}
                  onClick={handleToggle}
                >
                  <ArrowBackIcon />
                </IconButton>
                <Typography fontSize="20px" fontWeight={700}>
                  Filters
                </Typography>
                <ButtonBase onClick={handleClear}>
                  <Typography variant="body2">Clear all</Typography>
                </ButtonBase>
              </Box>
            </Box>
            <Box px="20px" sx={{ overflowY: "auto" }}>
              {filters?.availability && (
                <Box
                  mt="27px"
                  pb="16px"
                  borderBottom="1px solid rgba(0, 0, 0, 0.07)"
                >
                  <FilterItem
                    title="Availability"
                    list={filters.availability}
                    selected={selected.availability}
                    onToggle={handleSelect("availability")}
                  />
                </Box>
              )}
              {filters?.condition && (
                <Box
                  mt="27px"
                  pb="16px"
                  borderBottom="1px solid rgba(0, 0, 0, 0.07)"
                >
                  <FilterItem
                    title="Condition"
                    list={filters.condition}
                    selected={selected.condition}
                    onToggle={handleSelect("condition")}
                  />
                </Box>
              )}
              {filters?.makes && (
                <Box mt="27px" mb="20px">
                  <FilterItem
                    title="Brand"
                    list={filters.makes}
                    selected={selected.make}
                    onToggle={handleSelect("make")}
                  />
                </Box>
              )}
            </Box>
          </Box>
        </DialogContent>
        <DialogActions sx={{ borderTop: "1px solid #D0D5DD" }}>
          <Box
            px="12px"
            py="18px"
            bgcolor="#FDFEFF"
            display="flex"
            flexGrow={1}
            justifyContent="flex-end"
          >
            <Button
              onClick={() => {
                handleToggle();
                onSearch();
              }}
              fullWidth={isMobile}
              variant="outlined"
              size="large"
              sx={{
                minWidth: 300,
                height: 58,
                border: "1px solid #1B2F39",
                color: "white",
                background: "#1B2F39",
                textTransform: "none",
                fontSize: "13px",
                borderRadius: isMobile ? undefined : "12px",
                ":hover": {
                  border: "1px solid #1B2F39",
                  color: "white",
                  background: "#1B2F39",
                },
                ":active": {
                  border: "1px solid #111E24",
                  color: "white",
                  background: "#111E24",
                },
              }}
            >
              Done
            </Button>
          </Box>
        </DialogActions>
      </Dialog>
    </>
  );
}
