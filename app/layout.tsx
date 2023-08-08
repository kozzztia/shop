import '@/public/styles/globals.scss'
import type {Metadata} from 'next'
import React from "react";
import style from "@/public/styles/layout.module.scss"
import LayoutHeader from "@/components/Layout/Header/LayoutHeader";
import LayoutFooter from "@/components/Layout/Footer/LayoutFooter";
import LayoutNavigation from "@/components/Layout/Navigation/LayoutNavigation";
import {ReduxProvider} from "@/redux/ReduxProvider";




export const metadata: Metadata = {
    title: '',
    description: '',
}

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body>
        <ReduxProvider>
        <header className={style.layoutHeader}>
            <LayoutHeader/>
        </header>
        <nav className={style.layoutNavigation}>
            <LayoutNavigation/>
        </nav>
        <main className={style.layoutMain}>
            {children}
        </main>
        <footer className={style.layoutFooter}>
            <LayoutFooter/>
        </footer>
        </ReduxProvider>
        </body>
        </html>
    )
}
