import { Badge } from "@/components/ui/badge"

interface BadgeCustomColorsProps {
    color: "blue" | "green" | "sky" | "purple" | "red" | "yellow" | "orange" | "pink" | "indigo" | "teal" | "gray" | "amber" | "cyan" | "rose" | "lime" | "emerald" | "violet" | "fuchsia",
    text: string
}

export function BadgeCustomColors({ color, text }: BadgeCustomColorsProps) {
    switch (color) {
        case "blue": {
            return (
                <Badge className="bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300">
                    {text}
                </Badge>
            )
        }
        case "green": {
            return (
                <Badge className="bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300">
                    {text}
                </Badge>
            )
        }
        case "sky": {
            return (
                <Badge className="bg-sky-50 text-sky-700 dark:bg-sky-950 dark:text-sky-300">
                    {text}
                </Badge>
            )
        }
        case "purple": {
            return (
                <Badge className="bg-purple-50 text-purple-700 dark:bg-purple-950 dark:text-purple-300">
                    {text}
                </Badge>
            )
        }
        case "red": {
            return (
                <Badge className="bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-300">
                    {text}
                </Badge>
            )
        }
        case "yellow": {
            return (
                <Badge className="bg-yellow-50 text-yellow-700 dark:bg-yellow-950 dark:text-yellow-300">
                    {text}
                </Badge>
            )
        }
        case "orange": {
            return (
                <Badge className="bg-orange-50 text-orange-700 dark:bg-orange-950 dark:text-orange-300">
                    {text}
                </Badge>
            )
        }
        case "pink": {
            return (
                <Badge className="bg-pink-50 text-pink-700 dark:bg-pink-950 dark:text-pink-300">
                    {text}
                </Badge>
            )
        }
        case "indigo": {
            return (
                <Badge className="bg-indigo-50 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
                    {text}
                </Badge>
            )
        }
        case "teal": {
            return (
                <Badge className="bg-teal-50 text-teal-700 dark:bg-teal-950 dark:text-teal-300">
                    {text}
                </Badge>
            )
        }
        case "gray": {
            return (
                <Badge className="bg-gray-50 text-gray-700 dark:bg-gray-950 dark:text-gray-300">
                    {text}
                </Badge>
            )
        }
        case "amber": {
            return (
                <Badge className="bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-300">
                    {text}
                </Badge>
            )
        }
        case "cyan": {
            return (
                <Badge className="bg-cyan-50 text-cyan-700 dark:bg-cyan-950 dark:text-cyan-300">
                    {text}
                </Badge>
            )
        }
        case "rose": {
            return (
                <Badge className="bg-rose-50 text-rose-700 dark:bg-rose-950 dark:text-rose-300">
                    {text}
                </Badge>
            )
        }
        case "lime": {
            return (
                <Badge className="bg-lime-50 text-lime-700 dark:bg-lime-950 dark:text-lime-300">
                    {text}
                </Badge>
            )
        }
        case "emerald": {
            return (
                <Badge className="bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">
                    {text}
                </Badge>
            )
        }
        case "violet": {
            return (
                <Badge className="bg-violet-50 text-violet-700 dark:bg-violet-950 dark:text-violet-300">
                    {text}
                </Badge>
            )
        }
        case "fuchsia": {
            return (
                <Badge className="bg-fuchsia-50 text-fuchsia-700 dark:bg-fuchsia-950 dark:text-fuchsia-300">
                    {text}
                </Badge>
            )
        }
    }
}