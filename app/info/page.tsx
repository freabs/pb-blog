import "../globals.css"
import React from "react";

export default function Home() {
    return (
        <div className={"flex flex-col"}>

            <section className={"mb-8 text-2xl font-semibold tracking-tighter"}>Info</section>

            <p className={"mb-8"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            <p className={""}>In questa sezione posso inserire delle informazioni generali sugli scopi del blog. È da considerare la prima descrizione del blog con cui il lettore entra in contatto blabla, grazie alla quale può subito farsi un'idea dei contenuti e delle funzioni di questo blog blabla.</p>
        </div>
    );
}
