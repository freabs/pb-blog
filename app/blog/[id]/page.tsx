import "../../globals.css"
import {PostInterface} from "@/types";
import {getPost} from "@/lib/posts";
import ClientPostPage from "@/app/blog/[id]/ClientPostPage";

export default async function ServerPostPage({ params }: {
    params: Promise<{ id: string }>
}) {

    const { id }=await params;
    const post:PostInterface=await getPost(id)

    return (<ClientPostPage post={post} />)

}