import styles from './header.module.css'
export default function Sorter() {
  return (
    <div className={styles.sorter}>
        <button>Pupular</button>
        <button className={styles.active}>New</button>
    </div>
  )
}
