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
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import { listExperience } from "@/stores/data";


export default function ExperienceTimeline() {
    const accordionItems: {
        value: string | number,
        trigger: React.ReactNode,
        content: string,
    }[] = listExperience.map(item => ({
        value: item.id,
        trigger: (
            <div className="flex flex-row items-center gap-1">
                <span className="text-primary">{item.companyName}</span>
                <span className="text-muted-foreground text-xs">({item.position})</span>
            </div>
        ),
        content: item.details
    }));



    return (
        <Timeline defaultValue={1} className="w-full max-w-md">
            {
                listExperience.map((item, index) => (
                    <TimelineItem key={item.id} step={index + 1}>
                        <TimelineHeader>
                            <TimelineDate>{item.date}</TimelineDate>
                        </TimelineHeader>
                        <TimelineIndicator />
                        <TimelineSeparator />
                        <TimelineContent>
                            <Accordion className="max-w-lg">
                                <AccordionItem key={accordionItems[index].value} value={accordionItems[index].value}>
                                    <AccordionTrigger>{accordionItems[index].trigger}</AccordionTrigger>
                                    <AccordionContent>{accordionItems[index].content}</AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </TimelineContent>
                    </TimelineItem>
                ))
            }
        </Timeline>
    );
}