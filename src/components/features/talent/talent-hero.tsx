"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";

// ─── Body type definitions ───────────────────────────────────────
interface BodyType {
    shoulders: number;
    hips: number;
    waist: number;
    height: number;
}

const MALE_TYPES: BodyType[] = [
    { shoulders: 0.45, hips: 0.35, waist: 0.38, height: 1.0 },
    { shoulders: 0.48, hips: 0.36, waist: 0.40, height: 1.05 },
    { shoulders: 0.50, hips: 0.40, waist: 0.45, height: 0.95 },
];

// ─── Architectural Silhouette Drawing ──────────────────────────────
// Sleek, modern, minimalist style. No cartoon faces.
// Focus on posture, proportions, and professional accessories.

type Pose = "idle" | "walk" | "wave";

function drawSleekLegs(
    ctx: CanvasRenderingContext2D,
    h: number,
    hipY: number,
    hipW: number,
    phase: number,
    color: string
) {
    const legL = h * 0.9;
    const legW = h * 0.13;

    // Angles
    let leftAngle = 0;
    let rightAngle = 0;

    if (phase !== 0) {
        const swing = Math.sin(phase * Math.PI * 2);
        leftAngle = swing * 0.4;
        rightAngle = -swing * 0.4;
    }

    ctx.fillStyle = color;

    // Right Leg (Back)
    ctx.save();
    ctx.translate(hipW * 0.5, hipY);
    ctx.rotate(rightAngle);
    ctx.fillRect(-legW / 2, 0, legW, legL);
    ctx.restore();

    // Left Leg (Front)
    ctx.save();
    ctx.translate(-hipW * 0.5, hipY);
    ctx.rotate(leftAngle);
    ctx.fillRect(-legW / 2, 0, legW, legL);
    ctx.restore();
}

function drawSleekArm(
    ctx: CanvasRenderingContext2D,
    h: number,
    shoulderW: number,
    shoulderY: number,
    angle: number,
    isRight: boolean,
    color: string,
    hasBriefcase: boolean = false
) {
    const xOffset = isRight ? shoulderW * 0.8 : -shoulderW * 0.8;
    const armW = h * 0.1;
    const armL = h * 0.75;

    ctx.save();
    ctx.translate(xOffset, shoulderY + h * 0.1);
    ctx.rotate(angle);

    // Arm
    ctx.fillStyle = color;
    // Use roundRect if available, or fallback to fillRect with arcs
    if (ctx.roundRect) {
        ctx.beginPath();
        ctx.roundRect(-armW / 2, 0, armW, armL, armW / 2);
        ctx.fill();
    } else {
        ctx.fillRect(-armW / 2, 0, armW, armL);
    }

    // Subtle Briefcase (Silhouette)
    if (hasBriefcase) {
        // Only if arm is hanging down roughly
        if (Math.abs(angle) < 1.0) {
            ctx.fillStyle = color; // Same color silhoutte
            ctx.beginPath();
            if (ctx.roundRect) {
                ctx.roundRect(-h * 0.2, armL, h * 0.4, h * 0.25, 2);
            } else {
                ctx.fillRect(-h * 0.2, armL, h * 0.4, h * 0.25);
            }
            ctx.fill();
        }
    }
    ctx.restore();
}

function drawSleekWaveArm(
    ctx: CanvasRenderingContext2D,
    h: number,
    shoulderW: number,
    shoulderY: number,
    phase: number,
    isRight: boolean,
    color: string
) {
    const xOffset = isRight ? shoulderW * 0.8 : -shoulderW * 0.8;
    const armW = h * 0.1;
    const armL = h * 0.4;

    ctx.save();
    ctx.translate(xOffset, shoulderY + h * 0.1);
    ctx.rotate(isRight ? -Math.PI * 0.5 : Math.PI * 0.5);

    ctx.fillStyle = color;
    ctx.fillRect(-armW / 2, 0, armW, armL); // Upper

    ctx.translate(0, armL);
    ctx.rotate(-0.2 + Math.sin(phase * Math.PI * 5) * 0.3); // Wave
    ctx.fillRect(-armW / 2, 0, armW, armL * 0.9); // Lower

    ctx.restore();
}

