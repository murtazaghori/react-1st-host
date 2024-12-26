import React from 'react'
import styles from './card.module.css'
import PropTypes from 'prop-types'
const Card =({image ,id,title,description,category,price,rating}) => {
  return (
    <div className={styles.card}>
      
    <img src={image} alt={title} className={styles.image} />
    <h6>id:{id}</h6>
    <div className={styles.content}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <p className={styles.price}>Rs:{price}</p>
    
      <p>{category}</p>
      <span>{`Rating: ${rating.rate} (${rating.count} reviews)`}</span>
    </div>
  </div>
  )
}


Card.propTypes = {
  id:PropTypes.number,
  imgSrc:PropTypes.string,
  title:PropTypes.string,
  description:PropTypes.string,
  category:PropTypes.string

}
export default Card