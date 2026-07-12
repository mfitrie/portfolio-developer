// src/components/ExperienceTimeline.tsx
import {
    Timeline,
    TimelineContent,
    TimelineDate,
    TimelineHeader,
    TimelineIndicator,
    TimelineItem,
    TimelineSeparator,
    TimelineTitle,
} from "@/components/reui/timeline";

export default function ExperienceTimeline() {
    const listExperience: {
        date: string,
        companyName: string,
        position: string,
        details: string,
    }[] = [
            {
                companyName: "Siaga Labs Sdn Bhd",
                date: "May 2024 - Present",
                position: "Full Stack Developer",
                details: "test"
            },
            {
                companyName: "Siaga Labs Sdn Bhd",
                date: "May 2024 - Present",
                position: "Full Stack Developer",
                details: "test"
            },
            {
                companyName: "Siaga Labs Sdn Bhd",
                date: "May 2024 - Present",
                position: "Full Stack Developer",
                details: "test"
            },
        ]

    return (
        <Timeline defaultValue={1} className="w-full max-w-md">
            {
                listExperience.map((item, index) => (
                    <TimelineItem step={index + 1}>
                        <TimelineHeader>
                            <TimelineDate>{item.date}</TimelineDate>
                            <TimelineTitle>
                                <div className="flex flex-row items-center gap-1">
                                    <span>{item.companyName}</span> 
                                    <span className="text-muted-foreground text-xs">({item.position})</span>
                                </div>
                            </TimelineTitle>
                        </TimelineHeader>
                        <TimelineIndicator />
                        <TimelineSeparator />
                        <TimelineContent>
                            {item.details}
                        </TimelineContent>
                    </TimelineItem>
                ))
            }
        </Timeline>
    );
}