Project Brief: "Pick Your Talent" Interactive Hero Section
Goal: Create a React hero section where animated figures walk across the background.When a user clicks a figure, it stops and raises its hand, simulating a candidate responding to a job offer.

Tech Stack: React, Tailwind CSS, Custom CSS(for sprite steps() animation).

1. The Sprite Sheet Logic(Crucial for the Agent)
Grid Structure: The image provided is a 7 columns x 4 rows grid.

Total Frames: 28 frames.

Specific Animations Needed:

Walking Loop: The top row(Row 1) shows a clean side - profile walk cycle.

  Logic: Cycle through frames 1 to 7.

Raising Hand(The "Selected" State): Row 4(bottom row) contains a figure raising both hands(Frames 3 - 5).

  Logic: Switch to Row 4, cycle through the specific hand - raising frames, and pause on the final frame(hands up).

2. Component Architecture
A.HeroContainer(Parent)
Layout: Relative positioning, overflow - hidden(to handle figures walking off - screen).

  Content:

The Crowd Layer: Maps through an array(e.g., [1...15]) to render multiple < SpriteCharacter /> components.

The UI Layer: Absolute positioned overlay containing the Hero Text.

  Z - Index: Ensure UI Layer > Crowd Layer.

    B.SpriteCharacter(Child Component)
Props:

id: Unique ID.

  startDelay: Random delay so they don't all start walking at once.

speed: How fast they move across the screen.

  scale: Random scale(0.8 to 1.2) to fake depth / perspective.

    State: status('walking' | 'selected').

      Interaction:

onClick: Changes status from 'walking' to 'selected'.

  Behavior:

If Walking: Translate X from - 100px to Screen Width + 100px.Play "Walk" sprite animation.

If Selected: Stop X translation immediately.Switch sprite animation to "Raise Hand".

3. The Prompt to Copy / Paste to Your Agent
Here is the specific prompt to get the code you need.It handles the tricky math regarding the sprite sheet background positions.

"I need to build an interactive Hero Section using React and Tailwind CSS. Here are the specific requirements:

1. The Sprite Sheet Logic:

I have a sprite sheet that is a grid of 7 columns by 4 rows.

Walk Animation: Uses the top row(Row 1).It should cycle through background - position - y: 0 and animate the X position in steps.

Selected Animation: Uses the bottom row(Row 4).It should target the frames where the man raises his hands(roughly the middle columns of the bottom row).

2. The Component(CandidateSprite):

Create a component that renders a div with the sprite sheet as the background - image.

  Movement: The component should move horizontally across the screen(left to right) using CSS animations or transitions.

    Interaction: When I click the component:

      It must stop moving across the screen (pause its translation).

It must switch its CSS animation from the 'walk cycle' to the 'raise hand' frame and stay there.

3. The Scene(Hero Section):

Generate about 12 of these candidates in the background with randomized speeds, delays, and slightly different sizes(scale) to create depth.

