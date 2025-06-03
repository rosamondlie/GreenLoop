import React from "react";
import { useParams } from "react-router-dom";
import Widget from "../components/Widget";
import { voucherData } from "../components/VoucherDetail.jsx";

const WidgetPage = () => {
  const { brand } = useParams();
  const voucher = voucherData[brand];

  if (!voucher) {
    return <div>Voucher not found</div>;
  }

  return <Widget {...voucher} />;
};

export default WidgetPage;