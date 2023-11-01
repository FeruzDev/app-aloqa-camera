import React, {useEffect, useState} from 'react';
import {Button, Modal, Select} from "antd";
import axios from "axios";
import {API_PATH, CONFIG} from "../../components/const";
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
        axios.post(API_PATH + "company/" + localStorage.getItem('id') + "/building/create", sendData, CONFIG)
            .then(res => {
                toast.success("Добавлено успешно")
                props.getBuilding()
                props.setIsModalOffice(false)
            })
            .catch(err => {
                toast.error("Ошибка")
            })
    }
    const getCountry = () => {
        axios.get(API_PATH + "company/" + localStorage.getItem('id') + "/location/country/all", CONFIG)
            .then(res => {
                setCountries(res.data)
            })
            .catch(err => {
                toast.error("Ошибка")
            })
    }
    const setCountry = (countryIde) => {
        setCountryId(countryIde)
        setSendData({...sendData, country_id: countryIde})

        axios.get(API_PATH + "company/" + localStorage.getItem('id') + "/location/country/" + countryIde, CONFIG)
            .then(res => {
                setCountryItem(res.data?.name)
            })
            .catch(err => {
                toast.error("Ошибка")
            })
        getRegion(countryIde)
    }
    const setDistrict = (countryIde) => {
        setRegionId(countryIde)
        setSendData({...sendData, region_id: countryIde})
        axios.get(API_PATH + "company/" + localStorage.getItem('id') + "/location/region/" + countryIde, CONFIG)
            .then(res => {
                setRegionItem(res.data?.name)
            })
            .catch(err => {
                toast.error("Ошибка")
            })
        getDistrict(countryIde)
    }
    const getRegion = (countryIde) => {
        axios.get(API_PATH + "company/" + localStorage.getItem('id') + "/location/region/" + countryIde + "/all", CONFIG)
            .then(res => {
                setRegions(res.data)
            })
            .catch(err => {
                toast.error("Ошибка")
            })
    }

    const getDistrict = (countryIde) => {
        axios.get(API_PATH + "company/" + localStorage.getItem('id') + "/location/district/" + countryIde + "/all", CONFIG)
            .then(res => {
                setDistricts(res.data)
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
                            className="w-100"
                            onChange={(e) => setCountry(e)}
                            options={countries?.map((item) => {
                                return {
                                    value: item.id,
                                    label:
                                    item.name
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
                            className="w-100"
                            onChange={(e) => setDistrict(e)}
                            options={regions?.map((item) => {
                                return {
                                    value: item.id,
                                    label: item.name
                                };
                            })}
                        />
                        <button className="add-btn-plus" onClick={() => setIsCityModal(true)}>
                            <img src="/icon/plus.svg" alt="+"/>
                        </button>
                    </div>
                </div>
                <div className="inputs-box">

                    <label className="font-family-medium">Район </label>
                    <div className="add-btn-modal">

                        <Select
                            className="w-100"
                            onChange={(e) => setSendData({...sendData, district_id: e})}
                            options={districts?.map((item) => {
                                return {
                                    value: item.id,
                                    label:
                                    item.name
                                };
                            })}
                        />
                        <button className="add-btn-plus" onClick={() => setIsDistrictModal(true)}>
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