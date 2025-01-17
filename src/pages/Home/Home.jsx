
import { Suspense } from 'react';
import styles from  './Home.module.css';
import VideoPlayer from '../../components/Videoplayer/VideoPlayer';
import { homepagedata } from '../../datas/homepage/page';
import useIsMobile from '../../components/Ismobile/isMobile';
import { Link } from 'react-router-dom';



function extractYouTubeId(url) {
  const match = url.match(/(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([^&]+)/);
  return match ? match[1] : null;
}

export default function Home() {





  const isMobile = useIsMobile();
  // const VideoStyle = isMobile && styles.video_mobile ;

  return (
    <div className={styles.home_container}>
      {homepagedata.map((item) => (





        <div
          key={item.id}
          className={styles.Sizes}
          style={{ backgroundColor: item.backcolor }}
        >
        

      

          <div className={isMobile ? styles.image__mobile_container : styles.image_container}>
            <img
              src={item.img}
              alt="Pulseart_logo"
          
           
             
            />
          </div>

          {/* Video Section */}
     {/*      <div className={isMobile ? styles.video_container_mobile : styles.video_container}>
            <Suspense fallback={<div>Loading video...</div>}>
            <VideoPlayer
                url={item.videoThumbnail}
                onPlay={() => console.log(`Video ${item.id} started playing`)}
                isMobile={isMobile ? styles.video_mobile : styles.video_width}
            
            
              />
            </Suspense>
          </div> */}
          


          <div>


          <iframe
  className={isMobile ? styles.video_mobile : styles.video_desktop}
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
