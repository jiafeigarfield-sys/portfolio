# Validation record

Checked on 15 October 2026.

## HTML5 and CSS

Checker: official Nu Html Checker (vnu), version 26.10.2 (f302f46), run locally from its macOS runtime image.
Source: https://github.com/validator/validator

The six HTML files and the shared CSS file were checked locally. Both reports contained zero messages: no errors, warnings or informational findings. No files were uploaded to the online W3C service.

| File | Result | SHA-256 |
|---|---|---|
| `index.html` | Passed | `6000d59e1a2205dde60ff84c918ff38eee311b3b8feb6567e4fb42b4d3fec3d1` |
| `project1_changi.html` | Passed | `9f942f8fbb5e0ad34a13d746ed0c41a104be3c15d9c6ab0cd2ba861b84d78cbf` |
| `project2_air-new-zealand.html` | Passed | `8ea695133c2b6366069b0a526bd90c50f9f1d7d33a368ed5084302c38def6608` |
| `project3_moon-and-stars.html` | Passed | `1190e3cb2a4996b18a0b133e8b66938823a5b9d8357ea82d4ff4d5fc66fe598a` |
| `project4_nyu-shanghai.html` | Passed | `e2a838e83d1e331de62ab20dca7a111963affcb754ae4efdef972f11ccfeb404` |
| `resume.html` | Passed | `638596ebd2c6df91403d57e6801a1cf3dfab5bb002c50e25a0bfaf5df5c90a31` |
| `css/style.css` | Passed | `a465d0460487b7cb75027c41894dbf8da4734affb041edc1421c64f7f20589df` |

The Nu checker does not check JavaScript. `js/animations.js` (SHA-256 `34dba50a42af4cda4786705c6aa8019fb0defad724a32cbb2fcfdb2c1e0c44f6`) was run in Chrome on all six pages instead: it reported no errors, and the checks below were made with it running.

The SHA-256 values identify the exact files that were checked. If a file is edited, run the checker again and update its row.

## Navigation and media

- Every local link, image, stylesheet, script and font path exists, with the same letter case as the file on disk (GitHub Pages is case-sensitive).
- Every in-page anchor target exists, including `index.html#projects` and `#contact`.
- Every page's menu links to Home, Projects, Resume and Contact.
- Each HTML file has one main heading (`h1`), links to the one shared stylesheet and the one shared script, and has no inline styles or inline scripts.
- All six pages were rendered in Chrome at 375px and 1440px viewport widths: no horizontal overflow, and every image on every page loaded.
- With the animations finished, every element on all six pages has the same position and size as on the same page without the animation script, at both widths. The motion changes nothing in the final layout.
- No file in the site is larger than 1 MB, so each one is within GitHub's 25 MB browser-upload limit. The whole site is about 13 MB in 69 files.

Deployment to the course `www` folder and the GitHub repository remain separate submission steps.
