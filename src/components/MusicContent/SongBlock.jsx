import { PlayCircleFilled, HeartFilled } from '@ant-design/icons';
import { Button } from 'antd';
import _ from 'lodash';
import { useToggleFavoriteSong } from '../../react-query';

import { FavoriteIcon } from '../Icons';

import { useContext } from 'react';
import { AuthContext } from '../../components/SignContent/context/AuthContext';

import styles from './styles/SongBlock.module.css';

export default function SongBlock({ song }) {

    const { setCurrentUser, currentUser } = useContext(AuthContext);

    const { mutate } = useToggleFavoriteSong();

    const favorites = currentUser.favorites || [];
    let isFavorite = _.includes(favorites, song.id);
    const toggleFavorite = () => {
        if (!!currentUser?.uid)
            mutate({ songId: song.id, uid: currentUser?.uid })
    }
    console.log(currentUser.id);
    return (
        <>
            <div className={styles.musicItem}>
                <Button className={styles.playBtns} type="text" size="large" onClick={() => { }} >
                    <PlayCircleFilled style={{ fontSize: '25px', verticalAlign: "1px" }} />
                </Button>
                {/* <div className={styles.favBtns}></div> */}
            </div>
            <div className={styles.titleBar}>
                <h2 style={{ marginTop: "2px", marginBottom: "0", color: "#efeef7" }} >{song.Name}</h2>
                <Button onClick={toggleFavorite} ><FavoriteIcon color={isFavorite ? '#F19D38' : '#000000'} style={{ fontSize: '10px'}} /></Button>
            </div>

            <p style={{ color: "#efeef7", paddingLeft: "10px" }}>{song.Author}</p>
        </>
    );
};

