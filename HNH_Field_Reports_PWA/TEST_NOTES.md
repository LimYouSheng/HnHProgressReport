# Validation notes

Validated 23 September 2026 using headless Chromium through Playwright.

## Passed workflow checks

1. Initial owner workspace, 3 projects, 36 source photographs, 20 pre-approved captions
2. Generate missing captions and bulk approve only review-ready photographs
3. Editing an approved caption invalidates approval until the owner approves again
4. Report preview and actual downloadable 10-page A4 PDF with approved-only snapshot
5. Project creation, date validation, supervisor tagging, every-N-days cadence and mobile form
6. Recurring task creation and scheduled prompt simulation to tagged supervisors
7. Supervisor create, read, update, deactivate, reactivate and safe deletion
8. Deleting supervisors with submitted photographs is blocked; deactivation preserves history
9. Supervisor UI isolation and completing a recurring task advances its next occurrence
10. Real file selection, resizing, local submission, project-context caption and escaped input
11. Owner requests clarification; supervisor updates the note and resubmits the caption
12. Four-photo sample upload, minimum-photo prompt fulfillment and immutable previous report snapshot
13. Unsupported image files are rejected without corrupting the update
14. 40 responsive view checks: all owner/supervisor pages at 360, 390, 768 and 1440px
15. Demo reset restores sample workspace; no uncaught JavaScript errors during tested flows

## Additional artifact checks

JavaScript syntax was checked with Node. The PDF produced by the actual export button was downloaded and opened with PyMuPDF: 10 A4 pages, a cover and 36 photographs. Representative cover, interior and final pages were rendered for visual inspection. All declared cache/manifest assets are included. The standalone HTML bundles the code and source images without external requests.

## Not verified

The test browser environment disallows URL navigation under its enterprise policy. The UI tests therefore render the fully bundled HTML in an isolated blank document; the source files were not served to that browser from a real origin. Real-origin IndexedDB persistence across reloads, service-worker activation/offline reload, browser installation prompts, physical-device installation, native camera capture and Safari-specific behavior remain unverified. No browser policy was changed. These limits are not claims that those features failed in a normal deployment. There is no real backend, AI provider or notification transport to test.
