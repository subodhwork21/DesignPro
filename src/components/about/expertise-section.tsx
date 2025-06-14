import { expertiseData } from "@/constants/expertise-data";
const ExpertiseSection = () => {
  return (
    <div className="bg-tc-secondary text-white py-8">
      <div className="max-w-[1000px] mx-auto px-8">
        <h2 className="text-2xl font-medium text-start mb-16">Our expertise</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {expertiseData.map((column, index) => (
            <div key={index} className="mb-8 md:mb-0">
              <h3 className="text-lg font-medium mb-4">{column.title}</h3>
              <ul className="flex flex-col gap-0">
                {column.services.map((service, serviceIndex) => (
                  <li
                    key={serviceIndex}
                    className="text-white text-base font-franklin_thin"
                  >
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExpertiseSection;
