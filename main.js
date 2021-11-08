const container = document.querySelector(".js-column.column");
fetch("./data.json")
  .then((response) => response.json())
  .then((modules) => {
    console.log(modules);
    modules.forEach(
      ({ moduleNumber, title, description, weekNumber, topics }) =>
        insertNewElement({
          moduleNumber,
          title,
          description,
          topics,
        })
    );
  });

function insertNewElement({
  moduleNumber,
  title,
  description,
  weekNumber,
  topics,
}) {
  console.log(1);
  const div = document.createElement("div");

  fetch(
    `./Three.js%20Journey%20%E2%80%94%20Learn%20WebGL%20with%20Three.js-filer/chapter-${moduleNumber}.png`
  )
    .then((response) => response.blob())
    .then((imageBlob) => {
      const objectURL = URL.createObjectURL(imageBlob);
      const img = document.createElement("img");
      const blob = URL.createObjectURL(imageBlob);
      img.src = blob;
      img.onload = function () {
        const width = img.width;
        const height = img.height;

        div.innerHTML = `<div
  class="js-item js-chapter chapter chapter-01 is-visible"
  data-index="01"
  >
  <div class="grid">
    <div class="line horizontal"></div>
    <div class="line horizontal"></div>
    <div class="line horizontal"></div>
    <div class="line vertical"></div>
    <div class="line vertical"></div>
    <div class="line vertical"></div>
    <div class="line vertical"></div>
    <div class="shadow"></div>
  </div>
  <div class="illustration">
    <img
      class="js-lazy lazy is-loaded"
      src="Three.js%20Journey%20%E2%80%94%20Learn%20WebGL%20with%20Three.js-filer/chapter-${moduleNumber}.png"
      srcset="
        Three.js%20Journey%20%E2%80%94%20Learn%20WebGL%20with%20Three.js-filer/chapter-012x.png 2x
      "
      width="${width}"
      height="${height}"
    />
  </div>
  <small class="number element delay-0">${moduleNumber}</small>
  <h3 class="section-title element delay-1">${title}</h3>
  <div class="description element delay-2">
    <p>
      ${description}
    </p>
  </div>
  <div class="information element delay-3">
    <span class="format-icon">
      <svg
        width="18"
        height="25"
        viewBox="0 0 18 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6 16.0469H13"
          stroke="#54BAF3"
          stroke-width="2"
          stroke-linecap="round"
        ></path>
        <path
          d="M6 19.0469H13"
          stroke="#54BAF3"
          stroke-width="2"
          stroke-linecap="round"
        ></path>
        <path
          d="M1 3.04687C1 4.15144 1.89543 5.04688 3 5.04688H17V1.12851C17 1.08342 16.9635 1.04687 16.9184 1.04687H3C1.89543 1.04687 1 1.94231 1 3.04687V3.04687Z"
          stroke="#54BAF3"
          stroke-width="2"
        ></path>
        <path
          d="M11 10.9288L13 9.92884V6.04688H9V9.92884L11 10.9288Z"
          stroke="#54BAF3"
          stroke-width="2"
        ></path>
        <path
          d="M1 3.04688V21.0469C1 22.1514 1.89543 23.0469 3 23.0469H16C16.5523 23.0469 17 22.5992 17 22.0469V3.04688"
          stroke="#54BAF3"
          stroke-width="2"
        ></path>
      </svg>
    </span>
    1 week
  </div>
  <ul class="lessons">
  ${topics.map(
    (topic, i) => `<li class="element delay-4">
  <span class="lesson-number">0${i + 1}</span>
  <span class="lesson-title">${topic.topic}</span>
  <span class="lesson-duration">${topic.emoji}</span>
</li>`
  )}
    
    
  </ul>
  </div>`;
        container.appendChild(div);
      };
    });
}
