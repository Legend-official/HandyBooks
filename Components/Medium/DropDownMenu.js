import Downarrow from "../Icons/Downarrow";
import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { styled } from "@mui/material/styles";
import NativeSelect from "@mui/material/NativeSelect";
import InputBase from "@mui/material/InputBase";

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(0),
  },
  "& .MuiInputBase-input": {
    borderRadius: 10,
    // position: "relative",
    fontSize: 20,
    padding: "25px 25px 5px 10px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
}));

const DropDownMenu = (props) => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
    props.getData(event.target.value)
  };


  return (
    <div>
      <FormControl required variant="filled" sx={{ minWidth: 160 }}>
        <InputLabel id="demo-simple-select-filled-label">{props.text}</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={age}
          onChange={handleChange}
          input={<BootstrapInput />}
        >
          {props.data.map((item) => {
            return <MenuItem key={item.value} value={item.value}>{item.title}</MenuItem>;
          })}
        </Select>
      </FormControl>
    </div>
  );
};

export default DropDownMenu;
