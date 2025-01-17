import React from 'react';
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { Link, useParams } from 'react-router-dom';
import { groups } from '../../datas/groups/group';
import styles from './groupdetails.module.css';

const GroupDetails = () => {
  const { id } = useParams();
  const groupId = parseInt(id, 10); // Convert id to a number
  const group = groups.find((g) => g.id === groupId);

  if (!group) {
    return (
      <div className={styles.groupdetails_container}>
       
        <Link to="/group" className={styles.back}>
        Back to Group List
        </Link>
        <h2>Group not found</h2>
      </div>
    );
  }

  return (
    <div className={styles.groupdetails_container}>
   
      <Link to="/group" className={styles.back}>
      <FaArrowAltCircleLeft size={30}   />    Back to Group List
      </Link>

      <div className={styles.groupdetails_item}>
        <h1>Group details {id}</h1>
        <h2>{group.title}</h2>
        <p>{group.description}</p>

        {group.gallery && (
          <div className={styles.group_gallery}>
            {group.gallery.map((item) => (
              <img key={item.id} src={item.img} alt={`Gallery item ${item.id}`} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default GroupDetails;
