import React from 'react';
import VisitorsComparasion from "./VisitorsComparasion";
import PeakHoursComparasion from "./PeakHoursComparasion";
import AnaluzCustomComparasion from "./AnaluzCustomComparasion";
import DailyAnalyticsComparasion from "./DailyAnalyticsComparasion";

const VisitorComparasion = () => {
    return (
        <div className="visitor-comparasion">
            <VisitorsComparasion />
            <PeakHoursComparasion />
            {/*<AnaluzCustomComparasion />*/}
            <DailyAnalyticsComparasion />

        </div>
    );
};

export default VisitorComparasion;