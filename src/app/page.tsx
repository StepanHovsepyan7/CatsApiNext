import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
        <ul className="flex  justify-center gap-3">
          <Link className="text-white text-3xl text-center" href={"/cats"}>Cats</Link>
          <Link className="text-white text-3xl text-center" href={"/catsGif"}>Cats-Gif</Link>
        </ul>
    </div>
  );
}
