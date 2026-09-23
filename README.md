# Anonymous supplementary video results

This repository contains the supplementary website and 201 original-quality comparison videos for an anonymous submission. The website provides synchronized comparisons of the base model, SFT, Astrolabe, and OPSD-V, together with cache diagnostics, ablations, and 7 paired comparisons with Self Gradient Forcing.

The website is in `docs/`. The 48 featured videos and 14 Self Gradient Forcing comparison videos are MP4 files in `docs/assets/videos/featured/` and `docs/assets/videos/gradient-comparison/`, served directly by GitHub Pages. Their headers are arranged for progressive playback without re-encoding. The remaining 139 videos use the classic-script fragmented-MP4 transport in `media/` for compatibility with the anonymous host. All comparison video samples, resolutions, frame rates, and source durations are preserved. The vintage SUV comparison displays only the first 20 seconds, as indicated on the page.

A 90-second Video Overview appears above the qualitative comparisons. Its separate 1080p H.264 web copy retains the original soundtrack and is served by GitHub Pages from `docs/assets/videos/demo/`. It starts only after the viewer clicks Play.

Only the current visible player prepares media in advance. Explicit playback and seeking take priority; inactive players stop background loading. Evaluation metrics use the complete benchmark protocol described on the website.
