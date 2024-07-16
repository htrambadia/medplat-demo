import React from "react";
import SideOverlay from "./SideOverlay";
import FilterForm from "./FilterForm";

export default function ReportList() {
  return (
    <div>
      <SideOverlay title="Filter" FormBody={FilterForm}></SideOverlay>
    </div>
  );
}
