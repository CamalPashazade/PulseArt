import { Suspense } from 'react';
import styles from './Home.module.css';
import { homepagedata } from '../../datas/homepage/page';


function extractYouTubeId(url) {
  const match = url.match(/(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([^&]+)/);
  return match ? match[1] : null;
}

export default function Home() {
  return (
    <div className={styles.home_container}>
      {homepagedata.map((item) => (
        <div
          key={item.id}
          className={styles.Sizes}
          style={{ backgroundColor: item.backcolor }}
        >
          <div className={styles.image_container}>
            <img
              src={item.img}
              alt="Pulseart_logo"
            />
          </div>

          <div className={styles.video_container}>
            <iframe
              className={styles.video_desktop} 
              src={`https://www.youtube.com/embed/${extractYouTubeId(item.videoThumbnail)}`}
              title={`YouTube video player ${item.id}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      ))}
    </div>
  );
}
