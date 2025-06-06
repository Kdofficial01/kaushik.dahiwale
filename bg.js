const cityImages = [
    "https://source.unsplash.com/1920x1080/?city",
    "https://source.unsplash.com/1920x1080/?night,city",
    "https://source.unsplash.com/1920x1080/?skyscraper",
    "https://source.unsplash.com/1920x1080/?urban,lights",
    "https://source.unsplash.com/1920x1080/?architecture,buildings",
    "https://source.unsplash.com/random/?city,night"
  ];
  const random = Math.floor(Math.random() * cityImages.length);
  document.querySelector(".hero").style.backgroundImage = `url('${cityImages[random]}')`;
  