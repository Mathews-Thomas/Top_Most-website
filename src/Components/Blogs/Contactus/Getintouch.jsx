import React from "react";
import gmailicon from "../../../assets/gmail.png";
import oldphoneicon from "../../../assets/old-typical-phone1.png";
import mapiconblack from "../../../assets/mapiconblack.png";
import mapiconred from "../../../assets/mapiconred.png";
import dentalitem1 from "../../../assets/dentalitem1.png";
import { Rating } from "@material-tailwind/react";
import { useState } from "react";
function Getintouch() {
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedServiceType, setSelectedServiceType] = useState("ALL");
    const itemsPerPage = 3; // Change this value according to your needs

    // dermatologyitems of arrayofobjects
const dermatologyItems =[{
    img: dentalitem1,
    title: "TOPMOST DERMATOLOGY",
    rating: <Rating value={5} readonly />,
    mapblack: mapiconblack,
    mapred: mapiconred,
    oldphone: oldphoneicon,
    address:
      "Opposite Metro Pillar 316, Alfiya Nagar, South Kalamassery, Ernakulam, Kerala - 682509",
    phonenumber: "(+91) 75580 11177",
    email: "topmost.kalamassery@gmail.com",
    gmailimg: gmailicon,  },
    {
        img: dentalitem1,
        title: "TOPMOST DERMATOLOGY",
        rating: <Rating value={5} readonly />,
        mapblack: mapiconblack,
        mapred: mapiconred,
        oldphone: oldphoneicon,
        address:
          "Aluva North.Paravoor Road, Vedimara Jn, North.Paravoor, Ernakulam, Kerala - 682509",
        phonenumber: "(+91) 75580 11177",
        email: "topmost.kalamassery@gmail.com",
        gmailimg: gmailicon,
    },
    {
        img: dentalitem1,
        title: "TOPMOST DERMATOLOGY",
        rating: <Rating value={5} readonly />,
        mapblack: mapiconblack,
        mapred: mapiconred,
        oldphone: oldphoneicon,
        address:
          "Near Nayarambalam Juma Masjid,Nayarambalam, Ernakulam, Kerala-682509",
        phonenumber: "(+91) 75580 11177",
        email: "topmost.kalamassery@gmail.com",
        gmailimg: gmailicon,
    }
]

// dentistryitems of array of objects
const dentistryItems =[{
    img: dentalitem1,
    title: "TOPMOST DENTISTRY",
    rating: <Rating value={5} readonly />,
    mapblack: mapiconblack,
    mapred: mapiconred,
    oldphone: oldphoneicon,
    address:
      "Opposite Metro Pillar 316, Alfiya Nagar, South Kalamassery, Ernakulam, Kerala - 682509",
    phonenumber: "(+91) 75580 11177",
    email: "topmost.kalamassery@gmail.com",
    gmailimg: gmailicon,  },
    {
        img: dentalitem1,
        title: "TOPMOST DENTISTRY",
        rating: <Rating value={5} readonly />,
        mapblack: mapiconblack,
        mapred: mapiconred,
        oldphone: oldphoneicon,
        address:
          "Aluva North.Paravoor Road, Vedimara Jn, North.Paravoor, Ernakulam, Kerala - 682509",
        phonenumber: "(+91) 75580 11177",
        email: "topmost.kalamassery@gmail.com",
        gmailimg: gmailicon,
    },
    {
        img: dentalitem1,
        title: "TOPMOST DENTISTRY",
        rating: <Rating value={5} readonly />,
        mapblack: mapiconblack,
        mapred: mapiconred,
        oldphone: oldphoneicon,
        address:
          "Near Nayarambalam Juma Masjid,Nayarambalam, Ernakulam, Kerala-682509",
        phonenumber: "(+91) 75580 11177",
        email: "topmost.kalamassery@gmail.com",
        gmailimg: gmailicon,
    }
]