Overlay the following text in the center(make sure it's readable, perhaps with a backdrop blur):

H1: "Find Your Next Great Hire"

Sub: "Connecting talent with opportunity."

Micro - copy: "Click a candidate below to spot your next hire."

4. Tech Constraints:

        Use Tailwind for layout.

Use animation - timing - function: steps(7) for the walking effect so it looks like a retro sprite, not a sliding blur.

Please provide the CSS for the keyframes and the React code."

4. A Helper Tip for You
When you get the code, ensure the aspect ratio of the div matches one single frame of your image.

  Calculation: If your image is 2000px wide and 1500px tall:

Single Frame Width = 2000 / 7 ≈ 285px

Single Frame Height = 1500 / 4 ≈ 375px

You will need to pass these dimensions to the CSS / Tailwind to ensure only one "man" is visible at a time inside the div.


html code below for reference for coding
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0">
    <title>Sprite-Based Talent Network - Interactive Header</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background: #0a0a0a;
            overflow-x: hidden;
        }

        .header-container {
            position: relative;
            width: 100%;
            height: 600px;
            background: linear-gradient(180deg, #1a1a1a 0%, #0f0f0f 100%);
            overflow: hidden;
            border-bottom: 1px solid rgba(255,255,255,0.05);
        }

        #crowdCanvas {
            display: block;
            width: 100%;
            height: 100%;
            cursor: crosshair;
        }

        .overlay-gradient {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.3) 100%);
            pointer-events: none;
        }

        .header-content {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            text-align: center;
            z-index: 10;
            pointer-events: none;
        }

        .header-content h1 {
            font-size: clamp(2rem, 5vw, 4.5rem);
            font-weight: 700;
            color: #ffffff;
            margin-bottom: 20px;
            letter-spacing: -0.02em;
            text-shadow: 0 2px 20px rgba(0,0,0,0.5);
        }

        .header-content p {
            font-size: clamp(1rem, 2vw, 1.3rem);
            color: rgba(255,255,255,0.8);
            font-weight: 300;
            letter-spacing: 0.02em;
            text-shadow: 0 1px 10px rgba(0,0,0,0.5);
        }

        .stats-panel {
            position: absolute;
            bottom: 30px;
            right: 30px;
            background: rgba(15, 15, 15, 0.8);
            backdrop-filter: blur(10px);
            padding: 20px 25px;
            border-radius: 12px;
            border: 1px solid rgba(255,255,255,0.1);
            font-size: 13px;
            color: rgba(255,255,255,0.6);
            font-family: 'Courier New', monospace;
            z-index: 10;
        }

        .stats-panel div {
            margin: 5px 0;
            display: flex;
            justify-content: space-between;
            gap: 15px;
        }

        .stats-panel .label {
            color: rgba(255,255,255,0.4);
        }

        .stats-panel .value {
            color: #4a9eff;
            font-weight: 600;
        }

        .content-section {
            padding: 80px 20px;
            max-width: 1200px;
            margin: 0 auto;
            color: rgba(255,255,255,0.9);
        }

        .content-section h2 {
            font-size: 2.5em;
            margin-bottom: 30px;
            color: #ffffff;
            font-weight: 600;
        }

        .content-section p {
            font-size: 1.2em;
            line-height: 1.8;
            color: rgba(255,255,255,0.7);
            font-weight: 300;
        }

        .loading {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: rgba(255,255,255,0.6);
            font-size: 14px;
        }

        @media (max-width: 768px) {
            .header-container {
                height: 400px;
            }

            .stats-panel {
                bottom: 15px;
                right: 15px;
                padding: 12px 15px;
                font-size: 11px;
            }

            .content-section {
                padding: 50px 20px;
            }
        }
    </style>
