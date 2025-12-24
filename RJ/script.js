const toggle = document.getElementById("menu-toggle");

if (toggle & toggle.checked) {

  document.body.classList.add
    ("no-scroll");

} else {
  document.body.classList.remove
    ("no-scroll");
}


// home display
const words = [
  "Developer",
  "Data Analyst",
  "Freelancer",
];

const typingText = document.
  getElementById("typing-span");

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingDelay = 100;
let erasingDelay = 100;
let nextWordDelay = 1000;

const type = () => {
  const currentWord = words[wordIndex];

  if (!isDeleting) {
    typingText.textContent = currentWord.
      substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentWord.
      length) {
      isDeleting = true;
      setTimeout(type, nextWordDelay);
    } else {
      setTimeout(type, typingDelay)
    }
  }
  else {
    typingText.textContent = currentWord.
      substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      setTimeout(type, 500);
    }
    else {
      setTimeout(type, erasingDelay);

    }
  }
};

document.addEventListener
  ('DOMContentLoaded', () => {
    if (words?.length) type();
  });


// navbar
const navlinks = document.querySelectorAll(".navlink");
const tabs = document.querySelectorAll(".content");
navlinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    link.classList.add("active");

    navlinks.forEach((l) => {
      if (l === link) {
        l.classList.remove("active");
      } else {
        l.classList.remove("active")

      }
    });
    const tabName = link.dataset.tab;
    tabs.forEach((tab) => {
      if (tab.id === tabName) {
        tab.classList.add("active");
      } else {
        tab.classList.remove("active");

      }
    });

    // Services

    if (tabName === "services") {
      const serviceList = [
        {
          id: 1,
          icon: "bxs-code-alt",
          text: "Website Development",
          para: "Lorem ipsum dolor sit, amet co quae eligendi ex quisquam iusto dolores consequatur qui, porro maiores expedita animi dolore iste distinctio quidem!",
        },
        {
          id: 2,
          icon: "bx  bx-database",
          text: "Data Analyst",
          para: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit aspernatur quas quae eligendi ex quisquam iusto dolores consequatur qui, porro maiores expedita animi dolore iste distinctio quidem!",
        },
        {
          id: 3,
          icon: "bxs-code-alt",
          text: "Digital Marketing",
          para: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit aspernatur quas quae eligendi ex quisquam iusto dolores consequatur qui, porro maiores",
        },
        {
          id: 4,
          icon: "bxs-code-alt",
          text: "Vedio Editor",
          para: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit aspernatur quas quae eligendi ex quisquam iusto dolores consequatur qui, porro maiores expedita animi dolore iste distinctio quidem!",
        },
        {
          id: 5,
          icon: "bxs-code-alt",
          text: "Freelancer",
          para: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit aspernatur quas quae eligendi ex quisquam iusto dolores consequatur qui, porro maiores expedita animi dolore iste distinctio quidem!",
        },
        {
          id: 6,
          icon: "bxs-code-alt",
          text: "Content Creator",
          para: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit aspernatur quas quae eligendi ex quisquam iusto dolores consequatur qui, porro maiores",
        }
      ];
      const services = document
        .getElementsByClassName("service-list");
      const innerContent = serviceList.
        map((l) => {
          return `

                <div class="box" key=${l?.id}>
                    <div class="head-icons">
                        <i class='bx  ${l?.icon}'></i>
                        <span><i class='bx  bxs-arrow-down-right-stroke'></i> </span>
                    </div>
                    <h3>${l?.text}</h3>
                    <span class="spacer"></span>
                    <p>${l?.para}</p>
                </div>
                    
            `;
        }).join("");

      Array.from(services).forEach
        ((ele) => {
          ele.innerHTML = innerContent;
        });
    }


    toggle.checked = false;
  });
});


// About Javascript

const aboutTabs = document.querySelectorAll(".tab");
const aboutContent = document.querySelectorAll(".tab-content");

document.addEventListener("DOMContentLoaded", () => {
  if (aboutTabs) {
    aboutTabs[0].click();
  }
});

