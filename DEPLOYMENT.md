# Deployment Notes

## Local commands

```bash
npm install
npm run dev
npm run build
npm run start
```

## GitHub + Vercel workflow

```bash
git init
git add .
git commit -m "init phys-worldbench website"
git branch -M main
git remote add origin <your-github-repo-url>
git push -u origin main
```

Then open Vercel and import the GitHub repository.

## Large assets

Do not commit many generated videos or datasets into this repository.

Use one of:

- Hugging Face Dataset
- school/lab server
- Aliyun OSS
- Tencent COS
- AWS S3
- Cloudflare R2

Then link external assets from the website.

## Submission system roadmap

Current:

- official results only;
- no public external submission;
- no backend;
- no database.

Future:

- submission form through Google Form / GitHub Issue first;
- official manual verification;
- only then consider FastAPI + database + evaluation queue.
