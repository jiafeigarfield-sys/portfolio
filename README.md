# Jiafei Rong (Jasmine) portfolio

A static HTML and CSS portfolio. The page content and structure come from the HTML files in this folder. 

## Files

```text
portfolio/
  index.html
  project1_changi.html
  project2_air-new-zealand.html
  project3_moon-and-stars.html
  project4_nyu-shanghai.html
  resume.html
  contact.html
  css/
    style.css
  js/
    animations.js
  media/
    portrait, project covers and software logos
    project1/ ... project4/   images for each case study
    fonts/
      five local WOFF2 font files
      licenses/
  CREDITS.md
  VALIDATION.md
  README.md
```

All seven pages link to `css/style.css` and `js/animations.js`. The website has no inline styles, build step, libraries or package dependencies. Images and fonts are included locally.

## Open and edit

Open `index.html` in a browser to view the homepage. Edit the HTML files to change content and `css/style.css` to change presentation. Keep the filenames and relative paths unchanged unless you also update their links.

Image paths that contain a space are written with `%20`, for example `media/project2/site%20map.png`. Photos and screenshots are JPEG (`.jpg`); logos, wireframes, the site map and the persona boards stay PNG so their text and lines stay sharp.

## Styles

`css/style.css` is organised in this order: fonts, colour and size variables, header, homepage, footer, the project pages, the resume page, motion, then the rules for smaller screens.

- **Fonts:** Inria Serif (regular and bold) for text, Square Peg for the handwritten name and the "Jasmine Rong" link, and Sometype Mono (regular and italic) for dates, buttons and the footer. The content of the resume page uses Inria Serif throughout, with no italics.
- **Colours:** text `#171717`, purple `#7a35b0`, grey buttons `#cecece` and dividers `#d9d9d9`. The first section of each project page sits in a light purple panel.
- **Type sizes:** set with `clamp()`, so they match the Figma sizes at 1440px wide and shrink on smaller screens. Layouts stack into a single column below 960px and 600px.

Classes and patterns you can use in the HTML:

| In the HTML | Result |
|---|---|
| `<p class="subheading">` | Bold subheading inside a section, e.g. "(1) Multiple Activities" |
| Images placed one after another in a section | Sit side by side when there is room |
| `<br>` between images | Starts a new row of images |
| `<section>` whose first element is `<h3>End</h3>` | Closing block at the end of a case study |
| `ol.flow-vertical` | Steps listed down the page with arrows between them (Changi) |
| `ol.requirements-flow` | Purple list of design requirements (Air New Zealand) |
| `div.row` | Row of images that wraps on small screens (Air New Zealand) |
| `ul.showcase-list` with `article.showcase-card` | Screens and notes alternating left and right (Changi) |
| `nav.changepage` | Previous and Next project links at the bottom of each case study |
| `article.resume-entry` with `p.resume-meta` and `div.resume-body` | One resume entry: dates and place on the left, details on the right (resume page) |
| `p.resume-role` | Job title or degree under the organisation name, in purple (resume page) |
| `dl.resume-skills` | Skills listed as label and value pairs (resume page) |
| `dl.contact-info` | Contact details listed as label and link pairs (contact page) |

## Motion

The animations take their cue from https://landonorris.com/. They only move things: content, colours and font sizes are the same as without them, and every element ends up in exactly the same place.

| Where | What happens | Made with |
|---|---|---|
| Header | Fades in when a page opens | CSS |
| Homepage portrait | Opens like a curtain from the bottom edge | CSS |
| Handwritten name | Appears from left to right, as if it is being written | CSS |
| Homepage introduction | Paragraphs fade up one after another, then the words light up one by one as you scroll | CSS and JavaScript |
| Project, resume and contact page titles | Title, summary and the resume contact details fade up | CSS |
| Sections, project cards, resume entries, Previous / Next | Fade up as they scroll into view | CSS and JavaScript |
| Images | Wipe in from the bottom as they scroll into view | CSS and JavaScript |
| Menu, buttons and contact links | On hover, the text slides up and a copy rolls in letter by letter | CSS and JavaScript |
| Software logos | Hop and tilt on hover | CSS |
| Project images | Lift slightly on hover | CSS |
| Footer | Fades in as you reach it; when a page is opened at `#contact`, a purple line runs along its top edge and the details reappear one by one | CSS |

