import React from 'react';
import { formatMessage } from 'umi/locale';
import IconFont from '@/components/IconFont';
import styles from '@/pages/ApprovalProcessCenter/index.less';

export default function({ attachments, onRemove, onRemoveAll }) {
  return (
    <div className={styles['up-attachments']}>
      <div className={styles['file-desc']}>
        <span>
          {formatMessage(
            {
              id: 'alert-center.attachment-des',
            },
            {
              count: attachments.length,
              size: (attachments.reduce((acc, cur) => acc + cur.size, 0) / 1024).toFixed(2),
            },
          )}
        </span>
        <span onClick={onRemoveAll}>{formatMessage({ id: 'alert-center.delete-all' })}</span>
      </div>
      <ul className={styles['attachments-desc']}>
        {attachments.map(item => (
          <li key={item.uid}>
            <span className={styles['icon-btns']}>
              <a download href={`/download?filePath=${item.url}`}>
                <IconFont type="icon-downloadx" className={styles.icon} />
              </a>
              <IconFont
                type="icon-delete-attem"
                className={styles.icon}
                onClick={() => onRemove(item)}
              />
            </span>
            <span className={styles['file-icon']}>
              <IconFont type="icon-documentx" className={styles.icon} />
              {item.name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
