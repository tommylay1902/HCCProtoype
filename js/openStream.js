function formSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.target);

  streamTarget = formData.get("deviceSelection");
  console.log("streamTarget is:");
  console.log(streamTarget);

  switch (streamTarget) {
    case "breakingbad":
      window.open("https://www.netflix.com/title/70143836?s=i&trkid=255824129", "_blank");
      break;
    case "skyfall":
      window.open("https://www.hulu.com/movie/1df5b0fc-7927-482f-bda4-eecde13ebb99?play=false&utm_source=shared_link", "_blank");
      break;
    case "spotify":
      window.open("https://open.spotify.com", "_blank");
      break;
    case "youtube":
      window.open("https://youtu.be/DXxa_4GhGJ4", "_blank");
      break;
    default:
      // sent to external devices, so doesn't need to work
      window.open("pageload.html", "_blank");
  }
}

document.querySelector("#openStream").addEventListener("submit", formSubmit);
document.querySelector("#openStream2").addEventListener("submit", formSubmit);
document.querySelector("#openStream3").addEventListener("submit", formSubmit);
document.querySelector("#openStream4").addEventListener("submit", formSubmit);