function drawCheckWatchArm(
    ctx: CanvasRenderingContext2D,
    h: number,
    shoulderW: number,
    shoulderY: number,
    phase: number,
    isRight: boolean,
    color: string
) {
    const xOffset = isRight ? shoulderW * 0.8 : -shoulderW * 0.8;
    const armW = h * 0.1;
    const armL = h * 0.4;

    ctx.save();
    ctx.translate(xOffset, shoulderY + h * 0.1);
    // Upper arm down but slightly forward, with subtle breathe
    ctx.rotate(0.3 + Math.sin(phase * Math.PI * 2) * 0.05);
    ctx.fillStyle = color;
    ctx.fillRect(-armW / 2, 0, armW, armL);

    // Lower arm bent up across chest
    ctx.translate(0, armL);
    ctx.rotate(-2.0); // sharp bend
    ctx.fillRect(-armW / 2, 0, armW, armL * 0.9);

    ctx.restore();
}

function drawArchitecturalSprite(
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    size: number,
    bodyType: BodyType,
    pose: Pose | "checkTime" | "talk",
    phase: number,
    color: string
) {
    ctx.save();
    ctx.translate(x, y);

    // Scale height for tall, elegant proportions (fashion illustration style)
    const h = size;
    const totalHeight = h * 2.8 * bodyType.height;

    // Modern minimal colors - flat or subtle gradient
    // We rely on the 'color' prop passed in, which will be a dark stylish tone
    ctx.fillStyle = color;

    // -- Body Shape (Continuous sleek form) --
    const shoulderY = -totalHeight * 0.28;
    const waistY = totalHeight * 0.05; // Higher waist for professional look
    const hipY = totalHeight * 0.18;

    const shoulderW = h * bodyType.shoulders * 0.9; // Slightly narrower/sleeker
    const waistW = h * bodyType.waist * 0.9;
    const hipW = h * bodyType.hips * 0.9;

    // Draw Legs
    if (pose === "walk") {
        drawSleekLegs(ctx, h, hipY, hipW, phase, color);
    } else {
        drawSleekLegs(ctx, h, hipY, hipW, 0, color);
    }

    // Draw Torso (Suit Jacket shape, but fused)
    ctx.beginPath();
    ctx.moveTo(-shoulderW, shoulderY);
    // Gentle curve to waist
    ctx.bezierCurveTo(-shoulderW, shoulderY + h * 0.15, -waistW, waistY - h * 0.1, -waistW, waistY);
    // Curve to hips
    ctx.bezierCurveTo(-waistW, waistY + h * 0.1, -hipW, hipY - h * 0.1, -hipW, hipY);
    ctx.lineTo(hipW, hipY);
    ctx.bezierCurveTo(hipW, hipY - h * 0.1, waistW, waistY + h * 0.1, waistW, waistY);
    ctx.bezierCurveTo(waistW, waistY - h * 0.1, shoulderW, shoulderY + h * 0.15, shoulderW, shoulderY);
    ctx.closePath();
    ctx.fill();

    // Head (Oval, abstract)
    ctx.beginPath();
    // Slightly smaller head for "heroic" proportions
    ctx.ellipse(0, -totalHeight * 0.40, h * 0.12, h * 0.15, 0, 0, Math.PI * 2);
    ctx.fill();

    // Draw Arms
    if (pose === "idle") {
        drawSleekArm(ctx, h, shoulderW, shoulderY, 0, false, color);
        drawSleekArm(ctx, h, shoulderW, shoulderY, 0, true, color, true); // Briefcase
    } else if (pose === "walk") {
        const swing = Math.sin(phase * Math.PI * 2);
        drawSleekArm(ctx, h, shoulderW, shoulderY, swing * 0.5, false, color);
        drawSleekArm(ctx, h, shoulderW, shoulderY, -swing * 0.5, true, color, true);
    } else if (pose === "wave") {
        drawSleekArm(ctx, h, shoulderW, shoulderY, 0.1, false, color, true); // Keep briefcase
        drawSleekWaveArm(ctx, h, shoulderW, shoulderY, phase, true, color);
    } else if (pose === "checkTime") {
        // Left arm checks watch
        drawCheckWatchArm(ctx, h, shoulderW, shoulderY, phase, false, color);
        // Right arm idle with briefcase
        drawSleekArm(ctx, h, shoulderW, shoulderY, 0.05, true, color, true);
    } else if (pose === "talk") {
        // Gesturing with hand
        const gesture = Math.sin(phase * Math.PI * 4) * 0.15;
        drawSleekArm(ctx, h, shoulderW, shoulderY, 0.2 + gesture, false, color);
        drawSleekArm(ctx, h, shoulderW, shoulderY, 0.1, true, color); // No briefcase while networking? Or maybe yes.
    }

    ctx.restore();
}

