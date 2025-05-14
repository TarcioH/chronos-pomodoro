import styles from './ContainerModule.css';

type ContainerProps = {
  children: React.ReactElement;
};
export function Container({ children }: ContainerProps) {
  return (
    <div className={styles.container}>
      <div className={styles.container}>{children}</div>
    </div>
  );
}
