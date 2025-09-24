'use client'
import Layout from "@/components/layout/Layout";
import RegisterForm from "@/components/registerForm/page";
import Conatact1 from "@/components/sections/Conatact1";

export default function Home() {

    return (
        <>
            <Layout headerStyle={15} footerStyle={3}>
            <RegisterForm />
            </Layout>
        </>
    )
}