import React from "react";
import { Geist } from "next/font/google"


const geist = Geist({
    subsets: ['latin'],
})

export default function DashboardLayout({ children }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className={geist.className}>
            <body className={"antialiased max-w-xl mx-4 mt-8 lg:mx-auto"}>
                <nav>
                    <section className={"flex flex-row mb-16 mt-8"}>
                        <a className={"mr-8 hover:underline"} href={"/"}>home</a>
                        <a className={"mr-8 hover:underline"} href={"/blog"}>blog</a>
                        <a className={"mr-8 hover:underline"} href={"/info"}>info</a>
                    </section>
                </nav>
                <main>{children}</main>
                <footer className={"mb-8 mt-16 text-sm text-neutral-600 dark:text-neutral-400"}>
                    @2025 --
                    <a href="https://github.com/freabs/pb-blog" className={"ml-1"}>github repository</a>
                </footer>
            </body>
        </html>
    )
}