# Anonymous supplementary video results

This repository contains the supplementary website and videos for an anonymous submission.

The website is in `docs/`; its video files are in `media/`. The review website provides synchronized comparisons of the base model, SFT, Astrolabe, and OPSD-V, together with cache diagnostics and ablations.

Videos retain their original encoded image streams, resolution, frame rate, and duration. Additional examples are selected for content diversity; all four methods are retained for each selected example. Evaluation metrics are computed over the complete benchmark protocol described on the website.

The media scripts transport the original encoded video samples in fragmented MP4 without re-encoding. The website decodes them into local video URLs to start playback earlier and support synchronized seeking under the anonymous host's sandbox.
