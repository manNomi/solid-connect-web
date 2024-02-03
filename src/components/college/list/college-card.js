import Link from "next/link";
import Image from "next/image";

import styles from "./college-card.module.css";
import CheveronRightFilled from "../../ui/icon/ChevronRightFilled";

export default function CollegeCard(props) {
  const { id, name, country, region, languageRequirements, studentCapacity, formatName } = props;
  return (
    <Link className={styles.card} href={`/college/${id}`}>
      <div className={styles.centerAlign}>
        <Image className={styles.image} src={`https://solid-connection.s3.ap-northeast-2.amazonaws.com/original/${formatName}/logo.png`} width={100} height={100} alt={name || "이미지 없음"} />
      </div>

      <div className={styles.info}>
        <span className={styles.name}>{name}</span>
        <div className={styles.spaceBetween}>
          <span className={styles.country}>
            {country} | {region}
          </span>
          <span className={styles.capacity}>모집 {studentCapacity}명</span>
        </div>
        <div className={styles.requirements}>
          {Object.entries(languageRequirements)
            .map(([key, value]) => {
              if (key === "detail") return null;
              return (
                <span key={key} className={styles.requirement}>
                  {key.toUpperCase()}: {value}
                </span>
              );
            })
            .slice(0, 3)}
        </div>
      </div>

      <div className={styles.rightArrowIcon}>
        <CheveronRightFilled color="black" opacity="0.54" />
      </div>
    </Link>
  );
}
