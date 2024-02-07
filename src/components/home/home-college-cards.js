import React, { useRef, useEffect } from "react";
import styles from "./home-college-cards.module.css";
import HomeCollegeCard from "./home-college-card";

export default function HomeCollegeCards(props) {
  const { colleges } = props;

  const containerRef = useRef(null);

  const handleWheel = (e) => {
    if (containerRef.current) {
      e.preventDefault(); // 기본 스크롤 동작 중지
      containerRef.current.scrollLeft += e.deltaY;
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener("wheel", handleWheel, { passive: false });
    }

    return () => {
      if (container) {
        container.removeEventListener("wheel", handleWheel);
      }
    };
  }, []);
  return (
    <div ref={containerRef} className={styles.container}>
      <div className={styles.items}>
        {colleges.map((college) => (
          <HomeCollegeCard key={college.id} id={college.id} image={college.backgroundImageUrl} name={college.koreanName || "대학명"} />
        ))}
      </div>
    </div>
  );
}
