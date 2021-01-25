import styles from './index.module.css';

function Layout({children}){
    return (
        <div>
            <div className={styles.head}>
                <img src="/switch.svg" alt="" width="30" style={{marginRight:'10px'}}/>
                <div className={styles.title}>唯秋</div>
            </div>
            <div className={styles.container}>{children}</div>
            <div className={styles.footer}>本站以学习交流为主,欢迎提供意见或建议(∩_∩)</div>
        </div>
    )
}

export default Layout;