// ─── Sprite sheet generator ──────────────────────────────────────
interface SpriteSheets {
    idle: HTMLCanvasElement[];
    walking: HTMLCanvasElement[];
    waving: HTMLCanvasElement[];
    checkTime: HTMLCanvasElement[];
    talk: HTMLCanvasElement[];
    variants: number;
}

function generateSpriteSheets(): SpriteSheets {
    const spriteSize = 140;
    const variantsCount = 3; // Reduced variants, focus on subtle shades
    const sheets: SpriteSheets = {
        idle: [],
        walking: [],
        waving: [],
        checkTime: [],
        talk: [],
        variants: variantsCount
    };

    // Modern Architectural Palette (Deep Greys, Navys - no bright colors)
    const colors = ["#222", "#2A2A2A", "#1D1D20"];

    colors.forEach((color, variantIdx) => {
        const bodyType = MALE_TYPES[variantIdx % MALE_TYPES.length];

        // Helper to generate frames
        const gen = (pose: Pose | "checkTime" | "talk", frames: number) => {
            const arr: HTMLCanvasElement[] = [];
            for (let i = 0; i < frames; i++) {
                const c = document.createElement("canvas");
                c.width = spriteSize;
                c.height = spriteSize;
                const ctx = c.getContext("2d")!;
                drawArchitecturalSprite(ctx, spriteSize / 2, spriteSize / 2 + 20, spriteSize * 0.38, bodyType, pose, i / frames, color);
                arr.push(c);
            }
            return arr;
        };

        sheets.idle.push(...gen("idle", 4));
        sheets.walking.push(...gen("walk", 16)); // Smoother walk (16 frames)
        sheets.waving.push(...gen("wave", 8));
        sheets.checkTime.push(...gen("checkTime", 8));
        sheets.talk.push(...gen("talk", 8));
    });

    return sheets;
}

// ─── Person class ────────────────────────────────────────────────
class Person {
    x: number;
    y: number;
    baseY: number; // original Y for walking bob reference
    scale: number;
    depth: number;
    state: "idle" | "walking" | "waving" | "checkTime" | "talk";
    frame: number;
    frameSpeed: number;
    spriteIndex: number;
    isHovered: boolean;
    hoverProgress: number;
    wasHovered: boolean;
    shadowAngle: number;
    shadowLength: number;
    shadowOpacity: number;
    walkSpeed: number;
    direction: number;
    canvasWidth: number;
    walkBobPhase: number; // for vertical bob
    walkBobAmount: number; // how much they bob
    opacity: number; // atmospheric perspective
    colorBrightness: number; // depth-based silhouette shade
    variant: number; // Which style variant (0-3)

    // Timer properties
    stateTimer: number;

