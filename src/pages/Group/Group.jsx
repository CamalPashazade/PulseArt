import React from 'react';
import styles from './group.module.css';
import { groups } from './../../datas/groups/group';
import { Link } from 'react-router-dom';

const Group = () => {
  return (
    <div className={styles.group_container}>
      <div className={styles.group_gallery}>
        {groups.map((group) => (
          <Link to={`/group/${group.id}`} key={group.id} className={styles.group_item}>
            <div className={styles.image_wrapper}>
              <img src={group.img} alt={group.title} className={styles.gallery_img} />
            </div>
            <h3>{group.title}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Group;
