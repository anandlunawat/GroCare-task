import { RxCrossCircled } from 'react-icons/rx'
import {AiFillLike} from 'react-icons/ai'

export default function Video(props) {
    return (
        <div className='fixed top-0 flex-col items-center justify-center w-screen h-screen backdrop-blur' style={{ display: props.player.submission?.mediaUrl ? "flex" : "none", }}>
            <div className='flex relative top-5 flex-col w-fit h-[100%]'>
                <button className='z-40 text-2xl max-sm:self-start' onClick={() => { props.closePlayer();document.querySelector('body').style.overflow="auto" }}>
                    <RxCrossCircled />
                </button>
                <video src={props.player.submission?.mediaUrl} className="h-[90%] w-fit" controls autoPlay />
            </div>
            <span className='absolute top-[80%] text-white'>{props.player.submission?.title}</span>
            <div className='relative flex flex-row items-center justify-center gap-6 -top-20'>
                <img src={props.player.creator?.pic} className='w-5' />
                <span className='text-lg text-white'>{props.player.creator?.handle}</span>
                <div className="flex gap-1 ml-auto text-white">
                    {props.player.reaction?.count}
                    <AiFillLike className="mt-[5px]" />
                </div>
            </div>
        </div>
    )
}