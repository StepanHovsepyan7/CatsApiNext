import Card, { CatsListProps } from "@/components/card";

const headers = new Headers({
  "Content-Type": "application/json",
  "x-api-key": "live_qn77yA2SHtNrNefEeec2PJtHL2NRL4Pz64j2pbouFcnhZUvVIzR3CytFBfnigH8V"
});

const request = {
  method: 'GET',
  headers: headers,
  redirect: 'follow'
};



export default async function Cats() {
  const res = await fetch("https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=20", request)
  const data = await res.json();

  if (!res) {
    <p>Fetch Failed</p>
  }

  return (
    <div className="max-w-[1440px] m-auto p-5">
      <h1 className="text-5xl text-white text-center mt-5">Cats</h1>
      <div className=" mt-[60px] flex flex-wrap justify-center text-white items-center text-center gap-[20px]">
        {data.map((item: any, i: number) => {
          const breed = item.breeds[0];

          return (
            <Card
              {...breed}
              image={item.url} 
              wikipedia_url={item.breeds[0].wikipedia_url}
              key={i} />
          )
        })}
      </div>
    </div>
  )
}