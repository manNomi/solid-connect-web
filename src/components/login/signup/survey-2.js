import CheckBoxOutlineBlankOutlined from "@/components/ui/icon/CheckBoxOutlineBlankOutlined";
import styles from "./survey.module.css";

export default function Survey2(props) {
  const { setStage, region, countries, setCountries } = props;
  const countryList = {
    america: ["미국", "캐나다", "브라질", "호주"],
    asia: ["일본", "인도네시아", "아르바이잔", "싱가포르", "브루나이", "튀르키예", "홍콩"],
    europe: ["네덜란드", "체코", "노르웨이", "포르투갈", "독일", "폴란드", "덴마크", "프랑스", "리투아니아", "핀란드", "리히텐슈타인", "영국", "스웨덴", "스페인", "오스트리아"],
    china: ["중국", "대만"],
  };
  return (
    <div>
      <div className={styles.desc}>
        Q2
        <br />
        어느지역에 관심이 있으신가요?
      </div>
      <div className={styles.subDesc}>(중복 선택 가능)</div>
      <div className={styles.countries}>
        {countryList[region].map((country) => (
          <div
            key={country}
            className={styles.country}
            onClick={() => {
              if (countries.includes(country)) {
                setCountries(countries.filter((c) => c !== country));
              } else {
                setCountries([...countries, country]);
              }
            }}
          >
            {countries.includes(country) ? <div>체크</div> : <CheckBoxOutlineBlankOutlined />}
            <div>{country}</div>
          </div>
        ))}
      </div>
      <button
        className={styles.btn}
        onClick={() => {
          if (countries.length > 0) {
            setStage(3);
          }
        }}
      >
        <div>다음으로</div>
      </button>
    </div>
  );
}
