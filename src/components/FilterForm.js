import React, { useState } from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

export default function FilterForm({ title, toggleOverlay }) {
  const initalState = {
    MenuType: "None",
    GroupType: "None",
    SubGroupType: "None",
  };
  const [state, setState] = useState(initalState);

  const menuTypes = ["admin", "fhs", "ncd", "training", "manage", "report"];
  const groupTypes = ["group1", "group2"];
  const subGroupTypes = ["sg1", "sg2"];

  const handleMenuType = (e) => {
    setState({
      ...state,
      MenuType: e.target.value,
    });
  };
  const handleGroupType = (e) => {
    setState({
      ...state,
      GroupType: e.target.value,
    });
  };
  const handleSubGroupType = (e) => {
    setState({
      ...state,
      SubGroupType: e.target.value,
    });
  };

  return (
      <div className="filter-form">
        <FormControl margin="normal" fullWidth>
          <InputLabel id="MenuType">Menu Type</InputLabel>
          <Select
            labelId="MenuType"
            id="menuType"
            value={state.MenuType}
            label="menu"
            onChange={(e) => handleMenuType(e)}
            variant="standard"
          >
            {menuTypes.map((type) => (
              <MenuItem value={type} className="select-item">
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
            value={state.GroupType}
            label="group"
            onChange={(e) => handleGroupType(e)}
            variant="standard"
          >
            {groupTypes.map((type) => (
              <MenuItem value={type} className="select-item">
                {type}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl margin="normal" fullWidth>
          <InputLabel id="Group" size="normal">
            Sub Group Type
          </InputLabel>
          <Select
            labelId="SubGroup"
            id="subGroupType"
            value={state.SubGroupType}
            label="subGroup"
            onChange={(e) => handleSubGroupType(e)}
            variant="standard"
          >
            {subGroupTypes.map((type) => (
              <MenuItem value={type} className="select-item">
                {type}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
  );
}
