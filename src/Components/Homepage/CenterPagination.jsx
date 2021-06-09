import React from "react";
import styles from "./CenterPagination.module.css";
// import styled from "styled-components"

// const Div = styled.div`
//  color:${(props) =>
//         props.color === "selected"}
//  `

export function CenterPagination() {
    const [state] = React.useState("")
    const [showResults, setShowResults] = React.useState(true)
    const handleAll = () => {
        setShowResults(true)
        setShowResults1(false)
        setShowResults2(false)
        setShowResults3(false)
    }
    console.log(state)
    const [showResults1, setShowResults1] = React.useState(false)
    const handleIf = () => {
        setShowResults(false)
        setShowResults1(true)
        setShowResults2(false)
        setShowResults3(false)
    }
    const [showResults2, setShowResults2] = React.useState(false)
    const handleMan = () => {
        setShowResults(false)
        setShowResults1(false)
        setShowResults2(true)
        setShowResults3(false)
    }
    const [showResults3, setShowResults3] = React.useState(false)
    const handleService = () => {
        setShowResults(false)
        setShowResults1(false)
        setShowResults2(false)
        setShowResults3(true)
    }


    return (
        <>
            <div className={styles.background}>
                <h2 style={{ margin: "20px" }}>Best place to work</h2>
                <header className={styles.header}>
                    <ul className={styles.navbar} >
                        <li className={styles.drop_one}>
                            <span onClick={handleAll}>All Sectors</span>

                            {showResults ? <div>
                                <div className={styles.menu_one}>
                                    <ul>
                                        <li><h3>Information Technology</h3></li>
                                        <br />
                                        <li><h4>Analytics</h4></li>
                                        <li>LatentView Analytics Pvt Ltd.</li>
                                        <li>RMS Risk Management Solutions </li>
                                        <li>India Pvt Ltd</li>
                                        <li>Verisk</li>
                                        <br />
                                        <li><h4>ChipDsg/Semicond.</h4></li>
                                        <li>einfochips (An Arrow Company)</li>
                                        <li>GLOBALFOUNDRIES Engineering <br />Private Limited</li>
                                        <li>KLA-Tencor Software India Pvt Ltd</li>
                                        <li>Micron</li>
                                        <li>Peregrin Semiconductor(A<br />Murata Company)</li>
                                        <br />
                                        <li><h4>Cloud Computing</h4></li>
                                        <li>Secure-24 IT Services PVT Ltd</li>
                                        <li><h4>Engineering Services</h4></li>
                                        <li>Design Tech Systems Ltd.</li>
                                        <li>Robert Bosch Engineering and <br />Business solutions Limited </li>
                                        <br />
                                        <li><h4>Finincial Services & Software</h4></li>
                                        <li>Atyeti IT Services Private Ltd.</li>
                                        <li>Avaloq India Private Limited</li>
                                        <li>Edelman Financial Engines, LLC</li>
                                        <li>Factset Systems Inc.</li>
                                        <li>FIDELITY INTERNATIONAL</li>
                                        <li>SS&C Technology</li>
                                        <br />
                                        <li><h4>Gaming</h4></li>
                                        <li>Electronic Arts Games (India)<br />Pvt. Ltd.</li>
                                        <br />
                                        <li><h4>Healthcare/Pharma</h4></li>
                                        <li>Cotiviti India Private Limited</li>
                                        <br />
                                        <li><h4>ITES/BPO/.COM</h4></li>
                                        <li>Capita India Pvt. Ltd.<br /> CSS Corp<br /> Elico Healthcare Services<br /> ienergizer <br />Lennox International <br />SYKES<br /> Synchrony Financial<br /> Visionary RCM Infotech (India)<br /> Private Limited</li>
                                        <br />
                                        <li><h4>Product Software</h4></li>
                                        <li>AVEVA <br />Bentley<br /> CDK Global (India) Pvt Ltd<br /> Druva Data Solutions Private Limited<br /> Eli Research India Pvt. Ltd<br /> Harbinger Group<br /> IHS Markit<br /> INFOR (INDIA) PVT. LTD.<br /> ION Trading<br /> Newgen Software Technologies<br /> Paysafe <br />PEGASYSTEMS<br /> Saama Technologies (India) Pvt. Ltd.<br /> SECLORE<br /> Sierra Cedar<br /> Sophos Technologies Pvt Ltd.<br /> SOTI INDIA<br /> TIBCO Software<br /> Vertafore India Private Limited <br />Zebra Technologies</li>
                                        <br />
                                        <li><h4>Retail</h4></li>
                                        <li>Prione Business Services Pvt. Ltd. <br />Tesco Bengaluru</li>
                                        <br />
                                        <li><h4>Durable/Fmcg/Electr.</h4></li>
                                        <li>D F M Foods Ltd <br />Varun Beverages Ltd</li>
                                        <br />
                                        <li><h4>Software Services</h4></li>
                                    </ul>
                                    <ul>
                                        <li>Aspire Systems<br /> Athena Global Technologies <br />Limited<br /> Atos Syntel<br /> BUREAU VERITAS - ISM Global<br /> Shared Service Centre <br />Calsoft Pvt. Ltd.<br /> Caspex Tech LLP<br /> Cibersites India Private Limited<br /> Columbus Global Services<br /> Espire Infolabs<br /> GeP Solutions Pvt. Ltd.<br /> Harman Connected Services <br />Heat Software <br />Hinduja Tech Limited<br /> HTC Global Services Ltd.<br /> Impetus Infotech (India) Pvt. Ltd.<br /> Invenio Business Solutions<br /> ITC Infotech<br /> Itelligence<br /> Lionbridge Technologies Private<br /> Limited<br /> Luxoft India LLP<br /> Medline Industries India Pvt Ltd.<br /> Nagarro Software <br />Pride Technologies<br /> PROLIM Solutions India Pvt Ltd<br /> PubMatic India Pvt. Ltd.<br /> Sopra Steria India <br />T-Systems ICT India<br /> Valtech <br />ValueLabs <br />Veritas Technologies <br />Wissen Infotech Pvt. Ltd.<br /> Wissen Technology Pvt Ltd <br />Yash Technologies Pvt Ltd <br />Zen3 Infosolutions</li>
                                        <br />
                                        <li><h4>Telecom/internet</h4></li>
                                        <li>Ciena</li>
                                        <li>ExcelaCom Technologies Pvt. Ltd.</li>
                                        <br />
                                        <li><h4>Manufacturing</h4></li>
                                        <br />
                                        <li><h4>Air Compressors</h4></li>
                                        <li>ELGI Equipments Ltd.</li>
                                        <br />
                                        <li><h4>Apparel</h4></li>
                                        <li>Shahi Exports Pvt. Ltd.</li>
                                        <br />
                                        <li><h4>Auto/Auto Equip.</h4></li>
                                        <li>CLAAS INDIA<br /> JBM Group<br /> Royal Enfield<br /> Schaeffler Group<br /> Skoda Auto Volkswagen India</li><br />
                                        <li><h4>CRO</h4></li>
                                        <li>PAREXEL<br /> PPD Pharmaceutical Development <br />India Private Limit<br /> Syneos Health</li>
                                        <br />
                                        <li><h4>EPC/Engg./Infra./Mining</h4></li>
                                        <li>Apco Infratech Pvt Ltd <br /> AECOM INDIA  <br />Cummins India Ltd. <br /> HCC Group  <br />JSW Group <br /> NCC Limited <br /> Sandvik Asia Pvt. Ltd. <br /> Sterling And Wilson Pvt. Ltd. <br /> Welspun Enterprise  <br />Wilo Mather and Platt Pumps <br /> Private Limited</li>
                                        <br />
                                        <li><h4>Healthcare/Pharma</h4></li>
                                        <li>Alembic Pharmaceuticals Ltd. <br /> Aurobindo Pharma Ltd.  <br />Emcure Pharmaceuticals Ltd  <br />Finecure Pharmaceuticals Limited</li>
                                    </ul>
                                    <ul>
                                        <li>GlaxoSmithKline Pharmaceuticals<br /> Limited<br /> Hinduja Hospitals <br />Indegene Pvt. Ltd.<br /> INTAS Pharma<br /> Lupin Limited<br /> Medreich<br /> Sun Pharmaceutical Industries Ltd <br />Syngene <br />Torrent Pharmaceuticals Ltd.<br /> Zydus Cadila</li>
                                        <br />
                                        <li><h4>Finance/Insurance</h4></li>
                                        <li>Bajaj Capital Ltd.<br /> Dvara KGFS<br /> Edelweiss Financial Services<br /> Limited<br /> Empower Retirement<br /> Franklin Templeton Investments<br /> Future Generali India Life<br /> Insurance Co. Ltd.<br /> India Infoline Finance Ltd.<br /> Moody’s<br /> SKP Business Consulting LLP<br /> Star Health Insurance<br /> Sundaram Finance Group<br /> Tata Capital</li><br />
                                        <li><h4>Infrastructure</h4></li>
                                        <li>Infra Market</li>
                                        <li>L.N. Malviya Infra Projects</li>
                                        <br />
                                        <li><h4>Technology Digital Media Services</h4></li>
                                        <li>ECHOBOOOM MANAGEMENT<br /> ENTREPRENEURIAL SOLUTIONS<br /> PRIVATE LIMITED</li>
                                        <br />
                                        <li><h4>Petroleum/Energy</h4></li>
                                        <li>TATA POWER</li>
                                        <li>Torrent Power Limited</li>
                                        <br />
                                        <li><h4>Pipes/Piping/Plastics</h4></li>
                                        <li>Prince Pipes & Fittings Pvt. Ltd. </li>
                                        <li>Welspun Corp</li>
                                        <br />
                                        <li><h4>Premium Lifestyle</h4></li>
                                        <li>Shazé Luxury Retail Pvt. Ltd.</li>
                                        <br />
                                        <li><h4>Printing & Packaging</h4></li>
                                        <li>UFLEX</li>
                                        <li>Welspun India</li>
                                        <br />
                                        <li><h4>Transmission & Distribution</h4></li>
                                        <li>TBEA Energy (India) Pvt. Ltd.</li>
                                        <br />
                                        <li><h4>Transport/Railways</h4></li>
                                        <li>Alstom Transport</li>
                                        <br />
                                        <li><h4>Upstream Oil & Gas</h4></li>
                                        <li>O&G SKILLS</li>
                                        <br />
                                        <li><h4>Credit Bureau</h4></li>
                                        <li>CRIF India</li>
                                    </ul>
                                </div>
                            </div>
                                : null}
                        </li>

                        <li className={styles.drop_two}>
                            <span onClick={handleIf}>Information Technology</span>
                            {showResults1 ? <div >
                                <div className={styles.menu_two}>
                                    <ul>
                                        <li><h3>Information Technology</h3></li>
                                        <br />
                                        <li><h4>Analytics</h4></li>
                                        <li>LatentView Analytics Pvt Ltd.</li>
                                        <li>RMS Risk Management Solutions </li>
                                        <li>India Pvt Ltd</li>
                                        <li>Verisk</li>
                                        <br />
                                        <li><h4>ChipDsg/Semicond.</h4></li>
                                        <li>einfochips (An Arrow Company)</li>
                                        <li>GLOBALFOUNDRIES Engineering <br />Private Limited</li>
                                        <li>KLA-Tencor Software India Pvt Ltd</li>
                                        <li>Micron</li>
                                        <li>Peregrin Semiconductor(A<br />Murata Company)</li>
                                        <br />
                                        <li><h4>Cloud Computing</h4></li>
                                        <li>Secure-24 IT Services PVT Ltd</li>
                                        <li><h4>Engineering Services</h4></li>
                                        <li>Design Tech Systems Ltd.</li>
                                        <li>Robert Bosch Engineering and <br />Business solutions Limited </li>
                                        <br />
                                        <li><h4>Finincial Services & Software</h4></li>
                                        <li>Atyeti IT Services Private Ltd.</li>
                                        <li>Avaloq India Private Limited</li>
                                        <li>Edelman Financial Engines, LLC</li>
                                        <li>Factset Systems Inc.</li>
                                        <li>FIDELITY INTERNATIONAL</li>
                                        <li>SS&C Technology</li>
                                        <br />
                                        <li><h4>Gaming</h4></li>
                                        <li>Electronic Arts Games (India)<br />Pvt. Ltd.</li>
                                        <br />
                                        <li><h4>Healthcare/Pharma</h4></li>
                                        <li>Cotiviti India Private Limited</li>
                                        <br />
                                        <li><h4>ITES/BPO/.COM</h4></li>
                                        <li>Capita India Pvt. Ltd.<br /> CSS Corp<br /> Elico Healthcare Services</li>
                                        <br />
                                    </ul>
                                    <ul>
                                        <li> ienergizer <br />Lennox International <br />SYKES<br /> Synchrony Financial<br /> Visionary RCM Infotech (India)<br /> Private Limited</li>
                                        <br />
                                        <li><h4>Product Software</h4></li>
                                        <li>AVEVA <br />Bentley<br /> CDK Global (India) Pvt Ltd<br /> Druva Data Solutions Private Limited<br /> Eli Research India Pvt. Ltd<br /> Harbinger Group<br /> IHS Markit<br /> INFOR (INDIA) PVT. LTD.<br /> ION Trading<br /> Newgen Software Technologies<br /> Paysafe <br />PEGASYSTEMS<br /> Saama Technologies (India) Pvt. Ltd.<br /> SECLORE<br /> Sierra Cedar<br /> Sophos Technologies Pvt Ltd.<br /> SOTI INDIA<br /> TIBCO Software<br /> Vertafore India Private Limited <br />Zebra Technologies</li>
                                        <br />
                                        <li><h4>Retail</h4></li>
                                        <li>Prione Business Services Pvt. Ltd. <br />Tesco Bengaluru</li>
                                        <br />
                                        <li><h4>Durable/Fmcg/Electr.</h4></li>
                                        <li>D F M Foods Ltd <br />Varun Beverages Ltd</li>
                                    </ul>
                                    <ul>
                                        <li><h4>Software Services</h4></li>
                                        <li>Aspire Systems<br /> Athena Global Technologies <br />Limited<br /> Atos Syntel<br /> BUREAU VERITAS - ISM Global<br /> Shared Service Centre <br />Calsoft Pvt. Ltd.<br /> Caspex Tech LLP<br /> Cibersites India Private Limited<br /> Columbus Global Services<br /> Espire Infolabs<br /> GeP Solutions Pvt. Ltd.<br /> Harman Connected Services <br />Heat Software <br />Hinduja Tech Limited<br /> HTC Global Services Ltd.<br /> Impetus Infotech (India) Pvt. Ltd.<br /> Invenio Business Solutions<br /> ITC Infotech<br /> Itelligence<br /> Lionbridge Technologies Private<br /> Limited<br /> Luxoft India LLP<br /> Medline Industries India Pvt Ltd.<br /> Nagarro Software <br />Pride Technologies<br /> PROLIM Solutions India Pvt Ltd<br /> PubMatic India Pvt. Ltd.<br /> Sopra Steria India <br />T-Systems ICT India<br /> Valtech <br />ValueLabs <br />Veritas Technologies <br />Wissen Infotech Pvt. Ltd.<br /> </li>
                                        <br />
                                    </ul>
                                </div>
                            </div>
                                : null}
                        </li>
                        <li className={styles.drop_three}>
                            <span onClick={handleMan}>Manufacturing</span>
                            {showResults2 ? <div className={styles.menu_experiment}>
                                <div className={styles.menu_three}>
                                    <ul>
                                        <li><h3>Manufacturing</h3></li>
                                        <br />
                                        <li><h4>Air Compressors</h4></li>
                                        <li>ELGI Equipments Ltd.</li>
                                        <br />
                                        <li><h4>Apparel</h4></li>
                                        <li>Shahi Exports Pvt. Ltd.</li>
                                        <br />
                                        <li><h4>Auto/Auto Equip.</h4></li>
                                        <li>CLAAS INDIA<br /> JBM Group<br /> Royal Enfield<br /> Schaeffler Group<br /> Skoda Auto Volkswagen India</li><br />
                                        <li><h4>CRO</h4></li>
                                        <li>PAREXEL<br /> PPD Pharmaceutical Development <br />India Private Limit<br /> Syneos Health</li>
                                        <br />
                                        <li><h4>EPC/Engg./Infra./Mining</h4></li>
                                        <li>Apco Infratech Pvt Ltd <br /> AECOM INDIA</li>
                                        <br />
                                    </ul>
                                    <ul>
                                        <li>Cummins India Ltd.<br /> HCC Group<br /> JSW Group<br /> NCC Limited<br /> Sandvik Asia Pvt. Ltd.<br /> Sterling And Wilson Pvt. Ltd.<br /> Welspun Enterprise <br />Wilo Mather and Platt Pumps<br /> Private Limited</li>
                                        <li><h4>Healthcare/Pharma</h4></li>
                                        <li>Alembic Pharmaceuticals Ltd. <br /> Aurobindo Pharma Ltd.  <br />Emcure Pharmaceuticals Ltd  <br />Finecure Pharmaceuticals Limited</li>
                                        <li>GlaxoSmithKline Pharmaceuticals <br />Limited<br /> Hinduja Hospitals<br /> Indegene Pvt. Ltd.<br /> INTAS Pharma<br /> Lupin Limited<br /> Medreich<br /> Sun Pharmaceutical Industries Ltd <br />Syngene<br /> Torrent Pharmaceuticals Ltd.<br /> Zydus Cadila</li>
                                    </ul>
                                    <ul>
                                        <li>Wissen Technology Pvt Ltd <br />Yash Technologies Pvt Ltd <br />Zen3 Infosolutions</li>
                                        <br />
                                        <li><h4>Petroleum/Energy</h4></li>
                                        <li>TATA POWER</li>
                                        <li>Torrent Power Limited</li>
                                        <br />
                                        <li><h4>Pipes/Piping/Plastics</h4></li>
                                        <li>Prince Pipes & Fittings Pvt. Ltd. </li>
                                        <li>Welspun Corp</li>
                                        <br />
                                        <li><h4>Premium Lifestyle</h4></li>
                                        <li>Shazé Luxury Retail Pvt. Ltd.</li>
                                        <br />
                                        <li><h4>Printing & Packaging</h4></li>
                                        <li>UFLEX</li>
                                        <li>Welspun India</li>
                                        <br />
                                        <li><h4>Transmission & Distribution</h4></li>
                                        <li>TBEA Energy (India) Pvt. Ltd.</li>
                                        <br />
                                        <li><h4>Transport/Railways</h4></li>
                                        <li>Alstom Transport</li>
                                        <br />
                                        <li><h4>Upstream Oil & Gas</h4></li>
                                        <li>O&G SKILLS</li>
                                    </ul>
                                </div>
                            </div>
                                : null}
                        </li>
                        <li className={styles.drop_four}>
                            <span onClick={handleService}>Services</span>
                            {showResults3 ? <div >
                                <div className={styles.menu_four}>
                                    <ul>
                                        <li><h3>Services</h3></li>
                                        <br />
                                        <li><h4>Finance/Insurance</h4></li>
                                        <li>Bajaj Capital Ltd.<br /> Dvara KGFS<br /> Edelweiss Financial Services<br /> Limited<br /> Empower Retirement<br /> Franklin Templeton Investments<br /> Future Generali India Life<br /> Insurance Co. Ltd.<br /> India Infoline Finance Ltd.<br /> </li><br />
                                    </ul>
                                    <ul>
                                        <li>Moody’s<br /> SKP Business Consulting LLP<br /> Star Health Insurance<br /> Sundaram Finance Group<br /> Tata Capital</li>
                                        <br />
                                        <li><h4>Infrastructure</h4></li>
                                        <li>Infra Market</li>
                                        <li>L.N. Malviya Infra Projects</li>
                                        <br />
                                    </ul>
                                    <ul>
                                        <li><h4>Technology Digital Media Services</h4></li>
                                        <li>ECHOBOOOM MANAGEMENT<br /> ENTREPRENEURIAL SOLUTIONS<br /> PRIVATE LIMITED</li>
                                        <br />
                                        <li><h4>Upstream Oil & Gas</h4></li>
                                        <li>O&G SKILLS</li>
                                        <br />
                                        <li><h4>Credit Bureau</h4></li>
                                        <li>CRIF India</li>
                                    </ul>
                                </div>
                            </div>
                                : null}
                        </li>
                    </ul>
                </header>
                
            </div>
        </>
    )
}