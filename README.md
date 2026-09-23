# H&H Resources — Field Reports, revision 2

An HTML/CSS/JavaScript PWA demonstration with switchable Owner and Supervisor workspaces. The application has a production-style presentation; it is not a production backend or a secure multi-user system.

## Start

This package contains the complete modular source and all image assets. No npm install or build step is required. Extract it into a folder and serve that folder as static files. For a local preview:

```sh
python3 -m http.server 8080
```

Open localhost on port 8080. For a hosted PWA, serve the package root over HTTPS, with `index.html`, the manifest, the service worker and asset paths intact. A separate standalone HTML version embeds the same source and photographs for an immediate browser preview; that version does not register a service worker.

The existing H&H marketing website has not been changed or deployed by this update.

## Revision 2 interface

- Overview contains only Projects at a glance, Latest activity and Review, plus the page heading and principal action. The four statistics, featured-project banner, explanatory workflow and instruction panels are removed.
- A project card is one complete link. Its image, text and empty card space all open the project. Overview table rows are also clickable and keyboard accessible.
- Every project has only Overview and Photos tabs. Overview contains Project brief, Timeline, Recent activity, Scheduled prompt, Report readiness and Assigned supervisors. Caption guidance remains editable in project settings, not displayed as an instructional block in the overview.
- Tasks and recurring remarks are removed from the interface, navigation, source handlers and seed data. The update migrates the old workspace schema without resetting projects, supervisors, uploaded photographs, edited captions or saved report snapshots.
- Tutorial subtitles, demonstration badges, explanatory notices, help tours and the sample-upload shortcut are removed. Field labels, project content, photograph captions, useful validation messages and destructive-action confirmations remain.
- Reports opens directly to saved reports. It has search, project filtering, exported-from and exported-to date filters, chronological sorting and eight-row pagination. Each report supports preview, PDF download and deletion.
- Create report is available in each project's Report readiness section and Photos tab. Creation opens a separate page, not an additional project tab or a builder inside the Reports landing page. A successful export returns to the archive, with filters reset to show the new entry.
- Owner and Supervisor view switching remains at the top. Supervisors see assigned projects and their own photo submissions. Photo upload, caption drafting, review, clarification, approval and supervisor management remain available.

## Navigation

Application pages and project tabs write real browser-history entries. Browser Back/Forward and an in-app Back button navigate between those entries. Search and archive filters are retained when returning from a detail page. Report-composer values are preserved in the current navigation session.

Opening a dialog adds a history entry, so Back closes the dialog before leaving its page. Forward deliberately does not reopen a stale editor or restore unsaved form inputs. Direct project and report links have an in-app parent-page fallback when there is no earlier application history.

URLs use hash routes, so static hosting does not need server rewrite rules. The role in the URL is part of the demonstration selector, not an authenticated identity.

## Source files

- `index.html`: hosted entry point.
- `styles.css`: responsive interface styles.
- `seed.js`: sample project records, supervisors, photo metadata and initial saved reports.
- `app.js`: routing, local data, rendering, forms, upload/review flows and PDF writer.
- `manifest.webmanifest`, `sw.js`, `icons/`: installable-app metadata and offline app shell.
- `assets/`: H&H logo and the 36 photographs already included in the previous package.
- `TEST_NOTES.md`, `qa-results.json`: automated checks and testing limitations.

## Data and migration

The browser attempts to save its workspace to IndexedDB. The existing database key is retained so an update at the same browser origin can migrate the previous demonstration workspace. LocalStorage is a fallback; unavailable or full storage produces an explicit warning. Data is not uploaded or synchronised between devices. Moving the site to a different origin does not transfer its local database.

A fresh workspace includes two illustrative saved reports to populate the archive. Existing users' report archives are preserved instead of being replaced with these seed entries. Previous report snapshots keep their original saved wording; migration does not rewrite a previously exported report's content.

The service-worker cache version has been advanced to revision 2. An existing installed copy may need to be closed and reopened or refreshed after the updated worker activates. Hosting and installed-device update behaviour still require deployment testing.

## What remains simulated

This is still a local demonstration, even though instructional labels have been removed from the screens:

- The role selector and project filtering are not authentication or backend authorisation. Do not deploy this demonstration as a confidential client/staff portal.
- AI captions are generated from contextual templates, selected work stages, supplied sample captions and supervisor notes. Images are not sent to an AI model, and no actual image-recognition service is connected.
- Prompt buttons create local inbox entries. The application calculates scheduled prompt times, but no scheduler, email, WhatsApp, web-push delivery or background notification service runs when the app is closed.
- There is no shared database, object storage, login, invitation service, audit-grade record, server-side PDF renderer or cross-device sync.
- Uploaded photos, edits and reports can be lost if browser storage is cleared. Production use requires authenticated APIs, server-side project access checks, durable photo storage, backups, a scheduler and a real AI integration with owner review.

## Reports and sample provenance

The photographs, original work-stage titles and H&H logo were retained from the supplied `Progress Report for SACPS(1).pdf` through the previous demo package. The supplied report identifies St Anthony's Canossian Primary School. Other sample projects, supervisor identities and contact details, relative project dates, simulated photo submission dates, approvals and initial archive entries are illustrative data, not a verified H&H business record. Visible timestamps inside the original images are unchanged.

A PDF contains a cover and four numbered photographs per subsequent page. Only photographs with approved, nonempty captions are included. Export saves an independent snapshot; later caption edits do not alter that snapshot. The preview and download use the same page-rendering code. PDF pages are raster images, so their text is not selectable.

Demonstration notices have been removed from the PDF artwork along with the other presentation labels. Seeded reports and simulated approvals must not be treated as verified construction records, completion certificates or actual client payment claims. Validate the actual photos, dates, scope and approvals before using this layout in a real reporting system.

## Testing

See `TEST_NOTES.md` for the exact coverage. The included automated results cover the browser-based interface, history navigation, editing and export. Actual PWA installation, hosted service-worker activation, real device-camera capture, local-database persistence across browser restarts, and browser-specific behaviour still need testing on the deployment environment and physical phones.
