import React from 'react'
import styles from './work.module.scss'
import WorkList from '../../component/WorkList'
import worksData from '../../component/work.json'

export default function WorkPage() {
    return <div className={ styles.wrap }>
            <div className={ styles.title }>
                <h3 className="mb-4">My Collection</h3>
            </div>
            <WorkList dataSource={worksData.data} />
    </div>
}
