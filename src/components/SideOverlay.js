import React, { useState } from "react";
import { Button, Drawer } from "@mui/material";

export default function SideOverlay({ title, FormBody }) {
  const [overlayOpen, setOverlayOpen] = useState(false);

  const handleOverlayState = () => {
    setOverlayOpen(!overlayOpen);
  };

  return (
    <div className="side-overlay">
      <Button
        className={`overlay-button ${overlayOpen ? "overlay-active" : ""}`}
        onClick={handleOverlayState}
      >
        {title}
      </Button>
      {overlayOpen && (
        <Drawer
          classes={{
            paper: `overlay ${overlayOpen ? "open" : ""}`,
          }}
          anchor="right"
          open={overlayOpen}
          onClose={handleOverlayState}
        >
          <div className="overlay-header">{title.toUpperCase()}</div>
          <div className="overlay-body">{FormBody && <FormBody />}</div>
        </Drawer>
      )}
    </div>
  );
}
