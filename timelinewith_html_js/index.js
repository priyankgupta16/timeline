
var timeline = document.getElementById("tl");

let task = [
  {
    date: "12th October,2022/14th Octoder,2022",
    head: "(Reporting to be done between 2pm to 3pm)",
    desp: "Try to be present both days, it will be very productive sessions."
  },
  {
    date: "16th October",
    head:'',
    desp: "Preliminary result annocement"
  },
  {
    date: "17th to 19th October",
    head: '',
    desp: "Google meet scheleduled with dean student"
  },
  {
    date: "22th to 23rd October",
    head: "(report at 11:00AM)",
    desp: "Setup code base and carry out with assignment."
  }
];

timeline.innerHTML = task.map(
  (item, i) =>
    `<div class="timeline__line"></div>
      <div class="row timeline--text" key={i}>
        <div class="row__left">
          <div class="row__left__text">
            <h3>` +
                 item.date +
           `</h3>` +
            // (item.head && +
                `<p class="timeline--text--light">` + item.head + `</p>` +
          `</div>
        </div>

        <div class="row__mark">
            <div class="row__mark__dot"></div>
        </div>

        <div class="row__right">
           <div class="row__right__text">
            <h3>` +
                item.desp +
            `</h3>
           </div>
      </div>
    </div>`
);
