import { useParams } from "react-router-dom";

function Program() {
  const { id } = useParams();
  return (
    <div className="Program">
      <header className="Program-header">
        <h1 className="text-3xl font-bold underline">Program {id}</h1>
        <a href={`/`}>Home</a>
        <a href={`/programs`}>Programs</a>
      </header>
    </div>
  );
}

//  data fetching, das entsprechen program mit der entsprechenden id aus der datenbank holen und darstellen

export default Program;
