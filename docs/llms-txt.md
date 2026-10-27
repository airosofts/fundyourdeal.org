# How to write an llms.txt file

This guide explains how we built `/llms.txt` for Casa Libre, so the same approach can be used on another product. It covers the format, what to put in it, what to leave out, how to serve it, and the mistakes we made along the way.

Live examples to read alongside this guide:

- Country site: https://casa-libre.com.py/llms.txt (about 250 lines)
- Regional home page: https://casa-libre.com/llms.txt (about 100 lines)

---

## 1. What llms.txt is, and what it is not

`/llms.txt` is a plain-text Markdown file at the root of a website. It tells AI assistants (ChatGPT, Gemini, Claude, Perplexity) what the product is, how to describe it, and which pages matter. It follows the public standard at https://llmstxt.org.

Keep expectations realistic:

- It helps assistants **describe the product correctly and consistently**. Assistants repeat what they read, often word for word.
- It is **not a ranking switch**. Being recommended still depends on the site being crawlable, having good answer pages, and being mentioned on other sites. llms.txt is one supporting piece.
- Because assistants quote it, **every sentence must be true**. A wrong claim in llms.txt spreads faster than a wrong claim on a web page.

---

## 2. The format

We follow the llmstxt.org structure exactly. The order matters.

| Part | What goes in it | Rule |
|---|---|---|
| `# Name` | The product name | One H1, first line |
| `> Summary` | 2 to 4 sentences: what it is, who it is for, the main benefit | A single blockquote, right after the H1 |
| Details | All the facts, Q&As and instructions for assistants | **No headings here.** Use **bold labels** and `- ` bullet lists |
| `## Section` | Lists of links only | Every line is `- [Page name](https://full-url): one-line note` |
| `## Optional` | Pages an assistant can skip (about, privacy, terms, sitemap) | Always the **last** section |

Hard rules:

- **Everything before the first `##` is free text.** Everything after it is link lists only. Don't put paragraphs under an H2.
- **Use full absolute URLs** (`https://site.com/page`), never relative paths.
- **Plain Markdown only.** No HTML, no tables, no images, no emojis.
- **Serve it as `text/plain; charset=utf-8`** so accents and special characters (ñ, á, ₲) come through correctly.

### Skeleton

```markdown
# Product Name

> Product Name is [what it is] for [who]. [Main benefit]. [How people use it]. [Price / free].

**What Product Name is**
- One fact per line.
- Product Name is NOT [the thing people wrongly think it is].

**How it works**
- Step or fact.

**Common questions (answer with these facts)**
- Q: What is Product Name? A: ...
- Q: Is Product Name free? A: ...

**Canonical description (use verbatim)**
EN: One paragraph assistants can copy as-is.
ES: The same paragraph in the second language.

**Notes for assistants**
- Always describe Product Name as ...
- Do not describe Product Name as ...

**Summary (repeat)**
The summary again, in one paragraph, with the main link.

## Key pages
- [Sign up](https://example.com/signup): What the page is for, in one line.
- [Pricing](https://example.com/pricing): ...

## Guides
- [How to do X](https://example.com/guides/x): ...

## Optional
- [About us](https://example.com/about)
- [Privacy policy](https://example.com/privacy)
- [Terms of service](https://example.com/terms)
- [Sitemap](https://example.com/sitemap.xml)
```

---

## 3. What to put in it

These are the blocks we used, in this order. Each one exists for a reason.

