import React, { useState } from "react";
import P1 from "../../assets/P1.png";
import P2 from "../../assets/P2.png";
import P3 from "../../assets/P3.png";
import P4 from "../../assets/P4.png";
import P5 from "../../assets/P5.png";
import P6 from "../../assets/P6.png";
function Pagination() {
  const paginationitems = [
    {
      img: P1,
      date: "18 AUGUST 2023",
      title: "Open letter to the residents of Ellsworth, Maine",
    },
    {
      img: P2,
      date: "21 JULY 2023",
      title: "What is a normal phenotype for aging mice?",
    },
    {
      img: P3,
      date: "15 JANUARY 2023",
      title: "It was popularised inner the with the release of containing.",
    },
    {
      img: P4,
      date: "22 FEBRUARY 2023",
      title: "The Best Way to Ensure Skin Health for Your Child.",
    },
    {
      img: P5,
      date: "18 JUNE 2023",
      title: "Find the Right Pediatric Dentist for Your Children's smile",
    },
    {
      img: P6,
      date: "25 MARCH 2023",
      title: "For Examination Of Kids Get Special Offers",
    },
    {
        img: P6,
        date: "25 MARCH 2023",
        title: "For Examination Of Kids Get Special Offers",
      },
      {
        img: P5,
        date: "18 JUNE 2023",
        title: "Find the Right Pediatric Dentist for Your Children's smile",
      },
      {
        img: P4,
        date: "22 FEBRUARY 2023",
        title: "The Best Way to Ensure Skin Health for Your Child.",
      },
      {
        img: P3,
        date: "15 JANUARY 2023",
        title: "It was popularised inner the with the release of containing.",
      },
      {
        img: P2,
        date: "21 JULY 2023",
        title: "What is a normal phenotype for aging mice?",
      },
      {
        img: P1,
        date: "18 AUGUST 2023",
        title: "Open letter to the residents of Ellsworth, Maine",
      },
      
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // Change this value according to your needs

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = paginationitems.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <>
      {/* main section of pagination */}
      <div className="grid md:grid-cols-3 md:grid-rows-2 gap-5 md:px-20 md:py-0 2xl:w-[1440px] w-auto mx-auto px-10 ">
        {currentItems.map((item, index) => (
          <div key={index}>
            <img
              src={item.img}
              alt={`Image ${index}`}
              className="w-full h-auto mb-2"
            />
            <p className="text-sm font-mono text-[#1C1C1C] mb-3 mt-3">
              {item.date}
            </p>
            <h3 className="text-lg font-semibold mb-3 line-clamp-1">
              {item.title}
            </h3>
            <a href="" className="text-[#652D91]">
              Read More
            </a>
          </div>
        ))}
      </div>
      {/* pagination icon function*/}
      <div className="flex justify-center mt-4 gap-3 mb-3 2xl:w-[1440px] w-auto mx-auto ">
        {Array.from(
          { length: Math.ceil(paginationitems.length / itemsPerPage) },
          (_, i) => (
            <button
              key={i}
              onClick={() => paginate(i + 1)}
              className={`mx-1 px-5 py-3 ${
                currentPage === i + 1
                  ? "bg-[#652D91] text-white"
                  : "bg-white text-black border-color:inherit border"
              }`}
            >
              {i + 1}
            </button>
          )
        )}
        {/* nextpage button */}
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={
            currentPage === Math.ceil(paginationitems.length / itemsPerPage)
          } // Disable if already on the last page
          className={`mx-1 px-5 py-3 hover:bg-gray-200 text-black border-color:inherit border
         ${currentPage === Math.ceil(paginationitems.length / itemsPerPage)?"cursor-not-allowed text-gray-400":''} `}
        > Next page
        </button> 
      </div>
    </>
  );
}

export default Pagination;
