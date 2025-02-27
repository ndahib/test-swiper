import { Banknote, BriefcaseBusiness, MapPin } from "lucide-react";
import {JobOfferType} from "../../types/job-offer";

type JobOfferProps = {
    offer: JobOfferType
}
const JobOffer = ({offer}: JobOfferProps) => {
  return (
    <div className="flex flex-col items-start py-4">
      <h3 className="text-lg font-bold text-red-700">{offer.title}</h3>
      <div className="flex flex-row">
        <div className="flex flex-row">
          <MapPin size={15} className="text-black my-1 mr-1" />
          <p>{offer.location}</p>
        </div>
        <div className="flex flex-row">
          <Banknote size={15} className="text-black my-1 mr-1" />
          <p>{offer.type}</p>
        </div>
        <div className="flex flex-row ">
          <BriefcaseBusiness size={16} className="text-black my-1 mr-1" />
          <p>{offer.salary}</p>
        </div>
      </div>
    </div>
  );
};

export default JobOffer;