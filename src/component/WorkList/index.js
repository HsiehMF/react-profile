import React from 'react'
import styles from './work.module.scss'
import { Link } from 'react-router-dom'

export default function WorkList({ dataSource }) {
    return <div className={styles.wrap}>
        <ul>
            {
                // 注意：箭頭函式多了 { } 必須 return 值，故無法顯示東西
                dataSource && dataSource.map(item => 
                    <li key={item.id}>
                        <Link to={ `/works/${item.id}` } style={{textDecoration: 'none'}}>
                            <div className={styles.cover}>
                                <img src={item.cover} alt="" />
                            </div>
                            <div className={styles.workbrief}>
                                <h3>{item.title}</h3>
                                <p>{item.brief}</p>
                                <div className={styles.tag}>
                                    { 
                                        item.tags && item.tags.map( i => {
                                        return <span key={i}>{i}</span>
                                        }) 
                                    }
                                </div>
                            </div>
                        </Link>
                    </li>
                )
            }
        </ul>
    </div>
}
