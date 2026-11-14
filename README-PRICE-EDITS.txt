BLOOM & SLOT WEBSITE — QUICK PRICE EDIT GUIDE

Your product list is in script.js near the top, under: // PRODUCT DATA
Look for entries such as:
  {id:'b1', name:'Dutch Red Roses', ..., price:300, ...}

Change only the number after price: to update a product price. Example:
  price:300  ->  price:350

Save script.js, upload the updated file to the GitHub repository, and commit
the change. Cloudflare Pages will automatically deploy the update.

The structured data in index.html also contains a priceRange value. If the
overall price range changes substantially, update that value too.

IMPORTANT:
- Keep index.html, style.css, script.js, sitemap.xml and robots.txt in the
  repository root (top level).
- Upload the entire images/ folder and all its contents.
- Do not rename image files unless you also update their references in script.js
  or index.html.
- The sitemap currently uses https://bloomandslot.com/ because that is the
  canonical domain already present in your original HTML. If you use another
  domain, replace it in sitemap.xml, robots.txt and the canonical/SEO metadata
  in index.html before publishing.
