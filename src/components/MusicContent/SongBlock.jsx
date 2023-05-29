import { PlayCircleFilled } from '@ant-design/icons';
import { Button } from 'antd';

import styles from './styles/SongBlock.module.css';

export default function SongBlock  ({song}) {

    return (
        <>
            <div className={styles.musicItem}>
                <Button className={styles.playBtns} type="text" size="large" onClick={() => { }} >
                    <PlayCircleFilled style={{ fontSize: '25px', verticalAlign: "1px" }} />
                </Button>

            </div>
            <h2 style={{ marginTop: "2px", marginBottom: "0", color: "#efeef7" }} >{song.Name}</h2><p style={{ color: "#efeef7" }}>{song.Author}</p>
        </>
    );
};

