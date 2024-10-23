import Projects from "./public/data.json";

export default function project({ params }: { params: { projectId: string } }) {
  const name = params.projectId;
  const info = Projects.projects[name].info
  return (
    <div>
      <h1>Project Name: {name}</h1>
      <p>{info}</p>
    </div>
  );
}

