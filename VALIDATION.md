# Validation record

Checked on 6 November 2026, after the homepage redesign and the new shared header and footer. This replaces the record of 15 October 2026.

## HTML5 and CSS

Checker: official Nu Html Checker (vnu), version 26.10.2 (f302f46), run locally from its macOS runtime image (the same version as the previous check).
Source: https://github.com/validator/validator

The eight HTML files and the two CSS files were checked locally. Both reports contained zero messages: no errors, warnings or informational findings. No files were uploaded to the online W3C service.

| File | Result | SHA-256 |
|---|---|---|
| `index.html` | Passed | `a0b7448eccddf415c1e300ac8d2fedaf32c2a1cd798f2c9dec40bd0ce212c929` |
| `project1_changi.html` | Passed | `f4539e1eb82c7d3dd30989cb7cea6c75952e18c1482fdefed9dad6df33b142c8` |
| `project2_air-new-zealand.html` | Passed | `f9a3b081637e87abed193bf88f2ca461faa65a0dc650daa7cacf199aa6092891` |
| `project3_moon-and-stars.html` | Passed | `4bb94c90062028455c2da86d9111c50d5584ace0614bbaabfb254783a1cbccc6` |
| `project4_nyu-shanghai.html` | Passed | `4b5cf97571f5c18da05a2e54f7c256ebe17196408128ab5e8c7763dd1027a2df` |
| `project5_mood-boost.html` | Passed | `4570d4b7eb760e884946c1b30f0d07614635f7d99505f140e5fa116a5eca5c8d` |
| `resume.html` | Passed | `5b49e4f82494511b74a289949d000f12a79a1c1821048de4ff7ed9f5c78e77c4` |
| `contact.html` | Passed | `086bd275ccd96898bc9b07c648f37cfcb6433fc2570fceaed7e0402b02b416e7` |
| `css/style.css` | Passed | `56e0b938b04b12cd2521c63540d8c860510cf493684741802aa494aa2acae1b8` |
| `css/home.css` | Passed | `8af0af9f2456e6bfcbb94d4ad4ae8fa4624acbbc453ba533fe25b7cdd0fb34cc` |

The Nu checker does not check JavaScript. `js/animations.js` (SHA-256 `913fd6776d68f0983a0945b1d5473bd41d55ce05989f74fa8a257ca99386969c`) was run on all eight pages in Chromium (the built-in browser of the Claude desktop app), served from a local web server: it reported no errors, and the checks below were made with it running.

The SHA-256 values identify the exact files that were checked. If a file is edited, run the checker again and update its row.

### Fixed before this check

The first run reported 14 errors in `project5_mood-boost.html` and 1 in `css/style.css`, all in code added after 15 October. They were fixed and everything was checked again:

- `project5_mood-boost.html`: spaces in nine image paths are now written as `%20`; a missing `</div>` in the Brand Identity section was added; the Relax Playlist bullet is now inside a `<ul>`; the invalid font weights `regular` and `medium` are now `400` and `500`; the `charset` meta tag was misspelt (`charest`) and is now correct.
- `css/style.css`: `.brand-grid` had `grid-template-columns: 1fr,1fr`, which is invalid. It is now `1fr`, the single column browsers were already showing.
- `project1_changi.html`: the Previous link pointed to `project5_mood boost.html`, which does not exist. It now goes to `project5_mood-boost.html`, and its empty thumbnail now shows the Mood Boost cover.

## Navigation and media

- Every local link, image, stylesheet, script, font and CSS `url()` path exists, with the same letter case as the file on disk (GitHub Pages is case-sensitive). Paths were compared with the folder listings, because the Mac's file system ignores letter case.
- Every in-page anchor target exists, including `#main-content`, `index.html#projects` and `#contact`.
- Every page's menu links to Home, Projects (`index.html#projects`), Resume (`resume.html`) and Contact (`contact.html`).
- Each HTML file has one main heading (`h1`), links to the shared stylesheet `css/style.css` and the shared script `js/animations.js`, and has no `<style>` element or inline script. The homepage also links `css/home.css`. `project5_mood-boost.html` also loads the Inter font from Google Fonts and has eight inline `style` attributes (its colour swatches and type-weight samples).
- All eight pages were rendered at 375px and 1440px viewport widths: no horizontal overflow, and every image on every page loaded (lazy-loaded images were loaded in full for the check). The only failed request was `/favicon.ico`, which the site does not have.
- With every animation and transition taken to its end state, every element on all eight pages has the same position and size (within 1px) as on the same page without the animation script, at both widths. The motion changes nothing in the final layout.
- The largest files are `media/changi-cover.jpg` (1.17 MB) and `media/mood and boost.png` (1.16 MB); every other file is under 1 MB. All are far within GitHub's 25 MB browser-upload limit. The whole site is about 21 MB in 86 files, not counting `.DS_Store` files and the `_backup/` folder, which holds old versions and is not part of the site.

Deployment to the course `www` folder and the GitHub repository remain separate submission steps.
