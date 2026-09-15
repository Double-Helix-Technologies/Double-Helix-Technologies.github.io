# Keyword targeting for search and AI answer engines

Date: 15 September 2026
Author: Claude (Cowork), from Alex's keyword work of the same day. Draft until reviewed by a human.
Scope: metadata only. No visible page copy was changed for this.

## What this is and what it is not

This records the vocabulary the site targets, where each phrase is used, and why. The phrases are search-intent hypotheses drawn from the work we can evidence and from the language other suppliers in this market use on their own pages. No search-volume data has been checked, so the ordering below is a relevance ranking against our published cases, not a demand ranking. Before treating any of it as settled, validate the terms in Search Console and a keyword-volume tool, and judge the result by qualified enquiries rather than by traffic.

The reader we are writing for is not only the managing director. It is just as often the operations or IT colleague evaluating suppliers on their behalf, which is why the concrete terms (LIMS integration, laboratory workflow automation, connecting LIMS with ERP) matter more than the abstract ones.

The keywords meta tag carries little or no weight with search engines. The work is done by titles, descriptions, headings and the page text, and increasingly by what an answer engine can quote, which is why `/llms.txt` and the structured data matter alongside the metadata. The tag is kept because it is a cheap, honest statement of what each page is about.

## The six priority targets

In relevance order against the evidence already published: LIMS integration services; laboratory workflow automation; laboratory systems integration; custom laboratory software development; LIMS ERP integration; laboratory data integration. The Eurofins Genomics cases are what make these credible, which is the reason to lead with them rather than with the broader life sciences or AI terms.

## Where the phrases live

The library is `app/lib/keywords.ts`, grouped as core, LIMS and business systems, custom workflows, genomics, and supporting services, with the six priority targets alongside it. Service and case keywords stay in the `seo` blocks of `app/data/services.ts` and `app/data/work.ts`, so each page's terms sit next to the content they describe. Site-wide defaults and the homepage set come from the library. Not every phrase is emitted anywhere: the library is the content plan, and each page takes only the subset that matches what it actually says.

## Page mapping

The homepage targets laboratory software development and systems integration, supported by life sciences and workflow automation. The system integrations page targets LIMS integration services, supported by ERP, APIs, e-commerce and reporting. The custom software page targets custom laboratory software development, supported by sample management, portals and operational workflows. The workflow assessment page targets laboratory workflow assessment, supported by manual handoffs, bottlenecks and process improvement. The AI page targets AI workflow automation for life sciences, supported by the specific applications it can name. The observability page targets laboratory integration monitoring. The NGS case targets NGS data delivery automation, supported by transfers, archiving and monitoring.

No page was created for a variation of a phrase. Coherent topics on existing pages are the approach; more thin pages would be worse than fewer substantial ones.

## What changed, and what was deliberately left out

Phrases that read as machine-assembled rather than as something a person would type were replaced: "custom software ai solutions in life sciences" is gone in favour of separate software and AI phrases, "system integrations for healthcare" became "healthcare system integration services", and "forensics system integration" became "forensic laboratory systems integration". "Customer API onboarding" was ambiguous on its own and is now qualified as laboratory customer API onboarding. Three terms were pulled out of laboratory targeting because they are either too broad or belong to supporting technical content rather than to the main offer: IT operations cost reduction, SRE and observability improvement, and rapid MVP development. They remain on their own case pages.

One defect was fixed in passing. The site-wide list contained the phrase "security, compliance and AI governance readiness". The keywords meta tag is comma separated, so that single phrase was being emitted as two meaningless fragments. No phrase in the library may contain a comma.

Clinic-side terms are not used anywhere on the site and were not added: clinic workflow automation, clinic software integration, LIS integration services, EHR and EMR laboratory integration, laboratory order and results integration, HL7 integration services, FHIR integration services. They describe work we have not published evidence for, and the same applies to instrument integration, named LIMS platforms and regulatory validation services. OWNER: add any of these only once we both offer the work and can point to a case or a named capability that substantiates it, and record that decision here when we do.

## Content that the existing evidence would support

Four problem-led pieces come directly out of work already delivered, and each maps to a priority target: how to reduce duplicate data entry between LIMS and ERP; how to automate laboratory order setup; how to identify administrative bottlenecks in a laboratory; and how to automate sequencing data delivery and archiving. None of these needs new client permission, because the underlying cases are already published.

## Open owner items

Validate the candidate terms in Search Console and a volume tool, and revisit this document with what they show. Decide whether the clinic group belongs in the offer at all. Consider whether the visible page headings should carry the target phrases as plainly as the titles now do; that is a copy decision, and none of the visible copy was touched here.
