import { useEffect, useState } from "react";
import { AiFillLike, AiOutlineRight } from "react-icons/ai";
import Video from "./Video";
import Loader from "./Loader";

export default function Posts() {
    const [page, setPage] = useState(0);
    const [numbers, setNumbers] = useState([0, 1, 2]);
    const [posts, setPosts] = useState([]);
    const [player, setPlayer] = useState({})
    const [loader, setLoader] = useState(true)

    useEffect(() => {
        setLoader(true)
        const click = async () => {
            setPosts([{}]);
            try {
                const res = await fetch(
                    `https://internship-service.onrender.com/videos?page=${page}`
                );
                if (!res.ok) {
                    console.log(res.status);
                }
                const data = await res.json();
                setLoader(false)
                setPosts(data.data.posts);

            } catch (e) {
                console.log(e);
            }
        };
        click();
    }, [page, numbers]);

    const addPageToNumbers = () => {
        if (!numbers.includes(page+1)) {
            setNumbers((prevNumbers) => [...prevNumbers, page+1]);
        }
    };

    function closePlayer() {
        setPlayer({})
    }

    return (
        loader ? <Loader /> :
            <div>
                <div className="flex flex-col p-4">
                    <div className="grid grid-cols-3 gap-12 max-sm:grid-cols-1 lg:grid-cols-5 lg:gap-12">
                        {posts.map((post, index) => {
                            return (
                                <button
                                    key={index}
                                    className="flex flex-col h-full font-bold"
                                    onClick={() => { setPlayer(post); document.querySelector('body').style.overflow = "hidden" }}
                                >
                                    <img
                                        src={post.submission?.thumbnail}                                        
                                        alt={post.creator?.handle}
                                        className="w-full rounded-xl"
                                    />
                                    <span className="self-center">{post.submission?.title}</span>
                                    <div className="flex flex-row w-full gap-2 font-normal">
                                        <span className="truncate lg:basis-2/3">
                                            {post.submission?.description}
                                        </span>                                        
                                        <div className="flex gap-1 ml-auto">
                                            {post.reaction?.count}
                                            <AiFillLike className="mt-[5px]" />
                                        </div>                                        
                                    </div>
                                </button>
                            );
                        })}
                    </div>
                    <div className="flex flex-row self-center justify-center gap-3 mt-3 font-medium">
                        {numbers?.map(number => {
                            return (
                                <button className={`${page === number ? "underline" : ""}`} key={number} onClick={() => { setPage(number); }}>
                                    {console.log(number)}
                                    {number}
                                </button>
                            )
                        })
                        }
                        <button onClick={() => { setPage(page + 1); addPageToNumbers(); }}>
                            <AiOutlineRight />
                        </button>
                    </div>
                </div>
                <Video
                    player={player}
                    closePlayer={closePlayer}
                />
            </div>
    );
}
