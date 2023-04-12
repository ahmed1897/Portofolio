import Body from "./Body";
import Navbar from "./Navbar";
import ProjectCard from "./ProjectCards";
const projects = [
  {
    name: "Project 1",
    description: "This is a sample project description.",
    tags: ["react", "tailwindcss", "javascript"],
    imageUrl: "https://via.placeholder.com/640x360.png?text=Project+1",
  },
  {
    name: "Project 2",
    description: "This is another sample project description.",
    tags: ["react", "tailwindcss", "firebase"],
    imageUrl: "https://via.placeholder.com/640x360.png?text=Project+2",
  },
];
function App() {
  return (
    <div>
      <Navbar />
      <Body />
      <div className="bg-gray-800 py-4">
        <h1 className=" text-center text-3xl pb-4 text-white">My Projects</h1>
        <div className="container mx-auto my-5 ">
          <div className="flex justify-center gap-4 ">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
