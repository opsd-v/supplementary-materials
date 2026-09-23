# Anonymous supplementary video results

This repository contains the supplementary website and 187 original-quality videos for an anonymous submission. The website provides synchronized comparisons of the base model, SFT, Astrolabe, and OPSD-V, together with cache diagnostics and ablations.

The website is in `docs/`. The 48 featured videos are original MP4 files in `docs/assets/videos/featured/`, served directly by GitHub Pages. Their headers are arranged for progressive playback without re-encoding. The remaining 139 videos use the classic-script fragmented-MP4 transport in `media/` for compatibility with the anonymous host. All encoded video samples, resolutions, frame rates, and durations are preserved.

Only the current visible comparison prepares media in advance. Explicit playback and seeking take priority; inactive comparisons stop background loading. Evaluation metrics use the complete benchmark protocol described on the website.
