import React from 'react'
import styled from "./Footer.module.css"
const Footer = () => {
    return (
        <div>
        <div className={styled.footer}>
            <div className={`${styled.main_row} ${styled.flex}`}>
                <div className={styled.fotr_col_2}>
                    <h3>Information</h3>
                    <a href="null"><td>About us</td></a><br/>
                    <a href="null"><td>Terms and condition</td></a><br/>
                    <a href="null"><td>Careers with us</td></a><br/>
                    <a href="null"><td>Sitemap</td></a><br/>
                    <a href="null"><td>Contact us</td></a><br/>
                    <a href="null"><td>FAQs</td></a><br/>
                    <a href="null"><td>Summons/Notices</td></a><br/>
                    <a href="null"><td>Grievances</td></a><br/>
                    <a href="null"><td>Fraud Alter</td></a><br/>
                    <a href="null"><td>Trust and sefety</td></a><br/>
                    <br/>
                    <div className={styled.fotr_col_1}>
                     <h2>Naukri on Mobile</h2>
                    <tbody className={styled.share_icon}>

                        <td>
                            <img style={{width:"150px",height:"35px",marginTop:"10px"}}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBKp71Uq-A4LYdwRLCd8Qnl4yv_pQ7DjvFnA&usqp=CAU" alt="google"/>
                        </td><br/>
                        <td><img style={{width:"150px",height:"35px",marginTop:"20px"}}  src="data:image/png;base64,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" alt="apple"/></td>
                        
                    </tbody>
                    </div>
                </div>
                <div className={styled.fotr_col_3}>
                    <h3>Jobseekers</h3>
                    <a href="null"><td>Register Now</td></a><br/>
                    <a href="null"><td>Job search</td></a><br/>
                    <a href="null"><td>Login</td></a><br/>
                    <a href="null"><td>Create job Alert</td></a><br/>
                    <a href="null"><td>Report a Problem</td></a><br/>
                    <a href="null"><td>Naukri Blogs</td></a><br/>
                    <a href="null"><td>Mobile Site</td></a><br/>
                    <br/>
                    <h3>Browse Jobs</h3>
                    <a href="null"><td>Browse all job</td></a><br/>
                    <a href="null"><td>Premium MBA job</td></a><br/>
                    <a href="null"><td>Premium Engineering job</td></a><br/>
                    <a href="null"><td>Govt. job</td></a><br/>
                    <a href="null"><td>Internation job</td></a><br/>
                    <a href="null"><td>Jobs in Gulf</td></a><br/>
                    <a href="null"><td>Jobs by Company</td></a><br/>
                    <a href="null"><td>Jobs by Category</td></a><br/>
                    <a href="null"><td>Jobs by destination</td></a><br/>
                    <a href="null"><td>Jobs by location</td></a><br/>
                    <a href="null"><td>Jobs by skill</td></a><br/>
                </div>
                <div className={styled.fotr_col_4}>
                    <h3>Jobseeker Services</h3>
                    <a href="null"><td>Priority Applicant</td></a><br/>
                    <a href="null"><td>Resume display</td></a><br/>
                    <a href="null"><td>Resume writting</td></a><br/>
                    <a href="null"><td>Job4u</td></a><br/>
                    <a href="null"><td>Recruiter Connection</td></a><br/>
                    <br/>
                    <h3>Naukri Learning</h3>
                    <a href="null"><td>Softer and technology</td></a><br/>
                    <a href="null"><td>AI AND DS</td></a><br/>
                    <a href="null"><td>Management</td></a><br/>
                    <a href="null"><td>Finance</td></a><br/>
                    <a href="null"><td>Creativity and Design</td></a><br/>
                    <a href="null"><td>Emerging Technology</td></a><br/>
                    <a href="null"><td>Engineering non CS</td></a><br/>
                    <a href="null"><td>Healthcare</td></a><br/>
                    <a href="null"><td>Enery and Enviroment</td></a><br/>
                    <a href="null"><td>Social Science</td></a><br/>
                    <a href="null"><td>Personal Growth</td></a><br/>
                </div>
                <div className={styled.fotr_col_5}>
                    <h3>Employers</h3>
                    <a href="null"><td>Job posting</td></a><br/>
                    <a href="null"><td>Resume database access</td></a><br/>
                    <a href="null"><td>Recruiter Login</td></a><br/>
                    <a href="null"><td>Naurkri RMS</td></a><br/>
                    <a href="null"><td>By resume package online</td></a><br/>
                    <a href="null"><td>Transition services</td></a><br/>
                    <a href="null"><td>report a problem</td></a><br/>
                    <a href="null"><td>Recruite from USA ,call</td></a><br/>
                    <a href="null"><td>Toll Free # 1866-557-3340</td></a><br/>
                    <br/>
                    <h3>Ambition Box</h3>
                    <a href="null"><td>Inverview Question</td></a><br/>
                    <a href="null"><td>About Companies</td></a><br/>
                    <a href="null"><td>Share interview advice</td></a><br/>
                    <a href="null"><td>Write company review</td></a><br/>
                    <a href="null"><td>Companies reviews</td></a><br/>
                    <a href="null"><td>Companies salaries</td></a><br/>
                    <a href="null"><td>Follow us</td></a><br/>
                    <div className={styled.fotr_col_1}>
                    <tbody className={styled.share_icon}>
                        <td>
                            <img src="https://image.flaticon.com/icons/png/128/1384/1384053.png" alt="facebook"/>
                        </td>
                        <td><img src="https://image.flaticon.com/icons/png/128/1409/1409937.png" alt="twitter"/></td>
                        <td><img src="https://image.flaticon.com/icons/png/128/3256/3256016.png" alt="linkedin"/></td>
                    </tbody>
                    </div>
             
                </div>
         

            </div>

        </div>
        </div>
  )
}

export default Footer