// laboratoryitems of array of objects
const laboratoryItems =[{
    img: dentalitem1,
    title: "TOPMOST LABORATORY",
    rating: <Rating value={5} readonly />,
    mapblack: mapiconblack,
    mapred: mapiconred,
    oldphone: oldphoneicon,
    address:
      "Opposite Metro Pillar 316, Alfiya Nagar, South Kalamassery, Ernakulam, Kerala - 682509",
    phonenumber: "(+91) 75580 11177",
    email: "topmost.kalamassery@gmail.com",
    gmailimg: gmailicon,  },
    {
        img: dentalitem1,
        title: "TOPMOST LABORATORY",
        rating: <Rating value={5} readonly />,
        mapblack: mapiconblack,
        mapred: mapiconred,
        oldphone: oldphoneicon,
        address:
          "Aluva North.Paravoor Road, Vedimara Jn, North.Paravoor, Ernakulam, Kerala - 682509",
        phonenumber: "(+91) 75580 11177",
        email: "topmost.kalamassery@gmail.com",
        gmailimg: gmailicon,
    },
    {
        img: dentalitem1,
        title: "TOPMOST LABORATORY",
        rating: <Rating value={5} readonly />,
        mapblack: mapiconblack,
        mapred: mapiconred,
        oldphone: oldphoneicon,
        address:
          "Near Nayarambalam Juma Masjid,Nayarambalam, Ernakulam, Kerala-682509",
        phonenumber: "(+91) 75580 11177",
        email: "topmost.kalamassery@gmail.com",
        gmailimg: gmailicon,
    }
]
// acrylicdentallab items of array of objects
const acrylicDentalLabItems =[{
    img: dentalitem1,
    title: "TOPMOST ACRYLIC DENTAL LAB",
    rating: <Rating value={5} readonly />,
    mapblack: mapiconblack,
    mapred: mapiconred,
    oldphone: oldphoneicon,
    address:
      "Opposite Metro Pillar 316, Alfiya Nagar, South Kalamassery, Ernakulam, Kerala - 682509",
    phonenumber: "(+91) 75580 11177",
    email: "topmost.kalamassery@gmail.com",
    gmailimg: gmailicon,  },
    {
        img: dentalitem1,
        title: "TOPMOST ACRYLIC DENTAL LAB",
        rating: <Rating value={5} readonly />,
        mapblack: mapiconblack,
        mapred: mapiconred,
        oldphone: oldphoneicon,
        address:
          "Aluva North.Paravoor Road, Vedimara Jn, North.Paravoor, Ernakulam, Kerala - 682509",
        phonenumber: "(+91) 75580 11177",
        email: "topmost.kalamassery@gmail.com",
        gmailimg: gmailicon,
    },
    {
        img: dentalitem1,
        title: "TOPMOST ACRYLIC DENTAL LAB",
        rating: <Rating value={5} readonly />,
        mapblack: mapiconblack,
        mapred: mapiconred,
        oldphone: oldphoneicon,
        address:
          "Near Nayarambalam Juma Masjid,Nayarambalam, Ernakulam, Kerala-682509",
        phonenumber: "(+91) 75580 11177",
        email: "topmost.kalamassery@gmail.com",
        gmailimg: gmailicon,
    }
]

