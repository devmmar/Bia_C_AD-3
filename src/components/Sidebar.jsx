import { Button } from './Button.jsx'
import styles from './Sidebar.module.css'

export function Sidebar() {
    return (
        <div>
            <div className={styles.menu_lateral}>
                <Button></Button>
                <Button></Button>
                <Button></Button>
                <Button></Button>
                <Button></Button>
                <Button></Button>
                <Button></Button>
            </div>
        </div>
    )
}