import { useEffect } from "react";

type Meta = {
  title?: string;
  description?: string;
  ogTitle?: string;
  ogDescription?: string;
};

function setMeta(selector: string, attr: string, value: string) {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement("meta");
    const [k, v] = selector.replace(/^meta\[|\]$/g, "").split("=");
    el.setAttribute(k, v.replace(/"/g, ""));
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
}

export function usePageMeta({ title, description, ogTitle, ogDescription }: Meta) {
  useEffect(() => {
    if (title) document.title = title;
    if (description) setMeta('meta[name="description"]', "content", description);
    if (ogTitle) setMeta('meta[property="og:title"]', "content", ogTitle);
    if (ogDescription) setMeta('meta[property="og:description"]', "content", ogDescription);
  }, [title, description, ogTitle, ogDescription]);
}
