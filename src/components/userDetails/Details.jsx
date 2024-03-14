
import Image from 'next/image'
import styles from './details.module.css'
// import { partners } from '@/data/data'
import { getPartnerById } from '@/lib/methods'

export default async function Details({userId}) { 

const partner = await getPartnerById(userId)

	return (
		<div className={styles.container}>

			<div className={styles.img}>
				<Image className={styles.photo} src={partner.img} width={187} height={187}>
				</Image>
			</div>
			<div className={styles.info}>
				<h1>{partner.name}</h1>
				<h4>{partner.position}</h4>
			</div>

		</div>
	)
}