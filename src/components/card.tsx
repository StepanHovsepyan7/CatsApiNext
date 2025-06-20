'use client'
import Link from "next/link";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
export interface CatsListProps {
    name: string,
    origin: string,
    image?: string,
    wikipedia_url: string,
}

export default function Card({ name, origin, image, wikipedia_url }: CatsListProps) {
    useEffect(() => {
        AOS.init({ duration: 1000, once: false });
        AOS.refresh(); 
    }, []);

    return (
        <div>
            <Link href={wikipedia_url} target="__blank">
                <div className="cursor-pointer relative overflow-hidden card " data-aos="flip-up">            <div>
                    <img className="object-cover w-[300px] h-[300px] rounded-3xl" src={image} alt="" />
                    <div className=" imgContent">
                        <h3 className="font-bold text-2xl">{name}</h3>
                        <span className="catOrigin">{origin}</span>
                    </div>
                </div>
                </div>
            </Link>
        </div>
    )
}