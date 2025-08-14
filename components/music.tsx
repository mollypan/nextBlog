import { useRef } from "react";

const songsList = [
  {
    name: "巫堵",
    singer: "deca joins",
    time: "03:30",
    link: "https://music.163.com/song/media/outer/url?id=483378330.mp3",
    imgUrl:
      "http://p3.music.126.net/byjfkEIOWI_RmxSKEWTPyw==/18910500486297525.jpg?param=300x300&quot",
    id: "song1",
  },
  {
    name: "憂一乗",
    singer: "ヨルシカ",
    time: "04:32",
    link: "https://music.163.com/song/media/outer/url?id=1387099644.mp3",
    imgUrl:
      "http://p3.music.126.net/oH-hPC-coG6spFpbaA4xjw==/109951164327687331.jpg?param=300x300",
    id: "song2",
  },
  {
    name: "城市",
    singer: "张悬",
    time: "04:45",
    link: "https://music.163.com/song/media/outer/url?id=326712.mp3",
    imgUrl:
      "http://p4.music.126.net/z4_mW9fJ98isT4kiCRIX5A==/3304032449027594.jpg",
    id: "song3",
  },
  {
    name: "wish you were here",
    singer: "Pink Floyd",
    time: "05:34",
    link: "https://m804.music.126.net/20240401172545/25b03f8a05de1f3b1755e2fdf8613579/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/28482187963/df6a/2700/91f6/4b270f4c70b2fbc34ebcff428b8f13fc.mp3",
    imgUrl: "https://img4.kuwo.cn/star/albumcover/120/7/42/1179456328.jpg",
    id: "song4",
  },
];

const Music = () => {
  const song1 = useRef<HTMLAudioElement>(null);
  const song2 = useRef<HTMLAudioElement>(null);
  const song3 = useRef<HTMLAudioElement>(null);
  const song4 = useRef<HTMLAudioElement>(null);
  const music1 = useRef<HTMLLIElement>(null);
  const music2 = useRef<HTMLLIElement>(null);
  const music3 = useRef<HTMLLIElement>(null);
  const music4 = useRef<HTMLLIElement>(null);
  const playSvg1 = useRef<HTMLImageElement>(null);
  const playSvg2 = useRef<HTMLImageElement>(null);
  const playSvg3 = useRef<HTMLImageElement>(null);
  const playSvg4 = useRef<HTMLImageElement>(null);
  const audioRefs = [song1, song2, song3, song4];
  const musicRefs = [music1, music2, music3, music4];
  const playSvgRefs = [playSvg1, playSvg2, playSvg3, playSvg4];
  const handleMusicPlay = (index: number) => {
    const currentAudio = audioRefs[index].current;
    const currentSvg = playSvgRefs[index].current;
    if (!currentAudio) return;
    if (currentAudio.paused) {
      if (currentSvg) {
        currentSvg.src = "/pics/playing.svg";
      }
      currentAudio.play();
    } else {
      if (currentSvg) {
        currentSvg.src = "/pics/play.svg";
      }
      currentAudio.pause();
    }
  };
  const handleMusicEnd = (index: number) => {
    const currentSvg = playSvgRefs[index].current;
    if (currentSvg) {
      currentSvg.src = "/pics/play.svg";
    }
  }

  return (
    <>
      <div className="w-full">
        <img src="/pics/music.svg" alt="music-icon" className="w-8" />
        <p className="text-[#565656] text-sm mt-3 mb-8">Songs I like</p>
      </div>
      <div className="w-full">
        {songsList.map((song, index) => {
          return (
            <audio
              id={song.id}
              src={song.link}
              key={song.id}
              ref={audioRefs[index]}
              onEnded={() => handleMusicEnd(index)}
            />
          );
        })}
        <ul>
          {songsList.map((song, index) => {
            return (
              <li
                key={song.id}
                className="flex justify-between items-center mb-5 cursor-pointer"
                id={`music${index + 1}`}
                ref={musicRefs[index]}
                onClick={() => handleMusicPlay(index)}
              >
                <div className="flex justify-between items-center">
                  <div className="relative">
                    <img
                      src={song.imgUrl}
                      className="w-10 h-10 rounded-md mr-3 cursor-pointer "
                    />
                    <div className="bg-[#1ed760] w-10 h-10 rounded-md absolute top-0 left-0 flex justify-center items-center opacity-0 hover:opacity-100">
                      <img
                        src="/pics/play.svg"
                        className="w-4 h=4"
                        id={`play-svg${index + 1}`}
                        ref={playSvgRefs[index]}
                      />
                    </div>
                  </div>
                  <div>
                    <p className="text-sm">{song.name}</p>
                    <p className="text-xs text-[#565656]">{song.singer}</p>
                  </div>
                </div>
                <div className="text-[#bbb] text-sm leading-10">
                  {song.time}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Music;
