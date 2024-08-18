import { useQuery } from "@tanstack/react-query";

export default function Test() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["users"],
    queryFn: () =>
      fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
        res.json()
      ),
  });
  if (isLoading) return <h1>Loading</h1>;
  if (error) return <h1>An error occured</h1>;
  console.log(data);
  return (
    <div>
      {data.map((todo: any) => (
        <div>
          <h1>ID:{todo.id}</h1>
        </div>
      ))}
    </div>
  );
}
