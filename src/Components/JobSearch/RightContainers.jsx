import React from 'react'
import styles from './RightContainers.module.css'

export const RightContainers = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <img className={styles.advImg} src='https://s.adroll.com/a/HYF/QBE/HYFQBEPAURFKXEKPPOCSPP.jpg' alt='adv img' />
            </div>
            <div className={styles.companyContainer}>
                <p className={styles.adTitle}>See 60 jobs in Featured</p>
                <p className={styles.adTitle}>Companies</p>

                <div className={styles.adContainer}>
                    <div className={styles.individualAdCont}>
                        <div>
                            <img src='https://img.naukimg.com/fc_images/v2/357289.gif' alt='ad1' />
                        </div>
                        <div>
                            <img src='https://img.naukimg.com/fc_images/v2/719011.gif' alt='ad2' />
                        </div>
                    </div>
                    <div className={styles.individualAdCont}>
                        <div>
                            <img src='https://img.naukimg.com/fc_images/v2/22108.gif' alt='ad1' />
                        </div>
                        <div>
                            <img src='https://img.naukimg.com/fc_images/v2/3211.gif' alt='ad2' />
                        </div>
                    </div>
                    <div className={styles.individualAdCont}>
                        <div>
                            <img src='https://img.naukimg.com/fc_images/v2/731247.gif' alt='ad1' />
                        </div>
                        <div>
                            <img src='https://img.naukimg.com/fc_images/v2/89123.gif' alt='ad2' />
                        </div>
                    </div>
                    <div className={styles.individualAdCont}>
                        <div>
                            <img src='https://img.naukimg.com/fc_images/v2/16987.gif' alt='ad1' />
                        </div>
                        <div>
                            <img src='https://img.naukimg.com/fc_images/v2/27117.gif' alt='ad2' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
