import useSWR from "swr";
import ArtPieces from "../components/ArtPieces";
import { URL } from "./_app";

export default function HomePage() {
  const { data, error, isLoading } = useSWR(URL);
  if (error) return <h1>failed to load</h1>;
  if (isLoading) return <h1>loading...</h1>;

  console.log(data);

  return (
    <div>
      <ArtPieces pieces={data} />
    </div>
  );
}
