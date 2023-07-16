import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import thema from "react-syntax-highlighter/dist/esm/styles/prism/vsc-dark-plus";
import tsx from "react-syntax-highlighter/dist/cjs/languages/prism/tsx";
import typescript from "react-syntax-highlighter/dist/cjs/languages/prism/typescript";
import scss from "react-syntax-highlighter/dist/cjs/languages/prism/scss";
import bash from "react-syntax-highlighter/dist/cjs/languages/prism/bash";
import markdown from "react-syntax-highlighter/dist/cjs/languages/prism/markdown";
import json from "react-syntax-highlighter/dist/cjs/languages/prism/json";
import php from "react-syntax-highlighter/dist/cjs/languages/prism/php";
import javascript from "react-syntax-highlighter/dist/cjs/languages/prism/javascript";

import { CopyToClipboard } from "react-copy-to-clipboard";
import { IconCheck, IconClipboard } from "@tabler/icons-react";

SyntaxHighlighter.registerLanguage("tsx", tsx);
SyntaxHighlighter.registerLanguage("typescript", typescript);
SyntaxHighlighter.registerLanguage("scss", scss);
SyntaxHighlighter.registerLanguage("bash", bash);
SyntaxHighlighter.registerLanguage("markdown", markdown);
SyntaxHighlighter.registerLanguage("json", json);
SyntaxHighlighter.registerLanguage("php", php);
SyntaxHighlighter.registerLanguage("javascript", javascript);

function ArticleBody({ markdown }) {
    const [copied, setCopied] = useState(false);
    const [whichCopied, setWhichCopied] = useState("");

    const handleCopy = (children) => {
        setCopied(true);
        setWhichCopied(children);
    };
    return (
        <ReactMarkdown
            className="space-y-8 text-lg font-syne text-foreground markdown"
            components={{
                code({ node, inline, className, children, ...props }) {
                    const text = String(children).replace(/\n$/, "");
                    const match = /language-(\w+)/.exec(className || "");

                    return !inline && match ? (
                        <div>
                            <div className="z-50 flex items-center justify-between p-1 pb-5 -mb-6 text-xs border border-border rounded-lg bg-accent px-2 font-poppins text-foreground">
                                <p>{match ? match[1] : "Bash"}</p>
                                <CopyToClipboard
                                    text={children}
                                    onCopy={() =>
                                        handleCopy(children.toString())
                                    }
                                >
                                    <div className="flex items-center gap-x-1 cursor-pointer">
                                        {whichCopied == children.toString() ? (
                                            <div className="flex items-center gap-x-1 text-green-500 duration-200 ease-in-out transition-all">
                                                <IconCheck size={18} />
                                                Copied
                                            </div>
                                        ) : (
                                            <IconClipboard size={18} />
                                        )}
                                    </div>
                                </CopyToClipboard>
                            </div>
                            <SyntaxHighlighter
                                style={thema}
                                PreTag="div"
                                className="codeStyle z-1"
                                showLineNumbers={true}
                                useInlineStyles={true}
                                language={match[1]}
                                children={text}
                                {...props}
                            />
                        </div>
                    ) : (
                        <code className={className ? className : ""} {...props}>
                            {children}
                        </code>
                    );
                },
            }}
        >
            {markdown}
        </ReactMarkdown>
    );
}

export default ArticleBody;
