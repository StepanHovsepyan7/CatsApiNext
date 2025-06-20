import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
        <ul>
          <Link className="text-white text-3xl text-center" href={"/cats"}>Cats</Link>
        </ul>
    </div>
  );
}