aboutTabs.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    e.preventDefault();

    aboutTabs.forEach((a) => a.classList.remove("active"));
    tab.classList.add("active");

    aboutContent.forEach((c) => c.classList.remove("active"));

    document.getElementById(tab.dataset.section).classList.add("active");

    if (tab.dataset.section === "experience") {
      const experiences = document.querySelector(".experience-list");

      const experienceList = [
        {
          id: 1,
          date: "May 2023 - June 2023",
          position: "Fullstack Developer",
          company: "Kamadgiri Software Solution Pvt. Ltd., Chitrakoot",
          details:
            "Built responsive and optimized Web Project on MVC .Net Technology using Skill such as Javascript, HTML, CSS, C++ Jquery and Bootstrap. Collaborated with backend also integrate APIs and improve user experience.",
        },
       
        {
          id: 2,
          date: "2021 - 2022",
          position: "Freelance Web Developer",
          company: "Self-Employed",
          details:
            "Developed custom websites for local businesses using HTML, CSS, JavaScript, and WordPress. Focused on performance, SEO, and mobile-first design.",
        },
      ];

      const experienceContent = experienceList
        .map((ele) => {
          return `
            <div class="experience-box" key="${ele?.id}">
              <h4>${ele?.date}</h4>
              <h3>${ele?.position}</h3>

              <div class="company-name">
                <span></span>
                <p>${ele?.company}</p>
              </div>

              <p>${ele?.details}</p>
            </div>
        `;
        })
        .join("");

      if (experiences) {
        experiences.innerHTML = experienceContent;
      }
    } else if (tab.dataset.section === "education") {
      const education = document.querySelector(".education-list");

      const educationList = [
        {
          id: 1,
          date: "2022 - 2024",
          degree: "Master Of computer Application(MCA)",
          institution: "SMS, Varanasi",
          details:
            "Studied core subjects like Data Structures, Web Development, and Operating Systems. Built multiple academic projects using JavaScript and the MERN stack.",
        },
        {
          id: 2,
          date: "2016 - 2018",
          degree: "Higher Secondary Education (HSC - Science)",
          institution: "BSEB",
          details:
            "Focused on Physics, Chemistry, and Mathematics. Developed a strong foundation in logical thinking and problem-solving.",
        },
        {
          id: 3,
          date: "2013 - 2014",
          degree: "Secondary School Certificate (SSC)",
          institution: "Sun Beam Public School, Dehri",
          details:
            "Completed basic schooling with distinction.",
        },
      ];

      const educationContent = educationList
        .map((ele) => {
          return `
            <div class="experience-box" key="${ele?.id}">
              <h4>${ele?.date}</h4>
              <h3>${ele?.degree}</h3>

              <div class="company-name">
                <span></span>
                <p>${ele?.institution}</p>
              </div>

              <p>${ele?.details}</p>
            </div>
        `;
        })
        .join("");

      if (education) {
        education.innerHTML = educationContent;
      }
    } else if (tab.dataset.section === "skills") {
      const skills = document.querySelector(".skill-list");

      const skillList = [
        {
          id: 1,
          name: "HTML - Hyper Text Markup Language",
          icon: "items/Html.png",
        },
        {
          id: 2,
          name: "CSS - Cascading Style Sheet",
          icon: "items/CSS.png",
        },
        {
          id: 3,
          name: "JavaScript",
          icon: "items/javascript.png",
        },
        {
          id: 4,
          name: "SQL",
          icon: "items/SQL.png",
        },
        {
          id: 5,
          name: "Bootstrap",
          icon: "items/Bootstrap.png",
        },
        {
          id: 6,
          name: "Node JS",
          icon: "items/nodejs.png",
        },

      ];

      const skillContent = skillList
        .map((ele) => {
          return `
            <div class="skill-box" key=${ele?.id}>
              <img 
              src=${ele?.icon}
              alt="${ele?.name}"
              title="${ele?.name}"
              loading="lazy"/>
            </div>
        `;
        })
        .join("");

      if (skills) {
        skills.innerHTML = skillContent;
      }
    } else if (tab.dataset.section === "about-me") {
      const myInfo = document.querySelector(".my-info");

      const infoList = [
        {
          id: 1,
          key: "Name : ",
          value: "Raja Singh",
        },
        {
          id: 2,
          key: "Country : ",
          value: "India",
        },
        {
          id: 3,
          key: "Industry : ",
          value: "Software & IT",
        },
        {
          id: 4,
          key: "Experience : ",
          value: "Fresher",
        },
        {
          id: 5,
          key: "Address : ",
          value: "Pusauli, Kaimur, Bihar-821109",
        },
      ];

      const infoContent = infoList
        .map((ele) => {
          return `
            <div class="info-box" key=${ele?.id}>
              <span>${ele?.key}</span>
              <span>${ele?.value}</span>
            </div>
        `;
        })
        .join("");

      if (myInfo) {
        myInfo.innerHTML = infoContent;
      }
    }
  });
});

// Project Javascript

const projectList = [
  {
    id: 1,
    number: "01",
    title: "FullStack Thread Clone",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil error minus ipsam molestiae delectus reiciendis culpa excepturi ad facilis mollitia!",
    techStack: ["MongoDB", "Express", "React", "Node"],
    image: "assets/projects/project1.webp",
    liveLink: "#",
    githubLink: "#",
  },
  {
    id: 2,
    number: "02",
    title: "SAAS Canva Website",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil error minus ipsam molestiae delectus reiciendis culpa excepturi ad facilis mollitia!",
    techStack: ["Next JS ", "Strapi"],
    image: "assets/projects/project2.webp",
    liveLink: "#",
    githubLink: "#",
  },
];