The CSS is in the "Motion" part of `css/style.css`, and `js/animations.js` adds the extra elements and classes it needs. If JavaScript is turned off, every page still shows all of its content. Visitors whose system is set to reduce motion see the site without any of these animations, and printed pages always show everything.

## Navigation

Each page has the "Jasmine Rong" link back to the homepage, plus Home, Projects, Resume and Contact in the menu. Contact opens the contact page; every page also keeps the contact details in its footer. The homepage links to all four project pages through their "Read it" buttons. Each project page has Previous and Next links at the bottom.

The resume page follows the CV: contact details (email, phone and LinkedIn, one per line), profile, education, internship experience (most recent first, starting with NYU Shanghai), leadership and volunteering, and skills. Its NYU Shanghai, Changi and Air New Zealand entries have "Read it" buttons that open the matching case studies.

The contact page uses the same layout as the resume page: contact details (email and the Irish and Chinese phone numbers) in the purple panel, then social media (LinkedIn, Instagram and Facebook), each as a purple label with its link beside it.

```text
Homepage                       index.html
  Singapore Changi Airport     project1_changi.html
  Air New Zealand              project2_air-new-zealand.html
  Moon and stars               project3_moon-and-stars.html
  NYU Shanghai                 project4_nyu-shanghai.html
Resume                         resume.html
Contact                        contact.html

Project sequence (Next):
Changi -> Air New Zealand -> Moon and stars -> NYU Shanghai -> Changi
```

## Assignment 1

This implementation provides the website deliverables: a homepage plus six other pages (four case studies, a resume and a contact page), working navigation, images, text, links and a single external stylesheet.

`VALIDATION.md` records the latest check with the official Nu Html Checker (15 October 2026): all seven pages and `css/style.css` passed with zero messages. If you edit a page or the stylesheet after that, check it again (https://validator.w3.org/nu/) and update its row in `VALIDATION.md`.

To submit the assignment:

1. Copy the contents of this folder into the course `www` folder, retaining the `css`, `js` and `media` subfolders.
2. Check the actual published homepage URL, all four project links, the resume link and the contact link after uploading. The homepage is `index.html`, so servers and GitHub Pages open it automatically at the folder address.
3. Create the assignment GitHub repository, add these project files and commit the work.
4. Update the PDF documentation with the published coursework homepage URL and GitHub repository URL. Its navigation description and wireframes should reflect this HTML version, including the Previous and Next links on the project pages.
5. Submit the named PDF through Blackboard according to the course brief.

The Figma Site remains a design reference. Creating these files does not deploy them to the course server or create a GitHub repository.

## Publish on GitHub Pages

1. On github.com, create a new **Public** repository, for example `portfolio`.
2. Choose **uploading an existing file** and drag in the contents of this folder (the `css`, `js` and `media` folders plus the HTML and Markdown files), not the folder itself. Then select **Commit changes**.
3. In the repository, open **Settings → Pages**, set **Source** to **Deploy from a branch**, choose **main** and **/ (root)**, then select **Save**.
4. After a minute or two the site is available at `https://<username>.github.io/portfolio/`. A repository named `<username>.github.io` is published at `https://<username>.github.io/` instead.

GitHub's web upload accepts files up to 25 MB each and 100 files at a time; this site is about 13 MB in 70 files, with no file larger than 1 MB. Upload the unzipped files, not a `.zip`: GitHub Pages cannot serve pages from inside a zip file. Keep image paths in the HTML in exactly the same letter case as the filenames, because GitHub Pages treats `Photo.png` and `photo.png` as different files.

## Media

Image and font sources are recorded in `CREDITS.md`. Font licence notices are included in `media/fonts/licenses/`. Project imagery, photographs and software logos retain their original ownership; the source record does not establish a new licence for them.

To keep the site small enough to upload and quick to load, the large case-study images were optimised:

- They were scaled down proportionally to 1600px wide, or 800px wide for the Air New Zealand showcase screens, which are displayed at 200px.
- Every image that was still over 1 MB was converted from PNG to JPEG (quality 82). Transparent areas were filled with white, which matches the page background, so they look the same on the site.

The original full-resolution exports are not part of this folder.
