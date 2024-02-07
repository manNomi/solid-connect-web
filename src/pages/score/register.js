import { useState, useRef } from "react";
import Head from "next/head";

import TopDetailNavigation from "@/components/layout/top-detail-navigation";
import ProgressBar from "@/components/score/register/progress-bar";

import FormLanguage from "@/components/score/register/form-language";
import FormScore from "@/components/score/register/form-score";
import FormFinal from "@/components/score/register/form-final";

export default function ScoreRegisterPage() {
  const [progress, setProgress] = useState(0);
  const [currentStage, setCurrentStage] = useState(1);

  const [languageType, setLanguageType] = useState("");
  const [languageScore, setLanguageScore] = useState("");
  const [languageCert, setLanguageCert] = useState("");
  const [scoreType, setScoreType] = useState("4.5");
  const [score, setScore] = useState("");
  const [scoreCert, setScoreCert] = useState("");

  function handleBack() {
    if (currentStage === 1) {
      return;
    }
    setCurrentStage(currentStage - 1);
    // setProgress(progress - 50);
  }

  function renderCurrentForm() {
    switch (currentStage) {
      case 1:
        return (
          <FormLanguage
            setProgress={setProgress}
            toNextStage={() => {
              setCurrentStage(2);
            }}
            setLanguageType={setLanguageType}
            setLanguageScore={setLanguageScore}
            setLanguageCert={setLanguageCert}
            languageType={languageType}
            languageScore={languageScore}
            languageCert={languageCert}
          />
        );
      case 2:
        return (
          <FormScore
            setProgress={setProgress}
            toNextStage={() => {
              setCurrentStage(3);
            }}
            setScoreType={setScoreType}
            setScore={setScore}
            setScoreCert={setScoreCert}
            scoreType={scoreType}
            score={score}
            scoreCert={scoreCert}
          />
        );
      case 3:
        return (
          <FormFinal
            setProgress={setProgress}
            toNextStage={() => {}}
            languageType={languageType}
            languageScore={languageScore}
            languageCert={languageCert}
            scoreType={scoreType}
            score={score}
            scoreCert={scoreCert}
            setLanguageCert={setLanguageCert}
            setScoreCert={setScoreCert}
          />
        );
      default:
        return <div>Survey Completed!</div>;
    }
  }
  return (
    <>
      <Head>
        <title>성적 입력하기</title>
      </Head>
      <TopDetailNavigation title="성적 입력하기" handleBack={handleBack} />
      <div>
        <ProgressBar style={{ margin: "11px 20px 0 20px" }} progress={progress} />
        {renderCurrentForm()}
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  // 요청에서 쿠키를 추출합니다.
  const { req } = context;
  const accessToken = req.cookies["accessToken"];

  // 토큰 유효성 검사 로직 (예제 코드)
  const isLogin = accessToken ? true : false;

  if (!isLogin) {
    // 비로그인 상태일 경우 로그인 페이지로 리다이렉트
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}
