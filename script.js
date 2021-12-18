$(document).ready(function () {
  $.get(
    "https://api.nasa.gov/planetary/apod?api_key=NeThsMc1Lcdt6UoCgxEek3S71jCQf4ln3SxRZIcI",
    (data) => {
      const img = document.createElement("img");
      img.src = data.url;
      img.alt = data.title;
      console.log(data);

      const title = document.createElement("h3");
      title.innerHTML = data.title;

      const description = document.createElement("p");
      description.innerHTML = data.explanation;

      const copyrightSpan = document.createElement("span");
      copyrightSpan.className = "copyright";
      if (data.copyright) {
        copyrightSpan.innerHTML =
          "<i class='fas fa-copyright'> " + data.copyright;
      }

      $("#image-container").append(title, img, copyrightSpan, description);
    }
  );
});
