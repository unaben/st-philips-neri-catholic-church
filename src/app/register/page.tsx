import Hero from '@/components/Hero/Hero'
import RegistrationForm from '@/components/RegistrationForm/RegistrationForm'
import styles from './register.module.css'

const RegisterPage = () => {
  return (
    <>
     <Hero title="Registration" />
    <div className={styles.accentBar} aria-hidden="true" />
    <div className={styles.body}>
     <RegistrationForm />
    </div>
    </>
   
    
  )
}

export default RegisterPage
