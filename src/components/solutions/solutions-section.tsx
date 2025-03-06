const solutions = [
  {
    id: 1,
    title: "SOURCING",
    description: "des profis aux travers des canaux adéquats",
    image: "../../public/1.svg",
  },
  {
    id: 2,
    title: "EVALUATION",
    description: "des candidats par entretien ou test psycologique",
    image: "../../public/2.svg",
  },
  {
    id: 3,
    title: "DEPLOIEMENT",
    description: "du salaire sur site",
    image: "../../public/3.svg",
  },
  {
    id: 4,
    title: "ENCADREMENT",
    description: "de la prestation par un de nos chargés d’affaires",
    image: "../../public/4.svg",
  },
];

export default function SolutionsSection() {
  return (
    <div className="bg-[url('../../public/girl.png')] h-150 w-lvw">
      <div className="ml-40 p-8">
        <div className="w-1/12 h-2 bg-[#8CAF63]"></div>
        <h1 className="text-5xl text-left f text-[#1C264E] font-bold">
          VOUS CHERCHEZ, NOUS TROUVONS !
        </h1>
      </div>
      <div
        className="w-5xl grid border-t-13 border-[linear-to-r from-[#12193E] to-[#8BAF63]
        gap-4 sm:grid-cols-1 lg:grid-cols-2 bg-white/30 backdrop-blur-sm ml-40 shadow-xl h-90 mt-9"
      >
        {solutions.map((solution) => (
          <div className="flex items-center">
            <img
              src={solution.image}
              alt="solution"
              className="pr-2 w-1/5 h-2/4"
            />
            <div className="flex flex-col">
              <h3 className="text-xl font-semibold text-[#1C264E]">
                {solution.title}
              </h3>
              <p className="text-[#1C264E] font-normal w-50">
                {solution.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
