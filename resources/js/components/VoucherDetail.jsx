import { useParams } from "react-router-dom";
import Widget from "./Widget";

export const voucherData = {
  gulaku: {
    logo: "/images/gula.png",
    description: "Get free Gulaku",
    list1: "Redeemable at all Indomaret",
    list2: "Not valid with other discounts",
    list3: "No cash value",
    code: "E567HU25",
    validdate: "31/12/2025"
  },

  sania: {
    logo: "/images/beras.png",
    description: "Get free Sania",
    list1: "Redeemable at all Indomaret",
    list2: "Not valid with other discounts",
    list3: "No cash value",
    code: "E567HU25",
    validdate: "31/12/2025"
  },

  sunlight: {
    logo: "/images/sunlight.png",
    description: "Get free Sunlight",
    list1: "Redeemable at all Indomaret",
    list2: "Not valid with other discounts",
    list3: "No cash value",
    code: "E567HU25",
    validdate: "31/12/2025"
  },

  bango: {
    logo: "/images/bango.png",
    description: "Get free Bango",
    list1: "Redeemable at all Indomaret",
    list2: "Not valid with other discounts",
    list3: "No cash value",
    code: "E567HU25",
    validdate: "31/12/2025"
  },

  indomie: {
    logo: "/images/indomie.png",
    description: "Get free Indomie",
    list1: "Redeemable at all Indomaret",
    list2: "Not valid with other discounts",
    list3: "No cash value",
    code: "E567HU25",
    validdate: "31/12/2025"
  },

  milklife: {
    logo: "/images/MilkLife.png",
    description: "Get free Milk Life",
    list1: "Redeemable at all Indomaret",
    list2: "Not valid with other discounts",
    list3: "No cash value",
    code: "E567HU25",
    validdate: "31/12/2025"
  },

  tropicanaslim: {
    logo: "/images/TropicanaMinyak.png",
    description: "Get free Tropicana Slim Minyak",
    list1: "Redeemable at all Indomaret",
    list2: "Not valid with other discounts",
    list3: "No cash value",
    code: "E567HU25",
    validdate: "31/12/2025"
  },

  kfc: {
    logo: "/images/logoKFC.png",
    description: "Get 25% off",
    list1: "Redeemable at all KFC stores",
    list2: "Not valid with other discounts",
    list3: "No cash value",
    code: "E567HU25",
    validdate: "31/12/2025"
  },
  kopken: {
    logo: "/images/logokopken.png",
    description: "Buy 1 Get 1",
    list1: "Period: 1st June - 30th June 2025",
    list2: "Redeemable at all Kopken stores",
    list3: "No Cash Value",
    code: "E123HU25",
    validdate: "30/06/2025"
  },
  vapiano: {
    logo: "/images/logoVap.png",
    description: "Get 15% cash back",
    list1: "Period: 21st July - 31th July 2025",
    list2: "Redeemable at all Vapiano stores",
    list3: "No cash value",
    code: "E789HU25",
    validdate: "31/07/2025"
  },
  mcd: {
    logo: "/images/logoMCD.png",
    description: "Get 20% off",
    list1: "Redeemable at all MCD stores",
    list2: "No valid with other discount",
    list3: "No cash value",
    code: "E229HU25",
    validdate: "10/06/2025"
  }
};

const VoucherDetail = () => {
  const { brand } = useParams();
  const data = voucherData[brand];

  if (!data) {
    return <p>Voucher not found</p>;
  }

  return <Widget {...data} />;
};

export default VoucherDetail;
