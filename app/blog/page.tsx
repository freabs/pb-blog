import "../globals.css"
import {PostInterface} from "@/types";
import {getSortedPostsData} from "@/lib/posts";
import React from "react";
import ListItem from "@/app/ListItem";

export default function Home() {

    const PostData: PostInterface[] = getSortedPostsData()

    return (
        <div className={"flex flex-col"}>
            <section className={"mb-8 text-2xl font-semibold tracking-tighter"}>Blog</section>
            <section>
                <ul>
                    {PostData.map((post: PostInterface, i) => {
                        return (
                            <ListItem post={post} key={i} />
                        )
                    })}
                </ul>
            </section>
        </div>
    );
}
