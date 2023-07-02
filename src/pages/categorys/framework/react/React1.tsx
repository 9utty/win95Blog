import CodeTag from "@/pages/PostComponents/Code";
import Div from "@/pages/PostComponents/Div";
import H2 from "@/pages/PostComponents/H2";
import PostTemplate from "@/pages/PostComponents/PostTemplate";
import TabTag from "@/pages/PostComponents/TabTag";
import TextTag from "@/pages/PostComponents/TextTag";
import Spacer from "@/pages/Components/Spacer";
import React from "react";

interface Post {
  Header: string;
  Date: string;
  Tag: string;
}

const React1 = ({ Header, Date, Tag }: Post) => {
  return (
    <PostTemplate Header={Header} Date={Date} Tag={Tag}>
      <H2>{`Props는?`}</H2>
      <TextTag>
        {`- React에서 제공하는 Hook으로서 Component안에서 상태를 관리할 수 있게 제공하는 Hook이다`}
      </TextTag>
      <CodeTag
        code={`const [isLoading, setIsLoading] = useState(false);`}
        lang={"javascript"}
      />
      <TabTag>
        <div>{`위에 코드처럼 간단하게 사용할 수 있는 Hook이다`}</div>
        <Spacer />
        <div>
          {`isLoading이라는 State를 Component안에서 관리함으로써 해당 Component에서 사용할 수 있다`}
        </div>
        <Spacer />
        <div>
          {`하지만 하위 Component에게도 props(파라미터)로 넘겨줄 수 있는데, 하위 컴퍼넌트에게 넘겨야할 props가 1~2개 정도라고 한면 타이핑도 적구 문제가 없다고 생각한다`}
        </div>
        <Spacer />
        <div>
          {`But... 만약 넘겨야하는게 10~20개 정도라면? 현재위치 -> 하위 Component -> 하위 Component 가 있다면? 생각만 해도 아찔하다`}
        </div>
      </TabTag>
      <H2>{`Props Drilling?`}</H2>
      <TextTag>
        {`- 많은 하위 Component에게 props로 전해주는 행위를 보고 Props Drilling이라는 행위라고 한다`}
      </TextTag>
      <TextTag>
        {`- 무조건 나쁜 행위라고는 단정짖기 어렵지만, 나의 경우엔 PostScreen을 제작을 하면서 "유저"에게 받아야 하는 내용이 많았다(이말은 하나의 스크린에서 기능이 여러가지가 있었다)`}
        <TabTag>
          {`* Title, Description, images, date, map(tradeName, Address, longitude, latitude), OpenTalkLink 등 취상위 Component에서 많은 정보를 가지고 있어야 했다`}
        </TabTag>
        <TabTag>
          {`* 물론 각각의 하위 Component에서 상태를 관리할 수 있지만, 내가 진행했던 Moim이라는 프로젝트에서는 submit 버튼이 눌렸을때 APIServer에 Post 요청을 해야했기에 다른 하위 Component에서 받은 state를 보내줘야하는 상황이였다`}
        </TabTag>
      </TextTag>
      <TextTag>
        {`- 위에 문제를 해결하기 위해 처음에 잘 몰랐기 때문에 쓸 엄두가 안났었던 Redux라는걸 정복해보자 하고 마음을 먹거 Redux를 해딩해가면서 정복해갔다`}
      </TextTag>
      <H2>{`Redux?`}</H2>
      <TextTag>{`- Redux는 전역상태관리라고 한다`}</TextTag>
      <TextTag>
        {`- 전역상태관리??`}
        <TabTag>
          {`- 예전부터 42Seoul에서 프로젝트를 할때마다 struct table을 만들어서 프로세스 전역에서 사용하는 데이터들을 저장하는 Table을 만들어서 사용을 했었다. 내가 느끼기엔 이런 table처럼 느껴졌다.`}
        </TabTag>
      </TextTag>
      <TextTag>
        {`- 그렇지만 이번 프로젝트를 하면서 처음 해보는 Redux를 어떻게 사용해야하는 걸까?`}
      </TextTag>
      <CodeTag
        code={`interface event {
  eventId: number;
  eventTitle: string;
  eventimages: string[];
}`}
        lang={"javascript"}
      />
      <TabTag>
        {`* 이런 타입들도 만들어줘야하고.. reducer, action등을 만들어줘야하는데 너무너무 어려웠다...`}
      </TabTag>
      <TextTag>
        {`- 하지만 Redux가 update가 되면서 나온 Slice라는걸 알게되었다!(광명이로다)`}
      </TextTag>
      <H2>{`Slice`}</H2>
      <TextTag>
        {`- 여러 Slice가 모여 Store가 완성이 된다고 볼 수 있다. 여기서 Slice는 Reducer이면서 동시에 type도 지정해 줄 수 있다.`}
      </TextTag>
      <TextTag>
        {`- 그 동안에 Redux는 type, reducer, action 등을 나누어서 만들어야 했고, Slice는 이 하나에 모든걸 만들어서 사용할 수 있다.`}
      </TextTag>
      <CodeTag
        code={`import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface summaryEvent {
  eventId: number;
  eventMainImage: string;
  eventTitle: string;
  eventLocation: string;
}

const initialState = {
  hashtagId: [1, 2, 3, 4, 5, 6, 7, 8],
  summaryEvents: [] as summaryEvent[],
  isLoading: true,
};

export const HomeSlice = createSlice({
  name: "Home",
  initialState: initialState,
  reducers: {
    addSummaryEvent(state, action: PayloadAction<summaryEvent>) {
      state.summaryEvents = [...state.summaryEvents, action.payload];
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    deleteAll(state) {
      state = initialState;
      return state;
    },
  },
});`}
        lang="javascript"
      />
      <TabTag>
        {`* 위에 코드는 Moim 프로젝트에서 실제로 HomeScreen에서 사용중인 HomeSlice이다.`}
      </TabTag>
      <TextTag>
        {`- 코드를 하나하나 살펴보자`}
        <TabTag>
          {`* initialState`}
          <TabTag>{`~ 이 부분은 HomeSlice에 관해 초기화를 담당하고 있다고 볼 수 있다. Redux에서 Type들을 지정해주던걸 initialState로 Redux가 Type을 만들어준다고 볼 수 있다`}</TabTag>
        </TabTag>
        <TabTag>
          {`* name: "Home"`}
          <TabTag>{`~ 이건 이 Slice의 alias를 말한다`}</TabTag>
        </TabTag>
        <TabTag>
          {`* reducers`}
          <TabTag>
            {`~ Slice에서 실제 dispatch로 실행할 action 함수들을 정의하는 곳이다.`}
          </TabTag>
        </TabTag>
      </TextTag>
      <TextTag>
        {`- Slice들을 사용하는 방법은 다른 곳에서 포스팅을 하겠다`}
      </TextTag>
      <H2>{`그래서 나는 이 프로젝트에서 어떻게?`}</H2>
      <TextTag>
        {`- Slice들을 만들고 사용하면서 실제로 Component안에서 사용하는 State들을 initialState로 만들어두고 Component에서는 행위가 일어날때마다 dispatch로 store에 Update를 해주면서 데이터들을 저장하고 최종 Submit에서 Slice에서 가지고 있는 State를 APIServer에 보내는 로직으로 처리했다.`}
      </TextTag>
      <CodeTag
        code={`return (
  <View
    style=
  >
    <PostHeader />
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 64 : hp * 0.07}
    >
      <ScrollView
        contentContainerStyle=
      >
        <View style={StylePost.container}>
          <View style=>
            <Text style=>
              이벤트 작성하기
            </Text>
            <View
              style=
            >
              <Text style=>(</Text>
              <Octicons
                name="check"
                size={15}
                color="red"
                style=
              />
              <Text style=> 필수항목)</Text>
            </View>
          </View>
          <PostTitleInput />
          <Spacer size={hp * 0.05} />
          <PostDescriptionInput />
          <Spacer size={hp * 0.05} />
          <View
            style=
          >
            <ImagePickerComponent />
          </View>
          <Spacer size={hp * 0.07} />
          <View>
            <PostMaxParticipantInput />
          </View>
          <Spacer size={hp * 0.07} />
          <PostTitle postTitle="이벤트 해시태그 선택" isCheck={true} />
          <HashtagList />
          <Spacer size={hp * 0.07} />
          <PostTitle postTitle="이벤트 날짜 선택" isCheck={true} />
          <PostCalender />
          <Spacer size={hp * 0.07} />
          <View>
            <PostTitle postTitle="이벤트 장소 선택" isCheck={true} />
            <Spacer size={hp * 0.01} />
            <MapScreen />
          </View>
          <Spacer size={hp * 0.1} />
          <PostOpenTalkInput />
        </View>
        <Spacer size={hp * 0.05} />
      </ScrollView>
    </KeyboardAvoidingView>
  </View>
);`}
        lang={"javascript"}
      />
      <TabTag>
        {`* 위에 코드는 실제 Moim 프로젝트에서 사용하고 있는 PostScreen에 대한 TSX 문이다`}
      </TabTag>
      <TextTag>
        {`- 실제로 하위 컴포넌트도 많고, 사용자에게 받는 데이터들의 종류도 많다. 만약 내가 Redux를 쓸 생각을 안했다면, 저정도로 끝나진 않았겠지..? 더 길고... 더 더럽게 보이고....`}
      </TextTag>
      <TextTag>
        {`- 최종적으로 "PostHeader"라는 곳에서 Submit button이 존재하고, 여기서 "유저"가 Submit Button을 누르면 PostEventSlice에 저장되어 있는 정보를 APIServer에 POST요청을 하게 된다.`}
      </TextTag>
      <H2>{`이렇게 Redux를 사용하면 뭐가 좋을까?`}</H2>
      <TextTag>{`1. 반복된 코드의 양을 줄일 수 있다.`}</TextTag>
      <TextTag>
        {`2. 상위 또는 전혀 다른 Component에서도 현재의 State를 공유하 수 있다.`}
      </TextTag>
      <H2>{`그렇다면 단점은?`}</H2>
      <TextTag>
        {`1. 다른 개발자가 잘못된 데이터를 던져줄 수 있다. 이 부분은 사실 전역이라는 상태에 대한 문제점인 것 같다.`}
      </TextTag>
      <TextTag>
        {`2. 초보자라면 비동기에 대한 이해가 많이 어렵다.. 나도 아직 어렵다`}
      </TextTag>
    </PostTemplate>
  );
};

export default React1;
