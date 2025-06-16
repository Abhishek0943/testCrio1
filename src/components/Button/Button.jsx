import styles from './Button.module.css'

export default function Button({ children, handleClick, variant = 'primary', shadow = false, type = 'button' }) {

    return (
        <button
            type={type}
            onClick={handleClick}
            className={`${styles.button} ${styles[variant]} ${shadow && styles.shadow}`}
        >
            {children}
        </button>
    )
}