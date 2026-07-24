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

function clipText(text: string, maxLength: number = 100): string {
    if (text.length <= maxLength) {
        return text;
    }
    return text.slice(0, maxLength).trimEnd() + "...";
}

export default function ExperienceTimeline() {
    const listExperience: {
        id: number,
        date: string,
        companyName: string,
        position: string,
        details: string,
    }[] = [
            {
                id: 1,
                companyName: "Siaga Labs Sdn Bhd",
                date: "May 2024 - Present",
                position: "Full Stack Developer",
                details: "I designed scalable database schemas and backend services with NestJS, PostgreSQL, and TypeScript, adding GIS mapping features via PostGIS and securing access with Keycloak (OAuth 2.0, RBAC). I cut API response time by 85% through Redis caching and indexing, and built test coverage with Jest and Supertest. On the front end, I used Next.js App Router, PrimeReact, and Redux Toolkit, while also setting up CI/CD with Jenkins and Docker, managing Ubuntu servers, and maintaining API docs (Swagger) and technical documentation with standardized GitFlow practices."
            },
            {
                id: 2,
                companyName: "ThunderQuote Sdn Bhd",
                date: "February 2023 - April 2024",
                position: "Junior Web Developer",
                details: "I worked full-stack, from gathering client requirements to deploying and monitoring apps on AWS. I built responsive front-ends with Vue.js and Pug, designed in Figma, and developed back-end systems with Node.js, OData, and RESTful APIs—integrating Microsoft Graph API and using SheetJS for Excel exports."
            },
            {
                id: 3,
                companyName: "ThunderQuote Sdn Bhd",
                date: "September 2022 - January 2023",
                position: "Web Developer Intern",
                details: "I worked as part of the core product team, contributing to both frontend and backend development. On the backend, I used PHP7+, Node.js, MySQL, and Python; on the frontend, I built components with Vue.js, Bootstrap-Vue, and SCSS."
            }
        ];

    // const accordionItems = [
    //     {
    //         value: listExperience[0],
    //         trigger: "How do I reset my password?",
    //         content:
    //             "Click on 'Forgot Password' on the login page, enter your email address, and we'll send you a link to reset your password. The link will expire in 24 hours.",
    //     },
    //     {
    //         value: "item-2",
    //         trigger: "Can I change my subscription plan?",
    //         content:
    //             "Yes, you can upgrade or downgrade your plan at any time from your account settings. Changes will be reflected in your next billing cycle.",
    //     },
    //     {
    //         value: "item-3",
    //         trigger: "What payment methods do you accept?",
    //         content:
    //             "We accept all major credit cards, PayPal, and bank transfers. All payments are processed securely through our payment partners.",
    //     },
    // ]

    const accordionItems: {
        value: string | number,
        trigger: string,
        content: string,
    }[] = listExperience.map(item => ({
        value: item.id,
        trigger: clipText(item.details, 40),
        content: item.details
    }));



    return (
        <Timeline defaultValue={1} className="w-full max-w-md">
            {
                listExperience.map((item, index) => (
                    <TimelineItem key={item.id} step={index + 1}>
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