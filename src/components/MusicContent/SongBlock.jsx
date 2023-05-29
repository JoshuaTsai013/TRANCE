import { PlayCircleFilled } from '@ant-design/icons';
import { Button } from 'antd';

import styles from './styles/SongBlock.module.css';

const SongBlock = () => {

    return (
    
        <div className={styles.musicItem}>
            <Button className={styles.playBtns} type="text" size="large" onClick={() => { }} >
                <PlayCircleFilled style={{ fontSize: '25px', verticalAlign: "1px" }} />
            </Button>
        </div>

    );
};

export default SongBlock