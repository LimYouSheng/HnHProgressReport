# H&H Resources — Field Reports Demo

A standalone, front-end demonstration of H&H's photographic progress-reporting workflow.

## Open the demo

For the quickest preview, open the separately supplied **HNH_Field_Reports_Demo.html** in your browser. That file contains the interface, code, logo and all 36 sample photos; there are no CDN or network dependencies. The standalone file is not itself an installable PWA.

For the PWA package, extract this ZIP, open a terminal in the extracted folder, and run:

```sh
python3 -m http.server 8080
```

Then open `http://localhost:8080` in the browser on that computer. No npm install or build is required. To use it on a phone as a remotely served PWA, host this directory over HTTPS. A phone's `localhost` refers to that phone, not your computer.

On a supporting Android/desktop browser, use Install app / Add to Home screen. On iPhone/iPad, use Safari's Share → Add to Home Screen. The app's Install button also explains the steps. Physical-device installation is not certified by this demo.

Do not replace the existing H&H public website with this package. It is a separate demonstration app and has no real authentication. Use a separate test location. The HTML contains noindex/nofollow metadata, but that is not access control.

## Try the complete workflow

1. In **Owner**, create a project: enter its scope and caption instructions, start/target dates, tagged supervisors, prompt frequency/time and minimum photos. Add tasks or remarks inside the project.
2. Use **Timeline & prompts → Simulate scheduled prompt** or **Prompt supervisors now** to create demo inbox entries for the tagged, active supervisors.
3. Switch to **Supervisor** at the top. Select Daniel Tan for the SACPS project, or choose another demo supervisor to see assignment-based filtering. Open Upload photos, select local JPEG/PNG/WebP images, or use **4 SACPS sample photos**. Add a work stage and site notes, then submit.
4. Switch back to **Owner → Caption review**. Generate any missing draft captions, edit the commentary, request clarification where needed, or select reviewed photos and approve them together.
5. Open **Reports**, choose a project and reporting period, inspect the preview, then **Export PDF report**. Only approved captions are included. Export history preserves a snapshot and permits downloading it again.

The workspace starts with 3 projects, 4 supervisors and 36 SACPS photos: 20 approved, 12 needing review and 4 needing captions. Seed dates are relative to the date the workspace is first opened.

## Working functionality

Owner project creation/editing; project status; description and caption-context fields; supervisor assignments; timeline validation; daily, weekday, weekly and every-N-days photo prompt settings; minimum-photo requirements; one-off/daily/weekly tasks and remarks; recurring task completion; supervisor CRUD; deactivation; safe deletion; local photo ingestion and resizing; file validation; per-photo and update-level notes; caption editing and regeneration; bulk approvals with confirmation; clarification/resubmission; report date filtering; A4 preview; actual PDF downloads; immutable exported-caption snapshots; local reset; responsive desktop/mobile navigation; modal focus handling.

A supervisor with existing photo records cannot be deleted in the UI; deactivate them to retain attribution. A profile without photo records can be deleted. Editing an approved caption removes its approval.

## Deliberate demo boundaries

- **Not real authentication.** Owner/supervisor roles and project restrictions are browser-side demonstrations. The source includes the entire sample workspace. A production server must authenticate users and enforce authorization for every operation.
- **Not real AI image recognition.** Source-photo captions are prepared examples grounded in the supplied report. New-photo captions use deterministic templates based on project scope, selected work stage and site notes. The free-text caption instructions are stored as future AI context, not interpreted by a language model. Never treat a generated caption as verification of what an uploaded image contains.
- **No real notifications or unattended scheduler.** Frequency settings and next-prompt calculations work. Prompt buttons create local inbox entries, including applicable owner remarks. There is no email, WhatsApp or push delivery, and no background job runs when the app is closed.
- **Local data only.** IndexedDB is used, with localStorage as a fallback. No data is sent to a server, and different devices do not share updates. When storage is unavailable, the interface explicitly displays “Session only”. Browser data clearing or Reset demo removes the local workspace. This is not a backup system.
- **Not a payment claim.** Every exported PDF is marked DEMONSTRATION / NOT FOR PAYMENT SUBMISSION. Demo approval is not inspection, certification, valuation, client acceptance or entitlement to payment.
- **PDF implementation.** The app renders the preview artwork into A4 PDF pages: a cover plus four numbered photographs per page. Photos are fitted without stretching or cropping. The PDF is raster-based so Unicode text is preserved visually, but captions are not selectable/searchable. Production can replace this with a vector/text report service.
- **No production integrations.** No cloud storage, shared database, audit security, accounts, API credentials or live H&H website changes are included. Do not use sensitive staff or client information in a publicly accessible demo.

## Sample provenance

The logo, all 36 SACPS photographs and the original work-stage titles are extracted from the user-provided **Progress Report for SACPS(1).pdf** (10 pages). Its cover identifies **St Anthony's Canossian Primary School**. The sample follows the source's four-numbered-photographs-per-page layout. The reference labels include site hoarding, access protection, turf removal/disposal, base preparation, turf and shockpad installation, joining, gamelines, infill, water tap points, and making good of the accessway.

Supervisor identities and contact details, schedules, upload dates and approval decisions are fictional demonstration data. The Community Sports Court and Landscape Improvement Works are fictional examples, not claims about H&H's completed projects. Original timestamps and other visible content inside the supplied photographs are not altered; they can differ from simulated submission dates.

Use the source photographs only with appropriate permission. No font files, stock-photo dependencies or third-party JavaScript libraries are bundled.

## Files

- `index.html`: deployable PWA entry point.
- `styles.css`: responsive interface styles.
- `app.js`: UI, local persistence, workflow actions, upload processing, previews and PDF generator.
- `seed.js`: source labels, prepared sample captions and initial demonstration data.
- `manifest.webmanifest`: app name, display settings and install icons.
- `sw.js`: same-origin offline shell/sample-image cache. No push or background sync.
- `assets/logo.jpg`, `assets/photos/01.jpg` through `36.jpg`: assets from the supplied report.
- `icons/`: 180px, 192px and 512px app icons derived from the source emblem.
- `TEST_NOTES.md`: validation results and test boundaries.

Offline access requires one successful hosted visit and successful service-worker installation. On future code updates, change the CACHE version in sw.js so previously installed copies fetch the new app resources. Keep the relative URLs intact to deploy under a subdirectory.

Technical basis: MDN, “Making PWAs installable” and “Using Service Workers” (consulted 23 September 2026). The installable package requires HTTPS or a localhost/loopback development origin. It must not be presented as installable merely because a local HTML file can open.
