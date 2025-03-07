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
    <div className="bg-[url('../../public/girl.png')] bg-cover bg-center h-full w-full">
      <div className="m-10 p-12">
        <div className="w-20 h-1.5 bg-[#8CAF63]"></div>
        <h1 className="text-left f text-[#1C264E] font-bold text-2xl sm:text-4xl lg:text-6xl">
          VOUS CHERCHEZ, NOUS TROUVONS !
        </h1>
      </div>
      <div
        className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-10 border-t-13 border-[#8CAF63]
           shadow-xl p-6 mx-20 content-center bg-gradient-to-r from-white to-[rgba(255,255,255,0.2)] min-w-75"
      >
        {solutions.map((solution) => (
          <div className="flex items-center p-4">
            <img
              src={solution.image}
              alt="solution"
              className="pr-4 w-24 h-24"
            />
            <div className="flex flex-col">
              <h3 className="text-xl font-semibold text-[#1C264E]">
                {solution.title}
              </h3>
              <p className="text-[#1C264E] font-normal">
                {solution.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
