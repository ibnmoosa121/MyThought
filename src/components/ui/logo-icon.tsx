interface LogoIconProps {
    size?: number
    className?: string
}

export const LogoIcon = ({ size = 24, className = "" }: LogoIconProps) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <defs>
                <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="currentColor" stopOpacity="1" />
                    <stop offset="100%" stopColor="currentColor" stopOpacity="0.7" />
                </linearGradient>
            </defs>

            {/* Abstract brain/thought bubble design */}
            <path
                d="M50 10 C30 10 15 25 15 45 C15 55 20 63 27 68 L27 85 L40 75 C43 76 46 77 50 77 C70 77 85 62 85 42 C85 22 70 10 50 10 Z"
                fill="url(#logoGradient)"
                opacity="0.3"
            />

            {/* Central thought symbol */}
            <circle cx="50" cy="42" r="18" fill="url(#logoGradient)" />
            <circle cx="35" cy="35" r="8" fill="url(#logoGradient)" opacity="0.6" />
            <circle cx="65" cy="35" r="8" fill="url(#logoGradient)" opacity="0.6" />

            {/* Abstract neural connections */}
            <path
                d="M50 24 Q40 30 35 35 M50 24 Q60 30 65 35 M35 43 Q42 42 50 42 M65 43 Q58 42 50 42"
                stroke="url(#logoGradient)"
                strokeWidth="2"
                fill="none"
                opacity="0.5"
            />

            {/* Small accent dots */}
            <circle cx="30" cy="50" r="3" fill="url(#logoGradient)" opacity="0.4" />
            <circle cx="70" cy="50" r="3" fill="url(#logoGradient)" opacity="0.4" />
            <circle cx="50" cy="60" r="3" fill="url(#logoGradient)" opacity="0.4" />
        </svg>
    )
}

export default LogoIcon
