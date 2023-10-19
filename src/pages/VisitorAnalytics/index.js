import React from 'react';
import Visitor from "./Visitor";
import DailyAnalytics from "./DailyAnalytics";
import AnaluzCustom from "./AnaluzCustom";
import PeakHours from "./PeakHours";
import DailyAnalyticsComparasion from "../VisitorComparasion/DailyAnalyticsComparasion";

const VisitorAnalytics = () => {
    return (
        <div className="visitor-analytics">
            <Visitor />
            <div className=" d-flex">
                <PeakHours />
                <AnaluzCustom />
            </div>
            <DailyAnalytics />
        </div>
    );
};

export default VisitorAnalytics;