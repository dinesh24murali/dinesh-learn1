import React from 'react'
import styles from './styles.module.css'

export const Input = ({ handleChange, value, placeholder }) => {
  return <input
    className={styles.input_dinesh}
    type="text"
    onChange={handleChange}
    value={value}
    placeholder={placeholder}
  ></input>
}
