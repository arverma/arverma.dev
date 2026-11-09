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
  jobTitle: "Data Platform Engineer",
  liveProjects: [
    {
      name: "Towards Data Engineering",
      slug: "towards-data-engineering",
      overview: "Towards Data Engineering is a Medium publication on data engineering, cloud architecture, agentic AI and MLOps. The site at tde.arverma.dev is its front door: data engineers and technical practitioners with practical experience or a useful perspective can request to write for the publication, and the team handles editing and publishing.",
      audience: "Data engineers, cloud and platform engineers, and ML practitioners who want to publish practical stories to a data-engineering audience.",
      features: [
        { title: "Write for TDE", text: "A writer-request form for new contributors (#Write@TDE)." },
        { title: "Edit for TDE", text: "A path for people who want to help edit the publication (#Edit@TDE)." },
        { title: "FAQs and Partner Policy", text: "Published answers for writers and the policy for partners and sponsors." },
        { title: "Community on Discord", text: "An open Discord server for writers, readers and data engineers." },
      ],
      kind: "Publication",
      icon: "book-open",
      description:
        "Medium publication and community on data engineering, cloud architecture, AI systems and MLOps. Writer guidelines and submissions.",
      url: "https://tde.arverma.dev",
    },
    {
      name: "Private Markdown Editor",
      slug: "markdown-editor",
      overview: "ConText Editor at editor.arverma.dev is a private, local-first Markdown editor and lightweight code editor that runs entirely in your browser. There is no account, tracking, ads or data collection: your notes stay on your device.",
      audience: "Anyone who wants to write Markdown or clean up JSON, YAML and SQL quickly without signing up or sending text to a server.",
      features: [
        { title: "Markdown and Rich modes", text: "Write raw Markdown or switch to a rich editor with formatting shortcuts." },
        { title: "Autosave with live status", text: "Notes save locally as you type, with a word and character count and a retry option if a save fails." },
        { title: "Notes, trash and backup", text: "Create multiple notes, restore deleted ones from Trash, and import or back up your data." },
        { title: "Format JSON, YAML and SQL", text: "Auto-format, with about twenty SQL dialects including PostgreSQL, MySQL, BigQuery, Snowflake, Trino, Spark SQL and Redshift." },
        { title: "Diff checker", text: "Compare an original and a modified text side by side and see the changes." },
        { title: "Export", text: "Export your note as raw text." },
      ],
      kind: "Web app",
      icon: "square-pen",
      description:
        "Online Markdown and lightweight code editor that runs in your browser. No account, tracking or ads.",
      url: "https://editor.arverma.dev",
    },
    {
      name: "Bihar Police Notebook",
      slug: "bihar-police-notebook",
      overview: "Bihar Police Notebook at bpdiary.arverma.dev is a bilingual web notebook for preparing Bihar Police case diary entries. It reproduces the official Schedule 47, Form 120A case-diary layout (Rule 164) so entries can be typed in the browser and exported as a PDF.",
      audience: "Police personnel who prepare case diaries and want a quick, structured way to write them in Hindi or English.",
      features: [
        { title: "Official diary layout", text: "Case-diary fields such as case number, police station, district, FIR number, date, sections, and the record of investigation." },
        { title: "Hindi and English", text: "Switch the interface between Hindi and English." },
        { title: "PDF export", text: "Export the finished diary as a PDF, with Letter and Diary layout options." },
        { title: "Google Drive sync and backup", text: "Optionally connect Google Drive to sync and back up documents across devices." },
        { title: "Punctuation helper", text: "Click a mark to insert Hindi punctuation at the cursor." },
        { title: "Document control", text: "Create new diaries, hide the header to fit more on a page, and delete documents from the device and the Drive backup." },
      ],
      kind: "Web app",
      icon: "notebook",
      description: "BP Diary: a web notebook for Bihar Police diary entries.",
      url: "https://bpdiary.arverma.dev",
    },
    {
      name: "WiFi Hammer",
      slug: "wifi-hammer",
      overview: "WiFi Hammer is a Chrome extension for the common case where Wi-Fi shows connected but pages will not load. One click wakes a sleeping or stuck connection, with no router reboot. It works with any home broadband or router, including Airtel Xstream Fiber, JioFiber and JioAirFiber.",
      audience: "People on Airtel or Jio broadband who work from home and need a connection that stays up for calls, sync and deep work.",
      features: [
        { title: "One-click hammer", text: "Wake a lazy or sleeping router from your browser." },
        { title: "Auto-hammer", text: "Runs every few minutes (30 by default) to keep the link fresh while you work." },
        { title: "24-hour history", text: "See when your ISP was fine and when it was acting up." },
        { title: "On-demand speed test", text: "Get a real speed check when you need numbers, without cluttering the daily history." },
        { title: "Lightweight", text: "Background checks use tiny packets (about 192 KB), so your bandwidth is safe." },
      ],
      kind: "Chrome extension",
      icon: "wifi",
      description:
        "One click wakes a stuck Wi-Fi connection on Airtel, Jio, JioFiber or any broadband when you see no internet.",
      url: "https://chromewebstore.google.com/detail/wifi-hammer-fix-airteljio/dbphaafiokokiaocpcnfakompafjoddj",
    },
    {
      name: "Dev ToolBox Pro",
      slug: "dev-toolbox-pro",
      overview: "Dev ToolBox Pro is a Chrome side-panel extension for everyday developer text tasks. All processing happens locally inside the extension, so your input is never sent to a remote server.",
      audience: "Developers and data engineers who inspect API responses, logs, tokens, timestamps and SQL all day and do not want to paste them into random websites.",
      features: [
        { title: "Format JSON and SQL", text: "Pretty-print or minify JSON and format SQL with auto-detection. Trino/Presto is the default dialect, with the rest supported by sql-formatter." },
        { title: "JSON string tools", text: "Escape and unescape text as JSON strings." },
        { title: "Decode Base64, JWT, URL and Unicode", text: "JWT decoding shows the header and payload. It does not verify signatures." },
        { title: "Encode to Base64", text: "Convert text to Base64 without an external site." },
        { title: "Unix timestamp converter", text: "Seconds, milliseconds, microseconds and nanoseconds, converted to local time, UTC or any IANA timezone." },
        { title: "Diff JSON and SQL", text: "Side-by-side comparison with line-level highlights and semantic formatting." },
        { title: "Built-in editor", text: "Find and replace, themes, resizable panels and locally saved drafts." },
      ],
      kind: "Chrome extension",
      icon: "wrench",
      description:
        "Format JSON and SQL, decode Base64 and JWT, convert Unix time and diff text, locally in a Chrome side panel.",
      url: "https://chromewebstore.google.com/detail/pjkichifhikfjaoafegdjffemfiknecn",
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
