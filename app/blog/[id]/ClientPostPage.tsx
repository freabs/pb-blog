'use client'

import "../../globals.css"
import "./ClientPostPage.css"
import {PostInterface} from "@/types";
import {formatDate} from "@/lib/date";

export default function ClientPostPage({post}: { post: PostInterface }) {
    return (
        <div>
            <header className="flex flex-col">
                <h1 className={"title font-semibold text-3xl tracking-tighter"}>{post.title}</h1>
                <div className="flex justify-between items-center mt-2 mb-16 text-sm">
                    <p className={"text-sm text-neutral-600 dark:text-neutral-400"}>{formatDate(post.date)}</p>
                </div>
            </header>
            <article dangerouslySetInnerHTML={{__html: post.content!}} />
        </div>
    )
}