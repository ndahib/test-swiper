
import JobOffer from "./job-offer";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation } from 'swiper/modules';
import { StepBack, StepForward } from "lucide-react";
import {JobOfferType} from "../../types/job-offer";


const jobOffers : JobOfferType[][] = [
    [
      {
        title: "Commercial Logistique",
        location: "Casablanca",
        type: "CDI",
        salary: "12 000 Dh/mois",
      },
      {
        title: "Responsable de production",
        location: "Casablanca",
        type: "CDI",
        salary: "12 000 Dh/mois",
      },
      {
        title: "Superviseur de production",
        location: "Casablanca",
        type: "CDI",
        salary: "12 000 Dh/mois",
      },
    ],
    [
      {
        title: "Responsable de production",
        location: "Casablanca",
        type: "CDI",
        salary: "12 000 Dh/mois",
      },
      {
        title: "Superviseur de production",
        location: "Casablanca",
        type: "CDI",
        salary: "12 000 Dh/mois",
      },
      {
        title: "Commercial Logistique",
        location: "Casablanca",
        type: "CDI",
        salary: "12 000 Dh/mois",
      },
    ],
    [
      {
        title: "Agent de sécurité",
        location: "Casablanca",
        type: "CDI",
        salary: "12 000 Dh/mois",
      },
      {
        title: "Responsable financier",
        location: "Casablanca",
        type: "CDI",
        salary: "12 000 Dh/mois",
      },
      {
        title: "Superviseur de production",
        location: "Casablanca",
        type: "CDI",
        salary: "12 000 Dh/mois",
      },
    ],
    [
        {
          title: "Agent de sécurité",
          location: "Casablanca",
          type: "CDI",
          salary: "12 000 Dh/mois",
        },
        {
          title: "Responsable financier",
          location: "Casablanca",
          type: "CDI",
          salary: "12 000 Dh/mois",
        },
        {
          title: "Superviseur de production",
          location: "Casablanca",
          type: "CDI",
          salary: "12 000 Dh/mois",
        },
      ],
      [
        {
          title: "Agent de sécurité",
          location: "Casablanca",
          type: "CDI",
          salary: "12 000 Dh/mois",
        },
        {
          title: "Responsable financier",
          location: "Casablanca",
          type: "CDI",
          salary: "12 000 Dh/mois",
        },
        {
          title: "Superviseur de production",
          location: "Casablanca",
          type: "CDI",
          salary: "12 000 Dh/mois",
        },
      ],
];

const Jobs = () => {
  return (
    <div className="container-box mx-auto">
      <div className="flex flex-col items-center mb-5">
        <div className="w-1/11 h-1 bg-red-700"></div>
        <h2 className="text-3xl font-bold text-center text-[#1C264E]">
          Nos offres d'emploi du moment
        </h2>
      </div>
        <div className="small-container">
        <Swiper className="max-w-[70%]"
        spaceBetween={20}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      navigation={{ nextEl: ".arrow-left", prevEl: ".arrow-right" }}
      modules={[Navigation]}
    >


    {jobOffers.map((section, index) => (
        <SwiperSlide key={index}>
        {section.map((job, index) => (
            <JobOffer offer={job} key={index}/>
        ))}
        </SwiperSlide>
  ))}

    </Swiper>
    </div>
    <button className="arrow-left arrow"><StepBack  size={30} className="text-gray-700"/></button>
    <button className="arrow-right arrow"><StepForward size={30}   className="text-gray-700"/></button>
    </div>
  );
};
export default Jobs;