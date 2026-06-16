# Phys-WorldBench Next.js Website Template

This is a ready-to-edit Next.js project page and official-results leaderboard for **Phys-WorldBench**.

It is designed for the current stage where:

- the paper/project page needs to look like a serious benchmark website;
- the dataset is not public yet;
- public submission is not open yet;
- the leaderboard should report official paper results only.

## 1. Local development

Install Node.js first, then run:

```bash
npm install
npm run dev
```

Open:

```text
http://localhost:3000
```

## 2. Project structure

```text
app/
  page.jsx                 # Home page
  benchmark/page.jsx       # Benchmark framework
  leaderboard/page.jsx     # Interactive leaderboard
  dataset/page.jsx         # Dataset coming soon page
  submission/page.jsx      # Submission not open page
  citation/page.jsx        # BibTeX page
components/
  LeaderboardExplorer.jsx  # Searchable/sortable leaderboard
  Navbar.jsx
  Footer.jsx
  SectionHeader.jsx
  StatCard.jsx
data/
  leaderboard.js           # All leaderboard data
public/
  figures/                 # Replace placeholder SVGs with real figures
  videos/                  # Add small demo videos only
```

## 3. What you should edit first

### Author and paper links

Edit `app/page.jsx` and replace the placeholder buttons:

```jsx
<a href="#">Paper Coming Soon</a>
<Link href="/dataset">Dataset Coming Soon</Link>
```

### Figures

Replace:

```text
public/figures/teaser.svg
public/figures/three-level.svg
public/figures/atomic-space.svg
```

with your real PNG/SVG exports. If you change the filenames, update the paths in `app/page.jsx` and `app/benchmark/page.jsx`.

### Leaderboard results

Edit:

```text
data/leaderboard.js
```

The leaderboard supports:

- tab switching;
- search;
- column sorting;
- Level-1, Level-2, Level-3, and skill breakdown tracks.

## 4. Deployment on Vercel

Recommended deployment path:

1. Create a GitHub repository.
2. Push this project.
3. Import the repository in Vercel.
4. Deploy.

Every future `git push` will trigger a new deployment automatically.

## 5. Why no backend yet?

The current benchmark site should not include an automatic submission backend because the dataset and evaluation scripts are not public yet. Keep public submission closed until the official release plan is clear.

Recommended current architecture:

```text
Next.js website on Vercel
+ static JSON/JS leaderboard data
+ small figures/videos in public/
+ large dataset/videos on Hugging Face Dataset or object storage later
```

Only add FastAPI/PostgreSQL/Redis/GPU workers later if you need automatic external submissions and online evaluation.
