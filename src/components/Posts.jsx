import { useEffect, useState } from "react";
import { AiFillDislike, AiFillLike, AiOutlineRight } from "react-icons/ai";

export default function Posts() {
    const [page, setPage] = useState(0);
    const [numbers, setNumbers] = useState([0,1,2]);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const click = async () => {
            setPosts([{}]);
            console.log(`https://internship-service.onrender.com/videos?page=${page}`)
            try {
                const res = await fetch(
                    `https://internship-service.onrender.com/videos?page=${page}`
                );
                if (!res.ok) {
                    console.log(res.status);
                }
                const data = await res.json();
                setPosts(data.data.posts);

            } catch (e) {
                console.log(e);
            }
        };
        click();
    }, [page,numbers]);

    const addPageToNumbers = () => {
        if (!numbers.includes(page)) {
          setNumbers((prevNumbers) => [...prevNumbers, page]);
        }
      };

    return (
        <div className="flex flex-col m-4">
            <div className="grid grid-cols-3 gap-12 max-sm:grid-cols-1 lg:grid-cols-5 lg:gap-12">
                {posts.map((post,index) => {
                    return (
                        <button
                            key={index}
                            className="flex flex-col h-full font-bold text-black"
                        >
                            <img
                                src={post.submission?.thumbnail}
                                className="rounded-xl w-fit"
                            />
                            <span className="self-center">{post.submission?.title}</span>
                            <div className="flex flex-row w-full gap-2 font-normal">
                                <span className="truncate lg:basis-2/3">
                                    {post.submission?.description}
                                </span>
                                {post.reaction?.voted ? (
                                    <div className="flex gap-1 ml-auto">
                                        {post.reaction?.count}
                                        <AiFillLike className="mt-[5px]" />
                                    </div>
                                ) : (
                                    <div className="flex gap-1 ml-auto">
                                        {post.reaction?.count}
                                        <AiFillDislike className="mt-[5px]" />
                                    </div>
                                )}
                            </div>
                        </button>
                    );
                })}
            </div>
            <div className="flex flex-row self-center justify-center gap-3 mt-3 font-medium text-black">
                {numbers?.map(number => {
                    return (
                        <button
                            key={number}
                            onClick={() => {
                                setPage(number);
                            }}
                        >
                            {console.log(number)}
                            {number}
                        </button>
                    )
                })
                }
                <button
                    onClick={() => {
                        setPage(page + 1);
                        addPageToNumbers();
                    }}
                >
                    <AiOutlineRight />
                </button>
            </div>
        </div>
    );
}
