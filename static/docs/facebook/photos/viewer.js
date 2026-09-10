(() => {
  "use strict";

  const album = window.al;
  const thumbnails = document.querySelector("#thumbnails");
  const empty = document.querySelector("#empty");
  const details = document.querySelector("#details");
  const image = document.querySelector("#photo");
  const title = document.querySelector("#photo-title");
  const date = document.querySelector("#photo-date");
  const tagsSection = document.querySelector("#tags-section");
  const tags = document.querySelector("#tags");
  const commentsSection = document.querySelector("#comments-section");
  const comments = document.querySelector("#comments");

  if (!album || !album.photos) {
    empty.textContent = "This album could not be loaded.";
    return;
  }

  document.title = `${album.name} — Photo archive`;
  document.querySelector("#album-title").textContent = album.name;
  document.querySelector("#album-owner").textContent = album.ownername || "";
  document.querySelector("#album-description").textContent = album.description || "";

  function appendComment(list, comment) {
    const item = document.createElement("li");
    const author = document.createElement("strong");
    const text = document.createElement("span");
    const timestamp = document.createElement("div");
    author.textContent = `${comment.fromname}: `;
    text.textContent = comment.text;
    timestamp.className = "muted";
    timestamp.textContent = formatDate(comment.time);
    item.append(author, text, timestamp);
    list.append(item);
  }

  const albumComments = album.comments || [];
  if (albumComments.length > 0) {
    const section = document.createElement("section");
    const heading = document.createElement("h3");
    const list = document.createElement("ul");
    heading.textContent = "Album comments";
    list.className = "comments";
    albumComments.forEach((comment) => appendComment(list, comment));
    section.append(heading, list);
    details.append(section);
  }

  const photos = Object.values(album.photos);
  if (photos.length === 0) {
    empty.textContent = "This archived album contains no photos.";
    details.hidden = true;
    return;
  }

  const buttons = [];

  function formatDate(timestamp) {
    return new Intl.DateTimeFormat(undefined, {
      dateStyle: "long",
      timeStyle: "short",
    }).format(new Date(timestamp * 1000));
  }

  function showPhoto(photo, index) {
    image.src = photo.path;
    image.alt = photo.caption || `Photo ${index + 1} from ${album.name}`;
    title.textContent = photo.caption || "Untitled";
    date.textContent = formatDate(photo.created);

    buttons.forEach((button, buttonIndex) => {
      button.setAttribute("aria-current", String(buttonIndex === index));
    });

    tags.replaceChildren();
    const photoTags = photo.tags || [];
    tagsSection.hidden = photoTags.length === 0;
    photoTags.forEach((tag) => {
      const item = document.createElement("li");
      item.textContent = tag.text;
      tags.append(item);
    });

    comments.replaceChildren();
    const photoComments = photo.comments || [];
    commentsSection.hidden = photoComments.length === 0;
    photoComments.forEach((comment) => appendComment(comments, comment));
  }

  photos.forEach((photo, index) => {
    const button = document.createElement("button");
    const thumbnail = document.createElement("img");
    button.className = "thumbnail";
    button.type = "button";
    button.setAttribute("aria-label", photo.caption || `View photo ${index + 1}`);
    thumbnail.src = photo.path;
    thumbnail.alt = "";
    button.append(thumbnail);
    button.addEventListener("click", () => showPhoto(photo, index));
    thumbnails.append(button);
    buttons.push(button);
  });

  showPhoto(photos[0], 0);
})();
