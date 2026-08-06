export const profile = {
  name: "Aman Ranjan Verma",
  title: "Senior Data Engineer · QuillBot · building data platforms",
  tagline:
    "I'm a Senior Data Engineer at QuillBot (ex-Flipkart, Sigmoid) with 7+ years architecting production-grade data platforms — clear systems, measurable impact, calm ownership. B.Tech (Gold Medalist) and Executive MBA ('27). I write weekly for the data community and mentor aspiring engineers.",
  location: "Remote · India!",
  email: "aman.ranjanverma@gmail.com",
  links: {
    github: "https://github.com/arverma",
    linkedin: "https://www.linkedin.com/in/ar-verma/",
    medium: "https://amanranjanverma.medium.com/",
    /** Google Doc — anyone with the link can view */
    resumeDocId: "17e0dTqfSZH0syi9xp2PPE92C-wao8rFMy7IWRJZw0mo",
    resumePreview:
      "https://docs.google.com/document/d/17e0dTqfSZH0syi9xp2PPE92C-wao8rFMy7IWRJZw0mo/preview",
    resumeDownload:
      "https://docs.google.com/document/d/17e0dTqfSZH0syi9xp2PPE92C-wao8rFMy7IWRJZw0mo/export?format=pdf",
    resumeOpen:
      "https://docs.google.com/document/d/17e0dTqfSZH0syi9xp2PPE92C-wao8rFMy7IWRJZw0mo/view",
  },

  work: [
    {
      company: "QuillBot",
      role: "SDE-III, Data Platform",
      period: "2023 — Present",
      bullets: [
        "Core contributor on event tracking, governance, and platform accessibility",
        "Architected microservices for NoSQL CRUD with p99 < 30 ms and 4.5K+ QPS",
        "~50% ownership on plagiarism-checker architecture, build, and deploy",
        "ETL for historical analysis, A/B testing, email marketing, reporting, and upsell",
      ],
    },
    {
      company: "Flipkart",
      role: "Data Engineer I → II · Fintech & Payments",
      period: "2021 — 2023",
      bullets: [
        "Feature pipelines for BNPL, credit card, and EMI products at Flipkart scale",
        "Supported BNPL growth past 6M adopters; credit feature & scoring automation",
        "Partnered with DS, analysts, CIBIL, and bank partners on data deliverables",
      ],
    },
    {
      company: "Sigmoid",
      role: "Associate SDE → SDE-I, Data Engineer",
      period: "2019 — 2021",
      bullets: [
        "Scalable ETL and serverless infra for containerized Python and Spark jobs",
        "Production ML model and feature-pipeline deployment for data science teams",
        "Client work across food, finance, semiconductor, and marketing (US & India)",
      ],
    },
    {
      company: "Towards Data Engineering",
      role: "Community Lead",
      period: "2020 — Present",
      bullets: [
        "Publication with ~72K monthly views and a strong view-to-read engagement rate",
        "Growing community (~12K followers) with weekly technical writing",
      ],
    },
  ],
  projects: [
    {
      name: "Config Manager",
      description:
        "Open-source config registry: Postgres-backed immutable versions, REST API, and a web UI for browse/edit and history.",
      url: "https://github.com/arverma/config-manager",
      tags: ["Go", "Postgres", "API"],
    },
    {
      name: "Config Manager Java SDK",
      description:
        "Lightweight Java client generated from OpenAPI — JDK HttpClient, no extra HTTP deps.",
      url: "https://github.com/arverma/config-manager-java-sdk",
      tags: ["Java", "OpenAPI", "SDK"],
    },
    {
      name: "WebPage-Assistance",
      description:
        "Chrome extension to summarize, translate, Q&A, and analyze any page or screenshot with GPT — Markdown output, minimal UI.",
      url: "https://github.com/arverma/WebPage-Assistance",
      tags: ["JavaScript", "Chrome", "AI"],
    },
    {
      name: "TowardsDataEngineering",
      description:
        "Day-to-day commands and notes data engineers actually use — community reference repo.",
      url: "https://github.com/arverma/TowardsDataEngineering",
      tags: ["Docs", "Data Eng"],
    },
    {
      name: "PostgreSQL-Playground",
      description:
        "Interactive web playground for real-time PostgreSQL experiments — Flask + Docker, isolated learning environment.",
      url: "https://github.com/arverma/PostgreSQL-Playground",
      tags: ["Flask", "Docker", "SQL"],
    },
    {
      name: "ETLInPySpark",
      description:
        "Sample project for writing production-shaped ETL pipelines in PySpark.",
      url: "https://github.com/arverma/ETLInPySpark",
      tags: ["PySpark", "ETL"],
    },
  ],
  skills: {
    Languages: ["Python", "SQL", "Scala", "Go"],
    Data: [
      "Spark",
      "Airflow",
      "dbt",
      "Iceberg",
      "Streaming",
      "ETL/ELT",
      "Data Warehousing",
      "NoSQL",
    ],
    "Cloud & Infra": ["AWS", "GCP", "Docker", "Kubernetes", "CI/CD"],
    Practices: ["APIs", "MLOps", "Data Governance", "Observability"],
  },
  writing: [
    {
      title: "Master Apache Iceberg Table Maintenance: Dealing with Rogue Partitions",
      url: "https://medium.com/towards-data-engineering/master-apache-iceberg-table-maintenance-dealing-with-rogue-partitions-b6f802e3585f",
      blurb: "Ingestion errors, hidden snapshots, and cleaning the metadata tree.",
    },
    {
      title: "The Hidden Cost of Deletes: Keeping Iceberg Fast After a 500-Million Row Purge",
      url: "https://medium.com/towards-data-engineering/the-hidden-cost-of-deletes-keeping-iceberg-fast-after-a-500-million-row-purge-4a7604385870",
      blurb: "Why dropping most of your data can tank query performance — and how to fix it.",
    },
    {
      title: "Control Plane vs. Data Plane: Solving DataHub’s OpenSearch Bottlenecks",
      url: "https://medium.com/towards-data-engineering/control-plane-vs-data-plane-solving-datahubs-opensearch-bottlenecks-04fa7248bf71",
      blurb: "Diagnose AsyncRequestTimeoutException and high tail latency in DataHub.",
    },
    {
      title: "Locked Out of Airbyte After Helm V2 Migration? Here’s How to Recover Your Access",
      url: "https://medium.com/towards-data-engineering/locked-out-of-airbyte-after-helm-v2-migration-heres-how-to-recover-your-access-a5c27b196cc8",
      blurb: "Recover instance-admin-password from Kubernetes secrets after Helm V2.",
    },
  ],
} as const;

export type Profile = typeof profile;
