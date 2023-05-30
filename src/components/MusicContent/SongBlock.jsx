import React, { useContext, useState } from 'react';
import { Button, Modal } from 'antd';
import _ from 'lodash';
import { useToggleFavoriteSong } from '../../react-query';

import { FavoriteIcon } from '../Icons';

import { AuthContext } from '../../components/SignContent/context/AuthContext';
import image1 from '../../../public/images/image1.jpg';
import image2 from '../../../public/images/image2.jpg';
import image3 from '../../../public/images/image3.jpg';
import image4 from '../../../public/images/image4.jpg';
import image5 from '../../../public/images/image5.jpg';
import image6 from '../../../public/images/image6.jpg';
import image7 from '../../../public/images/image7.jpg';
import image8 from '../../../public/images/image8.jpg';
import image9 from '../../../public/images/image9.jpg';
import image10 from '../../../public/images/image10.jpg';

import styles from './styles/SongBlock.module.css';

const SongBlock = ({ song }) => {
  const { setCurrentUser, currentUser } = useContext(AuthContext);
  const { mutate } = useToggleFavoriteSong();

  const favorites = currentUser?.favorites || [];
  let isFavorite = _.includes(favorites, song.id);

  const [confirmationVisible, setConfirmationVisible] = useState(false);
  const [favoriteSongs, setFavoriteSongs] = useState([]);

  const toggleFavorite = () => {
    if (!!currentUser?.uid) {
      setConfirmationVisible(true);
    }
  };

  const handleConfirmFavorite = () => {
    setConfirmationVisible(false);
    setFavoriteSongs(prevSongs => [...prevSongs, song]);
    mutate({ songId: song.id, uid: currentUser?.uid });
  };

  const handleCancelFavorite = () => {
    setConfirmationVisible(false);
  };

  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10
  ];
  const randomIndex = Math.floor(Math.random() * images.length);
  const randomImage = images[randomIndex];

  return (
    <>
      <div className={styles.musicItem}>
        <img src={randomImage} alt="Music Cover" className={styles.musicCover} />
        <Button className={styles.playBtns} type="text" size="large" onClick={() => { }}>
          <PlayCircleFilled style={{ fontSize: '25px', verticalAlign: '1px' }} />
        </Button>
      </div>
      <div className={styles.titleBar}>
        <h2 style={{ marginTop: '2px', marginBottom: '0', color: '#efeef7' }}>{song.Name}</h2>
        <Button onClick={toggleFavorite}>
          <FavoriteIcon color={isFavorite ? '#F19D38' : '#000000'} style={{ fontSize: '10px' }} />
        </Button>
      </div>
      <p style={{ color: '#efeef7', paddingLeft: '10px' }}>{song.Author}</p>

      <Modal
        title="確認收藏"
        visible={confirmationVisible}
        onOk={handleConfirmFavorite}
        onCancel={handleCancelFavorite}
      >
        <p>你確定要收藏此音樂嗎？</p>
      </Modal>

      <Modal
        title="收藏的歌曲"
        visible={favoriteSongs.length > 0}
        onCancel={() => setFavoriteSongs([])}
        footer={[
          <Button key="ok" type="primary" onClick={() => setFavoriteSongs([])}>
            OK
          </Button>
        ]}
      >
        {favoriteSongs.map(favoriteSong => (
          <div key={favoriteSong.id}>
            <h3>{favoriteSong.Name}</h3>
            <p>{favoriteSong.Author}</p>
          </div>
        ))}
      </Modal>
    </>
  );
};

export default SongBlock;
