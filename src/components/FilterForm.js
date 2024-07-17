import React from "react";
import { useFormik } from "formik";
import { FormControl, InputLabel, Select, MenuItem, Button } from "@mui/material";

export default function FilterForm({ toggleOverlay }) {
  const menuTypes = ["admin", "fhs", "ncd", "training", "manage", "report"];
  const groupTypes = ["group1", "group2"];
  const subGroupTypes = ["sg1", "sg2"];

  const formik = useFormik({
    initialValues: {
      MenuType: "None",
      GroupType: "None",
      SubGroupType: "None",
    },
    onSubmit: (values) => {
      console.log("Form values:", values);
      toggleOverlay(false);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="filter-form">
      <FormControl margin="normal" fullWidth>
        <InputLabel id="MenuType">Menu Type</InputLabel>
        <Select
          labelId="MenuType"
          id="menuType"
          name="MenuType"
          value={formik.values.MenuType}
          onChange={formik.handleChange}
          variant="standard"
        >
          {menuTypes.map((type) => (
            <MenuItem key={type} value={type} className="select-item">
              {type}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl margin="normal" fullWidth>
        <InputLabel id="Group">Group Type</InputLabel>
        <Select
          labelId="Group"
          id="groupType"
          name="GroupType"
          value={formik.values.GroupType}
          onChange={formik.handleChange}
          variant="standard"
        >
          {groupTypes.map((type) => (
            <MenuItem key={type} value={type} className="select-item">
              {type}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl margin="normal" fullWidth>
        <InputLabel id="SubGroup">Sub Group Type</InputLabel>
        <Select
          labelId="SubGroup"
          id="subGroupType"
          name="SubGroupType"
          value={formik.values.SubGroupType}
          onChange={formik.handleChange}
          variant="standard"
        >
          {subGroupTypes.map((type) => (
            <MenuItem key={type} value={type} className="select-item">
              {type}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <div className="overlay-footer">
            <Button className="button close">
              Close
            </Button>
            <Button type="submit" className="button search" >Search</Button>
          </div>
    </form>
  );
}
