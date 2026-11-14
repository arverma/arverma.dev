export const profile = {
  name: "Aman Ranjan Verma",
  email: "aman.ranjanverma@gmail.com",
  links: {
    github: "https://github.com/arverma",
    githubRepos: "https://github.com/arverma?tab=repositories",
    linkedin: "https://www.linkedin.com/in/ar-verma/",
    medium: "https://amanranjanverma.medium.com/",
  },

  work: [
    {
      company: "QuillBot",
      roles: ["SDE-II", "SDE-III"],
      team: "Data Platform",
      period: "2023 — Present",
    },
    {
      company: "Flipkart",
      roles: ["Data Engineer I", "Data Engineer II"],
      team: "Fintech & Payments Group",
      period: "2021 — 2023",
    },
    {
      company: "Sigmoid",
      roles: ["Associate SDE", "SDE-I"],
      team: "Data Engineering",
      clients: ["Taco Bell", "Goldman Sachs", "Pizza Hut", "Jornaya"],
      period: "2019 — 2021",
    },
    {
      company: "Towards Data Engineering",
      roles: ["Editor-in-Chief"],
      team: "Publication & community",
      period: "2020 — Present",
    },
  ],
  jobTitle: "Data Platform Engineer",
  pinned: [
    {
      title: "How a Kafka Connect Rebalance Skipped 2.5 Billion Messages and How I Fixed It",
      url: "https://medium.com/towards-data-engineering/kafka-connect-how-i-recovered-2-5-44735f7f7fb9",
      hook: "A routine rebalance, a silent offset jump, and how I got every message back.",
    },
    {
      title: "How I Downscaled a Production OpenSearch Cluster Without Losing Data",
      url: "https://medium.com/towards-data-engineering/how-i-downscaled-a-production-opensearch-cluster-without-losing-data-or-my-sanity-08ee8e84ac7e",
      hook: "Cutting cluster cost without a single lost document or a 2am page.",
    },
  ],
  aboutLinks: {
    kafka: "https://medium.com/towards-data-engineering/kafka-connect-how-i-recovered-2-5-44735f7f7fb9",
    iceberg: "https://medium.com/towards-data-engineering/how-i-fixed-corrupted-iceberg-partition-files-without-full-table-scans-or-data-loss-f1a328cef12f",
    opensearch: "https://medium.com/towards-data-engineering/how-i-downscaled-a-production-opensearch-cluster-without-losing-data-or-my-sanity-08ee8e84ac7e",
  },
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
      blurb: "No account, no tracking. Just write.",
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
      blurb: "Built to make daily diary entries faster on basic phones and slow networks.",
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
      blurb: "I got tired of rebooting the router to fix a connection that said it was fine.",
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
      blurb: "Built it because I was tired of pasting JSON into random websites.",
      url: "https://chromewebstore.google.com/detail/pjkichifhikfjaoafegdjffemfiknecn",
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
    },
    {
      title: "The Hidden Cost of Deletes: Keeping Iceberg Fast After a 500-Million Row Purge",
      url: "https://medium.com/towards-data-engineering/the-hidden-cost-of-deletes-keeping-iceberg-fast-after-a-500-million-row-purge-4a7604385870",
    },
    {
      title: "Control Plane vs. Data Plane: Solving DataHub’s OpenSearch Bottlenecks",
      url: "https://medium.com/towards-data-engineering/control-plane-vs-data-plane-solving-datahubs-opensearch-bottlenecks-04fa7248bf71",
    },
    {
      title: "Locked Out of Airbyte After Helm V2 Migration? Here’s How to Recover Your Access",
      url: "https://medium.com/towards-data-engineering/locked-out-of-airbyte-after-helm-v2-migration-heres-how-to-recover-your-access-a5c27b196cc8",
    },
  ],
} as const;

export type Profile = typeof profile;
