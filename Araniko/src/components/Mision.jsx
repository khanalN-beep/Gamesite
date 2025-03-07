import { IoBookmark } from "react-icons/io5";

const Mission = () => {
  const items = [
    {
      id: 1,
      title: "Vision",
      description:
        "To nurture quality human resource to serve the changing needs of the society by building an institution of excellence",
      bgColor: "bg-white",
      textColor: "text-black",
      border: "border border-gray-300",
    },
    {
      id: 2,
      title: "Mission",
      description:
        "We shall sincerely and relentlessly strive to provide value-based education that can prepare enlightened citizens with great foresight for the society and the nation as a whole by developing leadership qualities and skills with ever-cherished universal human values which will enable them to get employed or prepare them as socially responsible entrepreneurs",
      bgColor: "bg-teal-700",
      textColor: "text-white",
    },
  ];

  return (
    <div className="h-500">
      <div className="min-h-screen">
    <div className="flex flex-wrap justify-center gap-6 p-4">
        {items.map((item) => (
            <div
                key={item.id}
                className={`flex-1 min-w-[300px] max-w-md p-6 rounded-lg border-none ${item.bgColor} ${item.border}`} 
            >
                <IoBookmark size={40} className={`mb-4 ${item.textColor}`} />
                <h2 className={`text-2xl font-bold ${item.textColor}`}>
                    {item.title}
                </h2>
                <p className={`mt-2 text-sm ${item.textColor}`}>{item.description}</p>
            </div>
        ))}
    </div>
</div>
    </div>
  );
};

export default Mission;
