"use client"

import { useEffect, useRef } from "react"

interface InteractiveOrbitalHubProps {
  width?: number
  height?: number
  className?: string
}

export default function InteractiveOrbitalHub({ width = 340, height = 340, className = "" }: InteractiveOrbitalHubProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const context = canvas.getContext("2d")
    if (!context) return

    // Set up responsive dimensions
    const dpr = window.devicePixelRatio || 1
    canvas.width = width * dpr
    canvas.height = height * dpr
    canvas.style.width = `${width}px`
    canvas.style.height = `${height}px`
    context.scale(dpr, dpr)

    // 3D parameters
    const perspective = 400
    let rotationX = 0.4 // Start angle
    let rotationY = 0.6 // Start angle
    let autoRotate = true
    const autoSpeedX = 0.003
    const autoSpeedY = 0.006
    let scaleFactor = 1.05 // Zoom factor

    // Particles/Nodes state
    interface Point3D {
      x: number
      y: number
      z: number
    }

    interface OrbitNode {
      ringIndex: number
      angle: number
      speed: number
      size: number
      color: string
    }

    interface LandmarkNode {
      name: string
      ringIndex: number
      angle: number
      speed: number
      size: number
      color: string
      glowColor: string
    }

    // Define 4 rings with Saudi Emerald Green, Blue, and Gold accents
    interface RingConfig {
      radius: number
      tiltX: number
      tiltZ: number
      color: string
      dashPattern: number[]
      nodesCount: number
    }

    const rings: RingConfig[] = [
      { radius: 65, tiltX: 0.3, tiltZ: 0.2, color: "rgba(16, 185, 129, 0.25)", dashPattern: [4, 4], nodesCount: 2 }, // Emerald
      { radius: 100, tiltX: 1.1, tiltZ: -0.4, color: "rgba(59, 130, 246, 0.25)", dashPattern: [6, 6], nodesCount: 2 }, // Blue
      { radius: 135, tiltX: -0.5, tiltZ: 0.9, color: "rgba(245, 158, 11, 0.2)", dashPattern: [2, 6], nodesCount: 3 }, // Gold
      { radius: 165, tiltX: 0.7, tiltZ: 2.1, color: "rgba(20, 184, 166, 0.15)", dashPattern: [8, 4], nodesCount: 3 } // Teal
    ]

    // Create moving nodes on rings
    const nodes: OrbitNode[] = []
    rings.forEach((ring, ringIdx) => {
      for (let j = 0; j < ring.nodesCount; j++) {
        nodes.push({
          ringIndex: ringIdx,
          angle: (j * (Math.PI * 2)) / ring.nodesCount + Math.random() * 0.5,
          speed: (0.006 + Math.random() * 0.008) * (Math.random() > 0.5 ? 1 : -1),
          size: 2.5 + Math.random() * 2,
          color: ringIdx === 0 ? "#34d399" : ringIdx === 1 ? "#60a5fa" : ringIdx === 2 ? "#fbbf24" : "#2dd4bf"
        })
      }
    });

    // Jeddah Highlights (Famous Landmarks) orbiting in 3D space
    const landmarks: LandmarkNode[] = [
      { name: "Al-Balad", ringIndex: 0, angle: 0, speed: 0.004, size: 3, color: "#34d399", glowColor: "rgba(52, 211, 153, 0.4)" }, // Emerald Green
      { name: "King Fahd's Fountain", ringIndex: 1, angle: Math.PI * 0.6, speed: -0.003, size: 3, color: "#60a5fa", glowColor: "rgba(96, 165, 250, 0.4)" }, // Bright Blue
      { name: "Jeddah Yacht Club", ringIndex: 2, angle: Math.PI * 1.2, speed: 0.002, size: 3, color: "#fbbf24", glowColor: "rgba(251, 191, 36, 0.4)" }, // Gold
      { name: "Red Sea Corniche", ringIndex: 3, angle: Math.PI * 1.8, speed: -0.0025, size: 3, color: "#2dd4bf", glowColor: "rgba(45, 212, 191, 0.4)" } // Teal
    ]

    // Helper functions for 3D rotation and projection
    const rotateX3D = (point: Point3D, angle: number): Point3D => {
      const cos = Math.cos(angle)
      const sin = Math.sin(angle)
      return {
        x: point.x,
        y: point.y * cos - point.z * sin,
        z: point.y * sin + point.z * cos
      }
    }

    const rotateY3D = (point: Point3D, angle: number): Point3D => {
      const cos = Math.cos(angle)
      const sin = Math.sin(angle)
      return {
        x: point.x * cos + point.z * sin,
        y: point.y,
        z: -point.x * sin + point.z * cos
      }
    }

    const rotateZ3D = (point: Point3D, angle: number): Point3D => {
      const cos = Math.cos(angle)
      const sin = Math.sin(angle)
      return {
        x: point.x * cos - point.y * sin,
        y: point.x * sin + point.y * cos,
        z: point.z
      }
    }

    // Projects a 3D point onto the 2D canvas
    const project = (point: Point3D) => {
      // 1. Zoom scaling
      const sx = point.x * scaleFactor
      const sy = point.y * scaleFactor
      const sz = point.z * scaleFactor

      // 2. Rotate based on user interaction / auto-spin
      let p = rotateY3D({ x: sx, y: sy, z: sz }, rotationY)
      p = rotateX3D(p, rotationX)

      // 3. Perspective calculation
      const scale = perspective / (perspective + p.z)
      const screenX = width / 2 + p.x * scale
      const screenY = height / 2 + p.y * scale

      return {
        x: screenX,
        y: screenY,
        z: p.z,
        scale
      }
    }

    let animationFrameId: number

    const render = () => {
      // Clear canvas
      context.clearRect(0, 0, width, height)

      // Update rotation if auto-rotating
      if (autoRotate) {
        rotationY += autoSpeedY
        rotationX += autoSpeedX
      }

      // Center Hub Core (glowing central emerald/white sphere)
      const centerProj = project({ x: 0, y: 0, z: 0 })
      const centerRadius = 26 * centerProj.scale * scaleFactor
      const radGlow = context.createRadialGradient(
        centerProj.x, centerProj.y, centerRadius * 0.1,
        centerProj.x, centerProj.y, centerRadius
      )
      radGlow.addColorStop(0, "#ffffff")
      radGlow.addColorStop(0.3, "rgba(52, 211, 153, 0.95)") // Emerald Core
      radGlow.addColorStop(0.7, "rgba(16, 185, 129, 0.2)")
      radGlow.addColorStop(1, "transparent")

      // Sorting arrays to handle proper z-indexing (depth buffer)
      interface Renderable {
        type: "ring" | "node" | "center" | "connection" | "landmark"
        z: number
        draw: () => void
      }
      const drawQueue: Renderable[] = []

      // Add center core to queue
      drawQueue.push({
        type: "center",
        z: 0, // Depth is zero relative to local coordinates before rotation
        draw: () => {
          context.beginPath()
          context.arc(centerProj.x, centerProj.y, centerRadius, 0, Math.PI * 2)
          context.fillStyle = radGlow
          context.fill()
        }
      })

      // Generate points for rings to render them as 3D circles
      rings.forEach((ring) => {
        const ringPoints: Point3D[] = []
        const segments = 90
        for (let i = 0; i <= segments; i++) {
          const theta = (i * Math.PI * 2) / segments
          // Draw circle in XZ plane
          let p: Point3D = {
            x: Math.cos(theta) * ring.radius,
            y: 0,
            z: Math.sin(theta) * ring.radius
          }
          // Apply ring tilts
          p = rotateX3D(p, ring.tiltX)
          p = rotateZ3D(p, ring.tiltZ)
          ringPoints.push(p)
        }

        // Calculate average Z for this ring to place it in the depth queue
        let sumZ = 0
        ringPoints.forEach(p => {
          const rot = rotateX3D(rotateY3D({ x: p.x * scaleFactor, y: p.y * scaleFactor, z: p.z * scaleFactor }, rotationY), rotationX)
          sumZ += rot.z
        })
        const avgZ = sumZ / ringPoints.length

        drawQueue.push({
          type: "ring",
          z: avgZ,
          draw: () => {
            context.beginPath()
            ringPoints.forEach((p, idx) => {
              const proj = project(p)
              if (idx === 0) {
                context.moveTo(proj.x, proj.y)
              } else {
                context.lineTo(proj.x, proj.y)
              }
            })
            context.strokeStyle = ring.color
            context.lineWidth = 1.2
            context.setLineDash(ring.dashPattern)
            context.stroke()
            context.setLineDash([]) // Reset dash pattern
          }
        })
      })

      // Update and project nodes
      nodes.forEach((node) => {
        node.angle += node.speed // Rotate node
        const ring = rings[node.ringIndex]

        // Node position in local circle space
        let p: Point3D = {
          x: Math.cos(node.angle) * ring.radius,
          y: 0,
          z: Math.sin(node.angle) * ring.radius
        }
        // Apply tilts
        p = rotateX3D(p, ring.tiltX)
        p = rotateZ3D(p, ring.tiltZ)

        const proj = project(p)

        // Add node drawing to queue
        drawQueue.push({
          type: "node",
          z: proj.z,
          draw: () => {
            const size = node.size * proj.scale
            context.beginPath()
            context.arc(proj.x, proj.y, size * 2.5, 0, Math.PI * 2)
            context.fillStyle = `rgba(${node.color === "#34d399" ? "52, 211, 153" : node.color === "#60a5fa" ? "96, 165, 250" : node.color === "#fbbf24" ? "251, 191, 36" : "45, 212, 191"}, 0.15)`
            context.fill()

            context.beginPath()
            context.arc(proj.x, proj.y, size, 0, Math.PI * 2)
            context.fillStyle = node.color
            context.shadowColor = node.color
            context.shadowBlur = 8
            context.fill()
            context.shadowBlur = 0 // Reset
          }
        })

        // Draw connections between center core and nodes occasionally
        if (Math.abs(Math.sin(node.angle * 2.5)) > 0.85) {
          drawQueue.push({
            type: "connection",
            z: proj.z / 2,
            draw: () => {
              context.beginPath()
              context.moveTo(centerProj.x, centerProj.y)
              context.lineTo(proj.x, proj.y)
              context.strokeStyle = `rgba(${node.color === "#34d399" ? "52, 211, 153" : "96, 165, 250"}, ${0.08 * proj.scale})`
              context.lineWidth = 0.6
              context.stroke()
            }
          })
        }
      })

      // Update and project Jeddah landmarks (3D Rotating Text labels)
      landmarks.forEach((landmark) => {
        landmark.angle += landmark.speed
        const ring = rings[landmark.ringIndex]

        // Local coordinate mapping
        let p: Point3D = {
          x: Math.cos(landmark.angle) * (ring.radius + 15), // Offset slightly outwards from ring
          y: Math.sin(landmark.angle * 0.5) * 10,           // Add subtle vertical wave
          z: Math.sin(landmark.angle) * (ring.radius + 15)
        }
        p = rotateX3D(p, ring.tiltX)
        p = rotateZ3D(p, ring.tiltZ)

        const proj = project(p)

        // Add landmark to queue
        drawQueue.push({
          type: "landmark",
          z: proj.z,
          draw: () => {
            const size = landmark.size * proj.scale
            
            // Draw connector stem from orbit ring point to label
            let ringP: Point3D = {
              x: Math.cos(landmark.angle) * ring.radius,
              y: 0,
              z: Math.sin(landmark.angle) * ring.radius
            }
            ringP = rotateX3D(ringP, ring.tiltX)
            ringP = rotateZ3D(ringP, ring.tiltZ)
            const ringProj = project(ringP)

            context.beginPath()
            context.moveTo(ringProj.x, ringProj.y)
            context.lineTo(proj.x, proj.y)
            context.strokeStyle = `rgba(255, 255, 255, ${0.1 * proj.scale})`
            context.lineWidth = 0.5
            context.stroke()

            // 1. Draw glowing dot
            context.beginPath()
            context.arc(proj.x, proj.y, size * 2, 0, Math.PI * 2)
            context.fillStyle = landmark.glowColor
            context.fill()

            context.beginPath()
            context.arc(proj.x, proj.y, size, 0, Math.PI * 2)
            context.fillStyle = landmark.color
            context.shadowColor = landmark.color
            context.shadowBlur = 6
            context.fill()
            context.shadowBlur = 0

            // 2. Draw Landmark Text Label (fading with depth)
            const alpha = Math.max(0.15, Math.min(1.0, (perspective - proj.z) / (perspective * 1.3)))
            context.fillStyle = `rgba(255, 255, 255, ${alpha * 0.95})`
            
            // Modern typography matching theme
            const fontSize = Math.max(7, Math.round(9 * proj.scale))
            context.font = `bold ${fontSize}px monospace`
            context.textAlign = "left"
            context.textBaseline = "middle"
            
            // Draw a subtle dark backing for readability
            const labelText = landmark.name.toUpperCase()
            const textWidth = context.measureText(labelText).width
            context.fillStyle = `rgba(0, 0, 0, ${alpha * 0.5})`
            context.fillRect(proj.x + 8, proj.y - fontSize/2 - 2, textWidth + 6, fontSize + 4)
            
            // Draw text
            context.fillStyle = `rgba(255, 255, 255, ${alpha})`
            context.fillText(labelText, proj.x + 11, proj.y)
          }
        })
      })

      // Sort queue by depth (z value) in descending order (back to front)
      drawQueue.sort((a, b) => b.z - a.z)

      // Draw all elements in order
      drawQueue.forEach(item => item.draw())

      // Draw subtle tech details overlay (crosshairs/axes indicators)
      context.strokeStyle = "rgba(255, 255, 255, 0.05)"
      context.lineWidth = 1
      context.beginPath()
      context.moveTo(20, height / 2)
      context.lineTo(35, height / 2)
      context.moveTo(width - 35, height / 2)
      context.lineTo(width - 20, height / 2)
      context.moveTo(width / 2, 20)
      context.lineTo(width / 2, 35)
      context.moveTo(width / 2, height - 35)
      context.lineTo(width / 2, height - 20)
      context.stroke()

      // Tech details text overlay
      context.fillStyle = "rgba(52, 211, 153, 0.35)" // Emerald accent text
      context.font = "8px monospace"
      context.fillText("JEDDAH RADAR // ONLINE", 24, 30)

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    // Event handlers for dragging/rotation
    const handleMouseDown = (event: MouseEvent) => {
      autoRotate = false
      const startX = event.clientX
      const startY = event.clientY
      const startRotX = rotationX
      const startRotY = rotationY

      const handleMouseMove = (moveEvent: MouseEvent) => {
        const sensitivity = 0.008
        const dx = moveEvent.clientX - startX
        const dy = moveEvent.clientY - startY

        rotationY = startRotY + dx * sensitivity
        rotationX = startRotX + dy * sensitivity
        // Clamp vertical rotation
        rotationX = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, rotationX))
      }

      const handleMouseUp = () => {
        document.removeEventListener("mousemove", handleMouseMove)
        document.removeEventListener("mouseup", handleMouseUp)
        // Resume auto-rotation after 2 seconds of inactivity
        setTimeout(() => {
          autoRotate = true
        }, 2000)
      }

      document.addEventListener("mousemove", handleMouseMove)
      document.addEventListener("mouseup", handleMouseUp)
    }

    // Scroll wheel zoom
    const handleWheel = (event: WheelEvent) => {
      event.preventDefault()
      const factor = event.deltaY > 0 ? 0.95 : 1.05
      scaleFactor = Math.max(0.5, Math.min(1.8, scaleFactor * factor))
    }

    canvas.addEventListener("mousedown", handleMouseDown)
    canvas.addEventListener("wheel", handleWheel)

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId)
      canvas.removeEventListener("mousedown", handleMouseDown)
      canvas.removeEventListener("wheel", handleWheel)
    }
  }, [width, height])

  return (
    <div className={`relative ${className}`}>
      <canvas
        ref={canvasRef}
        className="w-full h-auto"
        style={{ maxWidth: "100%", height: "auto" }}
      />
    </div>
  )
}
