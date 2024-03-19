import React from "react";

const Footer = () => {
  return (
    <div className="py-10 grid grid-cols-1 md:grid-cols-4 gap-y-14 px-32 bg-gray-100 text-gray-600">
      <div className="space-y-5 text-xs text-gray-800">
        <h5 className="font-bold">About</h5>
        <p>How AirBnb Works</p>
        <p>newsRoom</p>
        <p>Investors</p>
        <p>AirBnb Plus</p>
        <p>Airbnb luxe</p>
      </div>

      <div className="space-y-5 text-xs text-gray-800">
        <h5 className="font-bold">Community</h5>
        <p>Accessibility</p>
        <p>this is not a real site</p>
        <p>it is pretty awesoeme clone</p>
        <p>AirBnb Plus</p>
        <p>Airbnb luxe</p>
      </div>

      <div className="space-y-5 text-xs text-gray-800">
        <h5 className="font-bold">Host</h5>
        <p>Ghost</p>
        <p>Presents</p>
        <p>Something to Nothing</p>
        <p>Hundreads of Stories</p>
        <p>Get Ready</p>
      </div>

      <div className="space-y-5 text-xs text-gray-800">
        <h5 className="font-bold">Support</h5>
        <p>Help Center</p>
        <p>Trust & Safety</p>
        <p>Say hi Youtube</p>
        <p>Tweet it Baybe</p>
        <p>For the win</p>
      </div>
    </div>
  );
};

export default Footer;
