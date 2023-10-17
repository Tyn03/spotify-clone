const Songs = [
    {
      id: 1,
      favourite: false,
      songName: "thich em hoi nhieu",
      artist: "wren Evans",
      song: "https://firebasestorage.googleapis.com/v0/b/khang123-f9f5a.appspot.com/o/music%2FWREN%20EVANS%20-%20TH%C3%8DCH%20EM%20H%C6%A0I%20NHI%E1%BB%80U%20(OFFICIAL%20MUSIC%20VIDEO).mp4?alt=media&token=adab1305-603c-482e-aa9b-4750c5c08b73&_gl=1*ozo0bv*_ga*NjkyMjc0NTA4LjE2OTIyMDk4Njc.*_ga_CW55HF8NVT*MTY5NzUyNjk4Mi4zNC4xLjE2OTc1Mjk5MDUuMzAuMC4w",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Images%2Fmoneyheist.jpg?alt=media&token=32baf3d7-0ab5-47d5-ba48-554792cea117",
    },
    {
      id: 2,
      favourite: false,
      songName: "Perfect",
      artist: "Ed Sherran",
      song: "https://firebasestorage.googleapis.com/v0/b/khang123-f9f5a.appspot.com/o/music%2FEd%20Sheeran%20-%20Perfect%20(Official%20Music%20Video).mp4?alt=media&token=5d13bb6e-b1c9-4900-b8b5-36488b1a7b35&_gl=1*1933t4*_ga*NjkyMjc0NTA4LjE2OTIyMDk4Njc.*_ga_CW55HF8NVT*MTY5NzUyNjk4Mi4zNC4xLjE2OTc1Mjg4OTkuNjAuMC4w",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/khang123-f9f5a.appspot.com/o/image%2Fperfect.PNG?alt=media&token=ca49bd9d-7745-41a9-ad38-1c1388b1e7a2&_gl=1*10du1ph*_ga*NjkyMjc0NTA4LjE2OTIyMDk4Njc.*_ga_CW55HF8NVT*MTY5NzUyNjk4Mi4zNC4xLjE2OTc1MjkwOTIuNDIuMC4w",
    },
    {
      id: 3,
      favourite: false,
      songName: "Leave the Door Open ",
      artist: "Bruno Mars",
      song: "https://firebasestorage.googleapis.com/v0/b/khang123-f9f5a.appspot.com/o/music%2FBruno%20Mars%2C%20Anderson%20.Paak%2C%20Silk%20Sonic%20-%20Leave%20the%20Door%20Open%20%5BOfficial%20Video%5D.mp3?alt=media&token=4fad7afb-ddc1-4e54-9f43-8e5d1430d3c5&_gl=1*t5595h*_ga*NjkyMjc0NTA4LjE2OTIyMDk4Njc.*_ga_CW55HF8NVT*MTY5NzUyNjk4Mi4zNC4xLjE2OTc1MzEzNjkuNjAuMC4w",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Images%2Fjoker.jpg?alt=media&token=c3955b3c-7efd-4127-b119-6c6343dbc414",
    },
    {
      id: 4,
      favourite: false,
      songName: "Attention",
      artist: "Charlie Puth",
      song: "https://firebasestorage.googleapis.com/v0/b/khang123-f9f5a.appspot.com/o/music%2FCharlie%20Puth%20-%20Attention%20%5BOfficial%20Video%5D.mp3?alt=media&token=c1cbbe64-07ca-4be3-ba20-09ec17ad04f5&_gl=1*1yv4dr7*_ga*NjkyMjc0NTA4LjE2OTIyMDk4Njc.*_ga_CW55HF8NVT*MTY5NzUyNjk4Mi4zNC4xLjE2OTc1MzE0MTcuMTIuMC4w",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Images%2Fpeakyblinder.jpg?alt=media&token=b83fbf86-37ef-47c2-948e-3447a22a2d07",
    },
    {
      id: 5,
      favourite: false,
      songName: "We don't Talk Anymone",
      artist: "Charlie Puth",
      song: "https://firebasestorage.googleapis.com/v0/b/khang123-f9f5a.appspot.com/o/music%2FCharlie%20Puth%20-%20We%20Don't%20Talk%20Anymore%20(feat.%20Selena%20Gomez)%20%5BOfficial%20Video%5D.mp3?alt=media&token=d2bc2f5a-f759-4201-ac8f-1ee8200b945a&_gl=1*1ebx7qb*_ga*NjkyMjc0NTA4LjE2OTIyMDk4Njc.*_ga_CW55HF8NVT*MTY5NzUyNjk4Mi4zNC4xLjE2OTc1MzE0NDguNjAuMC4w",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Images%2Fvalimai.jpg?alt=media&token=e11b839d-2514-4e1a-aa3a-20db3540a837",
    },
    {
      id: 6,
      songName: "A Thousand Years",
      artist: "Christina Perri",
      song: "https://firebasestorage.googleapis.com/v0/b/khang123-f9f5a.appspot.com/o/music%2FChristina%20Perri%20-%20A%20Thousand%20Years%20%5BOfficial%20Music%20Video%5D.mp3?alt=media&token=7e05eabe-1fcd-497a-b558-18164d7eb261&_gl=1*1iidr91*_ga*NjkyMjc0NTA4LjE2OTIyMDk4Njc.*_ga_CW55HF8NVT*MTY5NzUyNjk4Mi4zNC4xLjE2OTc1MzE0ODguMjAuMC4w",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Images%2Fwhitetown.jpg?alt=media&token=25e1ec0c-24ec-4a11-a7a7-e55ec1fc50cf",
    },
    {
      id: 7,
      favourite: false,
      songName: "Thinking Out Loud",
      artist: "Ed Sheeran",
      song: "https://firebasestorage.googleapis.com/v0/b/khang123-f9f5a.appspot.com/o/music%2FEd%20Sheeran%20-%20Thinking%20Out%20Loud%20(Official%20Music%20Video).mp3?alt=media&token=ba39c8b7-a567-41b6-b3b9-93e1545a7951&_gl=1*choujf*_ga*NjkyMjc0NTA4LjE2OTIyMDk4Njc.*_ga_CW55HF8NVT*MTY5NzUyNjk4Mi4zNC4xLjE2OTc1MzE1ODEuNDkuMC4w",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Images%2Fcharlie.jpg?alt=media&token=81a1dc08-a9af-4db2-b74d-1f50315f9342",
    },
    {
      id: 8,
      favourite: false,
      songName: "Until I Found You",
      artist: "Stephen Sanchez",
      song: "https://firebasestorage.googleapis.com/v0/b/khang123-f9f5a.appspot.com/o/music%2FStephen%20Sanchez%20-%20Until%20I%20Found%20You%20(Official%20Video).mp3?alt=media&token=2a21a9d6-c5cf-4be3-9285-4cd3f1871f1b&_gl=1*1av1ok0*_ga*NjkyMjc0NTA4LjE2OTIyMDk4Njc.*_ga_CW55HF8NVT*MTY5NzUyNjk4Mi4zNC4xLjE2OTc1MzE2MTcuMTMuMC4w",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Images%2Fmask.jpg?alt=media&token=22f0d7be-74b8-4c0d-849d-b777370e9559",
    },
    {
      id: 9,
      favourite: false,
      songName: "See You Again ft. Charlie Puth",
      artist: "Wiz Khalifa",
      song: "https://firebasestorage.googleapis.com/v0/b/khang123-f9f5a.appspot.com/o/music%2FWiz%20Khalifa%20-%20See%20You%20Again%20ft.%20Charlie%20Puth%20%5BOfficial%20Video%5D%20Furious%207%20Soundtrack.mp3?alt=media&token=6fac9485-6eeb-4259-bcad-7e4a4bf1dcc1&_gl=1*r4ix0p*_ga*NjkyMjc0NTA4LjE2OTIyMDk4Njc.*_ga_CW55HF8NVT*MTY5NzUyNjk4Mi4zNC4xLjE2OTc1MzE2NTIuNjAuMC4w",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Images%2Fheymama.jpg?alt=media&token=2d8e8632-8051-4105-9760-3c715d797802",
    },
    {
      id: 10,
      favourite: false,
      songName: "vaicaunoicokhiennguoithaydoi",
      artist: "GREY D x tlinh ",
      song: "https://firebasestorage.googleapis.com/v0/b/khang123-f9f5a.appspot.com/o/music%2FGREY%20D%20x%20tlinh%20-%20vaicaunoicokhiennguoithaydoi%20-%20Official%20Music%20Video.mp3?alt=media&token=9c61cf03-4199-4915-86ca-ae9d49809bea&_gl=1*11tmi0o*_ga*NjkyMjc0NTA4LjE2OTIyMDk4Njc.*_ga_CW55HF8NVT*MTY5NzUyNjk4Mi4zNC4xLjE2OTc1MzE3MDAuMTIuMC4w",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Images%2Fturkish.jpg?alt=media&token=1f44ad17-43a8-4e1d-b232-a78b28cb9fe0",
    },
  ];
  
  export { Songs };