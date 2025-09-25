'use client'
import Header1 from "@/components/layout/header/Header1";
import Layout from "@/components/layout/Layout";
import RegisterForm from "@/components/registerForm/page";
import Conatact1 from "@/components/sections/Conatact1";
import { useState, useEffect } from "react";

export default function Home() {
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setScroll(scrollTop > 100); // Set sticky when scrolled more than 100px
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            {/* <Layout headerStyle={15} footerStyle={3}> */}
            <Header1 scroll={scroll}/>
            <RegisterForm />
            {/* </Layout> */}
        </>
    )
}