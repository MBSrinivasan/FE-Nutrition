
import Layout from "@/components/layout/Layout"
import PlantInnovation from "../../components/landingPage/plantInnovation"
import ProteinBars from "../../components/landingPage/proteinBars"


export default function Home() {

    return (
        <>
           <Layout headerStyle={15} footerStyle={3}>
            <PlantInnovation />
            <ProteinBars/>
            </Layout>
        </>
    )
}