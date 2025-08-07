import styles from './Heading.module.css'

export function Heading(){
    
    return(
        <div>
            <h1 className={`${styles.purple} ${styles.heading}`}>ola mundo</h1>
        </div>
    )
}