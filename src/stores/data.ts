//* Link btn
export const listExternalLinks: {
    title: string,
    link: string
}[] = [
    {
        title: "Linkedin",
        link: "https://www.linkedin.com/in/muhammad-fitrie-a88472199/",
    },
    {
        title: "GitHub",
        link: "https://github.com/mfitrie",
    },
]

//* Projects
export const listProject: {
    title: string,
    title_description: string | null,
    description: string,
    skills: string[]
    website_link: string | null,
}[] = [
        {
            title: "Photographer Portfolio",
            title_description: "For photography portfolio",
            description: "To tell the client about packages and contact information",
            skills: [
                "Next.js 16",
                "Cloudflare",
                "SEO"
            ],
            website_link: "https://capturemoment.fitrie-server.xyz/"
        },
        {
            title: "Homelab Kubernetes",
            title_description: "For self-hosted home services",
            description: "A Kubernetes server bootstrapped from Kubeadm to host and manage multiple services in my home, such as Immich, Vaultwarden, Nextcloud, etc. The system architecture overview is coming soon...",
            skills: [
                "Kubernetes",
                "Helm",
                "Kustomize",
                "Kubeadm",
            ],
            //FIX:
            website_link: "http://localhost:4321/blog/kubernetes-homelab/"
        },
        {
            title: "Money Tracker",
            title_description: "For expense tracking and budgeting",
            description: "To track my expenditure and provide a dashboard for decision-making. It also has multiple categories for expenditure.",
            skills: [
                "Next.js 16",
                "Tanstack Query",
                "Golang (Go)",
                "PostgreSQL",
            ],
            website_link: null
        },
    ];

//* Experience
export const listExperience: {
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


//* Skills
export const listFrontendSkills: string[] = [
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
export const listBackendSkills: string[] = [
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
export const listToolDevops: string[] = [
    "Kubernetes",
    "Helm",
    "Kustomize",
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
export const listTesting: string[] = [
    "Jest",
];
export const allSkills = [
    ...listFrontendSkills,
    ...listBackendSkills,
    ...listToolDevops,
    ...listTesting,
]