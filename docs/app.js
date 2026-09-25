(function(){
"use strict";
const featuredSlugs = [
  "ll-mei-000013",
  "ll-mei-000016",
  "ll-movie-000115",
  "ll-movie-000009",
  "ll-mei-000022",
  "ll-movie-000068",
  "sf-mei-000010",
  "sf-movie-000002",
  "sf-movie-000011",
  "sf-movie-000076",
  "sf-mei-000075",
  "sf-mei-000078"
];
const cases = [
  {
    "slug": "ll-movie-000115",
    "id": "000115",
    "title": "Concert Stage Performance",
    "backbone": "LongLive",
    "benchmark": "MovieGenBench",
    "category": "dynamics",
    "featured": false,
    "prompt": "A vibrant concert stage scene in the style of a music video, featuring a woman in the spotlight, singing passionately. She stands confidently on the stage, microphone in hand, with a captivating expression on her face. The bright light behind her creates a dramatic silhouette, casting a warm glow over her. She wears a stylish, form-fitting black dress with intricate silver embroidery, emphasizing her graceful movements. The background features a blurred stage with colorful lights and banners advertising the event. A dynamic medium shot capturing the singer from a slightly elevated angle, highlighting her performance and the dramatic lighting effects.",
    "baseVideo": "assets/videos/ll-movie-000115-base.mp4",
    "oursVideo": "assets/videos/ll-movie-000115-opsdv.mp4",
    "basePoster": "assets/posters/ll-movie-000115-base.jpg",
    "oursPoster": "assets/posters/ll-movie-000115-opsdv.jpg",
    "sftVideo": "assets/videos/ll-movie-000115-sft.mp4",
    "sftPoster": "assets/posters/ll-movie-000115-sft.jpg",
    "rlVideo": "assets/videos/ll-movie-000115-rl.mp4",
    "rlPoster": "assets/posters/ll-movie-000115-rl.jpg"
  },
  {
    "slug": "sf-movie-000011",
    "id": "000011",
    "title": "70mm Eye Close-Up",
    "backbone": "Self-Forcing",
    "benchmark": "MovieGenBench",
    "category": "both",
    "featured": false,
    "prompt": "A cinematic film shot in 70mm, capturing an extreme close-up of a 24-year-old woman's eye as it blinks. The scene takes place during magic hour in Marrakech, with the vibrant colors of the setting sun casting warm hues over the bustling streets. The depth of field emphasizes the intricate details of her almond-shaped eyes, which reflect the lively atmosphere of the city. Her eyes, framed by long, dark lashes, are set against a backdrop of bustling market stalls, ornate architecture, and the soft shadows of the setting sun. The background features a blend of rich textures and vibrant colors, creating a sense of depth and immersion. A medium shot with a slightly elevated perspective, highlighting the natural movement of her eye.",
    "baseVideo": "assets/videos/sf-movie-000011-base.mp4",
    "oursVideo": "assets/videos/sf-movie-000011-opsdv.mp4",
    "basePoster": "assets/posters/sf-movie-000011-base.jpg",
    "oursPoster": "assets/posters/sf-movie-000011-opsdv.jpg",
    "sftVideo": "assets/videos/sf-movie-000011-sft.mp4",
    "sftPoster": "assets/posters/sf-movie-000011-sft.jpg",
    "rlVideo": "assets/videos/sf-movie-000011-rl.mp4",
    "rlPoster": "assets/posters/sf-movie-000011-rl.jpg"
  },
  {
    "slug": "ll-mei-000013",
    "id": "000013",
    "title": "Aerial Great Wall",
    "backbone": "LongLive",
    "benchmark": "MeiBench",
    "category": "quality",
    "featured": true,
    "prompt": "The Great Wall of China is shown from an aerial perspective, with multiple sections of the wall visible. The wall is constructed from large, light-colored bricks, and it features watchtowers with traditional Chinese architecture, characterized by upturned eaves and intricate designs. The watchtowers are spaced at regular intervals along the length of the wall. The surrounding landscape is arid and desert-like, with sparse vegetation and a clear blue sky. The video captures the grandeur and historical significance of the Great Wall, showcasing its impressive scale and the contrast between the ancient structure and the modern cityscape in the background.",
    "baseVideo": "assets/videos/ll-mei-000013-base.mp4?v=faststart-2",
    "oursVideo": "assets/videos/ll-mei-000013-opsdv.mp4?v=faststart-2",
    "basePoster": "assets/posters/ll-mei-000013-base.jpg",
    "oursPoster": "assets/posters/ll-mei-000013-opsdv.jpg",
    "sftVideo": "assets/videos/ll-mei-000013-sft.mp4",
    "sftPoster": "assets/posters/ll-mei-000013-sft.jpg",
    "rlVideo": "assets/videos/ll-mei-000013-rl.mp4",
    "rlPoster": "assets/posters/ll-mei-000013-rl.jpg"
  },
  {
    "slug": "sf-movie-000002",
    "id": "000002",
    "title": "Classic Cinematic Trailer",
    "backbone": "Self-Forcing",
    "benchmark": "MovieGenBench",
    "category": "both",
    "featured": false,
    "prompt": "A movie trailer in a classic cinematic style, featuring the adventurous journey of a 30-year-old space man wearing a vibrant red wool knitted motorcycle helmet. The scene unfolds against a vast blue sky and a desolate salt desert landscape. Shot on 35mm film, the trailer showcases vivid and rich colors, capturing the hero as he navigates through the harsh terrain with determination. His helmet glints under the sun, adding to the dramatic effect. The background is a mix of sweeping desert vistas and distant horizons, with the occasional shimmer of light reflecting off the salt flats. A dynamic medium shot with a sweeping overhead angle, emphasizing the hero's resilience and the vastness of his adventure.",
    "baseVideo": "assets/videos/sf-movie-000002-base.mp4?v=faststart-2",
    "oursVideo": "assets/videos/sf-movie-000002-opsdv.mp4?v=faststart-2",
    "basePoster": "assets/posters/sf-movie-000002-base.jpg",
    "oursPoster": "assets/posters/sf-movie-000002-opsdv.jpg",
    "sftVideo": "assets/videos/sf-movie-000002-sft.mp4",
    "sftPoster": "assets/posters/sf-movie-000002-sft.jpg",
    "rlVideo": "assets/videos/sf-movie-000002-rl.mp4",
    "rlPoster": "assets/posters/sf-movie-000002-rl.jpg"
  },
  {
    "slug": "ll-mei-000016",
    "id": "000016",
    "title": "Hilltop Traditional Building",
    "backbone": "LongLive",
    "benchmark": "MeiBench",
    "category": "quality",
    "featured": false,
    "prompt": "A large, multi-story building with a traditional architectural style, featuring a red roof and white walls, is situated on a hilltop. The building is surrounded by a vast, arid landscape with sparse vegetation and a river winding through the valley below. The river is bordered by dry, brownish terrain with some patches of greenery. The surrounding mountains are rugged and steep, with a mix of brown and green hues. The video shows the building from various angles, including aerial views and closer perspectives. The building is connected to the surrounding landscape by a winding path or road. The sky is clear with a few clouds, and the lighting suggests it is either early morning or late afternoon.",
    "baseVideo": "assets/videos/ll-mei-000016-base.mp4",
    "oursVideo": "assets/videos/ll-mei-000016-opsdv.mp4",
    "basePoster": "assets/posters/ll-mei-000016-base.jpg",
    "oursPoster": "assets/posters/ll-mei-000016-opsdv.jpg",
    "sftVideo": "assets/videos/ll-mei-000016-sft.mp4",
    "sftPoster": "assets/posters/ll-mei-000016-sft.jpg",
    "rlVideo": "assets/videos/ll-mei-000016-rl.mp4",
    "rlPoster": "assets/posters/ll-mei-000016-rl.jpg"
  },
  {
    "slug": "sf-mei-000010",
    "id": "000010",
    "title": "Tree-Lined Park",
    "backbone": "Self-Forcing",
    "benchmark": "MeiBench",
    "category": "quality",
    "featured": true,
    "prompt": "A lush, green landscape with numerous tall trees standing in a straight line, casting shadows on the ground. The trees have thick trunks and dense foliage, and the grass is vibrant and well-maintained. The sunlight filters through the leaves, creating a dappled effect on the ground. The sky is clear and blue, indicating a sunny day. The camera moves slowly, capturing the serene and tranquil atmosphere of the area.",
    "baseVideo": "assets/videos/sf-mei-000010-base.mp4",
    "oursVideo": "assets/videos/sf-mei-000010-opsdv.mp4",
    "basePoster": "assets/posters/sf-mei-000010-base.jpg",
    "oursPoster": "assets/posters/sf-mei-000010-opsdv.jpg",
    "sftVideo": "assets/videos/sf-mei-000010-sft.mp4",
    "sftPoster": "assets/posters/sf-mei-000010-sft.jpg",
    "rlVideo": "assets/videos/sf-mei-000010-rl.mp4",
    "rlPoster": "assets/posters/sf-mei-000010-rl.jpg"
  },
  {
    "slug": "ll-mei-000040",
    "id": "000040",
    "title": "Antelope in Arid Terrain",
    "backbone": "LongLive",
    "benchmark": "MeiBench",
    "category": "both",
    "featured": true,
    "prompt": "A solitary antelope, likely a gazelle or similar species, is seen walking across a barren, rocky terrain. The landscape consists of brownish, dry soil with sparse vegetation, including small bushes and shrubs. The antelope, with its light brown coat and distinct markings, moves slowly and deliberately, occasionally pausing to look around. The background consists of a mountainous or hilly terrain with a gradient of brown shades, indicating a dry or arid environment. The antelope is seen walking from left to right across the frame, with its movements steady and unhurried. The video captures the antelope's solitary journey in this harsh environment, highlighting its adaptability and resilience.",
    "baseVideo": "assets/videos/ll-mei-000040-base.mp4",
    "oursVideo": "assets/videos/ll-mei-000040-opsdv.mp4",
    "basePoster": "assets/posters/ll-mei-000040-base.jpg",
    "oursPoster": "assets/posters/ll-mei-000040-opsdv.jpg",
    "sftVideo": "assets/videos/ll-mei-000040-sft.mp4",
    "sftPoster": "assets/posters/ll-mei-000040-sft.jpg",
    "rlVideo": "assets/videos/ll-mei-000040-rl.mp4",
    "rlPoster": "assets/posters/ll-mei-000040-rl.jpg"
  },
  {
    "slug": "ll-mei-000055",
    "id": "000055",
    "title": "Running by the Coast",
    "backbone": "LongLive",
    "benchmark": "MeiBench",
    "category": "dynamics",
    "featured": true,
    "prompt": "A person walks along a rocky coastline during sunset, wearing a plaid shirt over a white top, blue jeans, and dark-colored shoes. The ocean waves crash against the rocks, and the sky is a gradient of warm colors, transitioning from orange near the horizon to a deeper blue higher up. The person starts by walking along the rocky terrain, then begins to run towards the ocean. As they run, they spread their arms wide, and the camera follows their movement. The person continues to run and jump, with their arms outstretched, and the ocean waves crashing against the rocks in the background. The sky is a gradient of warm colors, transitioning from orange near the horizon to a deeper blue higher up.",
    "baseVideo": "assets/videos/ll-mei-000055-base.mp4",
    "oursVideo": "assets/videos/ll-mei-000055-opsdv.mp4",
    "basePoster": "assets/posters/ll-mei-000055-base.jpg",
    "oursPoster": "assets/posters/ll-mei-000055-opsdv.jpg",
    "sftVideo": "assets/videos/ll-mei-000055-sft.mp4",
    "sftPoster": "assets/posters/ll-mei-000055-sft.jpg",
    "rlVideo": "assets/videos/ll-mei-000055-rl.mp4",
    "rlPoster": "assets/posters/ll-mei-000055-rl.jpg"
  },
  {
    "slug": "ll-movie-000023",
    "id": "000023",
    "title": "Orangutan Family",
    "backbone": "LongLive",
    "benchmark": "MovieGenBench",
    "category": "both",
    "featured": true,
    "prompt": "A nature photography style photo capturing a family of orangutans along the Kinabatangan River in Borneo. The mother orangutan, with long reddish-brown fur and expressive brown eyes, is holding her baby tightly. The baby orangutan, with smaller size and lighter fur, is clinging to its mother’s chest, both gazing curiously at the camera. The father orangutan, larger and more muscular, is standing nearby, looking contemplative. The riverbank is lush with green foliage, and the water reflects the surrounding tropical rainforest. The photo has a vivid and naturalistic style, with the orangutans in focus against a slightly blurred background of dense jungle. A medium shot from a slightly elevated angle, capturing the interaction between the family.",
    "baseVideo": "assets/videos/ll-movie-000023-base.mp4",
    "oursVideo": "assets/videos/ll-movie-000023-opsdv.mp4",
    "basePoster": "assets/posters/ll-movie-000023-base.jpg",
    "oursPoster": "assets/posters/ll-movie-000023-opsdv.jpg",
    "sftVideo": "assets/videos/ll-movie-000023-sft.mp4",
    "sftPoster": "assets/posters/ll-movie-000023-sft.jpg",
    "rlVideo": "assets/videos/ll-movie-000023-rl.mp4",
    "rlPoster": "assets/posters/ll-movie-000023-rl.jpg"
  },
  {
    "slug": "sf-movie-000040",
    "id": "000040",
    "title": "Surfing Otter",
    "backbone": "Self-Forcing",
    "benchmark": "MovieGenBench",
    "category": "both",
    "featured": true,
    "prompt": "A charming 3D digital render art style image showcasing an adorable and happy otter confidently standing on a surfboard, wearing a bright yellow lifejacket. The otter is depicted with a joyful expression, its fur soft and detailed, and it appears to glide gracefully through turquoise tropical waters. The background features lush tropical islands with vibrant green foliage and palm trees, creating a serene and picturesque setting. The water is crystal clear, with gentle waves and sunlight filtering through, adding a sense of tranquility and vibrancy to the scene. A medium shot capturing the otter mid-glide, with a slight tilt to the camera angle emphasizing its playful and adventurous spirit.",
    "baseVideo": "assets/videos/sf-movie-000040-base.mp4",
    "oursVideo": "assets/videos/sf-movie-000040-opsdv.mp4",
    "basePoster": "assets/posters/sf-movie-000040-base.jpg",
    "oursPoster": "assets/posters/sf-movie-000040-opsdv.jpg",
    "sftVideo": "assets/videos/sf-movie-000040-sft.mp4",
    "sftPoster": "assets/posters/sf-movie-000040-sft.jpg",
    "rlVideo": "assets/videos/sf-movie-000040-rl.mp4",
    "rlPoster": "assets/posters/sf-movie-000040-rl.jpg"
  },
  {
    "slug": "ll-movie-000068",
    "id": "000068",
    "title": "Rabbit Reading the News",
    "backbone": "LongLive",
    "benchmark": "MovieGenBench",
    "category": "dynamics",
    "featured": true,
    "prompt": "A charming illustration in a watercolor style of a young white rabbit wearing glasses and reading a newspaper. The rabbit has soft fur, large round ears, and gentle, curious eyes. It sits upright on a cozy armchair, one paw holding the newspaper and the other resting on its knee. The background features a warm living room with a fireplace, a few books on a side table, and a blurred view of a window with falling leaves. The rabbit's expression is one of focused interest, with a slight smile playing on its lips. A close-up shot from a slightly elevated angle, capturing the rabbit's detailed features and the newspaper's headlines.",
    "baseVideo": "assets/videos/ll-movie-000068-base.mp4",
    "oursVideo": "assets/videos/ll-movie-000068-opsdv.mp4",
    "basePoster": "assets/posters/ll-movie-000068-base.jpg",
    "oursPoster": "assets/posters/ll-movie-000068-opsdv.jpg",
    "sftVideo": "assets/videos/ll-movie-000068-sft.mp4",
    "sftPoster": "assets/posters/ll-movie-000068-sft.jpg",
    "rlVideo": "assets/videos/ll-movie-000068-rl.mp4",
    "rlPoster": "assets/posters/ll-movie-000068-rl.jpg"
  },
  {
    "slug": "sf-movie-000076",
    "id": "000076",
    "title": "Underwater Tunnel",
    "backbone": "Self-Forcing",
    "benchmark": "MovieGenBench",
    "category": "quality",
    "featured": true,
    "prompt": "A first-person view (FPV) shot zooming through a narrow tunnel, transitioning into a vibrant underwater world. The tunnel walls are illuminated by colorful lights, creating a mesmerizing effect. Inside the tunnel, bubbles rise gently, and seaweed sways gracefully. The underwater space is filled with a variety of colorful fish swimming around, including neon blue tangs and vibrant orange clownfish. Coral reefs in shades of pink, purple, and green add depth and texture to the scene. The water is clear, allowing visibility of the diverse marine life. The camera angle is slightly tilted, capturing the excitement and adventure of the journey.",
    "baseVideo": "assets/videos/sf-movie-000076-base.mp4",
    "oursVideo": "assets/videos/sf-movie-000076-opsdv.mp4",
    "basePoster": "assets/posters/sf-movie-000076-base.jpg",
    "oursPoster": "assets/posters/sf-movie-000076-opsdv.jpg",
    "sftVideo": "assets/videos/sf-movie-000076-sft.mp4",
    "sftPoster": "assets/posters/sf-movie-000076-sft.jpg",
    "rlVideo": "assets/videos/sf-movie-000076-rl.mp4",
    "rlPoster": "assets/posters/sf-movie-000076-rl.jpg"
  },
  {
    "slug": "ll-movie-000009",
    "id": "000009",
    "title": "California Gold Rush",
    "backbone": "LongLive",
    "benchmark": "MovieGenBench",
    "category": "quality",
    "featured": true,
    "prompt": "A historical footage style photograph depicting a bustling gold rush town in California. The scene captures miners panning for gold in a stream, their faces weathered and determined. Behind them, makeshift wooden shacks and tents line the streets, with smoke rising from chimneys. A man in a dusty hat and tattered clothes stands near a sluice box, his hand on his hip, looking out towards the camera with a mix of hope and hardship. The background features rolling hills and dense forests, with a few oxen-drawn wagons in the distance. The photo has a sepia tone and a grainy texture, capturing the essence of the era. A medium shot with a slightly tilted angle.",
    "baseVideo": "assets/videos/ll-movie-000009-base.mp4",
    "oursVideo": "assets/videos/ll-movie-000009-opsdv.mp4",
    "basePoster": "assets/posters/ll-movie-000009-base.jpg",
    "oursPoster": "assets/posters/ll-movie-000009-opsdv.jpg",
    "sftVideo": "assets/videos/ll-movie-000009-sft.mp4",
    "sftPoster": "assets/posters/ll-movie-000009-sft.jpg",
    "rlVideo": "assets/videos/ll-movie-000009-rl.mp4",
    "rlPoster": "assets/posters/ll-movie-000009-rl.jpg"
  },
  {
    "slug": "sf-mei-000075",
    "id": "000075",
    "title": "Bright Room Workout",
    "backbone": "Self-Forcing",
    "benchmark": "MeiBench",
    "category": "both",
    "featured": false,
    "prompt": "A person performs a series of exercises on a gray exercise mat in a well-lit room with large windows and a white interior. They are wearing a gray sports bra and black shorts. The room has a modern design with a white counter, a potted plant, and a refrigerator in the background. The person starts by jumping up and down on the mat, then transitions to a plank position, and finally moves into a downward dog position. A timer is visible in the top left corner of the video, counting down from 26 seconds to 0 seconds.",
    "baseVideo": "assets/videos/sf-mei-000075-base.mp4",
    "oursVideo": "assets/videos/sf-mei-000075-opsdv.mp4",
    "basePoster": "assets/posters/sf-mei-000075-base.jpg",
    "oursPoster": "assets/posters/sf-mei-000075-opsdv.jpg",
    "sftVideo": "assets/videos/sf-mei-000075-sft.mp4",
    "sftPoster": "assets/posters/sf-mei-000075-sft.jpg",
    "rlVideo": "assets/videos/sf-mei-000075-rl.mp4",
    "rlPoster": "assets/posters/sf-mei-000075-rl.jpg"
  },
  {
    "slug": "ll-mei-000022",
    "id": "000022",
    "title": "Foggy Gothic Street",
    "backbone": "LongLive",
    "benchmark": "MeiBench",
    "category": "dynamics",
    "featured": false,
    "prompt": "A person dressed in a long, heavy coat with a belt or sash, standing in front of an ornate, gothic-style building with intricate carvings and statues. The building features tall, arched windows and detailed stonework, and is situated in a foggy, dimly lit environment. The person initially stands still, then starts walking down the steps of the building and moves through the foggy street. The camera follows the person as they walk away from the building, revealing more of the surrounding architecture and a horse-drawn carriage in the background. The person continues to walk down the street, with the camera capturing the detailed carvings and statues on the building and the foggy atmosphere.",
    "baseVideo": "assets/videos/ll-mei-000022-base.mp4",
    "oursVideo": "assets/videos/ll-mei-000022-opsdv.mp4",
    "basePoster": "assets/posters/ll-mei-000022-base.jpg",
    "oursPoster": "assets/posters/ll-mei-000022-opsdv.jpg",
    "sftVideo": "assets/videos/ll-mei-000022-sft.mp4",
    "sftPoster": "assets/posters/ll-mei-000022-sft.jpg",
    "rlVideo": "assets/videos/ll-mei-000022-rl.mp4",
    "rlPoster": "assets/posters/ll-mei-000022-rl.jpg"
  },
  {
    "slug": "sf-mei-000078",
    "id": "000078",
    "title": "Tattooed Man Interview",
    "backbone": "Self-Forcing",
    "benchmark": "MeiBench",
    "category": "both",
    "featured": false,
    "prompt": "A man with tattoos on his arms is seated in a chair, wearing a dark-colored button-up shirt. He is in a room with a greenish hue, featuring a bookshelf in the background. The man is speaking and gesturing with his hands, which are visible and show tattoos. The background includes a bookshelf with various items and a framed picture. The lighting is soft and even, highlighting the man's facial expressions and hand movements. The man is seen in different positions, sometimes with his hands clasped together and other times gesturing with one hand. The background remains consistent throughout the video.",
    "baseVideo": "assets/videos/sf-mei-000078-base.mp4",
    "oursVideo": "assets/videos/sf-mei-000078-opsdv.mp4",
    "basePoster": "assets/posters/sf-mei-000078-base.jpg",
    "oursPoster": "assets/posters/sf-mei-000078-opsdv.jpg",
    "sftVideo": "assets/videos/sf-mei-000078-sft.mp4",
    "sftPoster": "assets/posters/sf-mei-000078-sft.jpg",
    "rlVideo": "assets/videos/sf-mei-000078-rl.mp4",
    "rlPoster": "assets/posters/sf-mei-000078-rl.jpg"
  },
  {
    "slug": "ll-mei-000076",
    "id": "000076",
    "title": "Studio Dance Routine",
    "backbone": "LongLive",
    "benchmark": "MeiBench",
    "category": "dynamics",
    "featured": false,
    "prompt": "A group of six individuals perform a choreographed dance routine in a studio with a plain, light-colored wall and a dark ceiling. They are dressed in casual, comfortable clothing, primarily consisting of white tops and dark pants or leggings. The dancers start by standing in a line, then bend forward and move their arms in unison. They proceed to execute a series of coordinated movements, including arm extensions, leg lifts, and body turns. The dancers maintain a synchronized rhythm and form throughout the routine, with some moments where they spread out and others where they come together in unison. The lighting is even, casting soft shadows on the floor, and the background remains consistent throughout the video.",
    "baseVideo": "assets/videos/ll-mei-000076-base.mp4",
    "oursVideo": "assets/videos/ll-mei-000076-opsdv.mp4",
    "basePoster": "assets/posters/ll-mei-000076-base.jpg",
    "oursPoster": "assets/posters/ll-mei-000076-opsdv.jpg",
    "sftVideo": "assets/videos/ll-mei-000076-sft.mp4",
    "sftPoster": "assets/posters/ll-mei-000076-sft.jpg",
    "rlVideo": "assets/videos/ll-mei-000076-rl.mp4",
    "rlPoster": "assets/posters/ll-mei-000076-rl.jpg"
  },
  {
    "slug": "sf-mei-000054",
    "id": "000054",
    "title": "Lunges on the Lawn",
    "backbone": "Self-Forcing",
    "benchmark": "MeiBench",
    "category": "dynamics",
    "featured": false,
    "prompt": "A woman in a green sports bra and black shorts performs a series of lunges on a well-maintained grassy lawn. She starts by standing with her feet together, then bends one knee and places her hands on her thighs. She then transitions into a lunge position, with one knee bent and the other leg extended behind her. She continues to alternate legs, maintaining proper form and posture throughout the exercise. The background features a modern building with large glass windows and a landscaped garden with various plants and rocks. The sky is clear and blue, indicating good weather.",
    "baseVideo": "assets/videos/sf-mei-000054-base.mp4",
    "oursVideo": "assets/videos/sf-mei-000054-opsdv.mp4",
    "basePoster": "assets/posters/sf-mei-000054-base.jpg",
    "oursPoster": "assets/posters/sf-mei-000054-opsdv.jpg",
    "sftVideo": "assets/videos/sf-mei-000054-sft.mp4",
    "sftPoster": "assets/posters/sf-mei-000054-sft.jpg",
    "rlVideo": "assets/videos/sf-mei-000054-rl.mp4",
    "rlPoster": "assets/posters/sf-mei-000054-rl.jpg"
  },
  {
    "slug": "ll-mei-000115",
    "id": "000115",
    "title": "Jewelry Showcase",
    "backbone": "LongLive",
    "benchmark": "MeiBench",
    "category": "dynamics",
    "featured": false,
    "prompt": "A woman with long black hair, wearing a beige off-shoulder top, is shown in a series of images. She is adorned with multiple rings on her fingers and several bracelets on her wrists. Her hands are prominently featured, and she is seen holding and displaying various pieces of jewelry, including rings and bracelets. The background is plain and light-colored, providing a neutral backdrop that highlights the jewelry. She is also wearing large, gold hoop earrings. The images depict her in different poses, with her hands raised, fingers spread, and holding the jewelry close to her face.",
    "baseVideo": "assets/videos/ll-mei-000115-base.mp4",
    "oursVideo": "assets/videos/ll-mei-000115-opsdv.mp4",
    "basePoster": "assets/posters/ll-mei-000115-base.jpg",
    "oursPoster": "assets/posters/ll-mei-000115-opsdv.jpg",
    "sftVideo": "assets/videos/ll-mei-000115-sft.mp4",
    "sftPoster": "assets/posters/ll-mei-000115-sft.jpg",
    "rlVideo": "assets/videos/ll-mei-000115-rl.mp4",
    "rlPoster": "assets/posters/ll-mei-000115-rl.jpg"
  },
  {
    "slug": "sf-mei-000002",
    "id": "000002",
    "title": "Highway Interchange Aerial",
    "backbone": "Self-Forcing",
    "benchmark": "MeiBench",
    "category": "quality",
    "featured": false,
    "prompt": "The video displays an aerial view of a complex highway interchange, featuring multiple levels of roads with vehicles moving in various directions. The roads are divided into multiple lanes, with some lanes having a single direction of traffic, while others allow for both directions. The interchange is surrounded by greenery, and the roads are marked with white lines and arrows indicating the direction of traffic flow. The cars are of different colors, including white, black, red, blue, and gray. The camera angle remains consistent throughout the video, providing a top-down perspective of the interchange. The video shows the traffic flow and the design of the interchange from an overhead view.",
    "baseVideo": "assets/videos/sf-mei-000002-base.mp4",
    "oursVideo": "assets/videos/sf-mei-000002-opsdv.mp4",
    "basePoster": "assets/posters/sf-mei-000002-base.jpg",
    "oursPoster": "assets/posters/sf-mei-000002-opsdv.jpg",
    "sftVideo": "assets/videos/sf-mei-000002-sft.mp4",
    "sftPoster": "assets/posters/sf-mei-000002-sft.jpg",
    "rlVideo": "assets/videos/sf-mei-000002-rl.mp4",
    "rlPoster": "assets/posters/sf-mei-000002-rl.jpg"
  },
  {
    "slug": "sf-mei-000012",
    "id": "000012",
    "title": "Paddle Steamboat",
    "backbone": "Self-Forcing",
    "benchmark": "MeiBench",
    "category": "quality",
    "featured": false,
    "prompt": "A large, multi-leveled paddle steamboat with white and red accents sails on a body of water, moving from left to right. The boat has a classic design with multiple decks and a prominent bow. The water is calm, with gentle ripples, and the sky is overcast, casting a soft, diffused light over the scene. The steamboat leaves a distinct wake behind it as it moves through the water. The background is shrouded in mist, creating a hazy atmosphere. The boat's structure includes a series of windows on each deck and a smokestack at the rear.",
    "baseVideo": "assets/videos/sf-mei-000012-base.mp4",
    "oursVideo": "assets/videos/sf-mei-000012-opsdv.mp4",
    "basePoster": "assets/posters/sf-mei-000012-base.jpg",
    "oursPoster": "assets/posters/sf-mei-000012-opsdv.jpg",
    "sftVideo": "assets/videos/sf-mei-000012-sft.mp4",
    "sftPoster": "assets/posters/sf-mei-000012-sft.jpg",
    "rlVideo": "assets/videos/sf-mei-000012-rl.mp4",
    "rlPoster": "assets/posters/sf-mei-000012-rl.jpg"
  },
  {
    "slug": "ll-mei-000019",
    "id": "000019",
    "title": "Tea Plantation Aerial",
    "backbone": "LongLive",
    "benchmark": "MeiBench",
    "category": "quality",
    "featured": false,
    "prompt": "A series of aerial images showcasing a lush, green tea plantation with meticulously arranged rows of tea bushes covering the undulating hills. The tea bushes are neatly aligned in rows, creating a patterned appearance. Interspersed among the tea bushes are blooming cherry blossom trees, their pink blossoms adding a splash of color to the scene. The tea plantation is surrounded by mist or fog, giving the landscape a serene and ethereal quality. A winding path or road cuts through the plantation, leading to a small structure or pavilion. The images depict the tea plantation from various angles, highlighting the undulating terrain and the contrast between the vibrant green of the tea bushes and the soft pink of the cherry blossoms.",
    "baseVideo": "assets/videos/ll-mei-000019-base.mp4",
    "oursVideo": "assets/videos/ll-mei-000019-opsdv.mp4",
    "basePoster": "assets/posters/ll-mei-000019-base.jpg",
    "oursPoster": "assets/posters/ll-mei-000019-opsdv.jpg",
    "sftVideo": "assets/videos/ll-mei-000019-sft.mp4",
    "sftPoster": "assets/posters/ll-mei-000019-sft.jpg",
    "rlVideo": "assets/videos/ll-mei-000019-rl.mp4",
    "rlPoster": "assets/posters/ll-mei-000019-rl.jpg"
  },
  {
    "slug": "ll-mei-000097",
    "id": "000097",
    "title": "Kite String Demonstration",
    "backbone": "LongLive",
    "benchmark": "MeiBench",
    "category": "quality",
    "featured": false,
    "prompt": "An individual in a white T-shirt with a logo and light blue shorts is shown in a suburban area with green lawns and trees, wearing a black cap. They are handling a white string or cable, which appears to be part of a kite or similar object. The person is seen bending down, tying or adjusting the string, and then standing up to demonstrate or explain something related to the string or the object it is attached to. The background includes houses, a parking lot, and a clear sky.",
    "baseVideo": "assets/videos/ll-mei-000097-base.mp4",
    "oursVideo": "assets/videos/ll-mei-000097-opsdv.mp4",
    "basePoster": "assets/posters/ll-mei-000097-base.jpg",
    "oursPoster": "assets/posters/ll-mei-000097-opsdv.jpg",
    "sftVideo": "assets/videos/ll-mei-000097-sft.mp4",
    "sftPoster": "assets/posters/ll-mei-000097-sft.jpg",
    "rlVideo": "assets/videos/ll-mei-000097-rl.mp4",
    "rlPoster": "assets/posters/ll-mei-000097-rl.jpg"
  },
  {
    "slug": "sf-mei-000028",
    "id": "000028",
    "title": "Traditional Kimono Scene",
    "backbone": "Self-Forcing",
    "benchmark": "MeiBench",
    "category": "quality",
    "featured": false,
    "prompt": "A person dressed in a traditional, light-colored kimono is seated on the floor in a room with traditional Japanese decor. They are holding a small, dark-colored box and are positioned next to a round fishbowl containing a single goldfish and some aquatic plants. The room has sliding doors and a tatami mat floor. Another individual, also dressed in traditional attire, is present in the background, sitting on the floor and observing the first person. The first person places the box on the floor and then stands up, while the second person remains seated. The first person then bends down to pick up the box again, and the second person continues to observe. The lighting is soft and natural, suggesting a calm and serene environment.",
    "baseVideo": "assets/videos/sf-mei-000028-base.mp4",
    "oursVideo": "assets/videos/sf-mei-000028-opsdv.mp4",
    "basePoster": "assets/posters/sf-mei-000028-base.jpg",
    "oursPoster": "assets/posters/sf-mei-000028-opsdv.jpg",
    "sftVideo": "assets/videos/sf-mei-000028-sft.mp4",
    "sftPoster": "assets/posters/sf-mei-000028-sft.jpg",
    "rlVideo": "assets/videos/sf-mei-000028-rl.mp4",
    "rlPoster": "assets/posters/sf-mei-000028-rl.jpg"
  },
  {
    "slug": "ll-mei-000106",
    "id": "000106",
    "title": "Skincare Product Demo",
    "backbone": "LongLive",
    "benchmark": "MeiBench",
    "category": "quality",
    "featured": false,
    "prompt": "A person with long, dark hair and a black top is speaking and gesturing with their hands. They are holding a cylindrical object, possibly a cosmetic or skincare product, and are making various hand gestures, including pointing, touching their face, and holding the object up. The background is a plain, light-colored wall with a white shelf that has a few decorative items, including a candle and a small plant. The person is wearing a ring on their left hand.",
    "baseVideo": "assets/videos/ll-mei-000106-base.mp4",
    "oursVideo": "assets/videos/ll-mei-000106-opsdv.mp4",
    "basePoster": "assets/posters/ll-mei-000106-base.jpg",
    "oursPoster": "assets/posters/ll-mei-000106-opsdv.jpg",
    "sftVideo": "assets/videos/ll-mei-000106-sft.mp4",
    "sftPoster": "assets/posters/ll-mei-000106-sft.jpg",
    "rlVideo": "assets/videos/ll-mei-000106-rl.mp4",
    "rlPoster": "assets/posters/ll-mei-000106-rl.jpg"
  },
  {
    "slug": "ll-movie-000004",
    "id": "000004",
    "title": "Monster and Candle",
    "backbone": "LongLive",
    "benchmark": "MovieGenBench",
    "category": "dynamics",
    "featured": false,
    "prompt": "A close-up 3D animated scene of a short, fluffy monster kneeling beside a melting red candle. The monster has large, wide eyes and an open mouth, gazing at the flame with a look of wonder and curiosity. Its soft, fluffy fur contrasts with the warm, dramatic lighting that highlights every detail of its gentle, innocent expression. The pose conveys a sense of playfulness and exploration, as if the creature is discovering the world for the first time. The background features a cozy, warmly lit room with subtle hints of a fireplace and soft furnishings, enhancing the overall atmosphere. The use of warm colors and dramatic lighting creates a captivating and inviting scene.",
    "baseVideo": "assets/videos/ll-movie-000004-base.mp4",
    "oursVideo": "assets/videos/ll-movie-000004-opsdv.mp4",
    "basePoster": "assets/posters/ll-movie-000004-base.jpg",
    "oursPoster": "assets/posters/ll-movie-000004-opsdv.jpg",
    "sftVideo": "assets/videos/ll-movie-000004-sft.mp4",
    "sftPoster": "assets/posters/ll-movie-000004-sft.jpg",
    "rlVideo": "assets/videos/ll-movie-000004-rl.mp4",
    "rlPoster": "assets/posters/ll-movie-000004-rl.jpg"
  },
  {
    "slug": "ll-movie-000021",
    "id": "000021",
    "title": "Paper Airplanes in a Jungle",
    "backbone": "LongLive",
    "benchmark": "MovieGenBench",
    "category": "dynamics",
    "featured": false,
    "prompt": "A vibrant illustration in a whimsical cartoon style depicting a flock of paper airplanes fluttering through a dense jungle. The airplanes, resembling small birds, weave gracefully around towering trees, their wings fluttering gently. The jungle is lush and vibrant, with a variety of exotic plants and colorful flowers. The airplanes seem to migrate through the forest, creating a mesmerizing aerial dance. The background is rich with detailed textures, including sunlight filtering through the canopy, casting dappled shadows on the ground. A dynamic overhead view capturing the mid-flight action of the airplanes.",
    "baseVideo": "assets/videos/ll-movie-000021-base.mp4",
    "oursVideo": "assets/videos/ll-movie-000021-opsdv.mp4",
    "basePoster": "assets/posters/ll-movie-000021-base.jpg",
    "oursPoster": "assets/posters/ll-movie-000021-opsdv.jpg",
    "sftVideo": "assets/videos/ll-movie-000021-sft.mp4",
    "sftPoster": "assets/posters/ll-movie-000021-sft.jpg",
    "rlVideo": "assets/videos/ll-movie-000021-rl.mp4",
    "rlPoster": "assets/posters/ll-movie-000021-rl.jpg"
  },
  {
    "slug": "sf-mei-000047",
    "id": "000047",
    "title": "Chinese Calligraphy",
    "backbone": "Self-Forcing",
    "benchmark": "MeiBench",
    "category": "quality",
    "featured": false,
    "prompt": "An individual writes Chinese calligraphy on a piece of white paper using a brush dipped in black ink. The calligraphy brush is held in the right hand, and the hand moves fluidly across the paper, creating bold, black strokes. The calligraphy brush is then dipped into a small black ink dish filled with black ink. The person continues to write, and the camera captures the calligraphy brush in motion, creating bold, black strokes on the paper. The background features a traditional wooden table with a bamboo mat, a small dish of red flowers, and a bowl of fruit. The lighting is soft and warm, casting gentle shadows on the table and paper. The video concludes with a close-up of the completed calligraphy on the paper, showcasing the intricate strokes and characters.",
    "baseVideo": "assets/videos/sf-mei-000047-base.mp4",
    "oursVideo": "assets/videos/sf-mei-000047-opsdv.mp4",
    "basePoster": "assets/posters/sf-mei-000047-base.jpg",
    "oursPoster": "assets/posters/sf-mei-000047-opsdv.jpg",
    "sftVideo": "assets/videos/sf-mei-000047-sft.mp4",
    "sftPoster": "assets/posters/sf-mei-000047-sft.jpg",
    "rlVideo": "assets/videos/sf-mei-000047-rl.mp4",
    "rlPoster": "assets/posters/sf-mei-000047-rl.jpg"
  },
  {
    "slug": "ll-movie-000042",
    "id": "000042",
    "title": "Corgi Beach Vlog",
    "backbone": "LongLive",
    "benchmark": "MovieGenBench",
    "category": "dynamics",
    "featured": false,
    "prompt": "A vibrant and lively vlog-style photo of a corgi in tropical Maui, showcasing the dog energetically filming itself on a sandy beach. The corgi stands on the shore, one paw slightly lifted, with a joyful and curious expression. It wears a colorful collar and a small backpack camera slung over its neck. The background features a lush, palm-fringed beach with clear turquoise waters and a bright blue sky. The photo has a warm, natural lighting effect, capturing the corgi from a slightly elevated angle, emphasizing its playful and adventurous spirit.",
    "baseVideo": "assets/videos/ll-movie-000042-base.mp4",
    "oursVideo": "assets/videos/ll-movie-000042-opsdv.mp4",
    "basePoster": "assets/posters/ll-movie-000042-base.jpg",
    "oursPoster": "assets/posters/ll-movie-000042-opsdv.jpg",
    "sftVideo": "assets/videos/ll-movie-000042-sft.mp4",
    "sftPoster": "assets/posters/ll-movie-000042-sft.jpg",
    "rlVideo": "assets/videos/ll-movie-000042-rl.mp4",
    "rlPoster": "assets/posters/ll-movie-000042-rl.jpg"
  },
  {
    "slug": "ll-movie-000071",
    "id": "000071",
    "title": "Astronaut in Rio Alley",
    "backbone": "LongLive",
    "benchmark": "MovieGenBench",
    "category": "dynamics",
    "featured": false,
    "prompt": "An astronaut running through a narrow alley in Rio de Janeiro, Brazil. The astronaut is dressed in a bright white spacesuit with a helmet that reflects sunlight. The spacesuit is adorned with various technical patches and has a reflective texture. The astronaut's movements are energetic and dynamic, with one hand on their hip and the other reaching forward for balance. The background features colorful street art, vibrant buildings, and people bustling about. The alley is dimly lit, with shadows cast by the narrow walls. A mid-shot with the astronaut running from a low-angle perspective, capturing the excitement and contrast between the urban environment and the space exploration gear.",
    "baseVideo": "assets/videos/ll-movie-000071-base.mp4",
    "oursVideo": "assets/videos/ll-movie-000071-opsdv.mp4",
    "basePoster": "assets/posters/ll-movie-000071-base.jpg",
    "oursPoster": "assets/posters/ll-movie-000071-opsdv.jpg",
    "sftVideo": "assets/videos/ll-movie-000071-sft.mp4",
    "sftPoster": "assets/posters/ll-movie-000071-sft.jpg",
    "rlVideo": "assets/videos/ll-movie-000071-rl.mp4",
    "rlPoster": "assets/posters/ll-movie-000071-rl.jpg"
  },
  {
    "slug": "sf-mei-000058",
    "id": "000058",
    "title": "Clothing Store Shopping",
    "backbone": "Self-Forcing",
    "benchmark": "MeiBench",
    "category": "quality",
    "featured": false,
    "prompt": "A person is shopping in a clothing store, wearing a light pink blouse and light-colored pants, and carrying a red bag over their shoulder. They are seen examining various pairs of pants and shorts displayed on a rack, which include items in different colors such as black, blue, and white. The person picks up a pair of black pants, examines them, and then places them back on the rack. They continue to touch and inspect different pairs of pants, occasionally picking them up and looking at them from different angles. The background shows other clothing items and a busy store environment with other shoppers and racks of clothing.",
    "baseVideo": "assets/videos/sf-mei-000058-base.mp4",
    "oursVideo": "assets/videos/sf-mei-000058-opsdv.mp4",
    "basePoster": "assets/posters/sf-mei-000058-base.jpg",
    "oursPoster": "assets/posters/sf-mei-000058-opsdv.jpg",
    "sftVideo": "assets/videos/sf-mei-000058-sft.mp4",
    "sftPoster": "assets/posters/sf-mei-000058-sft.jpg",
    "rlVideo": "assets/videos/sf-mei-000058-rl.mp4",
    "rlPoster": "assets/posters/sf-mei-000058-rl.jpg"
  },
  {
    "slug": "sf-mei-000065",
    "id": "000065",
    "title": "Colorful Drink Mixing",
    "backbone": "Self-Forcing",
    "benchmark": "MeiBench",
    "category": "quality",
    "featured": false,
    "prompt": "A person in a green shirt and a necklace is standing behind a table with a large glass filled with a colorful drink containing various ice cubes and a straw. They are in a kitchen with white walls and a closed door in the background. The person holds a small container and pours its contents into the glass, then stirs the drink with the straw. They take a sip from the glass and continue to stir it.",
    "baseVideo": "assets/videos/sf-mei-000065-base.mp4",
    "oursVideo": "assets/videos/sf-mei-000065-opsdv.mp4",
    "basePoster": "assets/posters/sf-mei-000065-base.jpg",
    "oursPoster": "assets/posters/sf-mei-000065-opsdv.jpg",
    "sftVideo": "assets/videos/sf-mei-000065-sft.mp4",
    "sftPoster": "assets/posters/sf-mei-000065-sft.jpg",
    "rlVideo": "assets/videos/sf-mei-000065-rl.mp4",
    "rlPoster": "assets/posters/sf-mei-000065-rl.jpg"
  },
  {
    "slug": "ll-movie-000087",
    "id": "000087",
    "title": "Ant Emerging from Nest",
    "backbone": "LongLive",
    "benchmark": "MovieGenBench",
    "category": "quality",
    "featured": false,
    "prompt": "An extreme close-up shot of an ant emerging from its nest, capturing the moment of its journey with vivid detail. The ant is small but resilient, with its body glistening slightly in the sunlight. As the camera pulls back, we see a picturesque neighborhood beyond the hill, with rows of houses and trees in the background. The hill itself is covered in lush green grass and wildflowers, adding to the natural setting. The scene has a warm, natural lighting effect, highlighting the tiny yet significant action of the ant. A gradual pull-back shot, emphasizing both the ant's movement and the broader landscape.",
    "baseVideo": "assets/videos/ll-movie-000087-base.mp4",
    "oursVideo": "assets/videos/ll-movie-000087-opsdv.mp4",
    "basePoster": "assets/posters/ll-movie-000087-base.jpg",
    "oursPoster": "assets/posters/ll-movie-000087-opsdv.jpg",
    "sftVideo": "assets/videos/ll-movie-000087-sft.mp4",
    "sftPoster": "assets/posters/ll-movie-000087-sft.jpg",
    "rlVideo": "assets/videos/ll-movie-000087-rl.mp4",
    "rlPoster": "assets/posters/ll-movie-000087-rl.jpg"
  },
  {
    "slug": "ll-movie-000100",
    "id": "000100",
    "title": "Autumn Forest Oil Painting",
    "backbone": "LongLive",
    "benchmark": "MovieGenBench",
    "category": "quality",
    "featured": false,
    "prompt": "An oil painting-style natural forest scene with a rich blend of autumn colors, featuring vibrant maple trees casting vivid hues across the landscape. The painting employs a cinematic parallax technique, creating a deep and immersive visual depth. In the foreground, the leaves of the maple trees are vividly colored, ranging from deep red to bright orange, while in the midground, the trees stand tall and majestic, their branches reaching towards the sky. The background reveals a misty distance with softer shades of green and brown, enhancing the sense of depth. The overall atmosphere is warm and inviting, with a soft golden light filtering through the canopy. The composition is a layered, panoramic view, capturing the essence of a serene autumn forest. A wide-angle shot with a slight tilt to the right.",
    "baseVideo": "assets/videos/ll-movie-000100-base.mp4",
    "oursVideo": "assets/videos/ll-movie-000100-opsdv.mp4",
    "basePoster": "assets/posters/ll-movie-000100-base.jpg",
    "oursPoster": "assets/posters/ll-movie-000100-opsdv.jpg",
    "sftVideo": "assets/videos/ll-movie-000100-sft.mp4",
    "sftPoster": "assets/posters/ll-movie-000100-sft.jpg",
    "rlVideo": "assets/videos/ll-movie-000100-rl.mp4",
    "rlPoster": "assets/posters/ll-movie-000100-rl.jpg"
  },
  {
    "slug": "sf-movie-000036",
    "id": "000036",
    "title": "Desert Excavation",
    "backbone": "Self-Forcing",
    "benchmark": "MovieGenBench",
    "category": "both",
    "featured": false,
    "prompt": "A realistic archaeological excavation scene in a vast desert, where archeologists meticulously uncover a generic plastic chair buried under layers of sand. They carefully brush away the dust, their focused expressions conveying the importance of their discovery. The chair, though simple, appears slightly worn and faded. The background showcases the harsh, barren landscape of the desert, with dunes stretching into the distance. The sun is setting, casting long shadows and adding a sense of timelessness to the scene. A close-up shot from a slightly lower angle, emphasizing the detailed work of the archeologists and the weathered chair.",
    "baseVideo": "assets/videos/sf-movie-000036-base.mp4",
    "oursVideo": "assets/videos/sf-movie-000036-opsdv.mp4",
    "basePoster": "assets/posters/sf-movie-000036-base.jpg",
    "oursPoster": "assets/posters/sf-movie-000036-opsdv.jpg",
    "sftVideo": "assets/videos/sf-movie-000036-sft.mp4",
    "sftPoster": "assets/posters/sf-movie-000036-sft.jpg",
    "rlVideo": "assets/videos/sf-movie-000036-rl.mp4",
    "rlPoster": "assets/posters/sf-movie-000036-rl.jpg"
  },
  {
    "slug": "sf-movie-000046",
    "id": "000046",
    "title": "Storm Cloud Giant",
    "backbone": "Self-Forcing",
    "benchmark": "MovieGenBench",
    "category": "both",
    "featured": false,
    "prompt": "A dramatic, epic fantasy-style illustration depicting a towering, giant cloud shaped like a man, with thunderous lightning bolts emanating from his outstretched arms and striking the ground below. The cloud-man has a fierce, determined expression, with stormy gray clouds cascading down his form, giving him a menacing presence. His eyes glow with an intense, electric blue light, and his arms are spread wide, ready to unleash more bolts. The background shows a dark, stormy sky with heavy rain and distant lightning, creating a foreboding atmosphere. The scene is rendered in a dynamic, high-detailed style with a mix of realistic and fantastical elements. A high-angle shot capturing the full figure of the cloud-man in action.",
    "baseVideo": "assets/videos/sf-movie-000046-base.mp4",
    "oursVideo": "assets/videos/sf-movie-000046-opsdv.mp4",
    "basePoster": "assets/posters/sf-movie-000046-base.jpg",
    "oursPoster": "assets/posters/sf-movie-000046-opsdv.jpg",
    "sftVideo": "assets/videos/sf-movie-000046-sft.mp4",
    "sftPoster": "assets/posters/sf-movie-000046-sft.jpg",
    "rlVideo": "assets/videos/sf-movie-000046-rl.mp4",
    "rlPoster": "assets/posters/sf-movie-000046-rl.jpg"
  },
  {
    "slug": "sf-movie-000064",
    "id": "000064",
    "title": "Western Horse Ride",
    "backbone": "Self-Forcing",
    "benchmark": "MovieGenBench",
    "category": "both",
    "featured": false,
    "prompt": "A cinematic scene from a classic western movie, featuring a rugged man riding a powerful horse through the vast Gobi Desert at sunset. The man, dressed in a dusty cowboy hat and a worn leather jacket, reins tightly on the horse's neck as he gallops across the golden sands. The sun sets dramatically behind them, casting long shadows and warm hues across the landscape. The background is filled with rolling dunes and sparse, rocky outcrops, emphasizing the harsh beauty of the desert. A dynamic wide shot from a low angle, capturing both the man and the expansive desert vista.",
    "baseVideo": "assets/videos/sf-movie-000064-base.mp4",
    "oursVideo": "assets/videos/sf-movie-000064-opsdv.mp4",
    "basePoster": "assets/posters/sf-movie-000064-base.jpg",
    "oursPoster": "assets/posters/sf-movie-000064-opsdv.jpg",
    "sftVideo": "assets/videos/sf-movie-000064-sft.mp4",
    "sftPoster": "assets/posters/sf-movie-000064-sft.jpg",
    "rlVideo": "assets/videos/sf-movie-000064-rl.mp4",
    "rlPoster": "assets/posters/sf-movie-000064-rl.jpg"
  },
  {
    "slug": "sf-movie-000006",
    "id": "000006",
    "title": "Victoria Crowned Pigeon",
    "backbone": "Self-Forcing",
    "benchmark": "MovieGenBench",
    "category": "dynamics",
    "featured": false,
    "prompt": "A close-up shot of a Victoria crowned pigeon in a naturalistic wildlife photography style, showcasing its striking blue plumage and red chest. The bird’s crest is adorned with delicate, lacy feathers, and its eye is a striking red color, adding to its regal and majestic appearance. The pigeon’s head is tilted slightly to the side, giving it a regal gaze. The background is blurred, emphasizing the bird’s striking beauty against a soft, muted backdrop. The lighting highlights the bird’s feathers, creating a vibrant and lifelike image.",
    "baseVideo": "assets/videos/sf-movie-000006-base.mp4",
    "oursVideo": "assets/videos/sf-movie-000006-opsdv.mp4",
    "basePoster": "assets/posters/sf-movie-000006-base.jpg",
    "oursPoster": "assets/posters/sf-movie-000006-opsdv.jpg",
    "sftVideo": "assets/videos/sf-movie-000006-sft.mp4",
    "sftPoster": "assets/posters/sf-movie-000006-sft.jpg",
    "rlVideo": "assets/videos/sf-movie-000006-rl.mp4",
    "rlPoster": "assets/posters/sf-movie-000006-rl.jpg"
  },
  {
    "slug": "sf-movie-000070",
    "id": "000070",
    "title": "Woman on a High-Speed Train",
    "backbone": "Self-Forcing",
    "benchmark": "MovieGenBench",
    "category": "quality",
    "featured": false,
    "prompt": "A subtle and elegant photograph in a Japanese style, capturing a woman with gentle, contemplative eyes and flowing dark hair sitting by the window of a high-speed train. The train moves rapidly through a bustling cityscape, with blurred reflections of the city lights and buildings on the window pane. The woman appears serene, her hands resting gently on her lap. The background features a blend of traditional Japanese architecture and modern skyscrapers, with a soft, muted color palette. The photo has a vintage film texture, emphasizing the movement and energy of the scene. A medium shot from a slightly angled perspective, highlighting the woman's thoughtful gaze and the dynamic motion of the train.",
    "baseVideo": "assets/videos/sf-movie-000070-base.mp4",
    "oursVideo": "assets/videos/sf-movie-000070-opsdv.mp4",
    "basePoster": "assets/posters/sf-movie-000070-base.jpg",
    "oursPoster": "assets/posters/sf-movie-000070-opsdv.jpg",
    "sftVideo": "assets/videos/sf-movie-000070-sft.mp4",
    "sftPoster": "assets/posters/sf-movie-000070-sft.jpg",
    "rlVideo": "assets/videos/sf-movie-000070-rl.mp4",
    "rlPoster": "assets/posters/sf-movie-000070-rl.jpg"
  },
  {
    "slug": "sf-movie-000094",
    "id": "000094",
    "title": "Pianist in Black and White",
    "backbone": "Self-Forcing",
    "benchmark": "MovieGenBench",
    "category": "quality",
    "featured": false,
    "prompt": "A classic black-and-white photograph style image of an older man playing the piano. The man, with a weathered face and kind eyes, sits at an antique piano with his fingers gracefully moving over the keys. The lighting comes from the side, casting dramatic shadows on his face and emphasizing the texture of his hands. His posture is upright and focused, conveying a sense of deep concentration and passion for music. The background is blurred, revealing only hints of a cozy room with wooden floors and old furniture. A close-up shot from a slightly elevated angle, capturing both the man and the piano in detail.",
    "baseVideo": "assets/videos/sf-movie-000094-base.mp4",
    "oursVideo": "assets/videos/sf-movie-000094-opsdv.mp4",
    "basePoster": "assets/posters/sf-movie-000094-base.jpg",
    "oursPoster": "assets/posters/sf-movie-000094-opsdv.jpg",
    "sftVideo": "assets/videos/sf-movie-000094-sft.mp4",
    "sftPoster": "assets/posters/sf-movie-000094-sft.jpg",
    "rlVideo": "assets/videos/sf-movie-000094-rl.mp4",
    "rlPoster": "assets/posters/sf-movie-000094-rl.jpg"
  }
];
const motivations = [
  {
    "title": "Aerial beach scene",
    "meta": "LongLive · no parameter updates",
    "prompt": "An aerial view of a beach scene on a clear day, with a bright blue sky and a few scattered white clouds. Crowds fill the beach: some people rest under umbrellas while others walk along the shoreline. The water is clear turquoise, the sand is pale beige, and tall buildings line the coast, including a prominent white building. Palm trees surround the beach as gentle waves wash onto the shore.",
    "duration": 60,
    "videos": [
      {
        "label": "Generated KV history",
        "src": "assets/videos/motivation-cache/000002-generated.mp4",
        "poster": "assets/videos/motivation-cache/000002-generated.jpg",
        "ours": false
      },
      {
        "label": "Real-video cache context",
        "src": "assets/videos/motivation-cache/000002-gt.mp4",
        "poster": "assets/videos/motivation-cache/000002-gt.jpg",
        "ours": true
      },
      {
        "label": "Real-video reference",
        "src": "assets/videos/motivation-cache/000002-reference.mp4",
        "poster": "assets/videos/motivation-cache/000002-reference.jpg",
        "ours": false
      }
    ]
  },
  {
    "title": "Motorcyclist gesture",
    "meta": "LongLive · no parameter updates",
    "prompt": "A person wearing a black T-shirt with the text \"Bright Eyes\" and a white helmet with a reflective visor is riding a motorcycle. The background shows a suburban area with trees, houses, and power lines under a partly cloudy sky. The person raises their arms and then lowers them while riding.",
    "duration": 60,
    "videos": [
      {
        "label": "Generated KV history",
        "src": "assets/videos/motivation-cache/000003-generated.mp4",
        "poster": "assets/videos/motivation-cache/000003-generated.jpg",
        "ours": false
      },
      {
        "label": "Real-video cache context",
        "src": "assets/videos/motivation-cache/000003-gt.mp4",
        "poster": "assets/videos/motivation-cache/000003-gt.jpg",
        "ours": true
      },
      {
        "label": "Real-video reference",
        "src": "assets/videos/motivation-cache/000003-reference.mp4",
        "poster": "assets/videos/motivation-cache/000003-reference.jpg",
        "ours": false
      }
    ]
  },
  {
    "title": "Bird in rocky stream",
    "meta": "LongLive · no parameter updates",
    "prompt": "A small bird with dark plumage, likely a crow or raven, is seen in a shallow, rocky stream surrounded by lush greenery. The bird is initially standing on a rock in the stream, then it moves through the water, splashing and creating ripples. The background consists of dense foliage and moss-covered rocks, with sunlight filtering through the trees and casting a warm glow on the scene. The bird continues to move through the water, occasionally flapping its wings and adjusting its position.",
    "duration": 60,
    "videos": [
      {
        "label": "Generated KV history",
        "src": "assets/videos/motivation-cache/000004-generated.mp4",
        "poster": "assets/videos/motivation-cache/000004-generated.jpg",
        "ours": false
      },
      {
        "label": "Real-video cache context",
        "src": "assets/videos/motivation-cache/000004-gt.mp4",
        "poster": "assets/videos/motivation-cache/000004-gt.jpg",
        "ours": true
      },
      {
        "label": "Real-video reference",
        "src": "assets/videos/motivation-cache/000004-reference.mp4",
        "poster": "assets/videos/motivation-cache/000004-reference.jpg",
        "ours": false
      }
    ]
  },
  {
    "title": "Mountain village flyover",
    "meta": "LongLive · no parameter updates",
    "prompt": "Aerial views of a traditional village nestled in a mountainous region, featuring white buildings with black roofs. The village is surrounded by lush greenery and autumn-colored trees, with large trees displaying vibrant orange and yellow leaves. The village is densely packed with closely spaced buildings, some with small courtyards or gardens. The surrounding landscape includes rolling hills and fields, with a clear sky above. The video captures the village from various angles, showing the layout and architecture of the buildings, as well as the natural environment surrounding it.",
    "duration": 60,
    "videos": [
      {
        "label": "Generated KV history",
        "src": "assets/videos/motivation-cache/000006-generated.mp4",
        "poster": "assets/videos/motivation-cache/000006-generated.jpg",
        "ours": false
      },
      {
        "label": "Real-video cache context",
        "src": "assets/videos/motivation-cache/000006-gt.mp4",
        "poster": "assets/videos/motivation-cache/000006-gt.jpg",
        "ours": true
      },
      {
        "label": "Real-video reference",
        "src": "assets/videos/motivation-cache/000006-reference.mp4",
        "poster": "assets/videos/motivation-cache/000006-reference.jpg",
        "ours": false
      }
    ]
  },
  {
    "title": "Forested road aerial view",
    "meta": "LongLive · no parameter updates",
    "prompt": "The video provides an aerial view of a forested area with a winding road cutting through it. The road is surrounded by dense greenery, with various shades of green indicating different types of trees and vegetation. A few houses are visible, with one having a dark roof and another with a lighter-colored roof. The houses are nestled among the trees, with driveways leading up to them. The road curves and bends, creating a path that weaves through the forest. The colors are primarily green from the trees, with the road appearing as a dark, linear path. The video captures the layout and structure of the area, including the road, houses, and surrounding forest.",
    "duration": 60,
    "videos": [
      {
        "label": "Generated KV history",
        "src": "assets/videos/motivation-cache/000007-generated.mp4",
        "poster": "assets/videos/motivation-cache/000007-generated.jpg",
        "ours": false
      },
      {
        "label": "Real-video cache context",
        "src": "assets/videos/motivation-cache/000007-gt.mp4",
        "poster": "assets/videos/motivation-cache/000007-gt.jpg",
        "ours": true
      },
      {
        "label": "Real-video reference",
        "src": "assets/videos/motivation-cache/000007-reference.mp4",
        "poster": "assets/videos/motivation-cache/000007-reference.jpg",
        "ours": false
      }
    ]
  }
];
const metrics = [
  {
    "label": "LongLive",
    "kind": "base",
    "backbone": "LongLive",
    "values": {
      "quality6": "0.7867",
      "dynamic5s": "0.5156",
      "semantic6": "0.5123"
    }
  },
  {
    "label": "LongLive + SFT",
    "kind": "sft",
    "backbone": "LongLive",
    "values": {
      "quality6": "0.6448",
      "dynamic5s": "0.2076",
      "semantic6": "0.4132"
    }
  },
  {
    "label": "LongLive + RL (Astrolabe)",
    "kind": "rl",
    "backbone": "LongLive",
    "values": {
      "quality6": "0.7222",
      "dynamic5s": "0.1804",
      "semantic6": "0.5124"
    }
  },
  {
    "label": "LongLive + OPSD-V",
    "kind": "opsdv",
    "backbone": "LongLive",
    "values": {
      "quality6": "0.7992",
      "dynamic5s": "0.6077",
      "semantic6": "0.5068"
    }
  },
  {
    "label": "Self-Forcing",
    "kind": "base",
    "backbone": "Self-Forcing",
    "values": {
      "quality6": "0.8020",
      "dynamic5s": "0.6421",
      "semantic6": "0.5041"
    }
  },
  {
    "label": "Self-Forcing + SFT",
    "kind": "sft",
    "backbone": "Self-Forcing",
    "values": {
      "quality6": "0.6219",
      "dynamic5s": "0.1750",
      "semantic6": "0.3844"
    }
  },
  {
    "label": "Self-Forcing + RL (Astrolabe)",
    "kind": "rl",
    "backbone": "Self-Forcing",
    "values": {
      "quality6": "0.7702",
      "dynamic5s": "0.5247",
      "semantic6": "0.5085"
    }
  },
  {
    "label": "Self-Forcing + OPSD-V",
    "kind": "opsdv",
    "backbone": "Self-Forcing",
    "values": {
      "quality6": "0.8158",
      "dynamic5s": "0.6715",
      "semantic6": "0.5046"
    }
  }
];
const ablations = [
  {
    "label": "x₀ supervision",
    "kind": "ablation",
    "backbone": "LongLive",
    "values": {
      "quality6": "0.7923",
      "dynamic5s": "0.5646",
      "semantic6": "0.5124"
    }
  },
  {
    "label": "First-step only",
    "kind": "ablation",
    "backbone": "LongLive",
    "values": {
      "quality6": "0.7585",
      "dynamic5s": "0.4547",
      "semantic6": "0.5109"
    }
  },
  {
    "label": "Student-latest KV",
    "kind": "ablation",
    "backbone": "LongLive",
    "values": {
      "quality6": "0.7731",
      "dynamic5s": "0.5228",
      "semantic6": "0.5092"
    }
  },
  {
    "label": "OPSD-V (full)",
    "kind": "opsdv",
    "backbone": "LongLive",
    "values": {
      "quality6": "0.7992",
      "dynamic5s": "0.6077",
      "semantic6": "0.5068"
    }
  }
];

const demoOverview = {
  "title": "OPSD-V video overview",
  "duration": 90,
  "src": "assets/videos/demo/opsdv-demo-90s-1080p.mp4?v=semantic-20260923",
  "poster": "assets/posters/demo/opsdv-demo-poster.jpg"
};

// Matched prompt pairs; group labels are one-based, source indices are zero-based.
const gradientComparisons = [
  {
    "title": "Aerial village view",
    "benchmark": "MeiBench",
    "group": 16,
    "index": 15,
    "category": "quality",
    "meta": "One-minute generation",
    "prompt": "An aerial view of a traditional village or town with a prominent large tree in the center. The tree is surrounded by traditional buildings with tiled roofs, and there are several small canals or waterways running through the village. The canals are lined with stone pathways and have wooden bridges connecting different sections of the village. The buildings have grey tiled roofs and white walls, and the canals are filled with calm water. The video shows the village from different angles, highlighting the layout and architecture of the buildings and the positioning of the trees and waterways.",
    "duration": 60,
    "videos": [
      {
        "label": "Self Gradient Forcing",
        "note": "Chunkwise EMA",
        "src": "assets/videos/gradient-comparison/mei-000015-sgf.mp4",
        "poster": "assets/posters/gradient-comparison/mei-000015-sgf.jpg",
        "ours": false
      },
      {
        "label": "Self-Forcing + OPSD-V",
        "note": "Seed 1",
        "src": "assets/videos/gradient-comparison/mei-000015-opsdv.mp4",
        "poster": "assets/posters/gradient-comparison/mei-000015-opsdv.jpg",
        "ours": true
      }
    ]
  },
  {
    "title": "Studio dance routine",
    "benchmark": "MeiBench",
    "group": 65,
    "index": 64,
    "category": "dynamics",
    "meta": "One-minute generation",
    "prompt": "Three individuals perform a choreographed dance routine in a studio with a dark background and bright overhead lights. They wear casual, comfortable clothing: two in beige sweaters and black pants, and one in a beige sweater and white shorts. The dancers start by standing in a line, then move into various dynamic poses and steps, including arm movements, leg lifts, and coordinated steps. The central dancer leads the routine, while the other two dancers follow her movements. The background remains consistent throughout the video, with a dark wall and a fan visible in the corner. The lighting is even, highlighting the dancers without casting harsh shadows.",
    "duration": 60,
    "videos": [
      {
        "label": "Self Gradient Forcing",
        "note": "Chunkwise EMA",
        "src": "assets/videos/gradient-comparison/mei-000064-sgf.mp4",
        "poster": "assets/posters/gradient-comparison/mei-000064-sgf.jpg",
        "ours": false
      },
      {
        "label": "Self-Forcing + OPSD-V",
        "note": "Seed 1",
        "src": "assets/videos/gradient-comparison/mei-000064-opsdv.mp4",
        "poster": "assets/posters/gradient-comparison/mei-000064-opsdv.jpg",
        "ours": true
      }
    ]
  },
  {
    "title": "Cinematic space adventure",
    "benchmark": "MovieGenBench",
    "group": 3,
    "index": 2,
    "category": "dynamics",
    "meta": "One-minute generation",
    "prompt": "A movie trailer in a classic cinematic style, featuring the adventurous journey of a 30-year-old space man wearing a vibrant red wool knitted motorcycle helmet. The scene unfolds against a vast blue sky and a desolate salt desert landscape. Shot on 35mm film, the trailer showcases vivid and rich colors, capturing the hero as he navigates through the harsh terrain with determination. His helmet glints under the sun, adding to the dramatic effect. The background is a mix of sweeping desert vistas and distant horizons, with the occasional shimmer of light reflecting off the salt flats. A dynamic medium shot with a sweeping overhead angle, emphasizing the hero's resilience and the vastness of his adventure.",
    "duration": 60,
    "videos": [
      {
        "label": "Self Gradient Forcing",
        "note": "Chunkwise EMA",
        "src": "assets/videos/gradient-comparison/movie-000002-sgf.mp4",
        "poster": "assets/posters/gradient-comparison/movie-000002-sgf.jpg",
        "ours": false
      },
      {
        "label": "Self-Forcing + OPSD-V",
        "note": "Seed 1",
        "src": "assets/videos/gradient-comparison/movie-000002-opsdv.mp4",
        "poster": "assets/posters/gradient-comparison/movie-000002-opsdv.jpg",
        "ours": true
      }
    ]
  },
  {
    "title": "Big Sur drone coast",
    "benchmark": "MovieGenBench",
    "group": 4,
    "index": 3,
    "category": "quality",
    "meta": "One-minute generation",
    "prompt": "A drone view of waves crashing against the rugged cliffs along Big Sur’s Garay Point beach. The crashing blue waters create white-tipped waves, while the golden light of the setting sun illuminates the rocky shore, casting long shadows. In the distance, a small island with a lighthouse stands tall, its beam piercing the twilight. Green shrubbery covers the cliff’s edge, and the steep drop from the road down to the beach is a dramatic feat, with the cliff’s edges jutting out over the sea. The camera angle provides a bird's-eye view, capturing the raw beauty of the coast and the rugged landscape of the Pacific Coast Highway. The scene is bathed in a warm, golden hue, highlighting the textures and details of the rocky terrain.",
    "duration": 60,
    "videos": [
      {
        "label": "Self Gradient Forcing",
        "note": "Chunkwise EMA",
        "src": "assets/videos/gradient-comparison/movie-000003-sgf.mp4",
        "poster": "assets/posters/gradient-comparison/movie-000003-sgf.jpg",
        "ours": false
      },
      {
        "label": "Self-Forcing + OPSD-V",
        "note": "Seed 1",
        "src": "assets/videos/gradient-comparison/movie-000003-opsdv.mp4",
        "poster": "assets/posters/gradient-comparison/movie-000003-opsdv.jpg",
        "ours": true
      }
    ]
  },
  {
    "title": "Kangaroo disco dance",
    "benchmark": "MovieGenBench",
    "group": 13,
    "index": 12,
    "category": "dynamics",
    "meta": "One-minute generation",
    "prompt": "A vibrant cartoon-style illustration depicting a kangaroo performing a lively disco dance. The kangaroo has a joyful expression, with large, expressive eyes and a mischievous grin. It wears a colorful sequined outfit with sparkles, including a glittery top and matching pants. Its tail is fluffed out and swaying rhythmically. The kangaroo moves with natural fluidity, one foot lifted and the other stepping forward. The background features a blurred dance floor with colorful lights and dancing figures, creating a festive atmosphere. The illustration has a smooth, hand-drawn style with exaggerated proportions. A dynamic close-up shot from a slightly elevated angle.",
    "duration": 60,
    "videos": [
      {
        "label": "Self Gradient Forcing",
        "note": "Chunkwise EMA",
        "src": "assets/videos/gradient-comparison/movie-000012-sgf.mp4",
        "poster": "assets/posters/gradient-comparison/movie-000012-sgf.jpg",
        "ours": false
      },
      {
        "label": "Self-Forcing + OPSD-V",
        "note": "Seed 1",
        "src": "assets/videos/gradient-comparison/movie-000012-opsdv.mp4",
        "poster": "assets/posters/gradient-comparison/movie-000012-opsdv.jpg",
        "ours": true
      }
    ]
  },
  {
    "title": "Vintage SUV on a mountain road",
    "benchmark": "MovieGenBench",
    "group": 18,
    "index": 17,
    "category": "quality",
    "meta": "First 20 seconds",
    "prompt": "A dynamic shot from behind a white vintage SUV with a black roof rack as it speeds up a steep dirt road surrounded by towering redwood trees on a rugged mountain slope. Dust kicks up from its tires, and the sunlight shines on the SUV, casting a warm glow over the scene. The dirt road curves gently into the distance, with no other vehicles in sight. The trees on either side are dense redwoods, with patches of greenery scattered throughout. The car navigates the curve with ease, making it seem as if it is on a thrilling drive through the rugged terrain. The dirt road is framed by steep hills and mountains, with a clear blue sky above and wispy clouds drifting by. The camera captures the vehicle from the rear, emphasizing its powerful and adventurous journey.",
    "duration": 20,
    "videos": [
      {
        "label": "Self Gradient Forcing",
        "note": "Chunkwise EMA",
        "src": "assets/videos/gradient-comparison/movie-000017-sgf.mp4",
        "poster": "assets/posters/gradient-comparison/movie-000017-sgf.jpg",
        "ours": false
      },
      {
        "label": "Self-Forcing + OPSD-V",
        "note": "Seed 1",
        "src": "assets/videos/gradient-comparison/movie-000017-opsdv.mp4",
        "poster": "assets/posters/gradient-comparison/movie-000017-opsdv.jpg",
        "ours": true
      }
    ]
  },
  {
    "title": "Astronaut on the Moon",
    "benchmark": "MovieGenBench",
    "group": 61,
    "index": 60,
    "category": "both",
    "meta": "One-minute generation",
    "prompt": "An astronaut runs smoothly and appears almost weightless on the lunar surface, as seen from a low-angle shot that highlights the vast, desolate background of the moon. The moon's craters and rocky terrain are clearly visible, creating a stark contrast against the running astronaut who moves with graceful, fluid motions. The background features a muted, grayscale texture with subtle shadows and highlights, emphasizing the lunar landscape's rugged beauty. The astronaut wears a classic spacesuit with reflective fabric, adding to the sense of lightness and movement. A dynamic medium shot capturing the astronaut's forward momentum.",
    "duration": 60,
    "videos": [
      {
        "label": "Self Gradient Forcing",
        "note": "Chunkwise EMA",
        "src": "assets/videos/gradient-comparison/movie-000060-sgf.mp4",
        "poster": "assets/posters/gradient-comparison/movie-000060-sgf.jpg",
        "ours": false
      },
      {
        "label": "Self-Forcing + OPSD-V",
        "note": "Seed 1",
        "src": "assets/videos/gradient-comparison/movie-000060-opsdv.mp4",
        "poster": "assets/posters/gradient-comparison/movie-000060-opsdv.jpg",
        "ours": true
      }
    ]
  }
];

// Fresh matched rollouts; the original motivation examples remain unchanged.
const cacheLatestComparisons = [
  {
    "title": "Motorcyclist gesture",
    "meta": "LongLive · training-free · seed 0",
    "prompt": "A person wearing a black T-shirt with the text \"Bright Eyes\" and a white helmet with a reflective visor is riding a motorcycle. The background shows a suburban area with trees, houses, and power lines under a partly cloudy sky. The person raises their arms and then lowers them while riding.",
    "duration": 45,
    "videos": [
      {
        "label": "Generated history",
        "note": "Baseline",
        "src": "assets/videos/cache-latest-gt/000003-generated.mp4",
        "poster": "assets/videos/cache-latest-gt/000003-generated.jpg"
      },
      {
        "label": "Retain generated latest",
        "note": "Older history: real video",
        "src": "assets/videos/cache-latest-gt/000003-keep_latest.mp4",
        "poster": "assets/videos/cache-latest-gt/000003-keep_latest.jpg"
      },
      {
        "label": "Replace latest with real",
        "note": "All history: real video",
        "src": "assets/videos/cache-latest-gt/000003-all_gt.mp4",
        "poster": "assets/videos/cache-latest-gt/000003-all_gt.jpg"
      }
    ]
  },
  {
    "title": "Aerial beach scene",
    "meta": "LongLive · training-free · seed 0",
    "prompt": "An aerial view of a beach scene on a clear day, with a bright blue sky and a few scattered white clouds. Crowds fill the beach: some people rest under umbrellas while others walk along the shoreline. The water is clear turquoise, the sand is pale beige, and tall buildings line the coast, including a prominent white building. Palm trees surround the beach as gentle waves wash onto the shore.",
    "duration": 30,
    "videos": [
      {
        "label": "Generated history",
        "note": "Baseline",
        "src": "assets/videos/cache-latest-gt/000002-generated.mp4",
        "poster": "assets/videos/cache-latest-gt/000002-generated.jpg"
      },
      {
        "label": "Retain generated latest",
        "note": "Older history: real video",
        "src": "assets/videos/cache-latest-gt/000002-keep_latest.mp4",
        "poster": "assets/videos/cache-latest-gt/000002-keep_latest.jpg"
      },
      {
        "label": "Replace latest with real",
        "note": "All history: real video",
        "src": "assets/videos/cache-latest-gt/000002-all_gt.mp4",
        "poster": "assets/videos/cache-latest-gt/000002-all_gt.jpg"
      }
    ]
  },
  {
    "title": "Bird in rocky stream",
    "meta": "LongLive · training-free · seed 0",
    "prompt": "A small bird with dark plumage, likely a crow or raven, is seen in a shallow, rocky stream surrounded by lush greenery. The bird is initially standing on a rock in the stream, then it moves through the water, splashing and creating ripples. The background consists of dense foliage and moss-covered rocks, with sunlight filtering through the trees and casting a warm glow on the scene. The bird continues to move through the water, occasionally flapping its wings and adjusting its position.",
    "duration": 30,
    "videos": [
      {
        "label": "Generated history",
        "note": "Baseline",
        "src": "assets/videos/cache-latest-gt/000004-generated.mp4",
        "poster": "assets/videos/cache-latest-gt/000004-generated.jpg"
      },
      {
        "label": "Retain generated latest",
        "note": "Older history: real video",
        "src": "assets/videos/cache-latest-gt/000004-keep_latest.mp4",
        "poster": "assets/videos/cache-latest-gt/000004-keep_latest.jpg"
      },
      {
        "label": "Replace latest with real",
        "note": "All history: real video",
        "src": "assets/videos/cache-latest-gt/000004-all_gt.mp4",
        "poster": "assets/videos/cache-latest-gt/000004-all_gt.jpg"
      }
    ]
  },
  {
    "title": "Mountain village flyover",
    "meta": "LongLive · training-free · seed 0",
    "prompt": "Aerial views of a traditional village nestled in a mountainous region, featuring white buildings with black roofs. The village is surrounded by lush greenery and autumn-colored trees, with large trees displaying vibrant orange and yellow leaves. The village is densely packed with closely spaced buildings, some with small courtyards or gardens. The surrounding landscape includes rolling hills and fields, with a clear sky above. The video captures the village from various angles, showing the layout and architecture of the buildings, as well as the natural environment surrounding it.",
    "duration": 30,
    "videos": [
      {
        "label": "Generated history",
        "note": "Baseline",
        "src": "assets/videos/cache-latest-gt/000006-generated.mp4",
        "poster": "assets/videos/cache-latest-gt/000006-generated.jpg"
      },
      {
        "label": "Retain generated latest",
        "note": "Older history: real video",
        "src": "assets/videos/cache-latest-gt/000006-keep_latest.mp4",
        "poster": "assets/videos/cache-latest-gt/000006-keep_latest.jpg"
      },
      {
        "label": "Replace latest with real",
        "note": "All history: real video",
        "src": "assets/videos/cache-latest-gt/000006-all_gt.mp4",
        "poster": "assets/videos/cache-latest-gt/000006-all_gt.jpg"
      }
    ]
  },
  {
    "title": "Forested road aerial view",
    "meta": "LongLive · training-free · seed 0",
    "prompt": "The video provides an aerial view of a forested area with a winding road cutting through it. The road is surrounded by dense greenery, with various shades of green indicating different types of trees and vegetation. A few houses are visible, with one having a dark roof and another with a lighter-colored roof. The houses are nestled among the trees, with driveways leading up to them. The road curves and bends, creating a path that weaves through the forest. The colors are primarily green from the trees, with the road appearing as a dark, linear path. The video captures the layout and structure of the area, including the road, houses, and surrounding forest.",
    "duration": 30,
    "videos": [
      {
        "label": "Generated history",
        "note": "Baseline",
        "src": "assets/videos/cache-latest-gt/000007-generated.mp4",
        "poster": "assets/videos/cache-latest-gt/000007-generated.jpg"
      },
      {
        "label": "Retain generated latest",
        "note": "Older history: real video",
        "src": "assets/videos/cache-latest-gt/000007-keep_latest.mp4",
        "poster": "assets/videos/cache-latest-gt/000007-keep_latest.jpg"
      },
      {
        "label": "Replace latest with real",
        "note": "All history: real video",
        "src": "assets/videos/cache-latest-gt/000007-all_gt.mp4",
        "poster": "assets/videos/cache-latest-gt/000007-all_gt.jpg"
      }
    ]
  }
];

const ablationExamples = [
  {
    "title": "Train Crossing a Bridge",
    "meta": "LongLive · MeiBench · Seed 1",
    "prompt": "An aerial view of a long train crossing a bridge over a body of water. The train consists of multiple tanker cars, and the bridge is a steel truss structure with a series of beams and cross-bracing. The train is moving from left to right across the bridge. The surrounding area includes a forested area with green trees and a dirt path running parallel to the train tracks. There is a road running alongside the tracks, and a small boat is visible on the water below the bridge. The water is calm, and the sky is clear.",
    "duration": 30,
    "videos": [
      {
        "label": "x₀ supervision",
        "note": "Clean-latent target",
        "src": "assets/videos/ablations/ll-mei-000007-x0-30s.mp4",
        "poster": "assets/videos/ablations/ll-mei-000007-x0-30s.jpg",
        "ours": false
      },
      {
        "label": "First-step only",
        "note": "One supervised step",
        "src": "assets/videos/ablations/ll-mei-000007-first-step-30s.mp4",
        "poster": "assets/videos/ablations/ll-mei-000007-first-step-30s.jpg",
        "ours": false
      },
      {
        "label": "Student-latest KV",
        "note": "Teacher uses student KV",
        "src": "assets/videos/ablations/ll-mei-000007-student-latest-kv-30s.mp4",
        "poster": "assets/videos/ablations/ll-mei-000007-student-latest-kv-30s.jpg",
        "ours": false
      },
      {
        "label": "OPSD-V (full)",
        "note": "Our method",
        "src": "assets/videos/ablations/ll-mei-000007-opsdv-30s.mp4",
        "poster": "assets/videos/ablations/ll-mei-000007-opsdv-30s.jpg",
        "ours": true
      }
    ],
    "detailFigure": {
      "src": "assets/figures/ablation-details/ll-mei-000007.png",
      "summary": "Train Crossing a Bridge: enlarged tree and bridge details",
      "alt": "Four methods at 10 s and 30 s, with full frames and enlarged trees and steel-truss bridge regions.",
      "caption": "Full frames at 10 s and 30 s. Blue outlines mark trees; orange outlines mark bridge structure. Equal-sized crops follow corresponding regions as the camera view changes. Click the figure for full resolution."
    }
  },
  {
    "title": "Studio Dance Routine",
    "meta": "LongLive · MeiBench · Seed 1",
    "prompt": "A group of six individuals perform a choreographed dance routine in a studio with a plain, light-colored wall and a dark ceiling. They are dressed in casual, comfortable clothing, primarily consisting of white tops and dark pants or leggings. The dancers start by standing in a line, then bend forward and move their arms in unison. They proceed to execute a series of coordinated movements, including arm extensions, leg lifts, and body turns. The dancers maintain a synchronized rhythm and form throughout the routine, with some moments where they spread out and others where they come together in unison. The lighting is even, casting soft shadows on the floor, and the background remains consistent throughout the video.",
    "duration": 30,
    "videos": [
      {
        "label": "x₀ supervision",
        "note": "Clean-latent target",
        "src": "assets/videos/ablations/ll-mei-000076-x0-30s.mp4",
        "poster": "assets/videos/ablations/ll-mei-000076-x0-30s.jpg",
        "ours": false
      },
      {
        "label": "First-step only",
        "note": "One supervised step",
        "src": "assets/videos/ablations/ll-mei-000076-first-step-30s.mp4",
        "poster": "assets/videos/ablations/ll-mei-000076-first-step-30s.jpg",
        "ours": false
      },
      {
        "label": "Student-latest KV",
        "note": "Teacher uses student KV",
        "src": "assets/videos/ablations/ll-mei-000076-student-latest-kv-30s.mp4",
        "poster": "assets/videos/ablations/ll-mei-000076-student-latest-kv-30s.jpg",
        "ours": false
      },
      {
        "label": "OPSD-V (full)",
        "note": "Our method",
        "src": "assets/videos/ablations/ll-mei-000076-opsdv-30s.mp4",
        "poster": "assets/videos/ablations/ll-mei-000076-opsdv-30s.jpg",
        "ours": true
      }
    ],
    "detailFigure": {
      "src": "assets/figures/ablation-details/ll-mei-000076.png",
      "summary": "Studio Dance Routine: enlarged dancer details",
      "alt": "Four methods at 10 s and 30 s, with full frames and enlarged left and central dancer groups.",
      "caption": "Full frames at 10 s and 30 s. Blue outlines mark the left group; orange outlines mark the central group. All methods use identical crop coordinates. Full frames show the overall group composition. Click the figure for full resolution."
    }
  },
  {
    "title": "Long bridge construction",
    "meta": "LongLive · MeiBench · Seed 1",
    "prompt": "The video presents an aerial view of a construction site for a long bridge spanning over a river. The bridge is partially completed, with two main lanes visible and construction materials and equipment scattered around the site. The river below is calm, and the surrounding area includes a mix of residential buildings and greenery. The sky is clear and blue, indicating good weather conditions. The bridge is being built over a river, with the construction materials and equipment scattered around the site. The video shows the progress of the construction from different angles, highlighting the ongoing work and the layout of the bridge.",
    "duration": 30,
    "videos": [
      {
        "label": "x₀ supervision",
        "note": "Clean-latent target",
        "src": "assets/videos/ablations/ll-mei-000003-x0-30s.mp4",
        "poster": "assets/videos/ablations/ll-mei-000003-x0-30s.jpg",
        "ours": false
      },
      {
        "label": "First-step only",
        "note": "One supervised step",
        "src": "assets/videos/ablations/ll-mei-000003-first-step-30s.mp4",
        "poster": "assets/videos/ablations/ll-mei-000003-first-step-30s.jpg",
        "ours": false
      },
      {
        "label": "Student-latest KV",
        "note": "Teacher uses student KV",
        "src": "assets/videos/ablations/ll-mei-000003-student-latest-kv-30s.mp4",
        "poster": "assets/videos/ablations/ll-mei-000003-student-latest-kv-30s.jpg",
        "ours": false
      },
      {
        "label": "OPSD-V (full)",
        "note": "Our method",
        "src": "assets/videos/ablations/ll-mei-000003-opsdv-30s.mp4",
        "poster": "assets/videos/ablations/ll-mei-000003-opsdv-30s.jpg",
        "ours": true
      }
    ],
    "detailFigure": {
      "src": "assets/figures/ablation-details/ll-mei-000003.png",
      "summary": "Long bridge construction: enlarged housing and bridge details",
      "alt": "Four methods at 10 s and 30 s, with full frames and enlarged housing and bridge-deck regions.",
      "caption": "Full frames at 10 s and 30 s. Blue outlines mark housing; orange outlines mark the bridge deck. Equal-sized crops follow corresponding structures as the camera view changes. Click the figure for full resolution."
    }
  }
];

// Anonymous pages cannot fetch media bytes: a classic-script loader can prepare
// seekable Blob URLs through prepareSource without requiring CORS.
// A single cancellable operation owns each user action and its buffering cycles.
function attachPlayer({videos, play, seek, clock, status, title, initialDuration, onPlay = () => {}, onActivate = () => {}, isNativeSource = () => false, suspendSource = () => false, documentTarget = document, prepareSource = async v => v.dataset.src, ensureBuffered = null, releaseSource = () => {}}) {
  const bufferSource=ensureBuffered||async function(){};
  const timeout=120000;
  const format=t=>`${Math.floor(Math.max(0,t)/60)}:${String(Math.floor(Math.max(0,t)%60)).padStart(2,'0')}`;
  let duration=initialDuration,target=0,intent=false,phase='paused',destroyed=false;
  let operation=null,frame=0,scrubbing=false,resumeAfterScrub=false,warming=false,warmReady=false,warmPromise=null;
  const preparedSources=new Map();
  const listeners=[];
  const listen=(node,event,handler)=>{node.addEventListener(event,handler);listeners.push(()=>node.removeEventListener(event,handler));};
  const render=()=>{
    seek.value=String(target);seek.max=String(duration);seek.setAttribute('aria-valuetext',format(target));
    clock.textContent=`${format(target)} / ${format(duration)}`;
    play.textContent=intent?'Ⅱ Pause':'▶ Play';play.setAttribute('aria-label',`${intent?'Pause':'Play'} ${title}`);
  };
  const stopMedia=()=>{cancelAnimationFrame(frame);videos.forEach(v=>{v.pause();v.playbackRate=1;});};
  const suspend=({deactivate=false}={})=>videos.forEach(v=>{
    // Stream sources keep their decoded buffers, but must stop background I/O.
    // An unfinished source may be invalidated by the loader on cancellation.
    if(suspendSource(v)===true){preparedSources.delete(v);warmReady=false;}
    if(isNativeSource(v)){
      v.preload='none';
      // Keeping the source on an ordinary Pause preserves the displayed frame.
      // Deactivation unloads it to release bandwidth for the next visible case.
      if(deactivate&&v.getAttribute('src')){v.removeAttribute('src');v.load();warmReady=false;}
    }
  });
  const cancel=(options={})=>{operation?.abort();operation=null;warming=false;warmPromise=null;stopMedia();suspend(options);};
  const pause=(options={})=>{intent=false;scrubbing=false;resumeAfterScrub=false;cancel(options);phase='paused';status.textContent='';render();};
  const current=op=>!!op&&!destroyed&&!op.signal.aborted&&operation===op;
  const cancelled=()=>new DOMException('Cancelled','AbortError');
  const timeLeft=deadline=>Math.max(1,deadline-performance.now());
  const preparedSource=v=>{
    if(preparedSources.has(v))return preparedSources.get(v).promise;
    const entry={promise:null};
    entry.promise=Promise.resolve().then(()=>{
      if(destroyed||!operation)throw cancelled();
      return prepareSource(v);
    }).then(url=>{
      if(destroyed){releaseSource(v);throw cancelled();}
      if(typeof url!=='string'||!url)throw new Error('media source');
      return url;
    }).catch(error=>{
      if(preparedSources.get(v)===entry)preparedSources.delete(v);
      throw error;
    });
    preparedSources.set(v,entry);return entry.promise;
  };
  const rangeEnd=(ranges,t)=>{
    for(let i=0;i<ranges.length;i++)if(ranges.start(i)<=t+.01&&ranges.end(i)>=t)return ranges.end(i);
    return -1;
  };
  const bufferedAt=(v,t)=>rangeEnd(v.buffered,t)>=t;
  const canSeekTo=(v,t)=>bufferedAt(v,t)||(isNativeSource(v)&&rangeEnd(v.seekable,t)>=t)||((!ensureBuffered||v.dataset.mediaComplete==='true')&&v.getAttribute('src')?.startsWith('blob:')&&rangeEnd(v.seekable,t)>=t);
  const playbackReady=v=>{
    if(v.seeking||v.readyState<3)return false;
    const remaining=Math.max(0,(Number.isFinite(v.duration)?v.duration:duration)-v.currentTime);
    return v.readyState>=4||rangeEnd(v.buffered,v.currentTime)>=v.currentTime+Math.min(.75,remaining);
  };
  const waitForTask=(promise,signal,deadline)=>new Promise((resolve,reject)=>{
    let timer,settled=false;
    const finish=(error,value)=>{if(settled)return;settled=true;clearTimeout(timer);signal.removeEventListener('abort',abort);error?reject(error):resolve(value);};
    const abort=()=>finish(cancelled());
    promise.then(value=>finish(null,value),finish);
    if(signal.aborted)return abort();
    signal.addEventListener('abort',abort,{once:true});
    timer=setTimeout(()=>finish(new Error('timeout')),timeLeft(deadline));
  });
  const waitFor=(v,predicate,signal,deadline)=>new Promise((resolve,reject)=>{
    const events=['loadedmetadata','durationchange','loadeddata','canplay','canplaythrough','seeked','progress','timeupdate','suspend'];
    let timer,poll,settled=false;
    const finish=error=>{
      if(settled)return;settled=true;clearTimeout(timer);clearInterval(poll);
      events.forEach(e=>v.removeEventListener(e,check));v.removeEventListener('error',failure);signal.removeEventListener('abort',abort);
      error?reject(error):resolve();
    };
    const check=()=>{if(predicate())finish();};
    const failure=()=>finish(new Error('media'));
    const abort=()=>finish(cancelled());
    if(signal.aborted)return abort();
    if(v.error)return failure();
    if(predicate())return finish();
    events.forEach(e=>v.addEventListener(e,check));v.addEventListener('error',failure);signal.addEventListener('abort',abort,{once:true});
    timer=setTimeout(()=>finish(new Error('timeout')),timeLeft(deadline));
    poll=setInterval(check,100);
  });
  const fail=(op,error)=>{
    if(!current(op))return;
    cancel({deactivate:true});intent=false;phase='paused';
    status.textContent=error.name==='AbortError'?'Playback stopped. Press Play to retry.':'This position could not load. Press Play to retry, or choose another time.';render();
  };

  const tick=()=>{
    if(phase!=='playing'||!intent||destroyed)return;
    target=videos[0].currentTime;
    if(target>=duration-.04){target=duration;pause();return;}
    if(videos.some(v=>v.seeking||v.readyState<3)){buffer(operation);return;}
    // Correct drift with playback speed, never a repeating hard-seek loop.
    videos.slice(1).forEach(v=>{
      const drift=v.currentTime-target;
      v.playbackRate=Math.abs(drift)>.035?1-Math.sign(drift)*Math.min(.15,Math.max(.05,Math.abs(drift)*.25)):1;
    });
    render();frame=requestAnimationFrame(tick);
  };
  async function start(op,deadline){
    if(!current(op)||!intent)return;
    phase='starting';
    // A waiting event during these play promises must not pause/abort them.
    await waitForTask(Promise.all(videos.map(v=>v.play())),op.signal,deadline);
    if(!current(op))return;
    phase='playing';status.textContent='';render();frame=requestAnimationFrame(tick);
  }
  async function buffer(op){
    if(!current(op)||!intent||phase!=='playing')return;
    phase='buffering';stopMedia();
    target=videos[0].currentTime;status.textContent='Buffering synchronized videos…';render();
    const deadline=performance.now()+timeout;
    try{
      await waitForTask(Promise.all(videos.map(v=>bufferSource(v,target,{signal:op.signal,ahead:2}))),op.signal,deadline);
      await Promise.all(videos.map(v=>waitFor(v,()=>playbackReady(v),op.signal,deadline)));
      if(current(op))await start(op,deadline);
    }catch(error){fail(op,error);}
  }
  async function run(time,resume){
    if(destroyed)return;
    cancel();const op=new AbortController();operation=op;intent=resume;warmReady=false;
    onActivate();if(resume)onPlay();
    const deadline=performance.now()+timeout;
    phase='seeking';target=Math.max(0,Math.min(time,duration));
    status.textContent=`Loading videos at ${format(target)}…`;render();
    try{
      const sources=await waitForTask(Promise.all(videos.map(preparedSource)),op.signal,deadline);
      if(!current(op))return;
      videos.forEach((v,index)=>{
        v.preload='auto';
        if(!v.getAttribute('src')||v.error){v.src=sources[index];v.load();}
      });
      await waitForTask(Promise.all(videos.map(v=>bufferSource(v,target,{signal:op.signal,ahead:1}))),op.signal,deadline);
      await Promise.all(videos.map(v=>waitFor(v,()=>v.readyState>=1,op.signal,deadline)));
      if(!current(op))return;
      duration=Math.min(initialDuration,...videos.map(v=>v.duration).filter(Number.isFinite));
      const atEnd=time>=duration-.04;
      const position=Math.min(target,Math.max(0,duration-.001));
      if(atEnd)intent=false;
      if(position>.01){
        status.textContent=`Buffering videos to ${format(position)}…`;
        // MediaSource seekable spans unloaded gaps. Direct HTTP range sources
        // and complete Blob files may seek before the target is buffered.
        await Promise.all(videos.map(v=>waitFor(v,()=>canSeekTo(v,position),op.signal,deadline)));
        if(!current(op))return;
      }
      target=position;status.textContent=`Seeking to ${format(position)}…`;
      // Exactly one currentTime write per video for this committed seek.
      videos.forEach(v=>{if(Math.abs(v.currentTime-position)>.01)v.currentTime=position;});
      render();
      await Promise.all(videos.map(v=>waitFor(v,()=>!v.seeking&&v.readyState>=(intent?3:2)&&Math.abs(v.currentTime-position)<.13,op.signal,deadline)));
      if(!current(op))return;
      if(!intent){phase='paused';if(atEnd)target=duration;suspend();status.textContent='';render();return;}
      await Promise.all(videos.map(v=>waitFor(v,()=>playbackReady(v),op.signal,deadline)));
      if(current(op))await start(op,deadline);
    }catch(error){fail(op,error);}
  }
  async function warm(){
    if(destroyed||intent||scrubbing||(operation&&!warming))return false;
    if(warmReady)return true;
    if(warming)return warmPromise;
    // Warm only the current visible case. This never activates playback or
    // announces loading; the page scheduler cancels it when priority changes.
    cancel();const op=new AbortController();operation=op;warming=true;phase='warming';
    const deadline=performance.now()+timeout;
    const promise=(async()=>{
      try{
        const sources=await waitForTask(Promise.all(videos.map(preparedSource)),op.signal,deadline);
        if(!current(op))return false;
        videos.forEach((v,index)=>{
          v.preload=isNativeSource(v)?'metadata':'auto';
          if(!v.getAttribute('src')||v.error){v.src=sources[index];v.load();}
        });
        // Direct files use browser metadata preloading; script streams prepare
        // one second so their first group is ready without downloading the tail.
        await waitForTask(Promise.all(videos.filter(v=>!isNativeSource(v)).map(v=>bufferSource(v,target,{signal:op.signal,ahead:1}))),op.signal,deadline);
        await Promise.all(videos.map(v=>waitFor(v,()=>v.readyState>=1,op.signal,deadline)));
        if(!current(op))return false;
        warming=false;warmReady=true;phase='paused';operation=null;suspend();return true;
      }catch(error){
        if(current(op)){cancel({deactivate:true});phase='paused';}
        return false;
      }finally{
        if(warmPromise===promise)warmPromise=null;
      }
    })();
    warmPromise=promise;return promise;
  }
  function beginScrub(){
    if(scrubbing)return;
    resumeAfterScrub=intent;cancel();intent=false;scrubbing=true;phase='scrubbing';status.textContent='';render();
  }
  function commitScrub(){
    if(!scrubbing)return;
    const position=target,resume=resumeAfterScrub;
    scrubbing=false;resumeAfterScrub=false;run(position,resume);
  }
  listen(play,'click',()=>{if(intent)pause();else{scrubbing=false;run(target>=duration-.04?0:target,true);}});
  listen(seek,'pointerdown',beginScrub);
  listen(seek,'input',()=>{const position=Number(seek.value);beginScrub();target=position;render();});
  listen(seek,'change',commitScrub);
  listen(documentTarget,'pointerup',commitScrub);
  listen(seek,'pointercancel',commitScrub);
  videos.forEach(v=>{
    listen(v,'waiting',()=>{
      const op=operation;
      queueMicrotask(()=>{if(current(op)&&phase==='playing'&&intent&&!scrubbing&&(v.seeking||v.readyState<3))buffer(op);});
    });
    listen(v,'error',()=>{
      if(v.getAttribute('src')&&!destroyed){
        const wasWarming=warming;pause({deactivate:true});releaseSource(v);preparedSources.delete(v);warmReady=false;
        if(!wasWarming)status.textContent='A video could not load. Press Play to retry.';
      }
    });
  });
  render();
  return {
    pause,
    warm,
    getState(){return {intent,phase,warming,warmed:warmReady,target,destroyed};},
    restart(){
      const resume=intent;scrubbing=false;resumeAfterScrub=false;
      if(!resume&&videos.every(v=>!v.getAttribute('src'))){target=0;status.textContent='';render();return;}
      run(0,resume);
    },
    destroy(){
      if(destroyed)return;
      destroyed=true;pause();listeners.forEach(remove=>remove());
      videos.forEach(v=>{v.removeAttribute('src');v.load();});
      preparedSources.forEach((_entry,v)=>releaseSource(v));preparedSources.clear();
    },
  };
}

// One visible comparison may prepare media; an explicit play/seek owns bandwidth.
function createMediaPriority({documentTarget=document, windowTarget=window,
  Observer=IntersectionObserver, delay=450, schedule=setTimeout, unschedule=clearTimeout}={}) {
  const entries=new Map();
  let active=null,prepared=null,timer=null,disposed=false;
  const clearTimer=()=>{if(timer!==null)unschedule(timer);timer=null;};
  const deactivate=c=>{
    const entry=entries.get(c);if(!entry)return;
    if(entry.engaged){c.pause({deactivate:true});entry.engaged=false;}
    if(prepared===c)prepared=null;
  };
  const visible=c=>{const e=entries.get(c);return e&&e.visible&&e.ratio>=.15;};
  const inView=c=>entries.get(c)?.visible;
  const stopAll=()=>{
    clearTimer();entries.forEach((_entry,c)=>deactivate(c));active=null;prepared=null;
  };
  const canWarm=()=>!documentTarget.hidden&&!windowTarget.navigator?.connection?.saveData
    &&!['slow-2g','2g'].includes(windowTarget.navigator?.connection?.effectiveType);
  const choose=()=>{
    if(active&&inView(active))return active;
    if(!canWarm())return null;
    return [...entries.keys()].filter(visible).sort((a,b)=>{
      const ar=a.el.getBoundingClientRect(),br=b.el.getBoundingClientRect();
      const center=windowTarget.innerHeight/2;
      return Math.abs((ar.top+ar.bottom)/2-center)-Math.abs((br.top+br.bottom)/2-center);
    })[0]||null;
  };
  const update=()=>{
    if(disposed)return;clearTimer();
    if(documentTarget.hidden){stopAll();return;}
    if(active&&!inView(active)){deactivate(active);active=null;}
    const candidate=choose();
    if(prepared&&prepared!==candidate)deactivate(prepared);
    if(!candidate||candidate===prepared||candidate===active)return;
    timer=schedule(()=>{
      timer=null;if(disposed||candidate!==choose())return;
      entries.forEach((_entry,c)=>{if(c!==candidate)deactivate(c);});
      const entry=entries.get(candidate);if(!entry)return;
      entry.engaged=true;prepared=candidate;
      Promise.resolve(candidate.warm()).catch(()=>{});
    },delay);
  };
  const observer=new Observer(changes=>{
    for(const change of changes){
      const c=[...entries.keys()].find(c=>c.el===change.target);if(!c)continue;
      const entry=entries.get(c);entry.visible=change.isIntersecting;entry.ratio=change.intersectionRatio;
    }
    update();
  },{threshold:[0,.15,.35,.65,1]});
  const visibility=()=>update();
  documentTarget.addEventListener('visibilitychange',visibility);
  windowTarget.addEventListener('pagehide',stopAll);
  return {
    register(c){entries.set(c,{visible:false,ratio:0,engaged:false});observer.observe(c.el);},
    activate(c){
      clearTimer();entries.forEach((_entry,other)=>{if(other!==c)deactivate(other);});
      active=c;prepared=c;const entry=entries.get(c);if(entry)entry.engaged=true;
    },
    remove(c){
      observer.unobserve(c.el);entries.delete(c);
      if(active===c)active=null;if(prepared===c)prepared=null;update();
    },
    stopAll,
    destroy(){stopAll();disposed=true;observer.disconnect();entries.clear();
      documentTarget.removeEventListener('visibilitychange',visibility);windowTarget.removeEventListener('pagehide',stopAll);},
  };
}

// Classic-script transport works in the anonymous host's opaque-origin sandbox.
// Encoded H.264 samples are copied into fragmented MP4; no video is re-encoded.
const streamRequests = new Map();
const streamEntries = new WeakMap();
const streamPrefetchAhead = 12;
const streamAbort = () => new DOMException('Cancelled', 'AbortError');
const streamKey = src => src.split('/media/')[1]?.split('?')[0];
const streamBytes = encoded => {
  const binary = atob(encoded), bytes = new Uint8Array(binary.length);
  for (let i=0;i<binary.length;i++) bytes[i]=binary.charCodeAt(i);
  return bytes;
};
function requestStreamScript(src, signal) {
  if (signal?.aborted) return Promise.reject(streamAbort());
  const key=streamKey(src);
  if (!key) return Promise.reject(new Error('Invalid video path'));
  // Files have immutable keys. A canceled request may still execute, but its
  // identical bytes can safely satisfy a later request for the same fragment.
  const previous=streamRequests.get(key);
  if (previous) return previous.promise;
  const request={src,key,script:document.createElement('script')};
  request.promise=new Promise((resolve,reject)=>{request.resolve=resolve;request.reject=reject;});
  request.finish=(error,payload)=>{
    if(streamRequests.get(key)!==request)return;
    streamRequests.delete(key);clearTimeout(request.timer);
    signal?.removeEventListener('abort',request.abort);
    request.script.onerror=request.script.onload=null;request.script.remove();
    error?request.reject(error):request.resolve(payload);
  };
  request.abort=()=>request.finish(streamAbort());
  request.script.async=true;request.script.src=src;
  request.script.onerror=()=>request.finish(new Error('Video fragment could not load'));
  request.script.onload=()=>request.finish(new Error('Video fragment callback missing'));
  request.timer=setTimeout(()=>request.finish(new Error('Video fragment timed out')),45000);
  signal?.addEventListener('abort',request.abort,{once:true});
  streamRequests.set(key,request);document.head.appendChild(request.script);
  return request.promise;
}
window.__opsdvStreamReady = function(key,payload) {
  streamRequests.get(key)?.finish(null,payload);
};
async function fetchStreamScript(src,signal) {
  for(let attempt=0;attempt<2;attempt++) {
    try{return await requestStreamScript(src,signal);}
    catch(error){if(error.name==='AbortError'||attempt===1)throw error;}
  }
}
function waitStreamTask(promise,signal) {
  if(!signal)return promise;
  if(signal.aborted)return Promise.reject(streamAbort());
  return new Promise((resolve,reject)=>{
    const abort=()=>{cleanup();reject(streamAbort());};
    const cleanup=()=>signal.removeEventListener('abort',abort);
    signal.addEventListener('abort',abort,{once:true});
    promise.then(value=>{cleanup();resolve(value);},error=>{cleanup();reject(error);});
  });
}
function streamRangeContains(video,start,end) {
  for(let i=0;i<video.buffered.length;i++) {
    if(video.buffered.start(i)<=start+.08&&video.buffered.end(i)>=end-.08)return true;
  }
  return false;
}
function mutateStreamBuffer(entry,mutate) {
  const next=entry.appendQueue.catch(()=>{}).then(()=>{
    if(entry.released)throw streamAbort();
    return new Promise((resolve,reject)=>{
      const buffer=entry.buffer;
      const cleanup=()=>{buffer.removeEventListener('updateend',done);buffer.removeEventListener('error',error);buffer.removeEventListener('abort',abort);entry.lifetime.signal.removeEventListener('abort',abort);};
      const done=()=>{cleanup();resolve();};
      const error=()=>{cleanup();reject(new Error('Video fragment could not decode'));};
      const abort=()=>{cleanup();reject(streamAbort());};
      buffer.addEventListener('updateend',done,{once:true});buffer.addEventListener('error',error,{once:true});buffer.addEventListener('abort',abort,{once:true});entry.lifetime.signal.addEventListener('abort',abort,{once:true});
      try{mutate(buffer);}catch(cause){cleanup();reject(cause);}
    });
  });
  entry.appendQueue=next;return next;
}
async function readStreamSegment(entry,index,signal) {
  const segment=entry.manifest.segments[index],src=entry.root+segment.path;
  let cached=entry.bundles.get(src);
  if(cached&&!cached.complete&&cached.signal?.aborted){entry.bundles.delete(src);cached=null;}
  if(!cached) {
    cached={signal,complete:false,promise:null};
    cached.promise=fetchStreamScript(src,signal).then(payload=>{cached.complete=true;return payload;}).catch(error=>{
      if(entry.bundles.get(src)===cached)entry.bundles.delete(src);
      throw error;
    });
    entry.bundles.set(src,cached);
  }
  const payload=await waitStreamTask(cached.promise,signal);
  const encoded=typeof payload==='string'?payload:payload?.fragments?.[index];
  if(typeof encoded!=='string')throw new Error('Video bundle is missing a fragment');
  return streamBytes(encoded);
}
async function appendStreamSegment(entry,index,signal,force=false) {
  const segment=entry.manifest.segments[index];
  if(!force&&streamRangeContains(entry.video,segment.start,Math.min(segment.end,entry.manifest.duration)))return;
  const bytes=await readStreamSegment(entry,index,signal);
  if(signal.aborted||entry.released)throw streamAbort();
  try{await mutateStreamBuffer(entry,buffer=>{if(signal.aborted)throw streamAbort();buffer.appendBuffer(bytes);});}
  catch(error){
    if(error.name!=='QuotaExceededError')throw error;
    // Keep the nearby playback window; distant fragments can be downloaded again.
    const before=Math.max(0,entry.target-15),after=Math.min(entry.manifest.duration,entry.target+25);
    if(before>0)await mutateStreamBuffer(entry,buffer=>buffer.remove(0,before));
    if(after<entry.manifest.duration)await mutateStreamBuffer(entry,buffer=>buffer.remove(after,entry.manifest.duration));
    if(signal.aborted||entry.released)throw streamAbort();
    await mutateStreamBuffer(entry,buffer=>{if(signal.aborted)throw streamAbort();buffer.appendBuffer(bytes);});
  }
  entry.lastAppended=index;
  if(index===entry.manifest.segments.length-1)entry.finalAppended=true;
}
function streamIndexes(entry,time,ahead) {
  const segments=entry.manifest.segments;
  const end=Math.min(entry.manifest.duration,time+Math.max(.25,ahead));
  let first=segments.findIndex(segment=>segment.end>time+.001);
  if(first<0)first=segments.length-1;
  const indexes=[];
  first=segments[first].decodeFrom??first;
  for(let i=first;i<segments.length&&segments[i].start<end;i++)indexes.push(i);
  return indexes;
}
function finishStreamIfComplete(entry) {
  const duration=entry.manifest.duration;
  if(!entry.released&&entry.finalAppended&&entry.media?.readyState==='open'&&!entry.buffer.updating&&streamRangeContains(entry.video,Math.max(0,duration-.2),duration)) {
    // Signal EOF so the decoder releases reordered B-frames at the final seek.
    // A later append automatically reopens an ended MediaSource, per MSE.
    entry.media.endOfStream();
  }
}
function streamWindowBuffered(entry,time,ahead) {
  const target=Math.max(0,Math.min(time,entry.manifest.duration-.001));
  const end=Math.min(entry.manifest.duration,target+Math.max(.25,ahead));
  const ranges=entry.video.buffered;
  for(let index=0;index<ranges.length;index++) {
    if(ranges.start(index)<=target+.001&&ranges.end(index)>=end-.001)return true;
  }
  return false;
}
async function performStreamFill(entry,time,ahead,signal) {
  if(signal.aborted||entry.released)throw streamAbort();
  await waitStreamTask(entry.ready,signal);
  let indexes=streamIndexes(entry,time,ahead);
  let primeCachedPrefix=false;
  if(streamWindowBuffered(entry,time,ahead)) {
    const ranges=entry.video.buffered;
    const target=Math.max(0,Math.min(time,entry.manifest.duration-.001));
    let contiguousEnd=entry.manifest.duration;
    for(let index=0;index<ranges.length;index++) {
      if(ranges.start(index)<=target+.001&&ranges.end(index)>=target){contiguousEnd=ranges.end(index);break;}
    }
    const nextMissing=entry.manifest.segments.findIndex(segment=>segment.end>contiguousEnd+.08);
    // A foreground seek may return to cached early frames while the append
    // parser remains at a distant tail. Prime the cached contiguous prefix now,
    // while playback is paused, so background loading never replaces live refs.
    primeCachedPrefix=entry.foreground>0&&nextMissing>=0&&nextMissing!==entry.lastAppended+1;
    if(!primeCachedPrefix){finishStreamIfComplete(entry);return;}
    const first=indexes[0];
    indexes=Array.from({length:nextMissing-first},(_,offset)=>first+offset);
    if(!indexes.length){finishStreamIfComplete(entry);return;}
  }
  const missing=indexes.find(index=>{
    const segment=entry.manifest.segments[index];
    return !streamRangeContains(entry.video,segment.start,Math.min(segment.end,entry.manifest.duration));
  });
  // Continue normal playback strictly after the last appended fragment. Replaying
  // an already playing GOP can invalidate its decoded reference frames in MSE.
  // A jump still needs a complete IDR chain; never skip pieces within that chain.
  const sequential=!primeCachedPrefix&&missing!==undefined&&missing===entry.lastAppended+1;
  let start=sequential?missing:indexes[0];
  let last=indexes[indexes.length-1];
  for(let attempt=0;attempt<2;attempt++) {
    for(let index=start;index<=last;index++) {
      if(signal.aborted||entry.released)throw streamAbort();
      await appendStreamSegment(entry,index,signal,true);
    }
    if(signal.aborted||entry.released)throw streamAbort();
    finishStreamIfComplete(entry);
    if(streamWindowBuffered(entry,time,ahead))return;
    // One following fragment can release reordered boundary B-frames.
    start=indexes[0];last=Math.min(entry.manifest.segments.length-1,last+1);
  }
  throw new Error('The requested video position is not buffered');
}
function fillStreamWindow(entry,time,ahead,signal) {
  // A canceled append must reach updateend before the next seek decides its
  // decode chain. Serializing whole fills prevents stale jobs interleaving.
  const task=entry.fillQueue.catch(()=>{}).then(()=>performStreamFill(entry,time,ahead,signal));
  entry.fillQueue=task;
  return task;
}
function validateStreamManifest(manifest) {
  if(!manifest||typeof manifest.mime!=='string'||!Number.isFinite(manifest.duration)||manifest.duration<=0||typeof manifest.init!=='string'||!Array.isArray(manifest.segments)||!manifest.segments.length)throw new Error('Invalid video manifest');
  let previousStart=-Infinity,previousEnd=-Infinity;
  for(const [index,segment] of manifest.segments.entries()) {
    // B-frame presentation intervals may overlap across decode-ordered fragments.
    // Their starts and ends must advance, but disjoint intervals are not required.
    if(typeof segment.path!=='string'||!Number.isFinite(segment.start)||!Number.isFinite(segment.end)||segment.start<previousStart||segment.end<previousEnd||segment.end<=segment.start)throw new Error('Invalid video segment');
    if(segment.decodeFrom!==undefined&&(!Number.isInteger(segment.decodeFrom)||segment.decodeFrom<0||segment.decodeFrom>index))throw new Error('Invalid video keyframe dependency');
    previousStart=segment.start;previousEnd=segment.end;
  }
}
function prepareStreamSource(video) {
  let entry=streamEntries.get(video);
  if(entry){entry.suspended=false;return entry.promise;}
  const src=video.dataset.src;
  entry={video,src,root:src.slice(0,src.indexOf('/media/')+7),lifetime:new AbortController(),released:false,suspended:false,generation:0,prepared:false,url:null,target:0,appendQueue:Promise.resolve(),fillQueue:Promise.resolve(),foreground:0,fill:null,lastAppended:-1,finalAppended:false,bundles:new Map(),backgroundRetryAt:0};
  streamEntries.set(video,entry);
  entry.promise=(async()=>{
    const manifest=await fetchStreamScript(src,entry.lifetime.signal);validateStreamManifest(manifest);entry.manifest=manifest;
    if(entry.released)throw streamAbort();
    if(manifest.fragments)entry.bundles.set(src,{complete:true,promise:Promise.resolve(manifest)});
    const MediaSourceClass=window.MediaSource;
    if(!MediaSourceClass?.isTypeSupported(manifest.mime)) {
      const parts=[streamBytes(manifest.init)];
      for(let index=0;index<manifest.segments.length;index++)parts.push(await readStreamSegment(entry,index,entry.lifetime.signal));
      if(entry.released)throw streamAbort();
      entry.url=URL.createObjectURL(new Blob(parts,{type:'video/mp4'}));entry.fallback=true;
      video.dataset.mediaComplete='true';entry.ready=Promise.resolve();entry.prepared=true;return entry.url;
    }
    const media=new MediaSourceClass();entry.media=media;entry.url=URL.createObjectURL(media);
    entry.ready=new Promise((resolve,reject)=>{
      const abort=()=>{media.removeEventListener('sourceopen',open);reject(streamAbort());};
      const open=async()=>{
        entry.lifetime.signal.removeEventListener('abort',abort);
        try{
          if(entry.released)throw streamAbort();
          entry.buffer=media.addSourceBuffer(manifest.mime);
          if(Number.isFinite(manifest.timestampOffset))entry.buffer.timestampOffset=manifest.timestampOffset;
          media.duration=manifest.duration;
          await mutateStreamBuffer(entry,buffer=>buffer.appendBuffer(streamBytes(manifest.init)));
          resolve();
        }catch(error){reject(error);}
      };
      media.addEventListener('sourceopen',open,{once:true});entry.lifetime.signal.addEventListener('abort',abort,{once:true});
    });
    // A destroyed view may never ask for the initialization promise.
    entry.ready.catch(()=>{});
    entry.prefetch=()=>{
      if(entry.released||entry.suspended||entry.foreground||entry.fill||video.paused||video.seeking||Date.now()<entry.backgroundRetryAt)return;
      const time=video.currentTime;
      if(streamWindowBuffered(entry,time,streamPrefetchAhead))return;
      const controller=new AbortController();entry.fill=controller;entry.target=time;
      fillStreamWindow(entry,time,streamPrefetchAhead,controller.signal).catch(error=>{
        if(error.name!=='AbortError')entry.backgroundRetryAt=Date.now()+30000;
      }).finally(()=>{if(entry.fill===controller)entry.fill=null;});
    };
    video.addEventListener('timeupdate',entry.prefetch);
    entry.prepared=true;
    return entry.url;
  })().catch(error=>{if(streamEntries.get(video)===entry)releaseStreamSource(video);throw error;});
  return entry.promise;
}
async function ensureStreamBuffered(video,time,{signal,ahead=4}={}) {
  const entry=streamEntries.get(video);
  if(!entry)throw new Error('Video has not been prepared');
  if(signal?.aborted)throw streamAbort();
  const generation=entry.generation;entry.suspended=false;
  await waitStreamTask(entry.promise,signal);
  if(entry.released||entry.suspended||entry.generation!==generation)throw streamAbort();
  if(entry.fallback)return;
  entry.fill?.abort();entry.fill=null;
  const controller=new AbortController();entry.fill=controller;entry.target=time;entry.foreground++;
  const abort=()=>controller.abort();
  signal?.addEventListener('abort',abort,{once:true});
  entry.lifetime.signal.addEventListener('abort',abort,{once:true});
  if(signal?.aborted)controller.abort();
  try{await fillStreamWindow(entry,time,ahead,controller.signal);}
  finally{
    entry.foreground--;signal?.removeEventListener('abort',abort);entry.lifetime.signal.removeEventListener('abort',abort);
    if(entry.fill===controller)entry.fill=null;
  }
}
function suspendStreamSource(video) {
  const entry=streamEntries.get(video);
  if(!entry)return false;
  entry.suspended=true;entry.generation++;
  // An unfinished preparation must reject so the player can discard its promise.
  // Keep a completed source and its downloaded bundles for a later resume.
  if(!entry.prepared){releaseStreamSource(video);return true;}
  entry.fill?.abort();entry.fill=null;
  return false;
}
function releaseStreamSource(video) {
  const entry=streamEntries.get(video);if(!entry)return;
  streamEntries.delete(video);entry.released=true;entry.fill?.abort();entry.lifetime.abort();
  delete video.dataset.mediaComplete;
  if(entry.prefetch)video.removeEventListener('timeupdate',entry.prefetch);
  if(entry.url)URL.revokeObjectURL(entry.url);
  entry.bundles.clear();
}


const reviewMatch = location.pathname.match(/^\/w\/([^/]+)(?:\/|$)/);
const reviewMedia = path => {
  const relative = path.replace(/^assets\/videos\//, '').split('?')[0].replace(/\.mp4$/, '/manifest.js');
  return reviewMatch
    ? '/api/repo/' + encodeURIComponent(decodeURIComponent(reviewMatch[1])) + '/file/media/' + relative
    : '../media/' + relative;
};

const nativeFeatured = new Set(featuredSlugs);
const nativeRoot = ['localhost','127.0.0.1','[::1]'].includes(location.hostname)
  ? 'assets/videos/featured/'
  : 'https://opsd-v.github.io/supplementary-materials/assets/videos/featured/';
for (const item of cases) {
  if (nativeFeatured.has(item.slug)) {
    for (const key of ['baseVideo','oursVideo','sftVideo','rlVideo']) {
      item[key] = nativeRoot + item[key].split('?')[0].split('/').pop();
    }
    continue;
  }
  for (const key of ['baseVideo','oursVideo','sftVideo','rlVideo']) item[key] = reviewMedia(item[key]);
}
for (const item of [...motivations, ...ablationExamples]) {
  for (const video of item.videos) video.src = reviewMedia(video.src);
}

const nativeComparisonRoot = ['localhost','127.0.0.1','[::1]'].includes(location.hostname)
  ? 'assets/videos/gradient-comparison/'
  : 'https://opsd-v.github.io/supplementary-materials/assets/videos/gradient-comparison/';
for (const item of gradientComparisons) {
  for (const video of item.videos) video.src = nativeComparisonRoot + video.src.split('?')[0].split('/').pop();
}
const nativeCacheLatestRoot = ['localhost','127.0.0.1','[::1]'].includes(location.hostname)
  ? 'assets/videos/cache-latest-gt/'
  : 'https://opsd-v.github.io/supplementary-materials/assets/videos/cache-latest-gt/';
for (const item of cacheLatestComparisons) {
  for (const video of item.videos) {
    video.src = nativeCacheLatestRoot + video.src.split('?')[0].split('/').pop();
  }
}
if (typeof demoOverview !== 'undefined') {
  const demoRoot = ['localhost','127.0.0.1','[::1]'].includes(location.hostname)
    ? 'assets/videos/demo/' : 'https://opsd-v.github.io/supplementary-materials/assets/videos/demo/';
  demoOverview.src = demoRoot + demoOverview.src.split('/').pop();
}
const isNativeReviewSource = video => video.dataset.transport === 'native';
const prepareReviewSource = video => isNativeReviewSource(video) ? Promise.resolve(video.dataset.src) : prepareStreamSource(video);
const ensureReviewBuffered = (video,time,options) => isNativeReviewSource(video) ? Promise.resolve() : ensureStreamBuffered(video,time,options);
const suspendReviewSource = video => isNativeReviewSource(video) ? false : suspendStreamSource(video);
const releaseReviewSource = video => { if (!isNativeReviewSource(video)) releaseStreamSource(video); };


const $ = (s, root = document) => root.querySelector(s);
const escape = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const focusLabels={quality:'Quality',dynamics:'Dynamics',both:'Quality + Dynamics'};
const focusBadge=(category,extra='')=>focusLabels[category]?`<small class="focus-badge focus-${category} ${extra}" aria-label="Example focus: ${focusLabels[category]}">${focusLabels[category]}</small>`:'';
const formatTime = t => `${Math.floor(Math.max(0,t)/60)}:${String(Math.floor(Math.max(0,t)%60)).padStart(2,'0')}`;
const controllers = new Set();
const mediaPriority=createMediaPriority();
let counter = 0;

function createComparison(data, mode = 'pair') {
  const id = `comparison-${++counter}`;
  const isOverview = mode === 'overview';
  const el = document.createElement('article');
  el.className = `comparison${isOverview?' overview-player':''}`;
  el.setAttribute('aria-label', isOverview?data.title:`${data.title} synchronized comparison`);
  el.innerHTML = `${isOverview?`<span class="scene sr-only">${escape(data.title)}</span>`:`<div class="comparison-title"><div class="scene-heading"><span class="scene">${escape(data.title)}</span>${focusBadge(data.category)}</div><span class="meta">${escape(data.meta || '')}</span></div>`}
    <div class="video-grid ${mode}">${data.videos.map((v,i) => `<div class="video-cell ${v.ours?'is-ours':i===0?'is-base':''}">${isOverview?'':`<div class="video-label">${escape(v.label)}<span>${escape(v.note || '')}</span></div>`}<video ${isOverview?'':'muted'} playsinline preload="none" poster="${escape(v.poster)}" data-src="${escape(v.src)}" data-transport="${/\.mp4(?:[?#]|$)/.test(v.src)?'native':'stream'}" aria-label="${escape(data.title)} — ${escape(v.label)}"></video></div>`).join('')}</div>
    <div class="controls"><button class="play" aria-label="Play ${escape(data.title)}">▶ Play</button><button class="restart" aria-label="Restart ${escape(data.title)}">↺</button><input id="${id}-seek" type="range" min="0" max="${data.duration || 60.5625}" value="0" step="0.0625" aria-label="Seek ${escape(data.title)}"><span class="time">0:00 / ${formatTime(data.duration || 60.5625)}</span><button class="expand" aria-label="Fullscreen ${escape(data.title)}">⛶ <span>Expand</span></button>${isOverview?`<div class="overview-audio"><button class="mute" type="button" aria-label="Mute video overview" aria-pressed="false">Mute</button><label class="volume-control"><span class="sr-only">Video overview volume</span><input class="volume" type="range" min="0" max="1" step="0.05" value="0.7" aria-label="Video overview volume" aria-valuetext="70%"></label></div>`:''}</div><p class="status" role="status" aria-live="polite"></p>
    ${data.prompt ? `<details class="prompt"><summary>Text prompt</summary><p>${escape(data.prompt)}</p></details>` : ''}`;
  const videos = [...el.querySelectorAll('video')];
  if(isOverview){
    const video=videos[0],mute=$('.mute',el),volume=$('.volume',el);
    let audibleVolume=0.7;
    video.volume=audibleVolume;video.muted=false;
    const syncAudio=()=>{
      const silent=video.muted||video.volume===0;
      mute.textContent=silent?'Unmute':'Mute';mute.setAttribute('aria-pressed',String(silent));
      mute.setAttribute('aria-label',`${silent?'Unmute':'Mute'} video overview`);
      volume.value=String(video.volume);volume.setAttribute('aria-valuetext',`${Math.round(video.volume*100)}%`);
      if(video.volume>0)audibleVolume=video.volume;
    };
    mute.addEventListener('click',()=>{if(video.muted||video.volume===0){if(video.volume===0)video.volume=audibleVolume;video.muted=false;}else video.muted=true;syncAudio();});
    volume.addEventListener('input',()=>{video.volume=Number(volume.value);if(video.volume>0)video.muted=false;syncAudio();});
    video.addEventListener('volumechange',syncAudio);syncAudio();
  }
  const play = $('.play',el), seek = $('input',el), status = $('.status',el), clock = $('.time',el), expand = $('.expand',el);
  const player=attachPlayer({isNativeSource:isNativeReviewSource,prepareSource:prepareReviewSource,ensureBuffered:ensureReviewBuffered,suspendSource:suspendReviewSource,releaseSource:releaseReviewSource,videos,play,seek,clock,status,title:data.title,initialDuration:data.duration||60.5625,onPlay(){},onActivate(){mediaPriority.activate(c);}});
  $('.restart',el).addEventListener('click',()=>player.restart());
  expand.addEventListener('click',async()=>{
    if(document.fullscreenElement===el){await document.exitFullscreen();return;}
    if(el.classList.contains('is-expanded')){el.classList.remove('is-expanded');expand.innerHTML='⛶ <span>Expand</span>';document.body.style.overflow='';return;}
    try{await el.requestFullscreen();}catch{el.classList.add('is-expanded');document.body.style.overflow='hidden';expand.textContent='× Close';expand.focus();}
  });
  const c={el,pause:player.pause,warm:player.warm,getState:player.getState,destroy(){mediaPriority.remove(c);player.destroy();controllers.delete(c);}};
  controllers.add(c);mediaPriority.register(c);return c;
}
const carouselLayouts = new WeakMap();
function alignCarousel(root) {
  const carousel = root.closest('.case-carousel');
  if (!carousel) return;
  if (!carouselLayouts.has(root)) {
    const update = () => {
      const grid = $('.video-grid', root);
      if (!grid || document.fullscreenElement || $('.is-expanded', root)) return;
      const bounds = grid.getBoundingClientRect();
      if (bounds.height) carousel.style.setProperty('--carousel-center', `${bounds.top - carousel.getBoundingClientRect().top + bounds.height / 2}px`);
    };
    const observer = new ResizeObserver(() => requestAnimationFrame(update));
    observer.observe(root);
    carouselLayouts.set(root, update);
    carousel.addEventListener('keydown', event => {
      if (!event.target.closest('.carousel-arrow') || !['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
      event.preventDefault();
      const button = $(event.key === 'ArrowLeft' ? '.carousel-previous' : '.carousel-next', carousel);
      if (!button.disabled) button.click();
    });
  }
  requestAnimationFrame(carouselLayouts.get(root));
}
function replaceComparison(root,data,mode){controllers.forEach(c=>{if(root.contains(c.el))c.destroy();});const c=createComparison(data,mode);root.replaceChildren(c.el);alignCarousel(root);return c;}
function quad(item){return{title:item.title,meta:`${item.backbone} · ${item.benchmark}`,category:item.category,prompt:item.prompt,videos:[
  {label:'Base model',note:item.backbone,src:item.baseVideo,poster:item.basePoster},
  {label:'+ SFT',note:'Flow matching',src:item.sftVideo,poster:item.sftPoster},
  {label:'+ RL (Astrolabe)',note:'Reinforcement learning',src:item.rlVideo,poster:item.rlPoster},
  {label:'+ OPSD-V',note:'Our method',src:item.oursVideo,poster:item.oursPoster,ours:true}
]};}

const overview=createComparison({
  title:demoOverview.title,duration:demoOverview.duration,
  videos:[{label:'OPSD-V',src:demoOverview.src,poster:demoOverview.poster}]
},'overview');
$('#overview-player').append(overview.el);

const featured=featuredSlugs.map(slug=>cases.find(item=>item.slug===slug));
const mainBackbones=['LongLive','Self-Forcing'];
const mainSelections=[0,0];
let mainBackbone=0;
function selectMainExample(index,focusThumbnail=false){
  const items=featured.filter(item=>item.backbone===mainBackbones[mainBackbone]);
  if(index<0||index>=items.length)return;
  mainSelections[mainBackbone]=index;
  replaceComparison($('#main-comparison'),quad(items[index]),'quad');
  $('#featured-count').textContent=`${mainBackbones[mainBackbone]} · Example ${index+1} of ${items.length}`;
  $('#featured-previous').disabled=index===0;$('#featured-next').disabled=index===items.length-1;
  const buttons=[...document.querySelectorAll('[data-featured]')];
  buttons.forEach((button,i)=>{button.setAttribute('aria-pressed',String(i===index));});
  if(focusThumbnail)buttons[index].focus();
}
function selectMain(index){
  mainBackbone=index;
  const tabs=[...document.querySelectorAll('[data-main]')];
  tabs.forEach((tab,i)=>{tab.setAttribute('aria-selected',String(i===index));tab.tabIndex=i===index?0:-1;});
  $('#main-comparison').setAttribute('aria-labelledby',tabs[index].id);
  const items=featured.filter(item=>item.backbone===mainBackbones[index]);
  $('#featured-examples').innerHTML=items.map((item,i)=>`<button data-featured="${i}" aria-pressed="false" aria-label="Show ${escape(item.title)}"><img src="${escape(item.oursPoster)}" alt="" loading="lazy"><span>${escape(item.title)}</span>${focusBadge(item.category,'thumbnail-focus')}</button>`).join('');
  selectMainExample(mainSelections[index]);
}
$('#featured-examples').addEventListener('click',e=>{const button=e.target.closest('[data-featured]');if(button)selectMainExample(Number(button.dataset.featured));});
$('#featured-examples').addEventListener('keydown',e=>{
  if(!['ArrowLeft','ArrowRight','Home','End'].includes(e.key))return;
  const count=featured.filter(item=>item.backbone===mainBackbones[mainBackbone]).length;
  const current=Number(e.target.closest('[data-featured]')?.dataset.featured);if(!Number.isFinite(current))return;
  e.preventDefault();selectMainExample(e.key==='Home'?0:e.key==='End'?count-1:(current+(e.key==='ArrowRight'?1:-1)+count)%count,true);
});
$('#featured-previous').addEventListener('click',()=>selectMainExample(mainSelections[mainBackbone]-1));
$('#featured-next').addEventListener('click',()=>selectMainExample(mainSelections[mainBackbone]+1));
document.querySelectorAll('[data-main]').forEach((tab,i)=>{tab.addEventListener('click',()=>selectMain(i));tab.addEventListener('keydown',e=>{if(['ArrowLeft','ArrowRight','Home','End'].includes(e.key)){e.preventDefault();const n=e.key==='Home'?0:e.key==='End'?1:1-i;selectMain(n);document.querySelectorAll('[data-main]')[n].focus();}});});
selectMain(0);
let motivationIndex=0;
const motivationSelect=$('#motivation-select');
motivationSelect.innerHTML=motivations.map((item,i)=>`<option value="${i}">${escape(item.title)}</option>`).join('');
function selectMotivation(index){
  if(index<0||index>=motivations.length)return;
  motivationIndex=index;
  motivationSelect.value=String(index);
  replaceComparison($('#motivation-comparison'),motivations[index],'triple');
  $('#motivation-count').textContent=`Example ${index+1} of ${motivations.length}`;
  $('#motivation-previous').disabled=index===0;
  $('#motivation-next').disabled=index===motivations.length-1;
}
motivationSelect.addEventListener('change',()=>selectMotivation(Number(motivationSelect.value)));
$('#motivation-previous').addEventListener('click',()=>selectMotivation(motivationIndex-1));
$('#motivation-next').addEventListener('click',()=>selectMotivation(motivationIndex+1));
selectMotivation(0);
let ablationIndex=0;
$('#ablation-examples').innerHTML=ablationExamples.map((item,i)=>`<button data-ablation="${i}" aria-pressed="false" aria-label="Show ${escape(item.title)} ablation"><img src="${escape(item.videos.find(v=>v.ours).poster)}" alt="" loading="lazy"><span>${escape(item.title)}</span></button>`).join('');
function selectAblation(index,focusThumbnail=false){
  if(index<0||index>=ablationExamples.length)return;
  ablationIndex=index;
  const item=ablationExamples[index];
  replaceComparison($('#ablation-comparison'),item,'quad');
  const detail=item.detailFigure;
  $('#ablation-detail-summary').textContent=detail.summary;
  $('#ablation-detail-link').href=detail.src;
  $('#ablation-detail-link').setAttribute('aria-label',`Open ${item.title} details at full resolution`);
  $('#ablation-detail-image').src=detail.src;
  $('#ablation-detail-image').alt=detail.alt;
  $('#ablation-detail-caption').textContent=detail.caption;
  $('#ablation-count').textContent=`Example ${index+1} of ${ablationExamples.length}`;
  $('#ablation-previous').disabled=index===0;$('#ablation-next').disabled=index===ablationExamples.length-1;
  const buttons=[...document.querySelectorAll('[data-ablation]')];
  buttons.forEach((button,i)=>button.setAttribute('aria-pressed',String(i===index)));
  if(focusThumbnail)buttons[index].focus();
}
$('#ablation-examples').addEventListener('click',e=>{const button=e.target.closest('[data-ablation]');if(button)selectAblation(Number(button.dataset.ablation));});
$('#ablation-examples').addEventListener('keydown',e=>{
  if(!['ArrowLeft','ArrowRight','Home','End'].includes(e.key))return;
  const current=Number(e.target.closest('[data-ablation]')?.dataset.ablation);if(!Number.isFinite(current))return;
  e.preventDefault();const count=ablationExamples.length;
  selectAblation(e.key==='Home'?0:e.key==='End'?count-1:(current+(e.key==='ArrowRight'?1:-1)+count)%count,true);
});
$('#ablation-previous').addEventListener('click',()=>selectAblation(ablationIndex-1));
$('#ablation-next').addEventListener('click',()=>selectAblation(ablationIndex+1));
selectAblation(0);

let cacheLatestIndex=0;
const cacheLatestSelect=$('#cache-latest-select');
cacheLatestSelect.innerHTML=cacheLatestComparisons.map((item,i)=>`<option value="${i}">${escape(item.title)}</option>`).join('');
function selectCacheLatest(index){
  if(index<0||index>=cacheLatestComparisons.length)return;
  cacheLatestIndex=index;
  cacheLatestSelect.value=String(index);
  replaceComparison($('#cache-latest-comparison'),cacheLatestComparisons[index],'triple');
  $('#cache-latest-count').textContent=`Example ${index+1} of ${cacheLatestComparisons.length}`;
  $('#cache-latest-previous').disabled=index===0;
  $('#cache-latest-next').disabled=index===cacheLatestComparisons.length-1;
}
cacheLatestSelect.addEventListener('change',()=>selectCacheLatest(Number(cacheLatestSelect.value)));
$('#cache-latest-previous').addEventListener('click',()=>selectCacheLatest(cacheLatestIndex-1));
$('#cache-latest-next').addEventListener('click',()=>selectCacheLatest(cacheLatestIndex+1));
selectCacheLatest(0);

function renderTable(root,rows,caption,groups){
  const keys=['quality6','dynamic5s','semantic6'];
  const rank=(row,key)=>{const peers=groups?rows.filter(r=>r.backbone===row.backbone):rows;const vals=[...new Set(peers.map(r=>Number(r.values[key])))].sort((a,b)=>b-a);const pos=vals.indexOf(Number(row.values[key]));return pos===0?'best':pos===1?'second':'';};
  root.innerHTML=`<table><caption class="sr-only">${caption}</caption><thead><tr><th scope="col">${groups?'Method':'Variant'}</th><th scope="col">Quality (6) ↑</th><th scope="col">Dynamic Degree (5s) ↑</th><th scope="col">Semantic (6) ↑</th></tr></thead><tbody>${rows.map((r,i)=>`<tr class="${r.kind==='opsdv'?'ours-row':''} ${i&&groups&&r.backbone!==rows[i-1].backbone?'group-start':''}"><td>${escape(r.label)}</td>${keys.map(k=>`<td class="${rank(r,k)}">${Number(r.values[k]).toFixed(4)}</td>`).join('')}</tr>`).join('')}</tbody></table>`;
}
renderTable($('#main-table'),metrics,'One-minute generation, equally averaged over MovieGenBench and MeiBench.',true);
renderTable($('#ablation-table'),ablations,'Three ablations of OPSD-V on LongLive.',false);
const study=[{name:'LongLive',values:[[54,28,18],[49,36,15],[42,33,25]]},{name:'Self-Forcing',values:[[78,12,10],[66,25,9],[79,12,9]]}];
$('#user-study').innerHTML=study.map(s=>`<article><h4>${s.name}</h4>${s.values.map((vals,i)=>`<div class="study-row"><span>${['Overall','Motion quality','Visual quality'][i]}</span><div class="study-bar" role="img" aria-label="${s.name}, ${['overall','motion quality','visual quality'][i]}: OPSD-V ${vals[0]} percent, tie ${vals[1]} percent, base ${vals[2]} percent">${vals.map((v,j)=>`<span class="${['ours','tie','base'][j]}" style="width:${v}%">${v}</span>`).join('')}</div></div>`).join('')}</article>`).join('');

const featuredSlugSet=new Set(featuredSlugs);
const additionalCases=cases.filter(item=>!featuredSlugSet.has(item.slug));
let page=0, filtered=additionalCases;
const pageSize=6;
function renderGallery(scroll=false){
  const root=$('#gallery');controllers.forEach(c=>{if(root.contains(c.el))c.destroy();});
  const backbone=$('#filter-backbone').value,benchmark=$('#filter-benchmark').value,category=$('#filter-category').value;
  filtered=additionalCases.filter(c=>(backbone==='all'||c.backbone===backbone)&&(benchmark==='all'||c.benchmark===benchmark)&&(category==='all'||c.category===category));
  const pages=Math.max(1,Math.ceil(filtered.length/pageSize));page=Math.min(page,pages-1);
  root.replaceChildren(...filtered.slice(page*pageSize,(page+1)*pageSize).map(c=>createComparison(quad(c),'quad').el));
  if(!filtered.length)root.innerHTML='<p>No examples match these filters.</p>';
  $('#result-count').textContent=`${filtered.length} examples`;
  $('#page-count').textContent=`Page ${page+1} of ${pages}`;
  $('#previous-page').disabled=page===0;$('#next-page').disabled=page>=pages-1;
  if(scroll)$('#more').scrollIntoView({behavior:'smooth'});
}
document.querySelectorAll('.filters select').forEach(s=>s.addEventListener('change',()=>{page=0;renderGallery();}));
$('#previous-page').addEventListener('click',()=>{page--;renderGallery(true);});$('#next-page').addEventListener('click',()=>{page++;renderGallery(true);});
renderGallery();

// The SGF section mounts one matched pair at a time and shares the page's
// playback/visibility controller, so switching examples releases old media.
let gradientIndex=0;
function selectGradient(index,focusThumbnail=false){
  if(index<0||index>=gradientComparisons.length)return;
  gradientIndex=index;
  const item=gradientComparisons[index];
  replaceComparison($('#gradient-player'),item,'pair');
  $('#gradient-count').textContent=`Example ${index+1} of ${gradientComparisons.length} · ${item.benchmark}`;
  $('#gradient-previous').disabled=index===0;
  $('#gradient-next').disabled=index===gradientComparisons.length-1;
  $('#gradient-note').textContent=item.duration===20
    ? 'This comparison shows the first 20 seconds. Both videos share the same timeline; playback starts at 0:00.'
    : 'Both videos share the same timeline; playback starts at 0:00.';
  const buttons=[...document.querySelectorAll('[data-gradient]')];
  buttons.forEach((button,i)=>button.setAttribute('aria-pressed',String(i===index)));
  if(focusThumbnail)buttons[index].focus();
}
$('#gradient-examples').innerHTML=gradientComparisons.map((item,i)=>`<button data-gradient="${i}" aria-pressed="false" aria-label="Show ${escape(item.benchmark)}: ${escape(item.title)}"><img src="${escape(item.videos.find(v=>v.ours).poster)}" alt="" loading="lazy"><span><small>${escape(item.benchmark)}</small>${escape(item.title)}</span>${focusBadge(item.category,'thumbnail-focus')}</button>`).join('');
$('#gradient-examples').addEventListener('click',e=>{const button=e.target.closest('[data-gradient]');if(button)selectGradient(Number(button.dataset.gradient));});
$('#gradient-examples').addEventListener('keydown',e=>{
  if(!['ArrowLeft','ArrowRight','Home','End'].includes(e.key))return;
  const button=e.target.closest('[data-gradient]');if(!button)return;
  const current=Number(button.dataset.gradient),count=gradientComparisons.length;
  e.preventDefault();
  selectGradient(e.key==='Home'?0:e.key==='End'?count-1:(current+(e.key==='ArrowRight'?1:-1)+count)%count,true);
});
$('#gradient-previous').addEventListener('click',()=>selectGradient(gradientIndex-1));
$('#gradient-next').addEventListener('click',()=>selectGradient(gradientIndex+1));
selectGradient(0);

document.addEventListener('keydown',e=>{if(e.key==='Escape'){document.querySelectorAll('.is-expanded').forEach(el=>{el.classList.remove('is-expanded');$('.expand',el).innerHTML='⛶ <span>Expand</span>';});document.body.style.overflow='';}});
document.addEventListener('fullscreenchange',()=>{controllers.forEach(c=>{const b=$('.expand',c.el);b.innerHTML=document.fullscreenElement===c.el?'× <span>Close</span>':'⛶ <span>Expand</span>';b.setAttribute('aria-label',`${document.fullscreenElement===c.el?'Exit fullscreen':'Fullscreen'} ${$('.scene',c.el).textContent}`);});});

})();
