import { useLoaderData } from "react-router-dom";

export default function Home() {
  const data = useLoaderData() as {message: string};
  
  return (
    <div>
      <h1 className="header">{data.message}</h1>
    </div>
  );
}
