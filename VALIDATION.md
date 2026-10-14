# Validation record

Checked on 14 October 2026.

## HTML5 and CSS

Checker: official Nu Html Checker (vnu), version 26.10.2 (f302f46), run locally from its macOS runtime image.
Source: https://github.com/validator/validator

The five HTML files and the shared CSS file were checked locally. Both reports contained zero messages: no errors, warnings or informational findings. No files were uploaded to the online W3C service.

| File | Result | SHA-256 |
|---|---|---|
| `index.html` | Passed | `ac8eb4b131850e4328b70b0533d82f52dc9d68f3ee8a30b7ec68c380cb36f8c3` |
| `project1_changi.html` | Passed | `53f935f9e14c17ca19a0de3b0024beae5e3487c3efa1a84084274a642f1be5e5` |
| `project2_air-new-zealand.html` | Passed | `7a6b0c30b05a1b719022ed0fe85affb8b3b406e71548e94c5503d4636a40b430` |
| `project3_moon-and-stars.html` | Passed | `2b6be392ef37999718934d77469c10738c147e4a4106795609eee36e95f46571` |
| `project4_nyu-shanghai.html` | Passed | `8235a075726049ad40f526ae749e19167745c44e968e07b55d4757a7bf89863e` |
| `css/style.css` | Passed | `20b86b67fca84fbac7b8f5767d45e44f823d4feb45d7b384971297b0471c95d2` |

The SHA-256 values identify the exact files that were checked. If a file is edited, run the checker again and update its row.

## Navigation and media

- Every local link, image, stylesheet and font path exists, with the same letter case as the file on disk (GitHub Pages is case-sensitive).
- Every in-page anchor target exists, including `index.html#projects` and `#contact`.
- Each HTML file has one main heading (`h1`) and links to the one shared stylesheet; there are no inline styles or scripts.
- All five pages were rendered in Chrome at 375px and 1440px viewport widths: no horizontal overflow, and every image on every page loaded.
- No file in the site is larger than 1 MB, so each one is within GitHub's 25 MB browser-upload limit. The whole site is about 13 MB in 67 files.

Deployment to the course `www` folder and the GitHub repository remain separate submission steps.
