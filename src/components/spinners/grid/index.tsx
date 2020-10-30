import clsx from 'clsx'
import styles from './style.module.css'

export interface GridProps {
  color?: string
  size?: number
  className?: string
  style?: object
}

const Grid = ({
  color = '#3182ce',
  className = '',
  style = {},
  size = 80,
}: GridProps) => {
  return (
    <div
      className={clsx(styles['spinners-grid'], className)}
      style={{ width: size, height: size, ...style }}
    >
      {[...Array(9)].map((_, index) => (
        <div key={index.toString()} style={{ background: `${color}` }} />
      ))}
    </div>
  )
}

export default Grid