    constructor(x: number, y: number, scale: number, depth: number, canvasWidth: number) {
        this.x = Math.round(x);
        this.y = Math.round(y);
        this.baseY = this.y;
        this.scale = scale;
        this.depth = depth;
        this.canvasWidth = canvasWidth;
        this.state = "walking"; // Default
        this.frame = Math.random() * 8;
        this.frameSpeed = 0.06 + Math.random() * 0.04;
        this.spriteIndex = Math.floor(Math.random() * 3);
        this.isHovered = false;
        this.hoverProgress = 0;
        this.wasHovered = false;
        this.shadowAngle = Math.PI * 0.75;
        this.shadowLength = 60 * scale * (1.2 - depth * 0.3);
        this.shadowOpacity = 0.15 + depth * 0.3;
        this.stateTimer = 0;

        // Walking speed:
        this.walkSpeed = (0.2 + Math.random() * 0.3) * scale;
        this.direction = Math.random() > 0.5 ? 1 : -1;

        // Randomly start in checking time to mix it up
        if (Math.random() > 0.85) {
            this.state = "checkTime";
            this.frame = 0;
        }

        // Bob
        this.walkBobPhase = Math.random() * Math.PI * 2;
        this.walkBobAmount = 1.0 + Math.random() * 1.0;

        // Atmospheric perspective
        this.opacity = 0.4 + (depth - 0.5) * 1.2;
        this.opacity = Math.min(1, Math.max(0.3, this.opacity));

        this.colorBrightness = 0;
        this.variant = Math.floor(Math.random() * 3);
    }

    update(deltaTime: number) {
        this.frame += this.frameSpeed * deltaTime * 0.06;

        // -- State Machine --
        if (this.state === "walking") {
            this.x += this.walkSpeed * this.direction * deltaTime * 0.06;
            // Bob
            this.walkBobPhase += this.frameSpeed * deltaTime * 0.12;
            this.y = this.baseY + Math.sin(this.walkBobPhase) * this.walkBobAmount;

            // Occasional check watch stop (1% chance per frame if not hovered)
            if (!this.isHovered && Math.random() < 0.002) {
                this.state = "checkTime";
                this.frame = 0;
                this.stateTimer = 0;
            }
        } else if (this.state === "checkTime") {
            // Stay still
            this.y = this.baseY;
            this.stateTimer += deltaTime;
            // Go back to walk after ~3 seconds
            if (this.stateTimer > 3000) {
                this.state = "walking";
                this.frame = 0;
            }
        } else if (this.state === "talk") {
            this.y = this.baseY; // Standing still
            // Talking happens indefinitely unless hovered
        }

        // Edge wrapping
        const buffer = 100;
        if (this.x > this.canvasWidth + buffer) {
            this.x = -buffer;
        } else if (this.x < -buffer) {
            this.x = this.canvasWidth + buffer;
        }

        // Hover Logic
        if (this.isHovered && this.state !== "waving") {
            this.state = "waving";
            this.frame = 0;
            this.wasHovered = true;
        } else if (!this.isHovered && this.wasHovered && this.state === "waving") {
            if (this.frame >= 6) {
                // Resume walking or talking
                this.state = "walking";
                this.frame = 0;
                this.wasHovered = false;
            }
        }

        if (this.isHovered) {
            this.hoverProgress = Math.min(1, this.hoverProgress + 0.08);
        } else {
            this.hoverProgress = Math.max(0, this.hoverProgress - 0.08);
        }
    }

    checkHover(mouseX: number, mouseY: number): boolean {
        const dx = mouseX - this.x;
        const dy = mouseY - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const prevHovered = this.isHovered;
        this.isHovered = distance < 35 * this.scale;
        return this.isHovered && !prevHovered;
    }