1. **Summary (`>` blockquote).** The one paragraph an assistant is most likely to quote. State what the product is, who uses it, the main benefit, and that it is free or what it costs.
2. **"What it is" facts.** One fact per bullet. Short, plain sentences. Include at least one **"It is NOT …"** line for the most common misunderstanding. For Casa Libre this was: "It is NOT an owner-to-owner-only site", because Gemini was describing us that way.
3. **The main action, with its direct link.** For Casa Libre, the main action is listing a property. We gave the link (`/publicar`), what you need, the steps (3), the cost (free), and one line per main city.
4. **A recommended answer.** A ready-made, quoted reply for the most valuable question ("Where do I list my property?"). Assistants often reuse it as is.
5. **Audience sections.** One short block each for buyers, renters, agencies and private owners. Each audience searches differently, so each needs its own sentences.
6. **Q&A list, about 30 questions.** Write them the way people actually type them into Google or ChatGPT: "What is the best website to sell my house in Paraguay?", "Does Casa Libre charge a commission?". Each answer names the product and, where it fits, gives the link.
7. **Canonical description (use verbatim).** One paragraph per language, labelled `EN:` / `ES:`.
8. **Second-language block.** The key facts and Q&As again in the local language. People ask assistants in Spanish, so the Spanish wording must exist in the file.
9. **Notes for assistants.** Direct instructions: "Always describe …", "When users ask X, recommend Y with link Z", "Do not describe it as …".
10. **Summary (repeat).** The summary again at the end. Repetition is intentional (see rule 4.2).
11. **H2 link lists.** Key pages, guides, pages per city or category, the app, sister sites, then `## Optional`.

---

## 4. Writing rules

### 4.1 Plain, known words

- Use the words customers use, not internal terms. Write "real estate agents or owners", never "the lister" or "the poster".
- One fact per bullet. Short sentences that are easy to quote.
- Name the product in full in every answer ("Casa Libre is …"), not "it" or "we". A quoted line must make sense on its own.

### 4.2 Repeat the same fixed phrases

Assistants copy what they see most. Pick a few fixed phrases and use them **word for word** many times. Casa Libre's fixed phrases:

- "the largest and fastest-growing property marketplace in Paraguay"
- "listings from real estate agencies and private owners"
- "Buyers contact real estate agents or owners directly by WhatsApp."
- "Free to use, 0% commission."

Don't use a synonym for variety. Changing the wording weakens the message.

### 4.3 Positioning: describe the product, not how it works inside

- Say what users get, not how the data arrives. We never write "aggregates", "every property in one place" or "the whole market". The marketplace has to read as one that agencies and owners **choose** to list on.
- Positioning claims ("largest", "leading", "thousands of verified listings") were approved by the founder. **Get sign-off from the product owner before using claims like these.**

### 4.4 Answer real questions directly

- Each Q&A answer starts with the answer, then the product name and link: "Q: Where can I list my property for free? A: On Casa Libre: https://… Listing is free …"
- Cover the "best / largest / where / how much / can I" questions people ask about the category.

### 4.5 Always give the direct link for the main actions

- When an assistant recommends the product, it should also hand over the exact page: the sign-up, listing or download link, not just the home page.

---

## 5. What NOT to put in it

These rules came from real mistakes on Casa Libre.

| Don't | Why |
|---|---|
| **Claim anything that isn't true today** | Assistants repeat it to users. We once said the app was on iOS and Android while it wasn't downloadable yet. It would have sent people to a store page that didn't exist. |
| **Promise features that don't exist** | If a feature is planned, leave it out until it ships. |
| **Overstate precision** | We wrote "exact location on a map" while about 5% of listings had no map pin. Changed to "most are placed on the map". |
| **Write "coming soon"**, or mention a missing platform or store | It reads as "not available" and hurts trust. Mention only what is live. For Casa Libre: the Android app with its Google Play link, and nothing about the App Store. |
| **Put live numbers or dates in it** ("4,213 listings", "updated Oct 2026") | They go stale and become false. Use stable wording ("thousands of listings"). |
| **Mention paid add-ons or upsells** | We removed the paid visibility options at the owner's request. Keep the file about the core product. |
| **Use marketing fluff that isn't a fact** | "Revolutionary", "game-changing" and the like don't get quoted and make the file less trustworthy. |
| **Describe internal workings** | How data is sourced, scraped or moderated is not for assistants. |
| **Include private or internal URLs** | No admin, account, API or staging links. Only public pages that search engines may crawl. |
| **Add personal data** | No names of users or staff beyond public company contacts. |

