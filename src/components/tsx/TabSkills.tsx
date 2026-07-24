import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { Badge } from "../ui/badge"

export function TabSkills() {
    const listFrontendSkills: string[] = [
        "React",
        "Next.js App Router",
        "TypeScript",
        "Tanstack Query",
        "Tailwind CSS",
        "Astro.js",
        "Redux",
        "JavaScript",
        "shadcn/ui",
        "React Hook Form"
    ];
    const listBackendSkills: string[] = [
        "Nest.js",
        "Express.js",
        "Node.js",
        "Golang (Go)",
        "PostgreSQL",
        "TypeORM",
        "RabbitMQ",
        "Redis",
        "Zod",
        "Keycloak",
    ];
    const listToolDevops: string[] = [
        "Kubernetes",
        "Docker",
        "Jenkins",
        "GitHub Action",
        "AWS EC2",
        "AWS S3",
        "Cloudflare",
        "Git",
        "Nginx",
        "Ubuntu",
        "Swagger/OpenAPI",
        "Postman",
    ];
    const listTesting: string[] = [
        "Jest",
    ];
    const allSkills = [
        ...listFrontendSkills,
        ...listBackendSkills,
        ...listToolDevops,
        ...listTesting,
    ]



    return (
        <Tabs defaultValue="all" className="w-[400px]">
            <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="frontend">Frontend</TabsTrigger>
                <TabsTrigger value="backend">Backend</TabsTrigger>
                <TabsTrigger value="toolsdevops">Tools & DevOps</TabsTrigger>
                <TabsTrigger value="testing">Testing</TabsTrigger>
            </TabsList>
            <TabsContent value="all">
                <Card>
                    <CardHeader>
                        <CardTitle>All</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-wrap gap-2 max-w-full">
                            {
                                allSkills.map(item => (
                                    <Badge variant="outline">{item}</Badge>
                                ))
                            }
                        </div>
                    </CardContent>
                </Card>
            </TabsContent>
            <TabsContent value="frontend">
                <Card>
                    <CardHeader>
                        <CardTitle>Frontend</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-wrap gap-2 max-w-full">
                            {
                                listFrontendSkills.map(item => (
                                    <Badge variant="outline">{item}</Badge>
                                ))
                            }
                        </div>
                    </CardContent>
                </Card>
            </TabsContent>
            <TabsContent value="backend">
                <Card>
                    <CardHeader>
                        <CardTitle>Backend</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-wrap gap-2 max-w-full">
                            {
                                listBackendSkills.map(item => (
                                    <Badge variant="outline">{item}</Badge>
                                ))
                            }
                        </div>
                    </CardContent>
                </Card>
            </TabsContent>
            <TabsContent value="toolsdevops">
                <Card>
                    <CardHeader>
                        <CardTitle>Tools & DevOps</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-wrap gap-2 max-w-full">
                            {
                                listToolDevops.map(item => (
                                    <Badge variant="outline">{item}</Badge>
                                ))
                            }
                        </div>
                    </CardContent>
                </Card>
            </TabsContent>
            <TabsContent value="testing">
                <Card>
                    <CardHeader>
                        <CardTitle>Testing</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-wrap gap-2 max-w-full">
                            {
                                listTesting.map(item => (
                                    <Badge variant="outline">{item}</Badge>
                                ))
                            }
                        </div>
                    </CardContent>
                </Card>
            </TabsContent>
        </Tabs>
    )
}
