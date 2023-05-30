import React, { useState } from 'react';
import { Row, Col, Button, Modal } from 'antd';
import './favorite.css';

const FavoritesPage = ({ favoriteSongs }) => {
  const [favoriteSongsModalVisible, setFavoriteSongsModalVisible] = useState(false);

  const openFavoriteSongsModal = () => {
    setFavoriteSongsModalVisible(true);
  };

  const closeFavoriteSongsModal = () => {
    setFavoriteSongsModalVisible(false);
  };

  return (
    <div className='favcontainer'>
      <h1 className='fav-title'>收藏的歌曲</h1>
      <Row gutter={[16, 16]}>
        {favoriteSongs.map(song => (
          <Col span={6} key={song.id}>
            <div>
              <img src={song.image} alt="Music Cover" style={{ width: '100%' }} />
              <p>{song.uid}</p>
            </div>
          </Col>
        ))}
      </Row>

      <Modal
        title="收藏的歌曲"
        visible={favoriteSongsModalVisible}
        onCancel={closeFavoriteSongsModal}
        footer={[
          <Button key="ok" type="primary" onClick={closeFavoriteSongsModal}>
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
    </div>
  );
};

export default FavoritesPage;
