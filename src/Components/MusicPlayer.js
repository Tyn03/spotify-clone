import React, { useState, useRef, useEffect } from "react";
import "../Styles/MusicPlayer.css";
import {Songs} from "./Songs";
import {
  FaRegHeart,
  FaHeart,
  FaForward,
  FaStepForward,
  FaStepBackward,
  FaBackward,
  FaPlay,
  FaPause,
  FaShareAlt,
} from "react-icons/fa";
import { BsDownload } from "react-icons/bs";

function MusicPlayer({ song, imgSrc, songIndex, auto }) {
  const [Nsong, setSong] = useState(song);
  const [isLove, setLove] = useState(false);
  const [isPlaying, setPlay] = useState(false);
  const [SongIndex, setSongIndex] = useState(songIndex);
  const [currentSong, setcurrentSongIndex] = useState(Songs[SongIndex]);
  
  const [img, setImage] = useState(imgSrc);
  console.log("",+songIndex);

  useEffect(() => {
    // Khi song hoặc SongIndex thay đổi, cập nhật giá trị của Nsong
    setSong(Songs[songIndex].song);
  }, [song, SongIndex])

  useEffect(() => {
    // Khi song hoặc SongIndex thay đổi, cập nhật giá trị của Nsong
    setImage(Songs[songIndex].imgSrc);
  }, [song, SongIndex])
  
  
  //   duration state
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrenttime] = useState(0);

  const audioPlayer = useRef(); //   reference to our audio component
  const progressBar = useRef(); //   reference to our prgressbar
  const animationRef = useRef(); //  reference to our animation

  useEffect(() => {
    const seconds = Math.floor(audioPlayer.current.duration);
    setDuration(seconds);

    // set max prop with out seconds in input[range]
    progressBar.current.max = seconds;
  }, [audioPlayer?.current?.loadedmetada, audioPlayer?.current?.readyState]);

 

  
   
   
  

  const changePlayPause = () => {
    const prevValue = isPlaying;
    setPlay(!prevValue);

    if (!prevValue) {
      audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    } else {
      audioPlayer.current.pause();
      cancelAnimationFrame(animationRef.current);
    }
  };

  const move5s = () =>{
    if(audioPlayer.current.currentTime < duration){
      audioPlayer.current.currentTime +=5;
      changeCurrentTime();
    }
  }

  const back5s = () =>{
    if(audioPlayer.current.currentTime > 0){
      audioPlayer.current.currentTime -=5;
      changeCurrentTime();
    }
  }

  const playPreviousSong = () => {
    var tmp=songIndex;
    if (songIndex === 0) {
      tmp = Songs.length - 1;
      setSongIndex(tmp);
      setcurrentSongIndex(Songs[tmp]);
    } else {
      tmp = songIndex - 1;
      setSongIndex(tmp);
      setcurrentSongIndex(Songs[tmp]);
    }
  
    // Tắt bài hát hiện tại
    audioPlayer.current.pause();
    audioPlayer.current.currentTime = 0;
  
    // Đặt bài hát mới và chạy
    setSong(Songs[tmp].song);
    setImage(Songs[tmp].imgSrc);
    //audioPlayer.current.play();
    setPlay(true);
    animationRef.current = requestAnimationFrame(whilePlaying);
  };

  const playNextsSong = () => {
    var tmp=songIndex;
    if (songIndex === Songs.length) {
      tmp = 0;
      setSongIndex(tmp);
      setcurrentSongIndex(Songs[tmp]);
    } else {
      tmp = songIndex + 1;
      setSongIndex(tmp);
      setcurrentSongIndex(Songs[tmp]);
    }
  
    // Tắt bài hát hiện tại
    audioPlayer.current.pause();
    audioPlayer.current.currentTime = 0;
  
    // Đặt bài hát mới và chạy
    setSong(Songs[tmp].song);
    setImage(Songs[tmp].imgSrc);
    //audioPlayer.current.play();
    setPlay(true);
    animationRef.current = requestAnimationFrame(whilePlaying);
  };
  
  
  
  
  
  

  const whilePlaying = () => {
    progressBar.current.value = audioPlayer.current.currentTime;
    changeCurrentTime();
    // need to run more than once
    animationRef.current = requestAnimationFrame(whilePlaying);
  };

  const calculateTime = (sec) => {
    const minutes = Math.floor(sec / 60);
    const returnMin = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(sec % 60);
    const returnSec = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnMin} : ${returnSec}`;
  };

  const changeProgress = () => {
    audioPlayer.current.currentTime = progressBar.current.value;

    // progressBar.current.style.setProperty(
    //   "--played-width",
    //   `${(progressBar.current.value / duration) * 100}%`
    // );

    // setCurrenttime(progressBar.current.value);

    changeCurrentTime();
  };

  const changeCurrentTime = () => {
    progressBar.current.style.setProperty(
      "--played-width",
      `${(progressBar.current.value / duration) * 100}%`
    );

    setCurrenttime(progressBar.current.value);
  };

  const changeSongLove = () => {
    setLove(!isLove);
  };

  

  return (
    
    <div className="musicPlayer">
      <div className="songImage">
        <img src={img} alt="" />
      </div>
      <div className="songAttributes" key={Nsong.id}>
        <audio src={Nsong} preload="metadata" ref={audioPlayer} />

        <div className="top">
          <div className="left">
            <div className="loved" onClick={changeSongLove}>
              {isLove ? (
                <i>
                  <FaRegHeart />
                </i>
              ) : (
                <i>
                  <FaHeart />
                </i>
              )}
            </div>
            <i className="download">
              <BsDownload />
            </i>
          </div>

          <div className="middle">
            <div className="back" >
            

              <div className="back previous song"  onClick={playPreviousSong}>
              <i>
                <FaStepBackward /> 
              </i>
              </div>

              <div className="back 5s"  onClick={back5s}>
              <i>
                <FaBackward />
              </i>
              </div>
              
             
            </div>
            <div className="playPause" onClick={changePlayPause}>
              {isPlaying ? (
                <i>
                  <FaPause />
                </i>
              ) : (
                <i>
                  <FaPlay />
                </i>
              )}
            </div>
            <div className="forward"  >
              <div className="move 5s" onClick={move5s}>
              <i>
                <FaForward />
              </i>
              </div>
              <div className="play next song" onClick={playNextsSong}>
              <i>
                <FaStepForward />
              </i>
              </div>
              
            </div>
          </div>

          <div className="right">
            <i>
              <FaShareAlt />
            </i>
          </div>
        </div>

        <div className="bottom">
          <div className="currentTime">{calculateTime(currentTime)}</div>
          <input
            type="range"
            className="progressBar"
            ref={progressBar}
            defaultValue="0"
            onChange={changeProgress}
            autoPlay={auto}
          />
          <div className="duration">
            {duration && !isNaN(duration) && calculateTime(duration)
              ? duration && !isNaN(duration) && calculateTime(duration)
              : "00:00"}
          </div>
        </div>
      </div>
    </div>
  );
}

export  {MusicPlayer};