# GitHub Contributions Setup

Your GitHub contributions heatmap is now working! The app uses two methods to fetch your GitHub contribution data:

## Method 1: HTML Scraping (Currently Active)
The app scrapes your public GitHub profile to extract contribution data. This method:
- ✅ Works immediately with no setup required
- ✅ Shows contribution levels (0-4)
- ⚠️ Doesn't show exact contribution counts (estimates: level × 3)
- ⚠️ May break if GitHub changes their HTML structure

## Method 2: GitHub GraphQL API (Recommended - Optional)
For better data quality and exact contribution counts, you can set up a GitHub personal access token:

### Setup Steps:

1. **Generate a GitHub Personal Access Token:**
   - Go to https://github.com/settings/tokens
   - Click "Generate new token (classic)"
   - Give it a name like "Portfolio Contributions"
   - Select scopes: **Only `read:user`** (or leave all unchecked for public data)
   - Click "Generate token"
   - Copy the token (you won't see it again!)

2. **Add the token to your project:**
   - Create a `.env.local` file in your project root (or `.env`)
   - Add this line:
     ```
     GITHUB_TOKEN=your_token_here
     ```

3. **Restart your dev server:**
   ```bash
   npm run dev
   ```

### Benefits of using GraphQL API:
- ✅ Exact contribution counts
- ✅ More reliable (official API)
- ✅ Proper contribution levels from GitHub
- ✅ Better performance

## Current Status
Your heatmap is working with **HTML scraping** and showing your contributions correctly! The GraphQL setup is optional but recommended for production.

## Troubleshooting

If contributions aren't showing:
1. Check the browser console for errors
2. Verify your GitHub username is correct in `GitGraph.tsx`
3. Check API response: visit `/api/github-contributions?username=AVAHC4`
4. Make sure you have public contributions on GitHub

## Files Modified
- `/src/app/api/github-contributions/route.ts` - API endpoint with dual fetch methods
- `/src/components/ui/github.tsx` - GitHub heatmap component
- `/src/app/(home)/components/GitGraph.tsx` - Component that displays the heatmap
