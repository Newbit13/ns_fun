import styles from './index.module.css';

function Cart(){
    return (
        <div className={styles.card}>
            <div className={styles.head}></div>
            <div className={styles.content}>
                <div className={styles.title}>塞尔达传说</div>
                <div className={styles.des}>《塞尔达传说》系列是有史以来综合评价最高的游戏系列之一 ，和任天堂的马里奥系列、精灵宝可梦系列等并列为公司的招牌作品。 [1]  其中1998年推出的《塞尔达传说：时之笛》在metacritic网站收录的全球媒体平均分中以99分位列历史第一。</div>
            </div>
            <div className={styles.btn_list}>
                <div className={styles.btn} style={{marginRight:'20px'}}>DETAIL</div>
                <div className={styles.btn}>SOURCE</div>
            </div>
        </div>
    )
}

export default Cart;