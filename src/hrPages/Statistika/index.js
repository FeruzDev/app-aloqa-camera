import React from 'react';
import Slider from "react-slick";
import {Select} from 'antd';

function SampleNextArrow(props) {
    const {className, style, onClick} = props;
    return (
        <div
            className={className}
            style={{...style, display: "block"}}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const {className, style, onClick} = props;
    return (
        <div
            className={className}
            style={{...style, display: "block"}}
            onClick={onClick}
        />
    );
}

const Statistika = () => {
    const handleChange = () => {

    }
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow/>,
        prevArrow: <SamplePrevArrow/>
    };
    const years = ["январь", "февраль", "март", "апрель", "май", "июнь", "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь"];

    return (
        <div className="statistika">

            <h3 className="s-title">Статистика</h3>
          <div className="my-slider-big">
              <div className="my-slider">
                  <Slider {...settings}>
                      {
                          years?.map(item =>(
                              <div className="sld-btn">
                                  <button>
                                      {item}
                                  </button>
                              </div>

                          ))
                      }
                  </Slider>
              </div>
              <div className="slider-select">
                  <Select
                      defaultValue="2023"
                      style={{width: 120}}
                      onChange={handleChange}
                      options={[
                          {
                              value: '2023',
                              label: '2023',
                          },
                          {
                              value: '2022',
                              label: '2022',
                          },
                          {
                              value: '2021',
                              label: '2021',
                          },
                          {
                              value: '2020',
                              label: '2020',
                          },
                      ]}
                  />
              </div>
          </div>
            <div className="statistika-days">
                <div className="day">
                    <div className="day-header">
                        <div>
                            <h1 className="font-family-medium">1</h1>
                        </div>
                        <div className="month-day">
                            <h4>Март</h4>
                            <h5>Понедельник</h5>
                        </div>
                    </div>
                    <div className="day-content">
                        <div className="dots-light">
                            234 <div className="green-light ml-8"></div>
                        </div>
                        <div className="dots-light">
                            234 <div className="orange-light ml-8"></div>
                        </div>
                        <div className="dots-light">
                            234 <div className="red-light ml-8"></div>
                        </div>
                    </div>
                </div>
                <div className="day day-active">
                    <div className="day-header">
                        <div>
                            <h1 className="font-family-medium">1</h1>
                        </div>
                        <div className="month-day">
                            <h4>Март</h4>
                            <h5>Понедельник</h5>
                        </div>
                    </div>
                    <div className="day-content">
                        <div className="rest-title">
                            Oтдых
                        </div>
                    </div>
                </div>
                <div className="day">
                    <div className="day-header">
                        <div>
                            <h1 className="font-family-medium">1</h1>
                        </div>
                        <div className="month-day">
                            <h4>Март</h4>
                            <h5>Понедельник</h5>
                        </div>
                    </div>
                    <div className="day-content">
                        <div className="dots-light">
                            234 <div className="green-light ml-8"></div>
                        </div>
                        <div className="dots-light">
                            234 <div className="orange-light ml-8"></div>
                        </div>
                        <div className="dots-light">
                            234 <div className="red-light ml-8"></div>
                        </div>
                    </div>
                </div>
                <div className="day">
                    <div className="day-header">
                        <div>
                            <h1 className="font-family-medium">1</h1>
                        </div>
                        <div className="month-day">
                            <h4>Март</h4>
                            <h5>Понедельник</h5>
                        </div>
                    </div>
                    <div className="day-content">
                        <div className="dots-light">
                            234 <div className="green-light ml-8"></div>
                        </div>
                        <div className="dots-light">
                            234 <div className="orange-light ml-8"></div>
                        </div>
                        <div className="dots-light">
                            234 <div className="red-light ml-8"></div>
                        </div>
                    </div>
                </div>
                <div className="day">
                    <div className="day-header">
                        <div>
                            <h1 className="font-family-medium">1</h1>
                        </div>
                        <div className="month-day">
                            <h4>Март</h4>
                            <h5>Понедельник</h5>
                        </div>
                    </div>
                    <div className="day-content">
                        <div className="dots-light">
                            234 <div className="green-light ml-8"></div>
                        </div>
                        <div className="dots-light">
                            234 <div className="orange-light ml-8"></div>
                        </div>
                        <div className="dots-light">
                            234 <div className="red-light ml-8"></div>
                        </div>
                    </div>
                </div>
                <div className="day">
                    <div className="day-header">
                        <div>
                            <h1 className="font-family-medium">1</h1>
                        </div>
                        <div className="month-day">
                            <h4>Март</h4>
                            <h5>Понедельник</h5>
                        </div>
                    </div>
                    <div className="day-content">
                        <div className="dots-light">
                            234 <div className="green-light ml-8"></div>
                        </div>
                        <div className="dots-light">
                            234 <div className="orange-light ml-8"></div>
                        </div>
                        <div className="dots-light">
                            234 <div className="red-light ml-8"></div>
                        </div>
                    </div>
                </div>
                <div className="day">
                    <div className="day-header">
                        <div>
                            <h1 className="font-family-medium">1</h1>
                        </div>
                        <div className="month-day">
                            <h4>Март</h4>
                            <h5>Понедельник</h5>
                        </div>
                    </div>
                    <div className="day-content">
                        <div className="dots-light">
                            234 <div className="green-light ml-8"></div>
                        </div>
                        <div className="dots-light">
                            234 <div className="orange-light ml-8"></div>
                        </div>
                        <div className="dots-light">
                            234 <div className="red-light ml-8"></div>
                        </div>
                    </div>
                </div>
                <div className="day">
                    <div className="day-header">
                        <div>
                            <h1 className="font-family-medium">1</h1>
                        </div>
                        <div className="month-day">
                            <h4>Март</h4>
                            <h5>Понедельник</h5>
                        </div>
                    </div>
                    <div className="day-content">
                        <div className="dots-light">
                            234 <div className="green-light ml-8"></div>
                        </div>
                        <div className="dots-light">
                            234 <div className="orange-light ml-8"></div>
                        </div>
                        <div className="dots-light">
                            234 <div className="red-light ml-8"></div>
                        </div>
                    </div>
                </div>
                <div className="day">
                    <div className="day-header">
                        <div>
                            <h1 className="font-family-medium">1</h1>
                        </div>
                        <div className="month-day">
                            <h4>Март</h4>
                            <h5>Понедельник</h5>
                        </div>
                    </div>
                    <div className="day-content">
                        <div className="dots-light">
                            234 <div className="green-light ml-8"></div>
                        </div>
                        <div className="dots-light">
                            234 <div className="orange-light ml-8"></div>
                        </div>
                        <div className="dots-light">
                            234 <div className="red-light ml-8"></div>
                        </div>
                    </div>
                </div>
                <div className="day">
                    <div className="day-header">
                        <div>
                            <h1 className="font-family-medium">1</h1>
                        </div>
                        <div className="month-day">
                            <h4>Март</h4>
                            <h5>Понедельник</h5>
                        </div>
                    </div>
                    <div className="day-content">
                        <div className="dots-light">
                            234 <div className="green-light ml-8"></div>
                        </div>
                        <div className="dots-light">
                            234 <div className="orange-light ml-8"></div>
                        </div>
                        <div className="dots-light">
                            234 <div className="red-light ml-8"></div>
                        </div>
                    </div>
                </div>
                <div className="day">
                    <div className="day-header">
                        <div>
                            <h1 className="font-family-medium">1</h1>
                        </div>
                        <div className="month-day">
                            <h4>Март</h4>
                            <h5>Понедельник</h5>
                        </div>
                    </div>
                    <div className="day-content">
                        <div className="dots-light">
                            234 <div className="green-light ml-8"></div>
                        </div>
                        <div className="dots-light">
                            234 <div className="orange-light ml-8"></div>
                        </div>
                        <div className="dots-light">
                            234 <div className="red-light ml-8"></div>
                        </div>
                    </div>
                </div>
                <div className="day">
                    <div className="day-header">
                        <div>
                            <h1 className="font-family-medium">1</h1>
                        </div>
                        <div className="month-day">
                            <h4>Март</h4>
                            <h5>Понедельник</h5>
                        </div>
                    </div>
                    <div className="day-content">
                        <div className="dots-light">
                            234 <div className="green-light ml-8"></div>
                        </div>
                        <div className="dots-light">
                            234 <div className="orange-light ml-8"></div>
                        </div>
                        <div className="dots-light">
                            234 <div className="red-light ml-8"></div>
                        </div>
                    </div>
                </div>
                <div className="day">
                    <div className="day-header">
                        <div>
                            <h1 className="font-family-medium">1</h1>
                        </div>
                        <div className="month-day">
                            <h4>Март</h4>
                            <h5>Понедельник</h5>
                        </div>
                    </div>
                    <div className="day-content">
                        <div className="dots-light">
                            234 <div className="green-light ml-8"></div>
                        </div>
                        <div className="dots-light">
                            234 <div className="orange-light ml-8"></div>
                        </div>
                        <div className="dots-light">
                            234 <div className="red-light ml-8"></div>
                        </div>
                    </div>
                </div>
                <div className="day">
                    <div className="day-header">
                        <div>
                            <h1 className="font-family-medium">1</h1>
                        </div>
                        <div className="month-day">
                            <h4>Март</h4>
                            <h5>Понедельник</h5>
                        </div>
                    </div>
                    <div className="day-content">
                        <div className="dots-light">
                            234 <div className="green-light ml-8"></div>
                        </div>
                        <div className="dots-light">
                            234 <div className="orange-light ml-8"></div>
                        </div>
                        <div className="dots-light">
                            234 <div className="red-light ml-8"></div>
                        </div>
                    </div>
                </div>
                <div className="day">
                    <div className="day-header">
                        <div>
                            <h1 className="font-family-medium">1</h1>
                        </div>
                        <div className="month-day">
                            <h4>Март</h4>
                            <h5>Понедельник</h5>
                        </div>
                    </div>
                    <div className="day-content">
                        <div className="dots-light">
                            234 <div className="green-light ml-8"></div>
                        </div>
                        <div className="dots-light">
                            234 <div className="orange-light ml-8"></div>
                        </div>
                        <div className="dots-light">
                            234 <div className="red-light ml-8"></div>
                        </div>
                    </div>
                </div>
                <div className="day">
                    <div className="day-header">
                        <div>
                            <h1 className="font-family-medium">1</h1>
                        </div>
                        <div className="month-day">
                            <h4>Март</h4>
                            <h5>Понедельник</h5>
                        </div>
                    </div>
                    <div className="day-content">
                        <div className="dots-light">
                            234 <div className="green-light ml-8"></div>
                        </div>
                        <div className="dots-light">
                            234 <div className="orange-light ml-8"></div>
                        </div>
                        <div className="dots-light">
                            234 <div className="red-light ml-8"></div>
                        </div>
                    </div>
                </div>
                <div className="day">
                    <div className="day-header">
                        <div>
                            <h1 className="font-family-medium">1</h1>
                        </div>
                        <div className="month-day">
                            <h4>Март</h4>
                            <h5>Понедельник</h5>
                        </div>
                    </div>
                    <div className="day-content">
                        <div className="dots-light">
                            234 <div className="green-light ml-8"></div>
                        </div>
                        <div className="dots-light">
                            234 <div className="orange-light ml-8"></div>
                        </div>
                        <div className="dots-light">
                            234 <div className="red-light ml-8"></div>
                        </div>
                    </div>
                </div>
                <div className="day">
                    <div className="day-header">
                        <div>
                            <h1 className="font-family-medium">1</h1>
                        </div>
                        <div className="month-day">
                            <h4>Март</h4>
                            <h5>Понедельник</h5>
                        </div>
                    </div>
                    <div className="day-content">
                        <div className="dots-light">
                            234 <div className="green-light ml-8"></div>
                        </div>
                        <div className="dots-light">
                            234 <div className="orange-light ml-8"></div>
                        </div>
                        <div className="dots-light">
                            234 <div className="red-light ml-8"></div>
                        </div>
                    </div>
                </div>
                <div className="day">
                    <div className="day-header">
                        <div>
                            <h1 className="font-family-medium">1</h1>
                        </div>
                        <div className="month-day">
                            <h4>Март</h4>
                            <h5>Понедельник</h5>
                        </div>
                    </div>
                    <div className="day-content">
                        <div className="dots-light">
                            234 <div className="green-light ml-8"></div>
                        </div>
                        <div className="dots-light">
                            234 <div className="orange-light ml-8"></div>
                        </div>
                        <div className="dots-light">
                            234 <div className="red-light ml-8"></div>
                        </div>
                    </div>
                </div>
                <div className="day">
                    <div className="day-header">
                        <div>
                            <h1 className="font-family-medium">1</h1>
                        </div>
                        <div className="month-day">
                            <h4>Март</h4>
                            <h5>Понедельник</h5>
                        </div>
                    </div>
                    <div className="day-content">
                        <div className="dots-light">
                            234 <div className="green-light ml-8"></div>
                        </div>
                        <div className="dots-light">
                            234 <div className="orange-light ml-8"></div>
                        </div>
                        <div className="dots-light">
                            234 <div className="red-light ml-8"></div>
                        </div>
                    </div>
                </div>
                <div className="day">
                    <div className="day-header">
                        <div>
                            <h1 className="font-family-medium">1</h1>
                        </div>
                        <div className="month-day">
                            <h4>Март</h4>
                            <h5>Понедельник</h5>
                        </div>
                    </div>
                    <div className="day-content">
                        <div className="dots-light">
                            234 <div className="green-light ml-8"></div>
                        </div>
                        <div className="dots-light">
                            234 <div className="orange-light ml-8"></div>
                        </div>
                        <div className="dots-light">
                            234 <div className="red-light ml-8"></div>
                        </div>
                    </div>
                </div>
                <div className="day">
                    <div className="day-header">
                        <div>
                            <h1 className="font-family-medium">1</h1>
                        </div>
                        <div className="month-day">
                            <h4>Март</h4>
                            <h5>Понедельник</h5>
                        </div>
                    </div>
                    <div className="day-content">
                        <div className="dots-light">
                            234 <div className="green-light ml-8"></div>
                        </div>
                        <div className="dots-light">
                            234 <div className="orange-light ml-8"></div>
                        </div>
                        <div className="dots-light">
                            234 <div className="red-light ml-8"></div>
                        </div>
                    </div>
                </div>
                <div className="day">
                    <div className="day-header">
                        <div>
                            <h1 className="font-family-medium">1</h1>
                        </div>
                        <div className="month-day">
                            <h4>Март</h4>
                            <h5>Понедельник</h5>
                        </div>
                    </div>
                    <div className="day-content">
                        <div className="dots-light">
                            234 <div className="green-light ml-8"></div>
                        </div>
                        <div className="dots-light">
                            234 <div className="orange-light ml-8"></div>
                        </div>
                        <div className="dots-light">
                            234 <div className="red-light ml-8"></div>
                        </div>
                    </div>
                </div>
                <div className="day">
                    <div className="day-header">
                        <div>
                            <h1 className="font-family-medium">1</h1>
                        </div>
                        <div className="month-day">
                            <h4>Март</h4>
                            <h5>Понедельник</h5>
                        </div>
                    </div>
                    <div className="day-content">
                        <div className="dots-light">
                            234 <div className="green-light ml-8"></div>
                        </div>
                        <div className="dots-light">
                            234 <div className="orange-light ml-8"></div>
                        </div>
                        <div className="dots-light">
                            234 <div className="red-light ml-8"></div>
                        </div>
                    </div>
                </div>
                <div className="day">
                    <div className="day-header">
                        <div>
                            <h1 className="font-family-medium">1</h1>
                        </div>
                        <div className="month-day">
                            <h4>Март</h4>
                            <h5>Понедельник</h5>
                        </div>
                    </div>
                    <div className="day-content">
                        <div className="dots-light">
                            234 <div className="green-light ml-8"></div>
                        </div>
                        <div className="dots-light">
                            234 <div className="orange-light ml-8"></div>
                        </div>
                        <div className="dots-light">
                            234 <div className="red-light ml-8"></div>
                        </div>
                    </div>
                </div>
                <div className="day">
                    <div className="day-header">
                        <div>
                            <h1 className="font-family-medium">1</h1>
                        </div>
                        <div className="month-day">
                            <h4>Март</h4>
                            <h5>Понедельник</h5>
                        </div>
                    </div>
                    <div className="day-content">
                        <div className="dots-light">
                            234 <div className="green-light ml-8"></div>
                        </div>
                        <div className="dots-light">
                            234 <div className="orange-light ml-8"></div>
                        </div>
                        <div className="dots-light">
                            234 <div className="red-light ml-8"></div>
                        </div>
                    </div>
                </div>
                <div className="day">
                    <div className="day-header">
                        <div>
                            <h1 className="font-family-medium">1</h1>
                        </div>
                        <div className="month-day">
                            <h4>Март</h4>
                            <h5>Понедельник</h5>
                        </div>
                    </div>
                    <div className="day-content">
                        <div className="dots-light">
                            234 <div className="green-light ml-8"></div>
                        </div>
                        <div className="dots-light">
                            234 <div className="orange-light ml-8"></div>
                        </div>
                        <div className="dots-light">
                            234 <div className="red-light ml-8"></div>
                        </div>
                    </div>
                </div>
                <div className="day">
                    <div className="day-header">
                        <div>
                            <h1 className="font-family-medium">1</h1>
                        </div>
                        <div className="month-day">
                            <h4>Март</h4>
                            <h5>Понедельник</h5>
                        </div>
                    </div>
                    <div className="day-content">
                        <div className="dots-light">
                            234 <div className="green-light ml-8"></div>
                        </div>
                        <div className="dots-light">
                            234 <div className="orange-light ml-8"></div>
                        </div>
                        <div className="dots-light">
                            234 <div className="red-light ml-8"></div>
                        </div>
                    </div>
                </div>
                <div className="day">
                    <div className="day-header">
                        <div>
                            <h1 className="font-family-medium">1</h1>
                        </div>
                        <div className="month-day">
                            <h4>Март</h4>
                            <h5>Понедельник</h5>
                        </div>
                    </div>
                    <div className="day-content">
                        <div className="dots-light">
                            234 <div className="green-light ml-8"></div>
                        </div>
                        <div className="dots-light">
                            234 <div className="orange-light ml-8"></div>
                        </div>
                        <div className="dots-light">
                            234 <div className="red-light ml-8"></div>
                        </div>
                    </div>
                </div>
                <div className="day">
                    <div className="day-header">
                        <div>
                            <h1 className="font-family-medium">1</h1>
                        </div>
                        <div className="month-day">
                            <h4>Март</h4>
                            <h5>Понедельник</h5>
                        </div>
                    </div>
                    <div className="day-content">
                        <div className="dots-light">
                            234 <div className="green-light ml-8"></div>
                        </div>
                        <div className="dots-light">
                            234 <div className="orange-light ml-8"></div>
                        </div>
                        <div className="dots-light">
                            234 <div className="red-light ml-8"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Statistika;