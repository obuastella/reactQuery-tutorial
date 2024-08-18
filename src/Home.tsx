// "https://jsonplaceholder.typicode.com/todos/";
import { useQuery } from "@tanstack/react-query";
export default function Home() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["todo"],
    queryFn: () =>
      fetch("https://jsonplaceholder.typicode.com/todos").then((res) =>
        res.json()
      ),
  });
  if (error) return <h2>"There was an errror!"</h2>;
  if (isLoading) return <div>Data is loading</div>;
  return (
    <>
      {data.map((todo: any) => (
        <div>
          <h1>ID:{todo.id}</h1>
          <h1>Title:{todo.title}</h1>
        </div>
      ))}
    </>
  );
}
