import styles from './top.module.css'

export default function Top() { 
	return (
		<div className={styles.container}>
	
			<div className={styles.textContainer}>
				<h1 className={styles.header}>Our team</h1>
				<span className={styles.text}>
				These are experienced specialists who are well versed in all the tasks that fall 
				<br />
				on their shoulders and know how to find a way out of any, even the most difficult situations.
				</span>
			</div>
			
		</div>
	)
}