    draw(ctx: CanvasRenderingContext2D, sheets: SpriteSheets) {
        ctx.save();
        ctx.translate(this.x, this.y);

        // Atmospheric perspective: distant figures are more transparent
        ctx.globalAlpha = this.opacity;

        // Flip sprite based on direction
        if (this.direction === -1) {
            ctx.scale(-1, 1);
        }

        // Shadow (only for closer figures)
        if (this.depth > 0.6) {
            this.drawShadow(ctx);
        }

        let baseSpriteArray: HTMLCanvasElement[];
        let framesPerCycle: number;

        if (this.state === "idle") {
            baseSpriteArray = sheets.idle;
            framesPerCycle = 4;
        } else if (this.state === "walking") {
            baseSpriteArray = sheets.walking;
            framesPerCycle = 16;
        } else if (this.state === "waving") {
            baseSpriteArray = sheets.waving;
            framesPerCycle = 8;
        } else if (this.state === "checkTime") {
            baseSpriteArray = sheets.checkTime;
            framesPerCycle = 8;
        } else { // talk
            baseSpriteArray = sheets.talk;
            framesPerCycle = 8;
        }

        const variantOffset = this.variant * framesPerCycle;
        const currentFrameIndex = Math.floor(this.frame) % framesPerCycle;
        // Safety check
        const sprite = baseSpriteArray[variantOffset + currentFrameIndex] || baseSpriteArray[0];

        const drawSize = sprite.width * this.scale;

        // Purple hover glow
        if (this.hoverProgress > 0) {
            ctx.save();
            ctx.globalAlpha = this.hoverProgress * 0.4;
            const glow = ctx.createRadialGradient(0, 0, 0, 0, 0, drawSize * 0.8);
            glow.addColorStop(0, "rgba(168, 85, 247, 0.6)");
            glow.addColorStop(1, "rgba(168, 85, 247, 0)");
            ctx.fillStyle = glow;
            ctx.fillRect(-drawSize / 2, -drawSize / 2, drawSize, drawSize);
            ctx.restore();
        }

        ctx.drawImage(sprite, -drawSize / 2, -drawSize / 2, drawSize, drawSize);
        ctx.restore();
    }

    drawShadow(ctx: CanvasRenderingContext2D) {
        ctx.save();
        const shadowX = Math.cos(this.shadowAngle) * this.shadowLength;
        const shadowY = Math.sin(this.shadowAngle) * this.shadowLength * 0.35;
        ctx.translate(shadowX, shadowY);

        const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, 40 * this.scale);
        gradient.addColorStop(0, `rgba(0, 0, 0, ${this.shadowOpacity})`);
        gradient.addColorStop(0.6, `rgba(0, 0, 0, ${this.shadowOpacity * 0.3})`);
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)");

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.ellipse(0, 0, 35 * this.scale, 12 * this.scale, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
    }
}

// ─── Crowd helpers ───────────────────────────────────────────────
function initCrowd(width: number, height: number): Person[] {
    const people: Person[] = [];
    const isMobile = width < 768;
    // Lower density for spacious feel
    const rows = isMobile ? 8 : 10;
    const cols = isMobile ? 8 : 14;

    // 1. Walking Grid
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (Math.random() > 0.45) continue; // Much lower density

            const baseX = (col / cols) * width;
            const baseY = (row / rows) * height;
            const x = baseX + (Math.random() - 0.5) * (width / cols) * 1.5;
            const y = baseY + (Math.random() - 0.5) * (height / rows) * 1.5;
            const depth = (y / height) * 0.5 + 0.5;
            const scale = depth * depth * (isMobile ? 1.2 : 1.6);

            people.push(new Person(x, y, scale, depth, width));
        }
    }

    // 2. Talking Pairs
    // Spawn 2-3 pairs of people talking to each other
    const pairCount = isMobile ? 1 : 4;
    for (let i = 0; i < pairCount; i++) {
        const x = width * (0.2 + Math.random() * 0.6);
        const y = height * (0.4 + Math.random() * 0.5);
        const depth = (y / height) * 0.5 + 0.5;
        const scale = depth * depth * (isMobile ? 1.2 : 1.6);

        const p1 = new Person(x - 30 * scale, y, scale, depth, width);
        const p2 = new Person(x + 30 * scale, y, scale, depth, width);

        p1.state = "talk";
        p1.direction = 1; // Face right
        p1.walkSpeed = 0; // Don't move

        p2.state = "talk";
        p2.direction = -1; // Face left
        p2.walkSpeed = 0;

        people.push(p1, p2);
    }

    people.sort((a, b) => a.depth - b.depth);
    return people;
}

