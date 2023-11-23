import React, {useEffect, useState} from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import FormControl from "@mui/material/FormControl";
import {FormLabel} from "@mui/material";
import RadioGroup from "@mui/material/RadioGroup";
import {Select} from "antd";
import axios from "axios";
import {API_PATH} from "./const";
import {toast} from "react-toastify";
const SearchTop = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [building_id, setbuilding_id] = useState(1)
    const [offices, setOffices] = useState([])
    const [departments, setDepartments] = useState([])
    const [department_id, setdepartment_id] = useState(1)
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const getBuilding = () => {
        axios.get(API_PATH + "company/" + localStorage.getItem('id') + "/building/all", {headers: {"Authorization": "Bearer " + localStorage.getItem("token")}})
            .then(res => {
                setOffices(res.data)
            })
            .catch(err => {
                toast.error("Ошибка")
            })
    }

    useEffect(() => {
        getBuilding()
    }, []);
    return (
        <div className="search-top">
            <div className="d-flex align-items-center">
                <div className="search-item w-100">
                    <label htmlFor="searchItem"><img src="/icon/Icon6.svg" alt="loupe"/></label>
                    <input type="text" placeholder="Искать в админке"  id="searchItem"/>
                </div>
                <Button
                    id="fade-button"
                    aria-controls={open ? 'fade-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    className="filter-btn"
                >
                    <img src="/icon/filtr.svg" alt="filter"/> Фильтр

                </Button>
            </div>


            <Menu
                id="fade-menu"
                MenuListProps={{
                    'aria-labelledby': 'fade-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
            >
                <div className=" left-fl-big">
                  <div className="d-flex">
                      <div className="left-fl-pair">
                          <div className="inputs-box">
                              <label  className="font-family-medium">Дата рождения </label>
                              <input type="date" />
                          </div>
                          <div className="inputs-box">
                              <label  className="font-family-medium">Возраст </label>
                              <input type="text"  />
                          </div>
                          <div className="inputs-box">
                              <label  className="font-family-medium">Пол </label>
                              <FormControl>
                                  <RadioGroup
                                      row
                                      aria-labelledby="demo-row-radio-buttons-group-label"
                                      name="row-radio-buttons-group"
                                  >
                                      <FormControlLabel value="male" control={<Radio />} label="Мужской" />
                                      <FormControlLabel value="female" control={<Radio />} label="Женский" />
                                  </RadioGroup>
                              </FormControl>
                          </div>
                      </div>
                      <div className="left-fl-pair">
                          <div className="inputs-box">
                              <label className="font-family-medium">Отделы</label>
                              <Select
                                  className="w-100"
                                  value={department_id}
                                  onChange={(e) => setdepartment_id(e)}
                              >
                                  {
                                      departments?.map((item, index) => (
                                          <option value={item?.id} key={index}>{item?.department_title}</option>
                                      ))
                                  }
                              </Select>

                          </div>
                          <div className="inputs-box">
                              <label  className="font-family-medium">Должность </label>
                              <input type="text"/>
                          </div>
                       <div className="inputs-box">
                           <label className="font-family-medium">Филиалы</label>
                           <Select
                               className="w-100"
                               value={building_id}
                               onChange={(e) => setbuilding_id(e)}
                           >
                               {
                                   offices?.map((item, index) => (
                                       <option value={item?.id} key={index}>{item?.name}</option>
                                   ))
                               }
                           </Select>
                       </div>
                      </div>
                  </div>
                    <div className="con-btn">
                        <button className="font-family-medium"><img src="/icon/bird.svg" className="mr-8" /><span>Применить фильтры</span></button>
                        <button className="font-family-medium ml-8  ">Отменить</button>
                    </div>
                </div>
            </Menu>
        </div>
    );
};

export default SearchTop;