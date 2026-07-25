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
import { allSkills, listBackendSkills, listFrontendSkills, listTesting, listToolDevops } from "@/stores/data"

export function TabSkills() {
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
                                allSkills.map((item, index) => (
                                    <Badge variant="outline" key={index}>{item}</Badge>
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
                                listFrontendSkills.map((item, index) => (
                                    <Badge variant="outline" key={index}>{item}</Badge>
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
                                listBackendSkills.map((item, index) => (
                                    <Badge variant="outline" key={index}>{item}</Badge>
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
                                listToolDevops.map((item, index) => (
                                    <Badge variant="outline" key={index}>{item}</Badge>
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
                                listTesting.map((item, index) => (
                                    <Badge variant="outline" key={index}>{item}</Badge>
                                ))
                            }
                        </div>
                    </CardContent>
                </Card>
            </TabsContent>
        </Tabs>
    )
}
