import { useState } from "react";
import ButtonBase from "@mui/material/ButtonBase";

import CarConditionModal from "./Modals/CarConditionModal";

export default function CarCondition({ sx, fontSize, children }) {
  const [open, setOpen] = useState(false);

  const handleToggle = (e) => {
    e.stopPropagation();
    setOpen((v) => !v);
  };

  return (
    <>
      <ButtonBase
        sx={{
          fontSize,
          textDecoration: "underline",
          textUnderlineOffset: "2px",
          textDecorationThickness: "1px",
          ...sx,
        }}
        onClick={handleToggle}
      >
        {children}
      </ButtonBase>
      {open && <CarConditionModal value={children} onClose={handleToggle} />}
    </>
  );
}
