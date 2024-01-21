import React from "react";
import Qr from "../assets/qrcode_nicolasvicente.ca.png";

const QrCode = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <img
        className="w-250px h-250px"
        src={Qr}
        alt=""
      />
    </div>
  );
};

export default QrCode;
