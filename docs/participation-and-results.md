# Participation and future results

## Doe mee

`/doe-mee` prepares a contribution locally. It does not post to an API, store
messages, create accounts, subscribe users or report submission success.

Set `BOUW_CONTACT_EMAIL` to a real, monitored address controlled by BOUW before
launching an active contact channel. Restart the server after configuration.
Never configure an invented or unverified address. The address is public.

With a valid address, the button opens a `mailto:` draft. The visitor must send
it in their own email client. Contributions then arrive in the configured
mailbox, subject to that mailbox's access/retention policies. These policies
must be established by BOUW; the site does not invent them.

Without an address, the same page explicitly says no contact channel is active
and offers a local text-file download. Nothing is received by BOUW. This is a
transparent preparation fallback, not a functioning submission system.

No name, contact field, medical information or financial records are requested.
Email delivery naturally shares the sender's email address. No localStorage,
cookies, analytics or persistence is added. Avoid sensitive messages and check
mobile mail clients, long drafts, file downloads and JavaScript-disabled use
manually before release.

Project/proposal CTAs set `context` and `type` query parameters. Context is
validated against known site content. CLARKE is only offered when its own
context is requested, preserving its discovery treatment.

## Results

`src/types/experiment.ts` models plans and completed work separately.
`src/data/experiments.ts` is deliberately empty. No results route, index,
example experiment or new navigation destination is published.

When a genuine result exists, `/resultaten/[slug]` can use
`getPublishedExperiment(slug)` and `ExperimentDocument`. Only published,
reviewed records with recorded measurements and traceable sources pass the
publication guard. A route must call `notFound()` when this lookup returns
undefined. Metadata should derive from the genuine record.

Record the original hypothesis and planned method separately from the actual
method/outcome. Mark costs unknown, estimated or actual. Mark each measurement
planned or measured. Label concept art, models and prototype evidence
separately. Completed work requires failures, limitations, conclusion,
non-conclusions, decision and next step. Use explicit 'unknown' text when
information is unavailable, never plausible-looking placeholder numbers.

The guard checks structure and evidence references; it cannot verify scientific
truth. Before publication a human must review primary evidence, cost records,
measurement definitions, privacy/consent, limitations, dates and conclusions.
Do not expose private participant data. Relevant review/testing is required for
the first populated result; an empty architecture is not validation of a real
experiment.
