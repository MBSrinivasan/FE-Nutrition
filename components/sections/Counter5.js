import CounterUp from "../elements/CounterUp"


export default function Counter5() {
    return (
        <>

            <div className="counter8-section-area section-padding4">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="counter8-box-area text-center" data-aos="zoom-in" data-aos-duration={800}>
                                <h1 className="font-lora font-44 lineh-52 weight-600 color39 margin-b20 ts"><CounterUp count={400}/> +</h1>
                                <p className="font-16 font-ks weight-500 colorhp1 lineh-16 ts">Consulting Solution</p>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="counter8-box-area text-center" data-aos="zoom-in" data-aos-duration={1000}>
                                <h1 className="font-lora font-44 lineh-52 weight-600 color39 margin-b20 ts"><CounterUp count={620}/> +</h1>
                                <p className="font-16 font-ks weight-500 colorhp1 lineh-16 ts">Complete Cases</p>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="counter8-box-area text-center" data-aos="zoom-in" data-aos-duration={1200}>
                                <h1 className="font-lora font-44 lineh-52 weight-600 color39 margin-b20 ts"><CounterUp count={800}/> +</h1>
                                <p className="font-16 font-ks weight-500 colorhp1 lineh-16 ts">Happy Customer</p>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="counter8-box-area text-center" data-aos="zoom-in" data-aos-duration={1400}>
                                <h1 className="font-lora font-44 lineh-52 weight-600 color39 margin-b20 ts"><CounterUp count={120}/> +</h1>
                                <p className="font-16 font-ks weight-500 colorhp1 lineh-16 ts">Expert Consultant</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
