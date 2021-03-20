import React from 'react'
import styles from './home.module.scss'
import avater from '../../assets/img/avater.jpg'
import WorkList from '../../component/WorkList'
import worksData from '../../component/work.json'

export default function HomePage() {
    return (
        <div className={styles.wrap}>
            {/* 個人簡介 */}
            <section className={styles.brief}>
                <img src={avater} alt=""/>
                <h3 className="mt-3" style={{fontFamily: "楷體"}}>謝明峯<h6>Ming-Feng Hsieh</h6></h3>
                <ul className="mt-3">
                    <li className="mx-2">software engineer</li>
                    <li className="mx-2">full-stack developer</li>
                    <li className="mx-2">javaScript</li>
                </ul>
                <p>聯絡方式：mowli.0509@gmail.com</p>
            </section>
            
            {/* 學經歷 */}
            <section className={styles.education}></section>

            {/* 作品列表 */}
            <section className={styles.work}>
                <div className={styles.title}>
                    <h3>作品簡介</h3>
                    <hr className="w-75 mb-5"/>
                </div>
                <WorkList dataSource={worksData.data} />
            </section>
        </div>
    )
}
