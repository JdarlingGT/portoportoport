import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { marked } from "marked";
import fm from "front-matter";
import AnchorTOC from "../components/ui/AnchorTOC";
import Breadcrumbs from "../components/ui/Breadcrumbs";

export default function DeepDive() {
  const { slug } = useParams<{ slug: string }>();
  const [html, setHtml] = useState("");
  const [frontMatter, setFrontMatter] = useState<any>({});

  useEffect(() => {
    if (!slug) return;

    const fetchContent = async () => {
      try {
        const res = await fetch(`/content/deep-dives/${slug}.md`, { cache: 'no-store' });
        const markdown = await res.text();
        
        const content: any = fm(markdown);
        setFrontMatter(content.attributes);

        const rawHtml = await marked.parse(content.body);

        const slugify = (text: string) => text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');

        const parser = new DOMParser();
        const doc = parser.parseFromString(rawHtml, 'text/html');
        const headings = doc.querySelectorAll('h2, h3');
        
        headings.forEach((heading, i) => {
          const text = heading.textContent || '';
          heading.id = `${slugify(text)}-${i}`;
        });

        setHtml(doc.body.innerHTML);

      } catch (error) {
        console.error('Failed to fetch or parse markdown:', error);
        setHtml('<p>Error loading content.</p>');
      }
    };

    fetchContent();
  }, [slug]);

  return (
    <main className="min-h-screen bg-[#0F0F0F] text-white">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <Breadcrumbs />
        <div className="grid lg:grid-cols-[1fr_200px] gap-8">
          <article className="prose prose-invert max-w-none">
            {frontMatter.title && <h1 className="text-3xl font-bold mb-2">{frontMatter.title}</h1>}
            {frontMatter.summary && <p className="text-gray-300 mb-6">{frontMatter.summary}</p>}
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </article>
          <AnchorTOC />
        </div>
      </div>
    </main>
  );
}
