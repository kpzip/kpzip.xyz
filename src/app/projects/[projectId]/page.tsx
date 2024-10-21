export default function project({ params }: { params: { projectId: string } }) {
  const name = params.projectId;
  return (
    <h1>Project Name: {name}</h1>
  );
} 
