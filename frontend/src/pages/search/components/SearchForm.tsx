import "./SearchForm.scss";

import * as React from "react";

import { Checkbox, TextField } from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import Box from "@mui/material/Box";
import ButtonSelector from "../../home/components/buttons/ButtonSelector";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";

type Props = {};

const SearchForm = (props: Props) => {
  // const inputStyle = {
  //   width: "242px",
  // };
  const checkboxStyle = {
    // color: "red",
    // "& .MuiTypography-root": {
    //   fontFamily: "Inter",
    //   color: "blue",
    // },
  };
  const itemStyle = {
    // color: "red",
  };

  const [name, setName] = useState([]);

  const getValue = (e: any) => {
    let data: any = name;
    data.push(e.target.value);
    setName(data);
    console.warn(name);
  };

  const [tone, setTone] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setTone(event.target.value as string);
  };
  return (
    <>
      <div className="searchForm">
        <div className="searchForm__left">
          <div className="searchForm__inputSet">
            <div className="searchForm__label">ИНН компании *</div>
            <TextField
              size="small"
              // style={inputStyle}
              sx={{
                width: {
                  xs: "100%",
                  sm: "100%",
                  md: "100%",
                  lg: "242px",
                },
                "& .MuiInputLabel-root": {
                  fontSize: {
                    // xs: "12px",
                    sm: "14px",
                    md: "16px",
                    lg: "18px",
                  },
                  lineHeight: {
                    // xs: "16px",
                    sm: "18px",
                    md: "20px",
                    lg: "22px",
                  },
                },
              }}
              id="outlined-basic"
              label="10 цифр"
              variant="outlined"
              className="searchForm__input"
            ></TextField>
          </div>
          <div className="searchForm__inputSet">
            <div className="searchForm__label">Тональность</div>
            <Box
              sx={{
                width: {
                  xs: "100%",
                  sm: "100%",
                  md: "100%",
                  lg: "242px",
                },
                "& .MuiFormLabel-root": {
                  fontSize: {
                    // xs: "12px",
                    sm: "14px",
                    md: "16px",
                    lg: "18px",
                  },
                  lineHeight: {
                    // xs: "16px",
                    sm: "18px",
                    md: "20px",
                    lg: "22px",
                  },
                },
              }}
            >
              <FormControl fullWidth size="small">
                <InputLabel id="demo-simple-select-label">
                  Тональность
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={tone}
                  label="Тональность"
                  onChange={handleChange}
                >
                  <MenuItem value={0}>Любая</MenuItem>
                  <MenuItem value={1}>Позитивная</MenuItem>
                  <MenuItem value={2}>Негативная</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>
          <div className="searchForm__inputSet">
            <div className="searchForm__label">
              Количество документов в выдаче *
            </div>
            <TextField
              sx={{
                width: {
                  xs: "100%",
                  sm: "100%",
                  md: "100%",
                  lg: "242px",
                },
                "& .MuiInputLabel-root": {
                  fontSize: {
                    // xs: "12px",
                    sm: "14px",
                    md: "16px",
                    lg: "18px",
                  },
                  lineHeight: {
                    // xs: "16px",
                    sm: "18px",
                    md: "20px",
                    lg: "22px",
                  },
                },
              }}
              size="small"
              // style={inputStyle}
              id="outlined-basic"
              label="От 1 до 1000"
              variant="outlined"
              className="searchForm__input"
            ></TextField>
          </div>
          <div className="searchForm__inputSet">
            <div className="searchForm__label">Диапазон поиска*</div>
            <div className="searchForm__dates">
              <Box
                sx={{
                  width: "49%",
                  "& .MuiFormLabel-root": {
                    fontSize: {
                      // xs: "12px",
                      sm: "14px",
                      md: "16px",
                      lg: "18px",
                    },
                    lineHeight: {
                      // xs: "16px",
                      sm: "18px",
                      md: "20px",
                      lg: "22px",
                    },
                  },
                }}
                className="searchForm__input-diapason"
              >
                <FormControl fullWidth size="small">
                  <InputLabel id="demo-simple-select-label">
                    Дата начала
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={tone}
                    label="Тональность"
                    onChange={handleChange}
                  >
                    <MenuItem value={0}>
                      Дата начала <br /> Здесь будет календарь
                    </MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <Box
                sx={{
                  width: "49%",
                  "& .MuiFormLabel-root": {
                    fontSize: {
                      // xs: "12px",
                      sm: "14px",
                      md: "16px",
                      lg: "18px",
                    },
                    lineHeight: {
                      // xs: "16px",
                      sm: "18px",
                      md: "20px",
                      lg: "22px",
                    },
                  },
                }}
                className="searchForm__input-diapason"
              >
                <FormControl fullWidth size="small">
                  <InputLabel id="demo-simple-select-label">
                    Дата конца
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={tone}
                    label="Тональность"
                    onChange={handleChange}
                  >
                    <MenuItem value={0}>
                      Дата конца <br /> Здесь будет календарь
                    </MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </div>
          </div>
        </div>
        <div className="searchForm__right">
          <div className="searchForm__checkbox">
            <FormGroup
              sx={{
                "& .MuiTypography-root": {
                  // fontFamily: "Inter",
                  // color: "blue",
                  fontSize: {
                    xs: "14px",
                    // sm: "14px",
                    md: "16px",
                    lg: "18px",
                  },
                  lineHeight: {
                    xs: "16px",
                    // sm: "18px",
                    md: "20px",
                    lg: "22px",
                  },
                },
              }}
            >
              <FormControlLabel
                style={itemStyle}
                control={
                  <Checkbox
                    style={checkboxStyle}
                    color="success"
                    value="value1"
                    onChange={(e: any) => getValue(e)}
                  />
                }
                label="Признак максимальной полноты"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    color="success"
                    value="value2"
                    onChange={(e: any) => getValue(e)}
                  />
                }
                label="Упоминания в бизнес-контексте"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    color="success"
                    value="value3"
                    onChange={(e: any) => getValue(e)}
                  />
                }
                label="Главная роль в публикации"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    color="success"
                    value="value4"
                    onChange={(e: any) => getValue(e)}
                  />
                }
                label="Публикации только с риск-факторами"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    color="success"
                    value="value5"
                    onChange={(e: any) => getValue(e)}
                  />
                }
                label="Включать технические новости рынков"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    color="success"
                    value="value6"
                    onChange={(e: any) => getValue(e)}
                  />
                }
                label="Включать анонсы и календари"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    color="success"
                    value="value7"
                    onChange={(e: any) => getValue(e)}
                  />
                }
                label="Включать сводки новостей"
              />
            </FormGroup>
          </div>
          <div className="searchForm__button">
            <ButtonSelector id="search" />
            <p className="searchForm__footnote">
              * Обязательные к заполнению поля
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchForm;
