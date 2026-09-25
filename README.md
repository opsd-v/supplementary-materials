# Anonymous supplementary video results

This repository contains the supplementary website and 216 original-quality comparison videos for an anonymous submission. The website provides synchronized comparisons of the base model, SFT, Astrolabe, and OPSD-V, together with cache diagnostics, ablations, and 7 paired comparisons with Self Gradient Forcing.

The website is in `docs/`. The 48 featured videos and 14 Self Gradient Forcing comparison videos are MP4 files in `docs/assets/videos/featured/` and `docs/assets/videos/gradient-comparison/`, served directly by GitHub Pages. Their headers are arranged for progressive playback without re-encoding. The remaining 139 videos use the classic-script fragmented-MP4 transport in `media/` for compatibility with the anonymous host. These previously published videos retain their encoded samples, resolutions, frame rates, and source durations. The vintage SUV comparison displays only the first 20 seconds, as indicated on the page.

An additional training-free comparison shows 5 matched examples under three cache policies: generated history, real older history with the latest generated chunk retained, and real history including the latest chunk. These 15 MP4 files are served directly by GitHub Pages from `docs/assets/videos/cache-latest-gt/`. They show the first 30 seconds of the matched rollouts, with the motorcyclist example extended to 45 seconds. The displayed excerpts retain their original encoded samples, resolution, and frame rate without re-encoding. Model parameters, the real first chunk, text condition, noise, and the four-step sampler are fixed within each comparison; no current or future real-video chunk is exposed for prediction.

A 90-second Video Overview appears above the qualitative comparisons. Its separate 1080p H.264 web copy retains the original soundtrack and is served by GitHub Pages from `docs/assets/videos/demo/`. It starts only after the viewer clicks Play.

Only the current visible player prepares media in advance. Explicit playback and seeking take priority; inactive players stop background loading. Evaluation metrics use the complete benchmark protocol described on the website.
