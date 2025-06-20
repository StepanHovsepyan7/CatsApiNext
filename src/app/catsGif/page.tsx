import Gifs from "@/components/gifs"

export default async function CatsGif() {

    const headers = new Headers({
        "Content-Type": "application/json",
        "x-api-key": "live_qn77yA2SHtNrNefEeec2PJtHL2NRL4Pz64j2pbouFcnhZUvVIzR3CytFBfnigH8V"
    });

    const request:any = {
        method: 'GET',
        headers: headers,
        redirect: 'follow'
    };


    const gifRes = await fetch("https://api.thecatapi.com/v1/images/search?mime_types=gif&limit=20", request)
    const dataGif = await gifRes.json()

    if (!gifRes) {
        <p>Fetch Failed</p>
    }


    return (
        <div className="max-w-[1440px] m-auto p-5">
            <h2 className="text-5xl text-white text-center mt-10">Funny Gifs</h2>
            <div className="mt-[60px] flex flex-wrap justify-center text-white items-center text-center gap-[20px]">
                {dataGif.map((elm: any, i: number) => {
                    return (
                        <Gifs
                            key={i}
                            id={elm.id}
                            url={elm.url}
                            categories={elm.categories?.filter((e: any) => e.name)} />
                    )
                })}
            </div>
        </div>
    )
}