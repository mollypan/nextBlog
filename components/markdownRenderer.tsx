import ReactMarkdown from 'react-markdown'
import rehypeHighlight from 'rehype-highlight'
import hljs from 'highlight.js';
import 'highlight.js/styles/github-dark.css'

interface MarkdownRendererProps {
  content: string;
}

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
  return (
    <article className="prose lg:prose-xl max-w-none">
      <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
        {content}
      </ReactMarkdown>
    </article>
  )
}