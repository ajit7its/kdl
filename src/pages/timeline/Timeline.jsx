const Timeline = () => {
  const timelineData = [
    {
      year: "2010",
      company: "Dynamic Earth Movers & Constructions",
      description:
        "Started as a Developer",
    },
    {
      year: "2017",
      company: "Crystal Constructions",
      description:
        "Promoted to Constructions",
    },
    {
      year: "2020",
      company: "Crystal Constrctions Co.",
      description:
        "More Constructions"
    },
    {
      year: "2023",
      company: "KDL Developers",
      description:
        "Currently serving constrcutions",
    },
  ];

  return (
    <div className="container py-5">
      <h2 className="text-center mb-5">A Timeline of Progress</h2>

      <ul className="timeline list-unstyled">
        {timelineData.map((item, index) => (
          <li key={index} className="timeline-item" data-year={item.year}>
            <div className="timeline-content">
              <h4>{item.company}</h4>
              <p>{item.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Timeline;