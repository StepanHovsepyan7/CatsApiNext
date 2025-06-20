'use client'
import AOS from 'aos';
import { useEffect } from "react";

export interface CatGiftProps {
    id: string,
    url: string,
    categories: string[]
}

export default function Gifs({ id, url, categories }: CatGiftProps) {


    useEffect(() => {
        AOS.init({ duration: 1000, once: false });
        AOS.refresh();
    }, []);

    return (
        <div>
            <div>
                <div className="cursor-pointer relative overflow-hidden card " data-aos="flip-up">
                    <img className="object-cover w-[300px] h-[300px] rounded-3xl" src={url} alt="" />
                    <div className=" imgContent">
                        <h3 className="font-bold text-2xl">{categories?.join(', ') || 'Funny Cat'}</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}