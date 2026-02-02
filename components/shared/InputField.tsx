"use client";

import { setSearchedProducts } from "@/slices/productSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

interface Props {
  placeholder: string;
}

export default function InputField({ placeholder }: Props) {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  const handleSearch = () => {
    dispatch(setSearchedProducts(value));
  };

  return (
    <TextField
      fullWidth
      placeholder={placeholder}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onKeyDown={(e) => e.key === "Enter" && handleSearch()}
      variant="outlined"
      sx={{
        maxWidth: 466,
        "& .MuiOutlinedInput-root": {
          borderRadius: "999px",
          backgroundColor: "#fff",
          "& fieldset": { borderColor: "#d1d5db" },
          "&:hover fieldset": { borderColor: "#bdbdbd" },
          "&.Mui-focused fieldset": { borderColor: "#800000" },
        },
        "& input": { padding: "16px 20px" },
      }}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              onClick={handleSearch}
              sx={{
                backgroundColor: "#f59e0b",
                width: 40,
                height: 40,
                "&:hover": {
                  backgroundColor: "#d97706",
                },
              }}
            >
              <SearchIcon sx={{ color: "#fff", fontSize: 20 }} />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
}
