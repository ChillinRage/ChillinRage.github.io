import { useEffect, useState } from "react";

import styles from '../styles/components/maintenance.module.css';

export default function Maintenance() {
  return <div id={styles.maintenanceText}>
    <u>NOTICE:</u> This page has not been updated as of <b>2024</b>. Some information here may be
    outdated. Future updates may occur, depending on the need to I guess...?
  </div>;
}
