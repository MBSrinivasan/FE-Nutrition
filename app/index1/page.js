
import Layout from "@/components/layout/Layout"
import About1 from "@/components/sections/About1"
import Blog1 from "@/components/sections/Blog1"
import Client1 from "@/components/sections/Client1"
import Contact1 from "@/components/sections/Contact1"
import Cta1 from "@/components/sections/Cta1"
import Cta2 from "@/components/sections/Cta2"
import Service1 from "@/components/sections/Service1"
import Team1 from "@/components/sections/Team1"
import Testimonial1 from "@/components/sections/Testimonial1"
import Welcome1 from "@/components/sections/Welcome1"
export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1}>
                <Welcome1 />
                <About1 />
                <Service1 />
                <Client1 />
                <Cta1 />
                <Team1 />
                <Testimonial1 />
                <Blog1 />
                <Contact1 />
                <Cta2 />
            </Layout>
        </>
    )
}