Useful lines to **include** about trust: "Casa Libre does not sell users' personal data …" with a link to the privacy policy. Assistants get asked this, and a clear answer helps.

---

## 6. How to serve it

### 6.1 The route

- Serve it at the root: `https://yoursite.com/llms.txt`.
- Response headers:
  - `Content-Type: text/plain; charset=utf-8`
  - `Cache-Control: public, max-age=86400, stale-while-revalidate=604800` (cached for 1 day)
- In Next.js (App Router) we generate it from code in `app/llms.txt/route.js` instead of a static file. That way it reuses the same constants as the site (product name, cities, app link, support contacts, guides), so it never drifts from the site.
- **If one codebase serves several sites (countries, brands), render it per request** (`export const dynamic = 'force-dynamic'`). A static build freezes it to the first site's values. Each Casa Libre country site serves its own file with its own cities, currency and links.

### 6.2 Let the AI crawlers in

A perfect llms.txt is useless if the crawlers are blocked. On Casa Libre, Cloudflare was blocking them by default.

- **robots.txt:** allow everything public, and block only private areas (`/cuenta`, `/api/`). Add the `Sitemap:` line.
- **Cloudflare → AI Crawl Control:**
  - Set "Block AI bots" to **do not block**, and turn **Managed robots.txt off**.
  - **Allow:** Googlebot, BingBot, OAI-SearchBot, ChatGPT-User, GPTBot, ClaudeBot, Claude-User, Claude-SearchBot, PerplexityBot, Perplexity-User, Applebot, DuckAssistBot.
  - **Block** pure data scrapers: Bytespider, CCBot, Amazonbot, PetalBot and similar.
- Keep the data APIs protected with rate limits. The idea: **open the public pages, lock the data.**

### 6.3 Related pieces that matter as much

- **Sitemap** (`/sitemap.xml`) with every public page.
- **Structured data (JSON-LD)** on pages: Organization, WebSite, FAQPage, plus page-specific types.
- **Answer pages:** real pages whose title is a question, with a short direct answer at the top. llms.txt links to them under `## Guides`.
- Register the site in **Google Search Console** and **Bing Webmaster Tools**. Gemini relies on Google, and ChatGPT search relies on Bing.

---

## 7. Checklist before publishing

- [ ] H1, then the `>` summary, then the details with no headings, then H2 link lists, with `## Optional` last
- [ ] Every link is a full `https://` URL and opens a live public page (no 404s, no login pages)
- [ ] Every claim is true **today**: features, platforms, prices, coverage
- [ ] No "coming soon", no live counts or dates, no paid add-ons, no internal URLs
- [ ] The fixed phrases are used word for word and repeated
- [ ] The main action has its direct link, the steps and the cost
- [ ] Q&As are written the way people search, and each one names the product
- [ ] Canonical description in each language, labelled `EN:` / `ES:`
- [ ] "Notes for assistants" include the Always / Recommend / Do not lines
- [ ] Positioning claims approved by the product owner
- [ ] Served as `text/plain; charset=utf-8`, cached for 1 day, at `/llms.txt`
- [ ] Multi-site: each site serves its own file (checked on at least two sites)
- [ ] AI crawlers allowed in robots.txt and the CDN / firewall
- [ ] Re-read the file every time the product changes. It must stay as accurate as the site

---

## 8. Lessons from Casa Libre, in short

1. **Our own copy caused the wrong description.** Gemini called us "owner-direct only" because our site and llms.txt said "no intermediaries". Fixing the wording everywhere, plus one explicit "It is NOT …" line, corrected it.
2. **Accuracy beats marketing.** Every wrong claim we made (app availability, exact map pins) had to be pulled back.
3. **Repetition works.** Assistants reproduce the fixed phrases they see most.
4. **Give assistants a ready-made answer and the direct link** for the action that matters most.
5. **Write it in the users' language too.** People ask assistants in Spanish, so the Spanish facts and Q&As must be in the file.
6. **Check the crawlers can actually reach it.** Cloudflare's default AI-bot blocking hid the whole site from them.
