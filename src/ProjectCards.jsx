import React from "react";
import { useState } from "react";
const ProjectCard = ({ project, title, description, imageUrl }) => {
  const [transform, setTransform] = useState("none");
  const [cardRef, setCardRef] = useState(null);

  const handleMouseMove = (e) => {
    const card = cardRef;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = card.offsetWidth / 2;
    const centerY = card.offsetHeight / 2;
    const rotateX = (centerY - y) / 10;
    const rotateY = (x - centerX) / 10;

    requestAnimationFrame(() => {
      setTransform(`rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
    });
  };

  const handleMouseLeave = () => {
    requestAnimationFrame(() => {
      setTransform("none");
    });
  };
  return (
    <div
      className=" max-w-sm rounded overflow-hidden shadow-lg"
      ref={(ref) => setCardRef(ref)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transition: "transform 0.2s ease", transform: transform }}
    >
      <img className="w-full" src={project.imageUrl} alt={project.title} />
      <div className="px-6 py-4 bg-slate-700">
        <div className="font-bold text-xl mb-2">{project.title}</div>
        <p className=" text-gray-700 text-base">{project.description}</p>
      </div>
      <div className="px-6 pt-4 pb-2 bg-slate-700">
        {project.tags.map((tag, index) => (
          <span
            key={index}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
