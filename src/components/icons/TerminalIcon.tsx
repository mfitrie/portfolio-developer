export function TerminalIcon({ className }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <rect x="4" y="4" width="40" height="40" rx="10" stroke="currentColor" strokeWidth="3" />
            <path d="M14 18L20 24L14 30" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <rect x="24" y="28" width="10" height="3" rx="1" fill="currentColor">
                <animate
                    attributeName="opacity"
                    values="1;1;0;0;1"
                    keyTimes="0;0.4;0.5;0.9;1"
                    dur="1.2s"
                    repeatCount="indefinite"
                />
            </rect>
        </svg>
    );
}