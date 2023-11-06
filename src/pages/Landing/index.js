import React from 'react';
import LandingNavbar from "./LandingNavbar";
import VideoTop from "./VideoTop";
import OurPotential from "./OurPotential";
import Solutions from "./Solutions";
import OurProducts from "./OurProducts";
import Work from "./Work";
import OurTeam from "./OurTeam";
import WhyUs from "./WhyUs";
import LandingFooter from "./LandingFooter";
import ContactLan from "./ContactLan";

const Landing = () => {
    return (
        <div className="landing">
            <LandingNavbar />
            <VideoTop />
            <OurPotential />
            <Solutions />
            <OurProducts />
            <Work />
            <OurTeam />
            <WhyUs />
            <ContactLan />
            <LandingFooter />
        </div>
    );
};

export default Landing;