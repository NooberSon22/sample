import { useQuery } from "@tanstack/react-query";
const Home = () => {
  const { data: images, isLoading } = useQuery({
    queryKey: ["home"],
    queryFn: async () => {
      const response = await fetch(
        "https://api.thecatapi.com/v1/images/search?limit=10"
      );
      const data = await response.json();
      console.log(data);
      return data;
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid grid-cols-3">
      {images.map((image) => {
        return <img src={image.url} key={image.id} />;
      })}
    </div>
  );
};

export default Home;
