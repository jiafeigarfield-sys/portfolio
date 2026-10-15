/*
  Motion for the portfolio, inspired by landonorris.com. No libraries.

  1. Text roll: on hover, each letter of a link slides up and a copy rolls in.
  2. Scroll reveal: blocks fade up and images wipe in as they enter the screen.
  3. Homepage introduction: words darken one by one as you scroll.

  Content, colours and font sizes are not changed. Nothing runs when the
  visitor's system asks for reduced motion, and every page still reads
  normally if JavaScript is turned off. The matching styles are in the
  "Motion" part of css/style.css.
*/
(function () {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  /* 1. Text roll on links. The first line is the link text exactly as before,
     so nothing moves at rest; the second line is split into letters that roll
     in one after another on hover. Both lines are decorative copies, so the
     real text is kept in a visually hidden span for screen readers. */
  var rollLinks = document.querySelectorAll(
    ".site-nav a, .read-link, .button-previous, .button-next, .contact-details a, .social-links a, .resume-contact a"
  );

  rollLinks.forEach(function (link) {
    var text = link.textContent.trim();
    var label = document.createElement("span");
    var roll = document.createElement("span");

    label.className = "visually-hidden";
    label.textContent = text;
    roll.className = "roll";
    roll.setAttribute("aria-hidden", "true");

    var restLine = document.createElement("span");
    var hoverLine = document.createElement("span");
    restLine.className = "roll-line";
    restLine.textContent = text;
    hoverLine.className = "roll-line";
    Array.from(text).forEach(function (letter, index) {
      var char = document.createElement("span");
      char.className = "roll-char";
      char.textContent = letter;
      char.style.setProperty("--i", index);
      hoverLine.appendChild(char);
    });
    roll.appendChild(restLine);
    roll.appendChild(hoverLine);

    link.textContent = "";
    link.appendChild(label);
    link.appendChild(roll);
  });

  /* 2. Scroll reveal. Only elements that start below the visible part of the
     page are hidden, so nothing on screen flickers while the page loads. */
  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px" });

    var prepare = function (selector, className, stagger) {
      document.querySelectorAll(selector).forEach(function (element, index) {
        if (element.getBoundingClientRect().top < window.innerHeight * 0.92) {
          return;
        }
        element.classList.add(className);
        if (stagger) {
          element.style.setProperty("--delay", (index % stagger) * 0.08 + "s");
        }
        observer.observe(element);
      });
    };

    prepare(".section-title", "reveal");
    prepare(".software-grid li", "reveal", 4);
    prepare(".project-list ul > li", "reveal");
    prepare(".case-header ~ section", "reveal");
    prepare(".showcase-card", "reveal");
    prepare(".resume-entry", "reveal");
    prepare(".changepage > article", "reveal", 2);
    prepare(".footer-inner > *", "reveal", 2);
    prepare(
      ".project-card > img, .case-header ~ section > img, .row img, .showcase-card > img, .changepage img",
      "wipe"
    );
  }

  /* 3. Homepage introduction: split the text into words and light them up in
     order as the paragraph moves up the screen. */
  var intro = document.querySelector(".introduction");
  if (!intro) {
    return;
  }

  var words = [];
  intro.querySelectorAll("p").forEach(function (paragraph) {
    var parts = paragraph.textContent.split(/(\s+)/);
    paragraph.textContent = "";
    parts.forEach(function (part) {
      if (part.trim() === "") {
        paragraph.appendChild(document.createTextNode(part));
        return;
      }
      var word = document.createElement("span");
      word.className = "word";
      word.textContent = part;
      paragraph.appendChild(word);
      words.push(word);
    });
  });
  intro.classList.add("is-filling");

  var ticking = false;
  var update = function () {
    var box = intro.getBoundingClientRect();
    var start = window.innerHeight * 0.85;
    var end = window.innerHeight * 0.45;
    var progress = (start - box.top) / (start - end + box.height);
    var lit = Math.round(Math.min(1, Math.max(0, progress)) * words.length);
    words.forEach(function (word, index) {
      word.classList.toggle("is-lit", index < lit);
    });
    ticking = false;
  };

  window.addEventListener("scroll", function () {
    if (!ticking) {
      ticking = true;
      window.requestAnimationFrame(update);
    }
  }, { passive: true });
  window.addEventListener("resize", update);
  update();
})();
