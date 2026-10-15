# Validation record

Checked on 15 October 2026.

## HTML5 and CSS

Checker: official Nu Html Checker (vnu), version 26.10.2 (f302f46), run locally from its macOS runtime image.
Source: https://github.com/validator/validator

The seven HTML files and the shared CSS file were checked locally. Both reports contained zero messages: no errors, warnings or informational findings. No files were uploaded to the online W3C service.

| File | Result | SHA-256 |
|---|---|---|
| `index.html` | Passed | `15d8a9739a3207b48ce4ae8a8397e5527d68e4cfe3c8d65476c585f6df623333` |
| `project1_changi.html` | Passed | `dcd0ac0fa950c11d4b1c73d71e13e72e95112d926f6cead2073e7f9a9070dd4e` |
| `project2_air-new-zealand.html` | Passed | `bf159d16aa5f6ddbe7cd186cf86f48e36b7119d68d92b262dd284016ce11e3a9` |
| `project3_moon-and-stars.html` | Passed | `714144e757293e22455c60290f665818b05e5a061097483cd55653e76fa93e6d` |
| `project4_nyu-shanghai.html` | Passed | `6ff90f54bc02b83d9665fc7b5237528ca709201b1aa34a6b80dc8acf4b75eb6b` |
| `resume.html` | Passed | `985dbbb18a2a5c346ace7761fc117963fc43dcf8a72660d791a4d6f100e38432` |
| `contact.html` | Passed | `da3bd30dbe22acc94a2027d449a7ad66323894c3519f97f20d489aeecb282fe9` |
| `css/style.css` | Passed | `351929dcb0fc8b21be8960152837eda3c33056c69285a0935e9770fd03a51386` |

The Nu checker does not check JavaScript. `js/animations.js` (SHA-256 `1a28355b293677ad9c0cb7b449dbe85993841784a8edcc824ca03d127de9059c`) was run in Chrome on all seven pages instead: it reported no errors, and the checks below were made with it running.

The SHA-256 values identify the exact files that were checked. If a file is edited, run the checker again and update its row.

## Navigation and media

- Every local link, image, stylesheet, script and font path exists, with the same letter case as the file on disk (GitHub Pages is case-sensitive).
- Every in-page anchor target exists, including `index.html#projects` and `#contact`.
- Every page's menu links to Home, Projects, Resume (`resume.html`) and Contact (`contact.html`).
- Each HTML file has one main heading (`h1`), links to the one shared stylesheet and the one shared script, and has no inline styles or inline scripts.
- All seven pages were rendered in Chrome at 375px and 1440px viewport widths: no horizontal overflow, and every image on every page loaded.
- With the animations finished, every element on all seven pages has the same position and size as on the same page without the animation script, at both widths. The motion changes nothing in the final layout.
- No file in the site is larger than 1 MB, so each one is within GitHub's 25 MB browser-upload limit. The whole site is about 13 MB in 70 files.

Deployment to the course `www` folder and the GitHub repository remain separate submission steps.