const project = document.querySelector(".project");

let currentIndex = 0;

const renderProject = (index) => {
  const projectContent = projectList[index];

  const previousDisabled = currentIndex === 0;
  const nextDisabled = currentIndex === projectList.length - 1;

  project.innerHTML = `
        <div class="project-info">
            <h3>${projectContent?.number}</h3>
            <h4>${projectContent?.title}</h4>
            <p>
            ${projectContent?.description}
            </p>
            <div class="tech-stack">
                ${projectContent?.techStack
      ?.map((tech, i) => {
        return `<span key=${i}>${tech}</span>`;
      })
      .join(",")}
            </div>       
            <hr />
            <div class="links">
              <a href="${projectContent?.liveLink}">
           <i class="fa-solid fa-arrow-right"></i>
              </a>
              <a href="${projectContent?.githubLink}">
              <i class="fa-brands fa-github"></i>
              </a>
            </div>
          </div>

          <div class="carousel">
            <img 
                src="${projectContent?.image}" 
                alt="${projectContent?.title}" 
            />

            <div class="arrows">
              <a href="#" id="previous" class='${previousDisabled ? "disabled-btn" : ""
    }'>
                <i class="fa-solid fa-angle-left"></i>
              </a>
              <a href="#" id="next" class='${nextDisabled ? "disabled-btn" : ""
    }'>
                <i class="fa-solid fa-angle-right"></i>
              </a>
            </div>
          </div>
  `;

  document.getElementById("previous").addEventListener("click", (e) => {
    e.preventDefault();

    if (currentIndex > 0) {
      currentIndex--;
      renderProject(currentIndex);
    }
  });

  document.getElementById("next").addEventListener("click", (e) => {
    e.preventDefault();

    if (currentIndex < projectList.length - 1) {
      currentIndex++;
      renderProject(currentIndex);
    }
  });
};

renderProject(currentIndex);

// Contact Javascript

const media = document.querySelector(".contact-media");

const contactList = [
  {
    id: 1,
    icon: "fa-solid fa-phone",
    name: "Phone",
    value: "+91 8789846695",
    href: "tel:+918789846695",
  },
  {
    id: 2,
    icon: "fa-regular fa-message",
    name: "E-Mail",
    value: "raja.rajput9934@gmail.com",
    href: "mailto:raja.rajput9934@gmail.com",
  },
  {
    id: 3,
    icon: "fa-solid fa-location-arrow",
    name: "Country",
    value: "India",
    href: "#",
  },
];

const contactContent = contactList
  .map((ele) => {
    return `
    <div class="media" key="${ele?.id}">
        <span>
            <i class="${ele?.icon}"></i>
        </span>

        <div class="contact-value">
            <p>${ele?.name}</p>
            <a href="${ele?.href}">${ele?.value}</a>
        </div>
    </div>
    `;
  })
  .join("");

if (media) media.innerHTML = contactContent;

const sendBtn = document.querySelector("#send-msg");

const originalText = sendBtn.innerHTML;
const originalStyles = {
  backgroundColor: sendBtn.style.backgroundColor,
  color: sendBtn.style.color,
  border: sendBtn.style.border,
  boxShadow: sendBtn.style.boxShadow,
};

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    sendBtn.innerHTML = "Sending...";
    sendBtn.style.backgroundColor = "gray";
    sendBtn.style.color = "white";
    sendBtn.style.border = "none";
    sendBtn.style.boxShadow = "none";
    sendBtn.disabled = true;

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    if (!name || !email || !phone || !message) {

      sendBtn.innerHTML = originalText;
      Object.assign(sendBtn.style, originalStyles);
      sendBtn.disabled = false;

      return Toastify({
        text: "All fields are required !",
        duration: 3000,
        gravity: "top",
        position: "center",
        close: true,
        style: {
          background: "rgb(206, 16, 16)",
        },
      }).showToast();
    }

    emailjs
      .send("service_htpegf8", "template_6gg6r8u", {
        name,
        email,
        phone,
        message,
      })
      .then(
        () => {
          Toastify({
            text: "Message Sent !",
            duration: 3000,
            gravity: "top",
            position: "center",
            close: true,
            style: {
              background: "rgb(9, 222, 38)",
            },
          }).showToast();

          setTimeout(() => {
            sendBtn.innerHTML = originalText;
            Object.assign(sendBtn.style, originalStyles);
            sendBtn.disabled = false;
          }, 2000);
        },
        (error) => {
          console.log("FAILED...", error);

          Toastify({
            text: "Message Failed. Try again.",
            duration: 3000,
            gravity: "top",
            position: "center",
            close: true,
            style: {
              background: "rgb(206, 16, 16)",
            },
          }).showToast();

          sendBtn.innerHTML = originalText;
          Object.assign(sendBtn.style, originalStyles);
          sendBtn.disabled = false;
        }
      );
  });
