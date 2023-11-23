import React, {useEffect, useState} from 'react';
import {Button, Modal, Select} from "antd";
import axios from "axios";
import {API_PATH} from "../../components/const";
import {toast} from "react-toastify";
import CountryModal from "../LocationModal/CountryModal";
import RegionModal from "../LocationModal/RegionModal";
import DistrictModal from "../LocationModal/DistrictModal";

const ModalOffice = (props) => {
    const [isCountryModal, setIsCountryModal] = useState(false)
    const [isCityModal, setIsCityModal] = useState(false)
    const [isDistrictModal, setIsDistrictModal] = useState(false)
    const [countries, setCountries] = useState([])
    const [countryItem, setCountryItem] = useState("")
    const [countryId, setCountryId] = useState(null)
    const [regions, setRegions] = useState([])
    const [regionId, setRegionId] = useState(null)
    const [regionItem, setRegionItem] = useState("")
    const [districts, setDistricts] = useState([])
    const [sendData, setSendData] = useState({
        name: "",
        country_id: null,
        region_id: null,
        district_id: null,
        zip_code: "",
        address: "",
        latitude: 0,
        longitude: 0
    })
    const sendAll = () => {
        axios.post(API_PATH + "company/" + localStorage.getItem('id') + "/building/create", sendData, {headers: {"Authorization": "Bearer " + localStorage.getItem("token")}})
            .then(res => {
                toast.success("Добавлено успешно")
                props.getBuilding()
                props.setIsModalOffice(false)
            })
            .catch(err => {
                toast.error("Ошибка")
            })
    }
    const getCountry = (val) => {
        axios.get(API_PATH + "company/" + localStorage.getItem('id') + "/location/country/all" + (val?.length > 0 ? "?search_str=" + val : ""), {headers: {"Authorization": "Bearer " + localStorage.getItem("token")}})
            .then(res => {
                setCountries(res?.data.items)
            })
            .catch(err => {
                toast.error("Ошибка")
            })
    }
    const setCountry = (countryIde) => {
        setCountryId(countryIde)
        setSendData({...sendData, country_id: countryIde})
        axios.get(API_PATH + "company/" + localStorage.getItem('id') + "/location/country/" + countryIde, {headers: {"Authorization": "Bearer " + localStorage.getItem("token")}})
            .then(res => {
                setCountryItem(res?.data?.name)
            })
            .catch(err => {
                toast.error("Ошибка")
            })
        getRegion(countryIde)
    }
    const setDistrict = (countryIde) => {
        setRegionId(countryIde)
        setSendData({...sendData, region_id: countryIde})
        axios.get(API_PATH + "company/" + localStorage.getItem('id') + "/location/region/" + countryIde, {headers: {"Authorization": "Bearer " + localStorage.getItem("token")}})
            .then(res => {
                setRegionItem(res.data?.name)
            })
            .catch(err => {
                toast.error("Ошибка")
            })
        getDistrict(countryIde)
    }
    const getRegion = (countryIde) => {
        // console.log(countryIde)
        axios.get(API_PATH + "company/" + localStorage.getItem('id') + "/location/region/" + countryIde + "/all", {headers: {"Authorization": "Bearer " + localStorage.getItem("token")}})
            .then(res => {
                setRegions(res?.data?.items)
            })
            .catch(err => {
                toast.error("Ошибка")
            })
    }
    const getRegionSearch = (val) => {
        // console.log(val)
        axios.get(API_PATH + "company/" + localStorage.getItem('id') + "/location/region/" + countryId + "/all" + (val?.length > 0 ? "?search_str=" + val : ""), {headers: {"Authorization": "Bearer " + localStorage.getItem("token")}})
            .then(res => {
                setRegions(res?.data?.items)
            })
            .catch(err => {
                toast.error("Ошибка")
            })
    }
    const getDistrict = (countryIde) => {
        axios.get(API_PATH + "company/" + localStorage.getItem('id') + "/location/district/" + countryIde + "/all", {headers: {"Authorization": "Bearer " + localStorage.getItem("token")}})
            .then(res => {
                setDistricts(res?.data?.items)
            })
            .catch(err => {
                toast.error("Ошибка")
            })
    }
    const getDistrictSearch = (val) => {
        axios.get(API_PATH + "company/" + localStorage.getItem('id') + "/location/district/" + regionId + "/all" + (val?.length > 0 ? "?search_str=" + val : ""), {headers: {"Authorization": "Bearer " + localStorage.getItem("token")}})
            .then(res => {
                setDistricts(res?.data?.items)
            })
            .catch(err => {
                toast.error("Ошибка")
            })
    }
    useEffect(() => {
        getCountry()
    }, []);
    return (
        <Modal title="Добавить здания"
               open={props.isModalOffice}
               onCancel={() => props.setIsModalOffice(false)}
               footer={[
                   <Button key="submit" type="primary" onClick={sendAll}>
                       Добавить
                   </Button>,
                   <Button key="submit" type="default" onClick={() => props.setIsModalOffice(false)}>
                       Отменить
                   </Button>
               ]}
        >
            <div className="cam-add-modal">
                <div className="inputs-box">
                    <label className="font-family-medium">Название здания </label>
                    <input onChange={(e) => setSendData({...sendData, name: e.target.value})} type="text"/>
                </div>
                <div className="inputs-box">
                    <label className="font-family-medium">Страна </label>
                    <div className="add-btn-modal">
                        <Select
                            showSearch
                            placeholder="Поиск, чтобы выбрать"
                            optionFilterProp="children"
                            className="w-100"
                            onSearch={getCountry}
                            onChange={(e) => setCountry(e)}
                            // onChange={(e) => setCountry(e)}
                            filterOption={(input, option) => (option?.label ?? '').includes(input)}
                            filterSort={(optionA, optionB) =>
                                (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                            }
                            options={countries?.map((item) => {
                                return {
                                    value: item.id,
                                    label:
                                    item?.name
                                };
                            })}
                        />
                        <button className="add-btn-plus" onClick={() => setIsCountryModal(true)}>
                            <img src="/icon/plus.svg" alt="+"/>
                        </button>
                    </div>
                </div>
                <div className="inputs-box">
                    <label className="font-family-medium">Город </label>
                    <div className="add-btn-modal">
                        <Select
                            showSearch
                            placeholder="Поиск, чтобы выбрать"
                            optionFilterProp="children"
                            className="w-100"
                            onSearch={getRegionSearch}
                            onChange={(e) => setDistrict(e)}
                            filterOption={(input, option) => (option?.label ?? '').includes(input)}
                            filterSort={(optionA, optionB) =>
                                (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                            }
                            options={regions?.map((item) => {
                                return {
                                    value: item.id,
                                    label:
                                    item?.name
                                };
                            })}
                        />
                        <button className="add-btn-plus" disabled={countryId === null ? true : false } onClick={() => setIsCityModal(true)}>
                            <img src="/icon/plus.svg" alt="+"/>
                        </button>
                    </div>
                </div>
                <div className="inputs-box">
                    <label className="font-family-medium">Район </label>
                    <div className="add-btn-modal">
                        <Select
                            showSearch
                            placeholder="Поиск, чтобы выбрать"
                            optionFilterProp="children"
                            className="w-100"
                            onSearch={getDistrictSearch}
                            onChange={(e) => setSendData({...sendData, district_id: e})}
                            filterOption={(input, option) => (option?.label ?? '').includes(input)}
                            filterSort={(optionA, optionB) =>
                                (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                            }
                            options={districts?.map((item) => {
                                return {
                                    value: item.id,
                                    label:
                                    item?.name
                                };
                            })}
                        />
                        <button className="add-btn-plus" disabled={countryId === null &&  regionId === null ? true : false } onClick={() => setIsDistrictModal(true)}>
                            <img src="/icon/plus.svg" alt="+"/>
                        </button>
                    </div>
                </div>
                <div className="inputs-box">
                    <label className="font-family-medium">Адрес </label>
                    <input onChange={(e) => setSendData({...sendData, address: e.target.value})} type="text"/>
                </div>
            </div>
            <CountryModal
                isLocModal={isCountryModal}
                setIsLocModal={setIsCountryModal}
                getCountry={getCountry}
            />
            <RegionModal
                isLocModal={isCityModal}
                setIsLocModal={setIsCityModal}
                sendData={sendData}
                getRegion={getRegion}
                countryItem={countryItem}
                countryId={countryId}
            />
            <DistrictModal
                isLocModal={isDistrictModal}
                setIsLocModal={setIsDistrictModal}
                sendData={sendData}
                countryItem={countryItem}
                regionItem={regionItem}
                regionId={regionId}
                getDistrict={getDistrict}
            />
        </Modal>
    );
};

export default ModalOffice;