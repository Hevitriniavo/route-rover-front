import useDocument from "../hooks/useDocument";
import useFetch from "../hooks/useFetch";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Home = () => {
  useDocument("Accueil");
  const { isLoading } = useFetch<Post[]>("https://jsonplaceholder.typicode.com/posts");
  return (
    <div className="bg-red-100">
      {isLoading ? (
        <h1>Chargement ....</h1>
      ) :
        <h1>Data loaded successfully</h1>}

    </div>
  );
};

export default Home;
