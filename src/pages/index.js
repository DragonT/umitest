import styles from './index.css';
import { formatMessage } from 'umi-plugin-locale';
import { DatePicker } from 'antd';

export default function() {
  return (
    <div className={styles.normal}>
      <div className={styles.welcome} />
      <DatePicker />
      <ul className={styles.list}>
        <li>
          To get started, edit <code>src/pages/index.js</code> and save to reload.
        </li>
        <li>
          <a href="https://umijs.org/guide/getting-started.html">
            {formatMessage({ id: 'index.start' })}
          </a>
        </li>
      </ul>
    </div>
  );
}