</head>
<body>
    <div class="header-container">
        <canvas id="crowdCanvas"></canvas>
        <div class="overlay-gradient"></div>
        <div class="header-content">
            <h1>Find Your Next Great Hire</h1>
            <p>Connecting talent with opportunity</p>
        </div>
        <div class="stats-panel">
            <div><span class="label">ACTIVE TALENTS</span><span class="value" id="peopleCount">0</span></div>
            <div><span class="label">PERFORMANCE</span><span class="value" id="fpsCounter">60</span> FPS</div>
            <div><span class="label">INTERACTIONS</span><span class="value" id="interactionCount">0</span></div>
        </div>
        <div class="loading" id="loading">Generating sprites...</div>
    </div>

    <div class="content-section">
        <h2>The Right Talent, Right Now</h2>
        <p>Our platform leverages advanced matching algorithms and human insight to connect exceptional talent with forward-thinking organizations. Every interaction matters, every connection counts.</p>
    </div>

    <script>
        const canvas = document.getElementById('crowdCanvas');
        const ctx = canvas.getContext('2d', { alpha: false, willReadFrequently: true });
        
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        let width, height;
        
        function resizeCanvas() {
            const rect = canvas.getBoundingClientRect();
            width = rect.width;
            height = rect.height;
            canvas.width = width * dpr;
            canvas.height = height * dpr;
            ctx.scale(dpr, dpr);
        }
        
        resizeCanvas();

        let fps = 60;
        let frameCount = 0;
        let lastTime = performance.now();
        let interactionCount = 0;
        let spritesLoaded = false;

        // Sprite sheet storage
        const spriteSheets = {
            idle: [],      // 4 frames of idle/standing
            walking: [],   // 8 frames of walking
            waving: [],    // 6 frames of waving
            male: [],
            female: []
        };

        // Generate realistic human silhouette sprites
        function generateSpriteSheet() {
            const spriteSize = 120; // Size of each sprite
            const padding = 10;
            
            // Male body types
            const maleTypes = [
                { shoulders: 0.45, hips: 0.35, waist: 0.38, height: 1.0 },
                { shoulders: 0.48, hips: 0.36, waist: 0.40, height: 1.05 },
                { shoulders: 0.50, hips: 0.40, waist: 0.45, height: 0.95 }
            ];
            
            // Female body types
            const femaleTypes = [
                { shoulders: 0.38, hips: 0.45, waist: 0.28, height: 1.0 },
                { shoulders: 0.36, hips: 0.48, waist: 0.30, height: 0.98 },
                { shoulders: 0.40, hips: 0.42, waist: 0.32, height: 1.02 }
            ];

            // Generate idle poses (standing still with slight variations)
            for (let i = 0; i < 4; i++) {
                const canvas = document.createElement('canvas');
                canvas.width = spriteSize;
                canvas.height = spriteSize;
                const ctx = canvas.getContext('2d');
                
                const breathe = Math.sin(i * Math.PI / 2) * 0.02;
                const isMale = i % 2 === 0;
                const typeIndex = Math.floor(i / 2) % 3;
                const bodyType = isMale ? maleTypes[typeIndex] : femaleTypes[typeIndex];
                
                drawRealisticSilhouette(ctx, spriteSize / 2, spriteSize / 2, spriteSize * 0.35, 
                    bodyType, 'idle', 0, breathe);
                
                spriteSheets.idle.push(canvas);
                if (isMale) spriteSheets.male.push(canvas);
                else spriteSheets.female.push(canvas);
            }

            // Generate walking cycle (8 frames)
            for (let i = 0; i < 8; i++) {
                const canvas = document.createElement('canvas');
                canvas.width = spriteSize;
                canvas.height = spriteSize;
                const ctx = canvas.getContext('2d');
                
                const walkPhase = i / 8;
                const isMale = i < 4;
                const typeIndex = i % 3;
                const bodyType = isMale ? maleTypes[typeIndex] : femaleTypes[typeIndex];
                
                drawRealisticSilhouette(ctx, spriteSize / 2, spriteSize / 2, spriteSize * 0.35, 
                    bodyType, 'walk', walkPhase, 0);
                
                spriteSheets.walking.push(canvas);
            }

            // Generate waving animation (6 frames)
            for (let i = 0; i < 6; i++) {
                const canvas = document.createElement('canvas');
                canvas.width = spriteSize;
                canvas.height = spriteSize;
                const ctx = canvas.getContext('2d');
                
                const wavePhase = i / 6;
                const isMale = i % 2 === 0;
                const typeIndex = Math.floor(i / 2) % 3;
                const bodyType = isMale ? maleTypes[typeIndex] : femaleTypes[typeIndex];
                
                drawRealisticSilhouette(ctx, spriteSize / 2, spriteSize / 2, spriteSize * 0.35, 
                    bodyType, 'wave', wavePhase, 0);
                
                spriteSheets.waving.push(canvas);
            }

            spritesLoaded = true;
            document.getElementById('loading').style.display = 'none';
        }

        // Draw a realistic human silhouette
        function drawRealisticSilhouette(ctx, x, y, size, bodyType, pose, phase, breathe) {
            ctx.save();
            ctx.translate(x, y);
            ctx.fillStyle = '#000000';

            const h = size; // Base size unit
            const totalHeight = h * 2.5 * bodyType.height;

            // Head
            ctx.beginPath();
            ctx.ellipse(0, -totalHeight * 0.42, h * 0.18, h * 0.20, 0, 0, Math.PI * 2);
            ctx.fill();

            // Neck
            ctx.fillRect(-h * 0.08, -totalHeight * 0.36, h * 0.16, h * 0.12);

            // Torso
            const shoulderY = -totalHeight * 0.24;
            const waistY = totalHeight * 0.05;
            const hipY = totalHeight * 0.18;

            const shoulderW = h * bodyType.shoulders;
            const waistW = h * bodyType.waist * (1 + breathe);
            const hipW = h * bodyType.hips;

            ctx.beginPath();
            ctx.moveTo(-shoulderW, shoulderY);
            
            // Right side
            ctx.bezierCurveTo(
                -shoulderW, shoulderY + h * 0.15,
                -waistW, waistY - h * 0.1,
                -waistW, waistY
            );
            ctx.bezierCurveTo(
                -waistW * 0.95, waistY + h * 0.08,
                -hipW, hipY - h * 0.05,
                -hipW, hipY
            );
            
            // Bottom to left side
            ctx.lineTo(hipW, hipY);
            
            ctx.bezierCurveTo(
                hipW, hipY - h * 0.05,
                waistW * 0.95, waistY + h * 0.08,
                waistW, waistY
            );
            ctx.bezierCurveTo(
                waistW, waistY - h * 0.1,
                shoulderW, shoulderY + h * 0.15,
                shoulderW, shoulderY
            );
            
            ctx.closePath();
            ctx.fill();

            // Arms and legs based on pose
            if (pose === 'idle') {
                drawIdleArms(ctx, h, shoulderW, shoulderY);
                drawIdleLegs(ctx, h, hipW, hipY);
            } else if (pose === 'walk') {
                drawWalkingArms(ctx, h, shoulderW, shoulderY, phase);
                drawWalkingLegs(ctx, h, hipW, hipY, phase);
            } else if (pose === 'wave') {
                drawWavingArms(ctx, h, shoulderW, shoulderY, phase);
                drawIdleLegs(ctx, h, hipW, hipY);
            }

            // Hair/head detail
            ctx.beginPath();
            ctx.ellipse(0, -totalHeight * 0.48, h * 0.19, h * 0.12, 0, Math.PI, 0);
            ctx.fill();

            ctx.restore();
        }

        function drawIdleArms(ctx, h, shoulderW, shoulderY) {
            const armW = h * 0.12;
            const armL = h * 0.65;

            // Left arm
            ctx.save();
            ctx.translate(-shoulderW * 0.9, shoulderY + h * 0.08);
            ctx.rotate(0.1);
            ctx.fillRect(-armW / 2, 0, armW, armL);
            ctx.beginPath();
            ctx.arc(0, armL, armW * 0.6, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();

            // Right arm
            ctx.save();
            ctx.translate(shoulderW * 0.9, shoulderY + h * 0.08);
            ctx.rotate(-0.1);
            ctx.fillRect(-armW / 2, 0, armW, armL);
            ctx.beginPath();
            ctx.arc(0, armL, armW * 0.6, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
        }

        function drawWalkingArms(ctx, h, shoulderW, shoulderY, phase) {
            const armW = h * 0.12;
            const armL = h * 0.65;
            const swingAngle = Math.sin(phase * Math.PI * 2) * 0.4;

            // Left arm (opposite to right leg)
            ctx.save();
            ctx.translate(-shoulderW * 0.9, shoulderY + h * 0.08);
            ctx.rotate(swingAngle);
            ctx.fillRect(-armW / 2, 0, armW, armL);
            ctx.beginPath();
            ctx.arc(0, armL, armW * 0.6, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();

            // Right arm (opposite to left leg)
            ctx.save();
            ctx.translate(shoulderW * 0.9, shoulderY + h * 0.08);
            ctx.rotate(-swingAngle);
            ctx.fillRect(-armW / 2, 0, armW, armL);
            ctx.beginPath();
            ctx.arc(0, armL, armW * 0.6, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
        }

        function drawWavingArms(ctx, h, shoulderW, shoulderY, phase) {
            const armW = h * 0.12;
            const armL = h * 0.35;
            const waveAngle = Math.sin(phase * Math.PI * 2) * 0.3;

            // Left arm (down)
            ctx.save();
            ctx.translate(-shoulderW * 0.9, shoulderY + h * 0.08);
            ctx.rotate(0.1);
            ctx.fillRect(-armW / 2, 0, armW, h * 0.65);
            ctx.beginPath();
            ctx.arc(0, h * 0.65, armW * 0.6, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();

            // Right arm (waving)
            ctx.save();
            ctx.translate(shoulderW * 0.9, shoulderY + h * 0.08);
            ctx.rotate(-Math.PI / 2.5 + waveAngle);
            
            // Upper arm
            ctx.fillRect(-armW / 2, 0, armW, armL);
            
            // Forearm
            ctx.save();
            ctx.translate(0, armL);
            ctx.rotate(-0.3 + waveAngle * 0.5);
            ctx.fillRect(-armW / 2, 0, armW, armL);
            
            // Waving hand
            ctx.save();
            ctx.translate(0, armL);
            ctx.rotate(Math.sin(phase * Math.PI * 4) * 0.5);
            ctx.beginPath();
            ctx.arc(0, 0, armW * 0.7, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
            ctx.restore();
            ctx.restore();
        }

        function drawIdleLegs(ctx, h, hipW, hipY) {
            const legW = h * 0.16;
            const thighL = h * 0.5;
            const calfL = h * 0.5;

            // Left leg
            ctx.save();
            ctx.translate(-hipW * 0.5, hipY);
            ctx.fillRect(-legW / 2, 0, legW, thighL);
            ctx.translate(0, thighL);
            ctx.fillRect(-legW * 0.45, 0, legW * 0.9, calfL);
            ctx.fillRect(-h * 0.08, calfL, h * 0.2, h * 0.12);
            ctx.restore();

            // Right leg
            ctx.save();
            ctx.translate(hipW * 0.5, hipY);
            ctx.fillRect(-legW / 2, 0, legW, thighL);
            ctx.translate(0, thighL);
            ctx.fillRect(-legW * 0.45, 0, legW * 0.9, calfL);
            ctx.fillRect(-h * 0.08, calfL, h * 0.2, h * 0.12);
            ctx.restore();
        }

        function drawWalkingLegs(ctx, h, hipW, hipY, phase) {
            const legW = h * 0.16;
            const thighL = h * 0.5;
            const calfL = h * 0.5;
            
            const leftPhase = phase * Math.PI * 2;
            const rightPhase = leftPhase + Math.PI;
            
            const leftThighAngle = Math.sin(leftPhase) * 0.4;
            const leftCalfAngle = Math.max(0, Math.sin(leftPhase) * 0.5);
            
            const rightThighAngle = Math.sin(rightPhase) * 0.4;
            const rightCalfAngle = Math.max(0, Math.sin(rightPhase) * 0.5);

            // Left leg
            ctx.save();
            ctx.translate(-hipW * 0.5, hipY);
            ctx.rotate(leftThighAngle);
            ctx.fillRect(-legW / 2, 0, legW, thighL);
            
            ctx.save();
            ctx.translate(0, thighL);
            ctx.rotate(leftCalfAngle);
            ctx.fillRect(-legW * 0.45, 0, legW * 0.9, calfL);
            ctx.fillRect(-h * 0.08, calfL, h * 0.2, h * 0.12);
            ctx.restore();
            ctx.restore();

            // Right leg
            ctx.save();
            ctx.translate(hipW * 0.5, hipY);
            ctx.rotate(rightThighAngle);
            ctx.fillRect(-legW / 2, 0, legW, thighL);
            
            ctx.save();
            ctx.translate(0, thighL);
            ctx.rotate(rightCalfAngle);
            ctx.fillRect(-legW * 0.45, 0, legW * 0.9, calfL);
            ctx.fillRect(-h * 0.08, calfL, h * 0.2, h * 0.12);
            ctx.restore();
            ctx.restore();
        }

        // Person using sprites
        class Person {
            constructor(x, y, scale, depth) {
                this.x = Math.round(x);
                this.y = Math.round(y);
                this.scale = scale;
                this.depth = depth;
                
                // Animation
                this.state = 'idle'; // 'idle', 'walking', 'waving'
                this.frame = Math.floor(Math.random() * 4);
                this.frameSpeed = 0.08 + Math.random() * 0.04;
                
                // Sprite selection
                this.spriteType = Math.random() > 0.5 ? 'male' : 'female';
                this.spriteIndex = Math.floor(Math.random() * 3);
                
                // Interaction
                this.isHovered = false;
                this.hoverProgress = 0;
                this.wasHovered = false;
                
                // Shadow
                this.shadowAngle = Math.PI * 0.75;
                this.shadowLength = 60 * scale * (1.2 - depth * 0.3);
                this.shadowOpacity = 0.25 + depth * 0.35;
            }

            update(deltaTime) {
                // Update animation frame
                this.frame += this.frameSpeed * deltaTime * 0.06;
                
                // State machine
                if (this.isHovered && this.state !== 'waving') {
                    this.state = 'waving';
                    this.frame = 0;
                    this.wasHovered = true;
                } else if (!this.isHovered && this.wasHovered && this.state === 'waving') {
                    if (this.frame >= 6) {
                        this.state = 'idle';
                        this.frame = 0;
                        this.wasHovered = false;
                    }
                }
                
                // Hover progress for effects
                if (this.isHovered) {
                    this.hoverProgress = Math.min(1, this.hoverProgress + 0.08);
                } else {
                    this.hoverProgress = Math.max(0, this.hoverProgress - 0.08);
                }
            }

            checkHover(mouseX, mouseY) {
                const dx = mouseX - this.x;
                const dy = mouseY - this.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                const prevHovered = this.isHovered;
                this.isHovered = distance < 30 * this.scale;
                
                if (this.isHovered && !prevHovered) {
                    interactionCount++;
                    document.getElementById('interactionCount').textContent = interactionCount;
                }
            }

            draw(ctx) {
                if (!spritesLoaded) return;

                ctx.save();
                ctx.translate(this.x, this.y);

                // Draw shadow
                this.drawShadow(ctx);

                // Select appropriate sprite
                let sprite;
                let maxFrames;
                
                if (this.state === 'idle') {
                    sprite = spriteSheets.idle[this.spriteIndex % spriteSheets.idle.length];
                    maxFrames = 4;
                } else if (this.state === 'walking') {
                    sprite = spriteSheets.walking[Math.floor(this.frame) % spriteSheets.walking.length];
                    maxFrames = 8;
                } else if (this.state === 'waving') {
                    sprite = spriteSheets.waving[Math.floor(this.frame) % spriteSheets.waving.length];
                    maxFrames = 6;
                }

                // Loop frames
                if (this.frame >= maxFrames) {
                    this.frame = 0;
                }

                // Draw sprite with scale
                const spriteSize = sprite.width;
                const drawSize = spriteSize * this.scale;
                
                // Hover highlight
                if (this.hoverProgress > 0) {
                    ctx.save();
                    ctx.globalAlpha = this.hoverProgress * 0.3;
                    const glow = ctx.createRadialGradient(0, 0, 0, 0, 0, drawSize * 0.8);
                    glow.addColorStop(0, 'rgba(74, 158, 255, 0.4)');
                    glow.addColorStop(1, 'rgba(74, 158, 255, 0)');
                    ctx.fillStyle = glow;
                    ctx.fillRect(-drawSize / 2, -drawSize / 2, drawSize, drawSize);
                    ctx.restore();
                }

                ctx.drawImage(sprite, -drawSize / 2, -drawSize / 2, drawSize, drawSize);

                ctx.restore();
            }

            drawShadow(ctx) {
                ctx.save();
                
                const shadowX = Math.cos(this.shadowAngle) * this.shadowLength;
                const shadowY = Math.sin(this.shadowAngle) * this.shadowLength * 0.35;
                
                ctx.translate(shadowX, shadowY);
                
                const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, 40 * this.scale);
                gradient.addColorStop(0, `rgba(0, 0, 0, ${this.shadowOpacity})`);
                gradient.addColorStop(0.6, `rgba(0, 0, 0, ${this.shadowOpacity * 0.4})`);
                gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
                
                ctx.fillStyle = gradient;
                ctx.beginPath();
                ctx.ellipse(0, 0, 35 * this.scale, 15 * this.scale, 0, 0, Math.PI * 2);
                ctx.fill();
                
                ctx.restore();
            }
        }

        let people = [];
        let mouse = { x: -1000, y: -1000 };

        function initCrowd() {
            people = [];
            const isMobile = width < 768;
            
            const rows = isMobile ? 10 : 14;
            const cols = isMobile ? 12 : 18;
            
            for (let row = 0; row < rows; row++) {
                for (let col = 0; col < cols; col++) {
                    if (Math.random() > 0.7) continue;
                    
                    const baseX = (col / cols) * width;
                    const baseY = (row / rows) * height;
                    
                    const x = baseX + (Math.random() - 0.5) * (width / cols) * 1.3;
                    const y = baseY + (Math.random() - 0.5) * (height / rows) * 1.0;
                    
                    const depth = (y / height) * 0.5 + 0.5;
                    const scale = depth * (isMobile ? 0.5 : 0.7);
                    
                    people.push(new Person(x, y, scale, depth));
                }
            }
            
            people.sort((a, b) => a.depth - b.depth);
            document.getElementById('peopleCount').textContent = people.length;
        }

        function updateMousePosition(e) {
            const rect = canvas.getBoundingClientRect();
            const scaleX = width / rect.width;
            const scaleY = height / rect.height;
            
            if (e.type.startsWith('touch')) {
                if (e.touches.length > 0) {
                    mouse.x = (e.touches[0].clientX - rect.left) * scaleX;
                    mouse.y = (e.touches[0].clientY - rect.top) * scaleY;
                }
            } else {
                mouse.x = (e.clientX - rect.left) * scaleX;
                mouse.y = (e.clientY - rect.top) * scaleY;
            }
        }

        canvas.addEventListener('mousemove', updateMousePosition);
        canvas.addEventListener('touchmove', updateMousePosition, { passive: true });
        canvas.addEventListener('touchstart', updateMousePosition, { passive: true });
        canvas.addEventListener('mouseleave', () => {
            mouse.x = -1000;
            mouse.y = -1000;
        });

        function animate(currentTime) {
            const deltaTime = Math.min(currentTime - lastTime, 100);
            lastTime = currentTime;

            frameCount++;
            if (frameCount % 30 === 0) {
                fps = Math.round(1000 / deltaTime);
                document.getElementById('fpsCounter').textContent = fps;
            }

            // Dark gradient background
            const gradient = ctx.createLinearGradient(0, 0, 0, height);
            gradient.addColorStop(0, '#1a1a1a');
            gradient.addColorStop(1, '#0f0f0f');
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, width, height);

            // Top-left light source
            const lightGradient = ctx.createRadialGradient(
                width * 0.3, height * 0.2, 0, 
                width * 0.3, height * 0.2, width * 0.7
            );
            lightGradient.addColorStop(0, 'rgba(255, 255, 255, 0.06)');
            lightGradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.015)');
            lightGradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
            ctx.fillStyle = lightGradient;
            ctx.fillRect(0, 0, width, height);

            people.forEach(person => {
                person.checkHover(mouse.x, mouse.y);
                person.update(deltaTime);
                person.draw(ctx);
            });

            requestAnimationFrame(animate);
        }

        // Initialize
        window.addEventListener('resize', () => {
            resizeCanvas();
            if (spritesLoaded) initCrowd();
        });

        // Generate sprites then start animation
        generateSpriteSheet();
        initCrowd();
        requestAnimationFrame(animate);
    </script>
</body>
</html>
