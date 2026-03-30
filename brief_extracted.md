NEETI GANGA LEGAL ASSOCIATES
Website Redesign & Content Brief
A Comprehensive Specification Document
Prepared For:
Neeti Ganga Legal Associates — Web Development Team
Document Version: 1.0   |   Date: March 2026   |   Classification: Confidential
―――  THE CONFLUENCE OF STRATEGY AND JUSTICE  ―――
1. Document Overview & Purpose
This document serves as the master reference brief for the comprehensive redesign and content overhaul of the Neeti Ganga Legal Associates website. It covers every section, page, and feature that must be implemented, clarified, or improved by the development and content team. All changes described herein are mandatory unless specifically marked as optional.
NOTE: This document must be read alongside the logo assets provided separately by the firm. All branding decisions described in Section 2 should be cross-referenced with the official logo files before implementation.
Area
Priority
Branding & Identity
High — Implement First
Philosophy Section
High — Core Content
Bar Council Compliance
Critical — Legal Requirement
Homepage Improvements
High
Services & Expertise
High
Media & Blog Section
Medium
Pro Bono Section
Medium
Contact & Maps
High
Compliance & Disclaimers
Critical
UI/UX & Mobile Responsiveness
High
2. Branding & Identity
2.1 Brand Philosophy — The Name Behind the Firm
The firm's name, Neeti Ganga, is not merely a label — it is a declaration of purpose. The development team must weave this meaning into every design decision: colour, typography, imagery, and language. Nothing on the website should feel generic or interchangeable with another law firm.
Neeti (Sanskrit): Strategic wisdom, ethical governance, the art of righteous counsel.
Ganga: India's most sacred river — timeless, purifying, unstoppable in its flow toward the sea.
Together: A force that combines principled strategy with relentless pursuit of justice.
2.2 Logo Usage
The official logo will be supplied by the firm. The development team must comply with the following logo guidelines:
Primary Placement: Top-left corner of the website header on all pages. Logo must be clickable and link to the homepage.
Size: Minimum 160px width on desktop. Minimum 120px on mobile. Do not crop, distort, or re-colour the logo.
Backgrounds: Logo must be tested on both dark (navy) and light (white) backgrounds. Supply two variants — full-colour and reversed (white) — if not already provided by the firm.
Footer: A smaller monochrome or reversed version of the logo should appear in the website footer.
Favicon: Extract the key icon or lettermark from the logo to use as the browser favicon (32x32px and 64x64px).
2.3 Colour Palette
Colour Role
Hex Value / Description
Primary Brand Navy
#1B2A6B — Deep authority blue for headers and primary CTAs
Accent Gold
#C8922A — Highlights, dividers, key call-outs and borders
Secondary Teal
#2A7B8C — Section headers, hover states, active links
Light Brand Background
#EEF2FF — Soft blue-white for alternating section backgrounds
Body Text
#4A4A4A — Dark grey, readable on both white and light blue backgrounds
White
#FFFFFF — Primary background for content areas
Footer Background
#1B2A6B — Brand navy for contrast and authority
2.4 Typography
Primary Typeface (Headings): Playfair Display or Cormorant Garamond — conveys tradition, authority, and gravitas.
Secondary Typeface (Body): Inter or Source Sans Pro — clean, modern, highly legible on all devices.
Minimum Body Font Size: 16px on desktop, 15px on mobile.
Line Height: 1.7 for body text to ensure comfortable reading.
All headings must use Title Case. Avoid ALL CAPS in body paragraphs.
3. Our Philosophy — Content to Be Published
The following philosophy statement must be published verbatim on the website homepage and on a dedicated 'About / Philosophy' page. It must be displayed prominently — not buried in fine print.
OUR PHILOSOPHY: THE CONFLUENCE OF STRATEGY AND JUSTICE
At Neeti Ganga Legal Associates, our name is our mission. Just as the Ganga is a timeless, purifying force that carves its own path, we believe the law should be a relentless flow toward the truth. But a river without banks is a flood; it needs Neeti — the ancient art of strategic wisdom — to guide its power.
We operate on the principle that "Justice is not a destination, but a constant flow." Our philosophy is to remove the debris of legal complexity so that the path to a solution becomes clear.
3.1 Design Treatment for the Philosophy Section
Display the philosophy section as a full-width band on the homepage, immediately after the hero section.
Use a dark navy (#1B2A6B) background with gold (#C8922A) heading text and white body text.
Include a subtle animated water ripple or wave motif in the background (CSS animation, no heavy video required).
The quote 'Justice is not a destination, but a constant flow.' should be typeset separately as a pull-quote in a larger font.
On mobile, the section must stack gracefully and the pull-quote must remain legible at all viewport widths.
4. Homepage — Improvements & New Content
4.1 Hero Section (Above the Fold)
The hero is the first thing a visitor sees. It must communicate credibility and purpose within 3 seconds.
Headline: Trusted Legal Counsel. Strategic. Principled. Relentless.
Sub-headline: Neeti Ganga Legal Associates — Practising across Civil, Criminal, Corporate, and Specialised Law from offices in Pune, Delhi, and Patna.
CTA Buttons: Two buttons: (1) 'Schedule a Consultation' — primary gold button; (2) 'View Our Services' — secondary outlined button.
Background: High-quality, non-generic imagery — courthouse columns, the River Ganga, or abstract legal motifs. Never use stock photo clichés (e.g., handshakes, gavels on white background).
ISO Badge: Display ISO certification badge in the top-right corner of the hero or in the header strip above the hero. See Section 10 for ISO details.
4.2 Bar Council of India — 'Call In' Button Requirement
CRITICAL LEGAL COMPLIANCE. The Bar Council of India prohibits law firms from directly soliciting clients or advertising legal services in a manner that constitutes touting. The following implementation is mandatory:
NOTE: As per Bar Council of India Rules (Part VI, Chapter II), the website must display a mandatory disclaimer. A confirmation pop-up must appear before the user can access any substantive content. Implementation must comply fully with BCI advertising guidelines.
4.2.1 Mandatory Disclaimer Pop-Up
A pop-up modal must appear on the user's first visit (and on each new session) before they can access any content. The pop-up must contain the following text exactly:
DISCLAIMER — BAR COUNCIL OF INDIA
As per the rules of the Bar Council of India, Neeti Ganga Legal Associates is not permitted to solicit work or advertise in any manner. By proceeding past this notice, you acknowledge that you are seeking information about this firm on your own accord, and that no solicitation or advertisement has been made by us.

The information provided on this website is for general informational purposes only and does not constitute legal advice. No attorney-client relationship is created by accessing this website. For advice specific to your situation, please consult a qualified legal professional.

[ I Understand & Agree ]   [ Exit ]
The 'I Understand & Agree' button must be in the primary brand navy colour.
The 'Exit' button must redirect the user to google.com or a neutral page.
This pop-up must NOT auto-dismiss. The user must click to confirm.
Session-cookie logic: show once per session; show again if user clears cookies.
The pop-up must be fully mobile-responsive and keyboard-accessible.
4.2.2 'Call In' Contact Button
A persistent 'Call In' floating button must appear on all pages of the website (bottom-right corner on desktop, full-width strip on mobile). This button:
Opens a click-to-call action for the primary firm telephone number.
Must be clearly labelled: 'Call Us — Available 24/7'.
On click, triggers the device's native phone dialler (tel: link protocol).
Must display the firm's primary contact number visibly.
Must not claim to offer legal advice via this channel — add micro-text: 'For general enquiries and to schedule a consultation.'
5. Firm Description — Homepage & About Page
Replace any existing vague description of the firm with the following structured, client-friendly description. This must appear both on the homepage (abbreviated version) and in full on the About Us page.
5.1 Abbreviated Homepage Description
ABOUT THE FIRM (Homepage Version — 80 words max)
Neeti Ganga Legal Associates is a full-service law firm committed to delivering strategic, principled, and results-driven legal representation. With offices in Pune, Delhi, and Patna, we serve individuals, businesses, and startups across a comprehensive spectrum of legal disciplines — from civil and criminal litigation to corporate advisory and beyond.

We are more than lawyers. We are your strategic partners, your advocates, and your guides through the complexities of the legal system. Justice, for us, is not an ideal — it is the outcome we work toward every single day.
5.2 Full About Us Page Description
The About Us page must include the following structured sections:
Firm History & Founding Philosophy — narrative paragraph describing the firm's origins and mission.
Who We Are — description of the team's composition (partners, associates, support staff).
Our Philosophy — full version as described in Section 3.
Principles of Practice — see Section 8.
Our Offices — Pune, Delhi, and Patna with addresses and embedded Google Maps.
ISO Certification — display badge and description.
Awards & Recognition (if applicable).
6. Services & Expertise
The firm operates as a comprehensive, full-service legal practice. The Services page must be structured and exhaustive. Use an accordion or tab-based UI component to keep the page clean while making all information accessible. Each service area must have its own sub-page or expandable section.
6.1 Civil Law Practice
List all civil practice areas under this header. Civil law must be first, prominently featured:
Property & Real Estate Disputes — title disputes, partition suits, landlord-tenant, encroachment.
Contract Disputes — breach of contract, specific performance, injunctions.
Consumer Protection Matters — NCDRC, state commissions, e-commerce disputes.
Family Law & Matrimonial — divorce, maintenance, custody, adoption, guardianship.
Succession & Probate — will disputes, intestate succession, estate administration.
Recovery of Money — debt recovery, summary suits, execution proceedings.
Motor Accident Claims — MACT tribunals, insurance disputes.
Injunction & Declaratory Suits.
Writ Petitions — High Courts and Supreme Court (PIL, fundamental rights, statutory rights).
6.2 Criminal Law Practice
Bail Applications — anticipatory bail, regular bail, Supreme Court SLP.
Trial Defence — sessions court, magistrate courts, special courts.
White Collar Crime — fraud, embezzlement, financial crimes, PMLA.
Cybercrime Defence.
Domestic Violence & POCSO Matters.
Appeal & Revision — High Courts and Supreme Court.
6.3 Corporate & Business Law
Company Formation & Startup Legal Setup — MOA/AOA drafting, Shareholders Agreements.
Contract Drafting & Review — NDAs, employment agreements, vendor contracts.
Mergers & Acquisitions — due diligence, deal structuring.
Intellectual Property — trademark, copyright, patent advisory.
NCLT & NCLAT — insolvency, oppression and mismanagement.
Regulatory & Compliance Advisory — SEBI, RBI, FEMA.
6.4 Specialised Practice Areas
Labour & Employment Law — industrial disputes, wrongful termination, POSH compliance.
Banking & Finance Law — loan recovery, NPA disputes, securitisation.
Arbitration & Mediation — domestic and international ADR.
Environmental Law.
Revenue & Land Acquisition Matters.
Media & Entertainment Law.
6.5 Pro Bono Services
NOTE: The Pro Bono section must appear both in Services and in the Principles of Practice. This demonstrates ethical commitment and builds public trust — a requirement of professional conduct under Bar Council norms.
Neeti Ganga Legal Associates believes that access to justice should not be a privilege of the wealthy. Our pro bono commitment is an integral part of who we are.
We dedicate a percentage of our annual billable hours to pro bono representation.
We accept pro bono matters from individuals who cannot afford legal representation in civil and criminal cases.
We partner with legal aid organisations, NGOs, and courts' legal services committees.
Applications for pro bono assistance can be submitted via our Contact page — all applications are reviewed confidentially.
Pro bono matters are handled with the same rigour and commitment as paid engagements.
7. Who We Serve
This section should appear as a clean, visual grid or card layout on the homepage and as a full section on the About or Services page. Use icons or illustrations alongside each client category.
Client Category
What We Do For Them
Individuals
We stand alongside individuals in some of the most challenging moments of their lives — from family disputes and criminal defence to property matters and consumer grievances. We translate the law into plain language so you always know where you stand.
Corporates & Businesses
We are the legal backbone your business needs. From contract risk management and regulatory compliance to litigation and dispute resolution, we protect your interests at every stage of your business journey.
Startups & Entrepreneurs
We understand the pace of startup life. We offer practical, jargon-free legal support for formation, fundraising, IP protection, employment, and everything in between — so you can focus on building.
NGOs & Non-Profits
We advise charitable organisations, trusts, and Section 8 companies on governance, regulatory compliance, and legal rights.
Individuals Seeking Pro Bono Help
We welcome applications from individuals who cannot afford legal representation. Please use our Contact page to apply confidentially.
8. Principles of Practice
This section must be a dedicated page and must also appear summarised in the website footer and the About page. It communicates the firm's ethical DNA and builds credibility with prospective clients.
8.1 Client-First Approach
Every decision we make is guided by one question: what is best for the client? We listen before we advise, we understand before we act, and we communicate proactively so you are never left wondering about the status of your matter.
You will always have a direct point of contact at the firm.
We return calls and messages within 24 hours.
We explain every development in plain language, without unnecessary jargon.
8.2 Client Privacy & Confidentiality
The trust you place in us is sacred. We treat every client communication and every piece of information shared with us as strictly confidential, consistent with our professional obligations under the Bar Council of India Rules and the Advocates Act, 1961.
We do not share client information with third parties without explicit consent.
Our digital infrastructure is secured to prevent unauthorised access.
We maintain confidentiality even after the conclusion of a matter.
8.3 Ethical Practice
We practise law the way it was meant to be practised — with integrity, honesty, and an unwavering commitment to the rule of law. We will never advise a course of action that is illegal, unethical, or contrary to our professional code of conduct.
8.4 Building Credibility & Trust
We earn trust through results, not rhetoric. Our credibility is built on:
Transparent fee structures — no hidden charges.
Honest assessments — we tell you what you need to hear, not what you want to hear.
Consistent communication — you are kept informed at every stage.
ISO Certified Processes — our systems and quality management meet international standards.
8.5 Pro Bono Commitment (Repeated Here)
As outlined in Section 6.5, our pro bono programme is a core pillar of our practice — not an afterthought. We believe in access to justice for all.
9. Media Section
The Media section is a critical trust-builder and SEO driver. It must be a top-level navigation item and must contain the following sub-sections:
9.1 Articles
Long-form legal articles authored by firm members. Format requirements:
Minimum 800 words per article.
Authored by name — builds personal brand for partners and associates.
Categories: Civil Law, Criminal Law, Corporate, Family Law, Startup Legal, etc.
Each article must end with an author bio and a 'Schedule a Consultation' CTA.
Must include estimated reading time (e.g., '5 min read').
9.2 Newsletter
A bi-monthly or quarterly legal newsletter that clients can subscribe to:
Newsletter sign-up form must be present in the Media section and the footer.
Archives of past newsletters must be accessible on the website.
Content: Recent judgements, legislative updates, firm news, and case-study summaries (anonymised where required).
Subscription must comply with DPDP Act 2023 requirements — include an unsubscribe option in every newsletter.
9.3 Blog
A shorter, more frequent blog — 300 to 500 words — covering:
Quick legal tips for individuals and businesses.
Explainers on new laws and court rulings.
'Ask a Lawyer' format posts answering common questions.
SEO-optimised content to improve organic search visibility.
9.4 Media Coverage
A dedicated section showcasing any press coverage, interviews, or media mentions of the firm or its attorneys:
Logo strip of publications/channels that have featured the firm (e.g., The Hindu, Bar & Bench, Live Law).
Links to articles or embedded video clips (with rights permissions).
If not yet available, placeholder section with the heading 'In the News' should be added and populated as coverage is secured.
10. ISO Certification
The firm holds ISO certification, which must be prominently displayed across the website. This is a key trust signal that differentiates the firm from many Indian law firms.
Badge Placement: Hero section (homepage), About Us page, footer, and the 'Why Choose Us' widget.
Badge Style: Official ISO logo with certification number. Do not use a generic ISO graphic — use the actual issued certificate number.
Certification Page: Add a brief dedicated section or expandable text block explaining what the ISO certification covers (e.g., ISO 9001:2015 Quality Management Systems) and what it means for the client (i.e., consistent, process-driven, quality-assured legal services).
Certificate Download: Optionally, allow users to download the ISO certificate as a PDF to verify authenticity.
11. Contact Page
11.1 Office Locations
All three office addresses must be displayed on the Contact page in a clean card layout, each with:
Office name and city clearly labelled.
Full postal address.
Direct telephone number for each office.
Email address.
Google Maps embedded iframe for each location.
'Get Directions' button linking to Google Maps for each office.
Office
Details Required
Pune Office
Full address, phone, email, map embed, directions link
Delhi Office
Full address, phone, email, map embed, directions link
Patna Office
Full address, phone, email, map embed, directions link
11.2 Google Maps Integration
Use the Google Maps Embed API (iframe embed) for each office location.
Maps must load asynchronously — must not block page render.
Each map must show a custom pin in brand navy colour if possible.
Maps must be responsive and correctly sized on mobile viewports.
11.3 Contact Form
A web form must be available on the Contact page with the following fields:
Full Name (required)
Email Address (required)
Phone Number (required — include country code selector for international clients)
Preferred Office (Pune / Delhi / Patna / No Preference — dropdown)
Nature of Matter (dropdown: Civil / Criminal / Corporate / Family / Other)
Brief Description of Your Matter (text area, max 500 characters)
Preferred Mode of Contact (Phone / Email / Video Call)
Consent Checkbox: 'I confirm I have read and accepted the Disclaimer. I understand this form does not create an attorney-client relationship.'
Submit Button: 'Send My Enquiry'
11.4 Working Hours
The website must clearly display working hours. As per the firm's instruction:
FIRM AVAILABILITY
Neeti Ganga Legal Associates is available 24 hours a day, 7 days a week for urgent matters and initial enquiries. For scheduled consultations and formal legal advice, appointments are available during standard office hours.

Emergency Contact: Available around the clock for urgent legal situations.
11.5 Social Media Icons
Social media icons must appear in the website header (small, top-right) and prominently in the footer. Requirements:
Icons must be standard SVG icons (use Font Awesome 6 or similar).
All icons must be clickable and open in a new browser tab.
Hover state: icon must change colour to gold (#C8922A) on hover.
All links must be tested and functional before launch.
Platforms: LinkedIn, Twitter/X, Instagram, Facebook, and YouTube (add only those with active profiles).
A 'Follow Us' label should precede the icon row.
In the footer, social icons must be clearly visible against the dark navy background — use white icon colour with gold hover.
NOTE: A social media pop-up (for instance, a 'Follow Us on LinkedIn' toast notification) may be triggered once per session. It must be dismissible and must not obstruct content.
12. Compliance, Disclaimers & Legal Advertising Rules
12.1 Bar Council of India Advertising Compliance
All website content must comply with BCI Rules on Standards of Professional Conduct and Etiquette (Part VI, Chapter II of BCI Rules 1975 and 2023 amendments). Key compliance requirements:
No comparative advertising ('We are better than...') — prohibited.
No unsolicited testimonials unless client has provided written consent and they are factual.
No guaranteed outcomes language ('We will win your case', 'Guaranteed results') — prohibited.
No fee advertising that could constitute solicitation — tariff information, if listed, must be presented neutrally.
The mandatory disclaimer pop-up (Section 4.2.1) is non-negotiable.
12.2 Privacy Policy
A full Privacy Policy page must be created and linked in the footer. It must cover:
What personal data is collected (name, email, phone via contact form, cookies).
How data is stored and protected.
Data retention periods.
User rights under the Digital Personal Data Protection Act, 2023 (DPDP Act).
Contact information for data-related queries.
12.3 Terms of Use
A Terms of Use page must be created and linked in the footer. Key provisions:
No attorney-client relationship is created by use of the website.
Content on the website is informational only and not legal advice.
Intellectual property rights reserved to Neeti Ganga Legal Associates.
Governing law: India.
12.4 Cookie Consent Banner
A GDPR/DPDP-compliant cookie consent banner must appear on first visit:
Explain what cookies are used for (analytics, session management).
Provide 'Accept All', 'Reject Non-Essential', and 'Manage Preferences' options.
Link to the Privacy Policy.
13. UI/UX — Navigation, Design & Mobile Responsiveness
13.1 Navigation Flow
The primary navigation must be clear, logical, and consistent across all pages:
Nav Item
Sub-Items / Notes
Home
No sub-items. Hero, Philosophy, About snippet, Services overview, CTA.
About Us
Our Story, Our Philosophy, Our Team, ISO Certification, Offices
Practice Areas
Civil Law, Criminal Law, Corporate & Business, Specialised, Pro Bono
Who We Serve
Individuals, Corporates, Startups, NGOs, Pro Bono Applicants
Media
Articles, Newsletter, Blog, Media Coverage
Principles of Practice
Client-First, Privacy, Ethics, Trust, Pro Bono
Contact
All 3 office locations, form, Google Maps, social links, call button
13.2 Spacing & Layout
Sections on the homepage must have consistent padding — minimum 80px vertical padding on desktop, 48px on mobile.
White space is a design tool. Do not cram content. Let sections breathe.
Use a 12-column grid system (Bootstrap 5 or CSS Grid).
Cards must have consistent border-radius (8px recommended) and drop shadows for depth.
13.3 Mobile Responsiveness
The website must be fully responsive across all standard breakpoints: 320px, 375px, 768px, 1024px, 1280px, 1440px.
Navigation must collapse into a hamburger menu on screens below 992px.
Google Maps embeds must scale to 100% width on mobile.
The floating 'Call Us' button must expand to a full-width strip on screens below 480px.
All tables must either scroll horizontally or reformat as stacked cards on mobile.
Images must use responsive srcset attributes or CSS max-width: 100%.
13.4 Content Quality Standards
Every piece of text on the website must meet the following quality standards before publishing:
Plain Language: Avoid legalese in public-facing content. Write as if explaining to a first-time client.
Professional Tone: Warm, confident, and authoritative — never cold, never arrogant.
Action-Oriented: Every page must have a clear next step for the visitor (CTA).
Proofread: Zero spelling or grammatical errors. Have a senior member review all content before publishing.
No Placeholder Text: Remove all 'Lorem ipsum', 'TBD', or generic filler text before the site goes live.
Consistent Terminology: Always refer to the firm as 'Neeti Ganga Legal Associates' on first mention, and 'the firm' or 'we' thereafter.
14. Pre-Launch Checklist
Before the website goes live, the following items must be verified and signed off:
Item
Status
BCI Disclaimer pop-up live and functional
To Do
Logo uploaded correctly — all pages
To Do
ISO Certification badge displayed
To Do
Philosophy section published verbatim
To Do
All 3 office Google Maps embedded
To Do
Social media icons linked and clickable
To Do
24/7 availability note displayed
To Do
Cookie consent banner functional
To Do
Privacy Policy page live
To Do
Terms of Use page live
To Do
Contact form tested — submissions received
To Do
Pro Bono section live on Services page
To Do
Media section — Articles, Newsletter, Blog, Coverage
To Do
Mobile responsiveness tested on 5+ devices
To Do
All navigation links functional
To Do
Floating Call button functional on all pages
To Do
Newsletter subscription form tested
To Do
No placeholder text anywhere on site
To Do
All images optimised (WebP, max 200KB each)
To Do
SSL certificate active (HTTPS)
To Do
NEETI GANGA LEGAL ASSOCIATES
The Confluence of Strategy and Justice
This document is confidential and intended solely for the firm's web development and content team.