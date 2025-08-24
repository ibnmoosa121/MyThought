TECH_STACK_CORE:
- Use React 18+ with TypeScript for all components
- Use Vite as build tool and dev server
- Use Tailwind CSS for all styling - no custom CSS files
- Use Zustand for state management - avoid Redux/Context API
- Use Lucide React for all icons - consistent icon library
- Maintain TypeScript strict mode enabled

SHADCN_VARIANT:
- NEVER modify files in /components/ui/ directory
- NEVER install Shadcn components manually; use CLI
- NEVER extend or wrap base Shadcn components directly
- CREATE variant components in /components/common/ for reusable modifications
- USE CSS variables in globals.css for theme-level changes
- USE wrapper components only for complex behavior/layout needs
- USE inline Tailwind classes only for one-off modifications
- ALWAYS use cn() utility function for class combinations
- MAINTAIN original component APIs and prop interfaces
- FOLLOW directory structure: ui/ (base), layout/, features/, common/
- USE semantic color tokens (primary, secondary, muted) not hardcoded colors
- PRESERVE accessibility features and ARIA attributes
- AVOID !important in Tailwind classes
- STYLING_PRIORITY: CSS Variables > Variant Components > Wrapper Components > Inline Classes > Custom CSS

FILE_STRUCTURE:
- Review existing folder structure BEFORE creating new folders
- Use existing folders: components/ui, components/layout, components/features, components/common
- Place page components in pages/ directory
- Place custom hooks in hooks/ directory
- Place Zustand stores in stores/ directory
- Place utility functions in utils/ directory
- Place TypeScript types in types/ directory
- Place constants in constants/ directory
- Create new folders ONLY after discussion and approval

NAMING_CONVENTIONS:
- Files & Folders: kebab-case (user-profile.tsx, auth-forms/)
- Components: PascalCase (UserProfile, AuthForm)
- Variables & Functions: camelCase (userName, handleSubmit)
- Constants: SCREAMING_SNAKE_CASE (API_BASE_URL, MAX_FILE_SIZE)
- Types & Interfaces: PascalCase (User, AuthState, ApiResponse)
- Hooks: camelCase starting with 'use' (useAuth, useLocalStorage)
- Follow naming conventions STRICTLY - no exceptions

FILE_SIZE_LIMITS:
- Component files: 500 lines maximum
- Utility/hook files: 250 lines maximum
- Refactor when exceeding limits - no exceptions
- Extract custom hooks for logic >50 lines
- Separate types into dedicated files when used by 3+ components
- Ask for approval before refactoring large files

DESIGN_PROTOTYPING_WORKFLOW:
1. Start with ASCII text layouts for basic structure concepts
2. Create wireframes for structure and flow visualization
3. Build SVG mockups for simple visual representation
4. Develop standalone HTML prototypes for interactive mockups
5. Implement React component prototypes for full implementation
- Follow workflow order - do not skip steps
- Get approval at each stage before proceeding
- Document prototyping decisions in project documentation

STYLE_GUIDE_MAINTENANCE:
- Maintain consistent color palette with semantic naming
- Document font sizes, weights, and line heights in typography scale
- Document all component states and variations
- Use consistent spacing scale: 4px, 8px, 16px, 24px, 32px intervals
- Document transition timing and easing functions for animations
- Update style guide when design tokens change
- Store style guide in project documentation folder

═══════════════════════════════════════════════════════════════════════════════

COMMUNICATION_PROTOCOL:
- Act as intern - always seek approval from user before major decisions
- Follow sequence: Review → Discuss → Inform → Confirm → Implement
- Ask follow-up questions to clarify requirements and edge cases
- Report ALL changes: removals, modifications, additions
- Provide multiple solution alternatives with pros/cons
- Wait for explicit approval before implementing changes
- Never assume user requirements - always confirm
- My system is Windows

DECISION_MAKING_PROCESS:
1. Analyze request and review existing codebase structure
2. Propose solution with implementation approach and alternatives
3. Discuss implications, trade-offs, and potential risks
4. Wait for explicit confirmation before implementing major changes
5. Report implementation details and any deviations from plan
- Never skip steps in decision making process

PROJECT_STRUCTURE_REVIEW:
- Review existing folders BEFORE creating new ones
- Utilize existing structure and follow established patterns
- Create new folders ONLY when necessary after discussion and approval
- Maintain consistent organization across similar features
- Never create folders without reviewing existing structure first

COMPONENT_DEVELOPMENT_HIERARCHY:
1. Use existing component libraries first
2. Check for existing custom components to reuse or extend
3. Compose from existing components before building new ones
4. Build new reusable components with proper TypeScript prop interfaces
5. Create feature-specific components only when generic ones won't work
- Follow hierarchy strictly - no skipping steps
- Always prioritize reusability over custom solutions

RESPONSIVE_DESIGN_REQUIREMENTS:
- Use 100% mobile-first approach - design for mobile, enhance for desktop
- Follow Tailwind responsive breakpoints: sm:, md:, lg:, xl:, 2xl:
- Minimum 44px touch targets for all interactive elements
- Optimize for mobile networks and lower-end devices
- Test cross-browser compatibility on major browsers
- All components must be responsive - no exceptions