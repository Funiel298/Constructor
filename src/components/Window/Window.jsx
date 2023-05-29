import { useState } from 'react'
import styles from './window.module.css'
export default function Window({status, setStatus, children}){


    return(
            <div className={status ? styles.background : styles.nonactive}  onClick={()=>{setStatus(false); window.location.reload();}}>
                <div onClick={e => e.stopPropagation()} className={styles.window}>
                    {children}
                </div>
            </div>
    )
}