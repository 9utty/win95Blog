import { Grid } from "antd";
import React, { useState } from "react";
import { Counter, Frame, Button } from "react95";

const { useBreakpoint } = Grid;

const Lunch = () => {
  const [number, setNumber] = useState(0);
  const [key, setKey] = useState("");
  const [value, setValue] = useState("");
  const screens = useBreakpoint();

  const onClickNumber = () => {
    const randomIndex = Math.floor(Math.random() * lunchMenuList.length);
    const randomMenu = lunchMenuList[randomIndex];
    setNumber(randomIndex);
    setKey(randomMenu.key);
    setValue(randomMenu.value);
  };
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Counter size={screens.md ? "xl" : "md"} value={number} />
      </div>
      <div style={{ marginTop: "20px", marginBottom: "20px" }}>
        <Frame
          variant="well"
          className="footer"
          style={{
            fontFamily: "dunggeunmo",
            fontSize: screens.md ? "18px" : "14px",
          }}
        >
          오늘의 점심메뉴는 ? {`${key} / ${value}`}
        </Frame>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button onClick={onClickNumber}>
          <span style={{ fontFamily: "dunggeunmo-bold", fontSize: "25px" }}>
            추천시작
          </span>
        </Button>
      </div>
    </div>
  );
};

export default Lunch;

interface Menu {
  key: string;
  value: string;
}

const lunchMenuList: Menu[] = [
  { key: "한식", value: "떡갈비" },
  { key: "한식", value: "생선구이" },
  { key: "한식", value: "닭볶음탕" },
  { key: "한식", value: "오징어두루치기" },
  { key: "한식", value: "비빔밥" },
  { key: "한식", value: "게장" },
  { key: "한식", value: "쌀밥" },
  { key: "한식", value: "낙지볶음" },
  { key: "한식", value: "불고기" },
  { key: "탕, 찌개", value: "김치찌개" },
  { key: "탕, 찌개", value: "순두부찌개" },
  { key: "탕, 찌개", value: "된장찌개" },
  { key: "탕, 찌개", value: "부대찌개" },
  { key: "탕, 찌개", value: "동태찌개" },
  { key: "탕, 찌개", value: "청국장" },
  { key: "탕, 찌개", value: "갈비탕" },
  { key: "탕, 찌개", value: "추어탕" },
  { key: "탕, 찌개", value: "삼계탕" },
  { key: "중식", value: "짜장면" },
  { key: "중식", value: "짬뽕" },
  { key: "중식", value: "볶음밥" },
  { key: "중식", value: "탕수육" },
  { key: "중식", value: "마파두부" },
  { key: "중식", value: "양장피" },
  { key: "중식", value: "깐풍기" },
  { key: "중식", value: "유린기" },
  { key: "중식", value: "고추잡채" },
  { key: "일식", value: "초밥" },
  { key: "일식", value: "라멘" },
  { key: "일식", value: "낫또" },
  { key: "일식", value: "오니기리" },
  { key: "일식", value: "텐동" },
  { key: "일식", value: "우동" },
  { key: "일식", value: "우동" },
  { key: "일식", value: "야키니쿠" },
  { key: "일식", value: "메밀소바" },
  { key: "일식", value: "돈카츠" },
  { key: "해장", value: "북엇국" },
  { key: "해장", value: "뼈해장국" },
  { key: "해장", value: "올갱이국" },
  { key: "해장", value: "콩나물국밥" },
  { key: "해장", value: "우거지국" },
  { key: "해장", value: "매운라면" },
  { key: "해장", value: "순대국" },
  { key: "해장", value: "선지해장국" },
  { key: "해장", value: "물냉면" },
  { key: "간편식", value: "편의점도시락" },
  { key: "간편식", value: "샐러드" },
  { key: "간편식", value: "핫도그" },
  { key: "간편식", value: "샌드위치" },
  { key: "간편식", value: "김밥" },
  { key: "간편식", value: "밥버거" },
  { key: "간편식", value: "토스트" },
  { key: "간편식", value: "떡볶이" },
  { key: "간편식", value: "시리얼" },
  { key: "양식", value: "토마토스파게티" },
  { key: "양식", value: "피자" },
  { key: "양식", value: "스테이크" },
  { key: "양식", value: "봉골래파스타" },
  { key: "양식", value: "함박스테이크" },
  { key: "양식", value: "햄버거" },
  { key: "양식", value: "크림파스타" },
  { key: "양식", value: "리조또" },
  { key: "양식", value: "시저샐러드" },
  { key: "기타", value: "쌀국수" },
  { key: "기타", value: "찜닭" },
  { key: "기타", value: "팟타이" },
  { key: "기타", value: "수제비" },
  { key: "기타", value: "닭갈비" },
  { key: "기타", value: "카레" },
  { key: "기타", value: "칼국수" },
  { key: "기타", value: "월남쌈" },
  { key: "기타", value: "닭갈비" },
];