// ─── Component ───────────────────────────────────────────────────
export const TalentHero = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [loading, setLoading] = useState(true);
    const [peopleCount, setPeopleCount] = useState(0);
    const [interactions, setInteractions] = useState(0);

    // Mutable refs for animation loop
    const sheetsRef = useRef<SpriteSheets | null>(null);
    const peopleRef = useRef<Person[]>([]);
    const mouseRef = useRef({ x: -1000, y: -1000 });
    const interactionsRef = useRef(0);
    const animFrameRef = useRef<number>(0);
    const sizeRef = useRef({ width: 0, height: 0 });

    const handleMouseMove = useCallback((e: MouseEvent) => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const rect = canvas.getBoundingClientRect();
        const scaleX = sizeRef.current.width / rect.width;
        const scaleY = sizeRef.current.height / rect.height;
        mouseRef.current.x = (e.clientX - rect.left) * scaleX;
        mouseRef.current.y = (e.clientY - rect.top) * scaleY;
    }, []);

    const handleTouchMove = useCallback((e: TouchEvent) => {
        const canvas = canvasRef.current;
        if (!canvas || e.touches.length === 0) return;
        const rect = canvas.getBoundingClientRect();
        const scaleX = sizeRef.current.width / rect.width;
        const scaleY = sizeRef.current.height / rect.height;
        mouseRef.current.x = (e.touches[0].clientX - rect.left) * scaleX;
        mouseRef.current.y = (e.touches[0].clientY - rect.top) * scaleY;
    }, []);

    const handleMouseLeave = useCallback(() => {
        mouseRef.current = { x: -1000, y: -1000 };
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        const container = containerRef.current;
        if (!canvas || !container) return;

        const ctx = canvas.getContext("2d", { alpha: false })!;
        const dpr = Math.min(window.devicePixelRatio || 1, 2);

        function resizeCanvas() {
            const rect = container!.getBoundingClientRect();
            const w = rect.width;
            const h = rect.height;
            sizeRef.current = { width: w, height: h };
            canvas!.width = w * dpr;
            canvas!.height = h * dpr;
            ctx.setTransform(1, 0, 0, 1, 0, 0);
            ctx.scale(dpr, dpr);
        }

        resizeCanvas();

        // Generate sprites
        sheetsRef.current = generateSpriteSheets();
        setLoading(false);

        // Init crowd
        const { width, height } = sizeRef.current;
        peopleRef.current = initCrowd(width, height);
        setPeopleCount(peopleRef.current.length);

        // Event listeners
        canvas.addEventListener("mousemove", handleMouseMove);
        canvas.addEventListener("touchmove", handleTouchMove, { passive: true });
        canvas.addEventListener("touchstart", handleTouchMove as EventListener, { passive: true });
        canvas.addEventListener("mouseleave", handleMouseLeave);

        let lastTime = performance.now();

        function animate(currentTime: number) {
            const deltaTime = Math.min(currentTime - lastTime, 100);
            lastTime = currentTime;

            const { width: w, height: h } = sizeRef.current;

            // Dark gradient background — subtle horizon effect
            const gradient = ctx.createLinearGradient(0, 0, 0, h);
            gradient.addColorStop(0, "#1c1c1c");
            gradient.addColorStop(0.3, "#171717");
            gradient.addColorStop(0.7, "#121212");
            gradient.addColorStop(1, "#0a0a0a");
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, w, h);

            // Top-left light source with subtle purple tint
            const lightGradient = ctx.createRadialGradient(
                w * 0.3, h * 0.15, 0,
                w * 0.3, h * 0.15, w * 0.8
            );
            lightGradient.addColorStop(0, "rgba(168, 85, 247, 0.05)");
            lightGradient.addColorStop(0.4, "rgba(168, 85, 247, 0.015)");
            lightGradient.addColorStop(1, "rgba(0, 0, 0, 0)");
            ctx.fillStyle = lightGradient;
            ctx.fillRect(0, 0, w, h);

            // Atmospheric fog — distant area (top) is slightly hazier
            const fogGradient = ctx.createLinearGradient(0, 0, 0, h * 0.5);
            fogGradient.addColorStop(0, "rgba(35, 30, 45, 0.4)");
            fogGradient.addColorStop(1, "rgba(35, 30, 45, 0)");
            ctx.fillStyle = fogGradient;
            ctx.fillRect(0, 0, w, h * 0.5);

            // Ground-plane ambient glow near bottom
            const groundGlow = ctx.createLinearGradient(0, h * 0.75, 0, h);
            groundGlow.addColorStop(0, "rgba(0, 0, 0, 0)");
            groundGlow.addColorStop(1, "rgba(100, 50, 150, 0.03)");
            ctx.fillStyle = groundGlow;
            ctx.fillRect(0, h * 0.75, w, h * 0.25);

            // Update & draw people
            const sheets = sheetsRef.current;
            if (sheets) {
                peopleRef.current.forEach((person) => {
                    const newInteraction = person.checkHover(mouseRef.current.x, mouseRef.current.y);
                    if (newInteraction) {
                        interactionsRef.current++;
                        setInteractions(interactionsRef.current);
                    }
                    person.update(deltaTime);
                    person.draw(ctx, sheets);
                });
            }

            animFrameRef.current = requestAnimationFrame(animate);
        }

        animFrameRef.current = requestAnimationFrame(animate);

        // Resize handler
        function onResize() {
            resizeCanvas();
            const { width: w, height: h } = sizeRef.current;
            peopleRef.current = initCrowd(w, h);
            setPeopleCount(peopleRef.current.length);
        }

        window.addEventListener("resize", onResize);

        return () => {
            cancelAnimationFrame(animFrameRef.current);
            canvas.removeEventListener("mousemove", handleMouseMove);
            canvas.removeEventListener("touchmove", handleTouchMove);
            canvas.removeEventListener("touchstart", handleTouchMove as EventListener);
            canvas.removeEventListener("mouseleave", handleMouseLeave);
            window.removeEventListener("resize", onResize);
        };
    }, [handleMouseMove, handleTouchMove, handleMouseLeave]);

    return (
        <section className="relative w-full bg-black overflow-hidden">
            {/* Canvas container */}
            <div
                ref={containerRef}
                className="relative w-full h-[400px] md:h-[600px] lg:h-[700px]"
                style={{
                    background: "linear-gradient(180deg, #1a1a1a 0%, #0f0f0f 100%)",
                    borderBottom: "1px solid rgba(255,255,255,0.05)",
                }}
            >
                <canvas
                    ref={canvasRef}
                    className="block w-full h-full"
                    style={{ cursor: "crosshair" }}
                />

                {/* Overlay gradient for text readability */}
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        background:
                            "radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.3) 100%)",
                    }}
                />

                {/* Loading state */}
                {loading && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <span className="text-zinc-500 text-sm font-mono">
                            Generating sprites...
                        </span>
                    </div>
                )}

                {/* Hero text overlay */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                    <div className="text-center px-4">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-5 tracking-tight"
                            style={{ textShadow: "0 2px 30px rgba(0,0,0,0.6)" }}
                        >
                            Find Your Next{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-500 to-purple-600">
                                Great Hire
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
                            className="text-white/80 text-base sm:text-lg md:text-xl font-light tracking-wide mb-3"
                            style={{ textShadow: "0 1px 15px rgba(0,0,0,0.5)" }}
                        >
                            Connecting talent with opportunity
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.6 }}
                            className="text-purple-400/70 text-xs sm:text-sm font-mono tracking-widest uppercase"
                        >
                            Hover over the crowd to spot your next hire
                        </motion.p>
                    </div>
                </div>

                {/* Stats panel */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="absolute bottom-4 right-4 md:bottom-8 md:right-8 z-10"
                >
                    <div
                        className="px-4 py-3 md:px-5 md:py-4 rounded-xl font-mono text-[11px] md:text-xs space-y-1.5"
                        style={{
                            background: "rgba(15, 15, 15, 0.8)",
                            backdropFilter: "blur(10px)",
                            border: "1px solid rgba(255,255,255,0.1)",
                        }}
                    >
                        <div className="flex justify-between gap-4">
                            <span className="text-white/40">ACTIVE TALENTS</span>
                            <span className="text-purple-400 font-semibold">{peopleCount}</span>
                        </div>
                        <div className="flex justify-between gap-4">
                            <span className="text-white/40">INTERACTIONS</span>
                            <span className="text-purple-400 font-semibold">{interactions}</span>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Bottom gradient fade into next section */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none" />
        </section>
    );
};
