# Crescent Bioengineerings – Website

Static website (HTML / CSS / JS). No build step. Ready for GitHub Pages.

## Publish on GitHub Pages (free)
1. Create a free account at github.com and a new **public** repository (e.g. `crescent-bioengineerings`).
2. Unzip this folder. In the repository click **Add file → Upload files** and drag in everything inside the folder
   (`index.html`, `style.css`, `script.js`, `.nojekyll`, and the `images` folder). Click **Commit changes**.
   `index.html` must be at the top level of the repository, not inside another folder.
3. Go to **Settings → Pages** → Source: *Deploy from a branch* → Branch: `main`, folder `/ (root)` → **Save**.
4. After 1–2 minutes the site is live at `https://<your-username>.github.io/<repository-name>/`.

## Things you can edit (top of `script.js`)
- `WA_NUMBER` – WhatsApp number (country code + number, no `+` or spaces). Currently 923030148773.
- `RND_STATS` – real R&D numbers, e.g. `{ doctors: 12, engineers: 8, universities: 3 }`. Left empty (`null`) so nothing is invented.
- `RND_PARTNERS` – names of partner universities / research centers, e.g. `["University of X"]`. Shown as chips when filled.
- `PRODUCTS` – every product (name, description, features, specifications, images).

## Images (`images/`)
Replace any image with a better one using the **same file name**:
`lithobuster.jpg`, `lithobuster-real.jpg`, `soundless-lithobuster.jpg`, `zm2-handpiece.jpg`, `light-source.jpg`,
`light-source-2.jpg`, `light-source-3.jpg`, `camera.jpg`, `monitor.jpg`, `trolley.jpg`, `uroflow-meter.jpg`, `logo.png`.

Diathermy has no photo yet. To add one: save it as `images/diathermy.jpg`, then in `script.js` find the
`diathermy` product and replace `images: [], icon: "dia"` with
`images: [IMG("images/diathermy.jpg", 1200, 900, "Diathermy machine", "Studio image")]`
(use the real width and height of your file).
