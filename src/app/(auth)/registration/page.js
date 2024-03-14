import RegisterForm from '@/components/registerForm/RegisterForm'
import styles from './registrationPage.module.css'

export default function RegistrationPage() { 
	return (
		<div className={styles.container}>
		<div className={styles.wrapper}>
			<div>Registration</div>
				<RegisterForm />
			</div>
	</div>
	)
}