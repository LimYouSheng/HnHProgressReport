# Revision 3 test notes

Result: **220 passed, 0 failed.** No uncaught JavaScript errors were observed.

## Popup layout checks — 170 assertions

Seventeen popup scenarios were measured at each of ten viewport sizes:
320 × 568, 360 × 800, 390 × 844, 430 × 932, 600 × 900,
768 × 1024, 1024 × 768, 1440 × 1000, 844 × 390 and 390 × 380.

The scenarios cover project creation/editing, supervisor creation/editing,
photo previews and edits for both roles, photo uploads with and without pending
captions, caption change requests/resubmission, batch approval, regeneration,
report deletion, supervisor deactivation/protected deletion and very long titles.

Checks assert that the dialog fits the viewport, internal form/grid containers do
not overflow horizontally, fields and buttons fit the dialog width, footer
controls fit the available height and the content body uses vertical scrolling.
The short-height viewports exercise constrained-height layout; they are not a
substitute for physical on-screen keyboard tests.

## Workflow and regression checks — 50 assertions

Coverage includes per-photo caption inputs; retention while adding/removing
files; real file-input ingestion and resizing; direct supervisor caption submission;
blank-caption handling; project labels; editing and project reassignment; assigned-
project and own-photo restrictions; owner generation; approval and approval
invalidation; unchanged-save behaviour; caption change requests and resubmission;
preview refresh; report-snapshot contents and immutability; popup Back/Forward;
project and supervisor form submission; caption migration and unchanged archives.

Generation was verified as an explicit local owner action, not a real AI request.
No automatic generation occurs during upload or supervisor caption resubmission.

The access tests validate the demo's UI/action guards only. Client-side state and
role switching do not provide production authentication or authorisation.

## Visual inspection

Add Project, Upload Photos with captions, Edit Photo and owner review were
rendered at mobile width. The desktop Add Project form was also captured.
The dialogs use one-column controls on phones, readable caption inputs and fixed
header/footer controls around an independently scrolling content body.

## Test environment and remaining device acceptance

Playwright with system Chromium, using the embedded standalone HTML in an inline
browser page and emulated viewport/touch settings. Package JavaScript syntax was
checked with Node. The same CSS and JavaScript are embedded into the standalone
HTML and included as modular source in the PWA ZIP.

Inline test pages have an opaque origin. The normal app storage-unavailable
warning was expected in that harness; IndexedDB persistence, hosted service-worker
activation, offline reload and installed-app upgrades were not verified here.
The existing database/save logic is retained, apart from schema migration.

Physical PWA installation, actual Android/iOS keyboards, native camera capture,
OS Back gestures, Safari/WebKit and cross-browser storage still require device
testing. The PDF renderer and export implementation are unchanged; this revision
verified the selected report snapshots, not a fresh exported PDF visual regression.

See `qa-results.json` for every assertion and the test result.