// dentalcare items of array of objects
  const dentalcareItems = [
    {
      img: dentalitem1,
      title: "TOPMOST DENTAL AND SKIN CARE",
      rating: <Rating value={5} readonly />,
      mapblack: mapiconblack,
      mapred: mapiconred,
      oldphone: oldphoneicon,
      address:
        "Opposite Metro Pillar 316, Alfiya Nagar, South Kalamassery, Ernakulam, Kerala - 682509",
      phonenumber: "(+91) 75580 11177",
      email: "topmost.kalamassery@gmail.com",
      gmailimg: gmailicon,
    },
    {
      img: dentalitem1,
      title: "TOPMOST DENTAL AND SKIN CARE",
      rating: <Rating value={5} readonly />,
      mapblack: mapiconblack,
      mapred: mapiconred,
      oldphone: oldphoneicon,
      address:
        "Aluva North.Paravoor Road, Vedimara Jn, North.Paravoor, Ernakulam, Kerala - 682509",
      phonenumber: "(+91) 75580 11177",
      email: "topmost.kalamassery@gmail.com",
      gmailimg: gmailicon,
    },
    {
      img: dentalitem1,
      title: "TOPMOST DENTAL AND SKIN CARE",
      rating: <Rating value={5} readonly />,
      mapblack: mapiconblack,
      mapred: mapiconred,
      oldphone: oldphoneicon,
      address:
        "Near Nayarambalam Juma Masjid,Nayarambalam, Ernakulam, Kerala-682509",
      phonenumber: "(+91) 75580 11177",
      email: "topmost.kalamassery@gmail.com",
      gmailimg: gmailicon,
    },
  ];

   // Function to get items based on the selected service type
   const getItemsByServiceType = (serviceType) => {
    switch (serviceType) {
      case "DERMATOLOGY & COSMETOLOGY":
        return dermatologyItems;
      case "DENTISTRY":
        return dentistryItems;
      case "LABORATORY":
        return laboratoryItems;
      case "ACRYLIC DENTAL LAB":
        return acrylicDentalLabItems;
      default:
        return dentalcareItems.concat(
            dentistryItems,
            laboratoryItems,
            acrylicDentalLabItems
          );
    }
  };
   // Get items based on the selected service type
   const currentItems = getItemsByServiceType(selectedServiceType).slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Function to handle button click for filtering items
  const handleButtonClick = (serviceType) => {
    setSelectedServiceType(serviceType);
    setCurrentPage(1); // Reset pagination to first page when filter changes
  };
  return (
    <>
      {/* get in touch buttons and head*/}
      <div className="my-10">
        <h1 className="font-bold md:text-2xl text-center">
          GET IN TOUCH WITH US
        </h1>
        <div className="flex my-4 gap-5 justify-center text-[#652D91] flex-wrap">
          <button className={`border-b-2 border-white hover:border-b-[#652D91] ${selectedServiceType ==="ALL"? "border-b-[#652D91]":""} `} onClick={()=> handleButtonClick("ALL")}>ALL</button>
          <button className={`border-b-2 border-white hover:border-b-[#652D91] ${selectedServiceType==="DERMATOLOGY & COSMETOLOGY"?"border-b-[#652D91]":""}`} onClick={() => handleButtonClick("DERMATOLOGY & COSMETOLOGY")}>
            DERMATOLOGY & COSMETOLOGY
          </button>
          <button className={`border-b-2 border-white hover:border-b-[#652D91] ${selectedServiceType==="DENTISTRY"?"border-b-[#652D91]":""}`} onClick={()=>handleButtonClick("DENTISTRY")}>DENTISTRY</button>
          <button className={`border-b-2 border-white hover:border-b-[#652D91] ${selectedServiceType==="LABORATORY"?"border-b-[#652D91]":""}`} onClick={()=>handleButtonClick("LABORATORY")}>LABORATORY</button>
          <button className={`border-b-2 border-white hover:border-b-[#652D91] ${selectedServiceType==="ACRYLIC DENTAL LAB"?"border-b-[#652D91]":""}`} onClick={()=>handleButtonClick("ACRYLIC DENTAL LAB")}>
            ACRYLIC DENTAL LAB
          </button>
        </div>
      </div>
      {/* pagination dental care items  */}
      <div className="grid md:grid-cols-3 md:grid-rows-1 md:px-14 md:py-0 p-7 gap-7 2xl:w-[1440px] w-auto mx-auto">
        {/* mapping the feedback customers */}
        {currentItems.map((item, index) => (
          <div key={index}>
            <div>
              <img src={item.img} alt="dentalitem" />
            </div>
            {/* flex title and map image */}
            <div className="flex justify-between items-center my-3 px-3">
              <div>
                <h1 className="font-bold text-lg">{item.title}</h1>
                <p className="text-yellow-500">{item.rating}</p>
              </div>
              {/* blackmap image */}
              <div>
                <img src={item.mapblack} alt="blackmap"/>
              </div>
            </div>
            {/* redmap and address */}
            <div className="flex items-center gap-4 px-3 ">
              <div>
                <img src={item.mapred} alt="redmap" className="w-9" />
              </div>
              <div>
                <p className="text-md font-light">{item.address}</p>
              </div>
            </div>
            {/* phonenumber section */}
            <div className="flex items-center gap-4 my-3 px-3">
              <div>
                <img src={item.oldphone} alt="phone" />
              </div>
              <div>
                <p className="text-md font-light">{item.phonenumber}</p>
              </div>
            </div>
             {/* gmail section */}
             <div className="flex items-center gap-4 my-3 px-3 ">
              <div>
                <img src={item.gmailimg} alt="gmail"  />
              </div>
              <div>
                <a className="text-md font-light hover:underline" href="https://mail.google.com/">{item.email}</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Getintouch;
