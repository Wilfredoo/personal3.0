# The Exploration Map: plan

A map that gives you *less* information than usual. The world starts covered in fog.
Wherever you go, it lifts, forever. You're a little **soulleaf** (part soul, part leaf),
not a GPS dot. Your paths are traced: today's is bold, yesterday's softer, anything older
a thin thread.

## The one hard constraint: "whether the app is open or not"

Lifting the fog **in the background** is the heart of the idea, and it decides the tech:

| Option | Background location on iPhone? | Can be built from an iPad only? |
|---|---|---|
| Web app / PWA (Safari, "Add to Home Screen") | **No.** iOS stops web pages from tracking when they're not on screen | Yes |
| Native app via **Expo (React Native) + EAS Build** | **Yes** (`expo-location` background updates, "significant location change") | **Yes.** Builds run in Expo's cloud and install through TestFlight. Needs an Apple Developer account ($99/yr) |
| Capacitor wrapping the web app | Yes, with a plugin | Needs Xcode (a Mac or a cloud macOS CI). More friction |

**Decision:** build in two steps.

1. **Phase 1: web prototype (done in this branch).** Validates the look, the feel, the fog
   and the trail rules. It runs on the iPad today, with zero setup, at
   `wilfredocasas.com/exploration-map/`.
2. **Phase 2: native shell with Expo.** A thin native app that records location in the
   background and hosts the same map (as a WebView at first, so none of the Phase 1 work is
   wasted). The native side only collects points; the map code stays the same.

## Phase 1: web prototype ✅ (this commit)

Location: `public/exploration-map/` (plain HTML/JS, no build step, deployed by the existing
Netlify site).

- [x] Foggy world, textured "cloud" fog; the map shows faintly through it
- [x] Fog lifts in a ~50 m radius wherever you go, stored permanently on the device
- [x] Gaps in tracking up to 30 min / 50 km are filled in (a bus ride or a short drive
      clears the road). Longer jumps, such as flights, don't clear the land underneath
- [x] Trails: today (bold, glowing), yesterday (medium), 2+ days ago (thin line)
- [x] Soulleaf avatar that floats and breathes
- [x] Minimal map (OpenFreeMap "Positron", POIs and house numbers removed),
      Cartogram-like
- [x] "Be born" onboarding: the birth date is the first launch, shown on your profile
- [x] Profile sheet: birth date, area discovered, distance, days exploring
- [x] **Time spent per place** (~180 m cells) is already recorded; this becomes the
      "where they've been the most" heatmap later
- [x] Import GPX (bring in past trips from other tracking apps)
- [x] Backup / restore (JSON), because data lives only on the device
- [x] Wander mode: tap the map to walk there, to test the app without leaving home
- [x] Keep-screen-awake toggle for walks; installable to the Home Screen; works offline

Known limits: the fog lifts only while the page is open and on screen. iOS may delete website
data that isn't added to the Home Screen after 7 days without use, so **add it to the Home
Screen** and save backups.

## Phase 2: native app (background discovery)

1. Create an Expo project (`exploration-map-app/`) from the iPad. Claude Code on the web can
   write all of it.
2. `expo-location` + `expo-task-manager`: `startLocationUpdatesAsync` with
   `activityType: Fitness`, `deferredUpdatesDistance` ~ 25 m,
   `pausesUpdatesAutomatically`, plus *significant location changes* as a battery-friendly
   fallback. Save points to SQLite.
3. Show the Phase 1 map in a `react-native-webview`, and inject stored points on launch and on
   foreground (`window.explorationMap.world.importTrack(points)`).
4. `eas build -p ios` in the cloud, then `eas submit` to TestFlight, then install on the iPad
   or iPhone. (An Apple Developer account is required. The iPad can run the builds from
   expo.dev.)
5. Later: switch to a fully native map (MapLibre React Native) if the WebView is too slow.

Location permission copy should explain the "Always" permission honestly: *"So the fog lifts
wherever you go, even when the app is closed. Your paths never leave your phone unless you
choose to share."*

## Phase 3: accounts & other explorers

- Backend: **Supabase** (Postgres + PostGIS + auth + row-level security). Free tier to start.
- Sign-up date = birth date (move the local one up on first sign-in).
- **Visibility toggle** (off by default). When on, share only a *coarse* position
  (~500 m cell, delayed a few minutes). Never the exact spot.
- "Nearby" = same ~5 km area (to be tuned). You can open nearby explorers' profiles.
- **Profile = their world**: a snapshot of their discovered map rendered as a **dwell
  heatmap** (time spent per cell, which is already collected), so slow travel shows up
  bright and quick passes stay faint. This rewards depth, not box-ticking.
- Privacy: blur or hide the home area (the cell with the most night-time dwell) by
  default. Allow blocking, and let people hide their profile entirely.

## Later ideas

- Customise your soulleaf (colours, shapes, accessories).
- Draw your own symbols or import them (SVG/PNG) and pin them to places, so your world really
  becomes *your* world.
- Globe view at low zoom (MapLibre v5 supports it).
- Gentle moments: "first time in a new country", "you returned to a place after a year".
- Import Google Maps Timeline / Apple exports to reveal your past.

## Working from an iPad

- Code: Claude Code on the web (this), pushing to GitHub.
- Deploy: Netlify builds automatically from the branch/PR (deploy previews), so open the
  preview URL in Safari on the iPad.
- Native (Phase 2): Expo EAS Build in the cloud, then TestFlight.
