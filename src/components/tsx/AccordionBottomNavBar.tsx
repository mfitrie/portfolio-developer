import { ChevronDown, Moon, Sun } from "lucide-react";
import { Button } from "../ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/custom-accordion";
import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { TerminalIcon } from "../icons/TerminalIcon";

export default function AccordionBottomNavBar() {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
    useEffect(() => {
        const theme = localStorage.getItem("theme") as "light" | "dark" | null;
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
            setIsDarkMode(true);
        } else if (theme === "light") {
            document.documentElement.classList.remove("dark");
            setIsDarkMode(false);
        }
    }, []);

    const listMenu: {
        title: string,
        link: string,
    }[] = [
            {
                title: "Home",
                link: "#home"
            },
            {
                title: "Projects",
                link: "#project"
            },
            {
                title: "Experience",
                link: "#experience"
            },
            {
                title: "Skills",
                link: "#skills"
            },
        ];



    return (
        <Accordion>
            <AccordionItem value="shipping">
                <AccordionTrigger className="group hover:no-underline [&>svg]:hidden">
                    <div className="flex flex-1 items-center justify-between">
                        <div className="flex flex-row gap-4 items-center">
                            <div>
                                <TerminalIcon className="w-8 h-8 text-foreground" />
                            </div>
                            <div className="flex flex-col text-left">
                                <span>Muhammad Fitrie</span>
                                <span className="text-sm text-muted-foreground">
                                    Full-Stack Developer
                                </span>
                            </div>
                        </div>
                        <Button variant="outline">Menu</Button>
                    </div>
                </AccordionTrigger>
                <AccordionContent>
                    <div className="flex flex-col gap-4">
                        <div className="grid grid-cols-2 gap-1">
                            {
                                listMenu.map(item => (
                                    <div className="border flex flex-row items-center justify-center">
                                        <a
                                            href={item.link}
                                            className="px-3 py-2 rounded-full text-sm transition-colors no-underline! hover:bg-muted"
                                        >
                                            {item.title}
                                        </a>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="flex flex-row justify-between items-center">
                            <div className="flex flex-row items-center gap-2">
                                <Button
                                    variant="outline"
                                    size="icon"
                                >
                                    <Icon icon="mdi:linkedin" />
                                </Button>
                                <Button
                                    variant="outline"
                                    size="icon"
                                >
                                    <Icon icon="mdi:github" />
                                </Button>
                            </div>
                            <div className="flex flex-row items-center ">
                                <Button
                                    variant="outline"
                                    size="icon"
                                    onClick={() => {
                                        const isDark = document.documentElement.classList.toggle("dark");
                                        localStorage.setItem("theme", isDark ? "dark" : "light");
                                        setIsDarkMode(!isDarkMode);
                                    }}
                                >
                                    {
                                        isDarkMode && (
                                            <Sun />
                                        )
                                    }
                                    {
                                        !isDarkMode && (
                                            <Moon />
                                        )
                                    }
                                </Button>
                            </div>
                        </div>
                    </div>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    );
}