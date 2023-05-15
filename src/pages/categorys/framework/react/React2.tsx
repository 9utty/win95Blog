import CodeTag from "@/pages/PostComponents/Code";
import Div from "@/pages/PostComponents/Div";
import H2 from "@/pages/PostComponents/H2";
import PostTemplate from "@/pages/PostComponents/PostTemplate";
import TabTag from "@/pages/PostComponents/TabTag";
import TextTag from "@/pages/PostComponents/TextTag";
import Spacer from "@/pages/components/Spacer";
import React from "react";

interface Post {
  Header: string;
  Date: string;
  Tag: string;
}

const React2 = ({ Header, Date, Tag }: Post) => {
  return (
    <PostTemplate Header={Header} Date={Date} Tag={Tag}>
      <H2>{`RTK Query란?`}</H2>
      <TextTag>
        {`- RTK Query는 Redux Toolkit의 일부이고, 웹 API의 상호작용하는 작업을 단순화하기 위한 도구이다`}
      </TextTag>
      <H2>{`RTK Query가 제공하는 기능`}</H2>
      <TextTag>
        {`1. 자동으로 API 클라이언트를 생성한다`}
        <TabTag>
          {`* API 엔드포인트를 정의하면, RTK Query가 해당 엔드포인트와 통신하기 위해 필요한 action, reducer 등을 자동으로 생성한다`}{" "}
        </TabTag>
      </TextTag>
      <TextTag>
        {`2. 캐싱 및 동기화`}
        <TabTag>{`* API로부터 데이터를 가져온 후에는 RTK Query가 자동으로 Redux store에 해당 데이터를 캐싱한다. 동일한 데이터를 다시 요청하면, 네트워크 호출 없이 캐싱된 데이터가 반환된다. 또한, 새로운 데이터가 API로 부터 도착하면, RTK Query는 자동으로 캐싱된 데이터를 업데이트한다.`}</TabTag>
      </TextTag>
      <TextTag>
        {`3. 요청 생명주기 관리`}
        <TabTag>
          {`* RTK Query는 API 요청의 생명주기를 자동으로 관리한다. 요청시작, 성공, 실패 등의 상태를 추적하고, 이에 따라 Redux store에 업데이트를 한다`}
        </TabTag>
      </TextTag>
      <TextTag>
        {`4. 서버데이터에 대한 구독`}
        <TabTag>
          {`* RTK Query는 API의 특정 엔드포인트에 대해 "구독"을 만들 수 있다. 이를 통해, 해당 엔드포인트의 데이터가 변경될 때마다 앱이 자동으로 업데이트 된다.`}
        </TabTag>
      </TextTag>
      <Spacer />
      <TextTag>
        {`- 이러한 기능들을 통해 RTK Query는 웹 API 상호 작용하는 코드를 작성하는 데 필요한 부담을 크게 줄게 주여준다. 하지만 RTK Query는 HTTPS와 JSON 기반의 REST 또는 GraphQL API와 가장 잘 동작한다. 다른 유형의 API와는 호환성이 제한적일 수 있다`}
      </TextTag>
      <Div />
      <TabTag>
        {`그렇다면 Redux Slice와 무슨 차이가 있는걸까?`}
        <TabTag>{`* 기존에는 Redux Toolkit에서 Slice를 만들고, 비동기 작업을 처리하기 위해 redux-thunk나 redux-saga와 같은 미들웨어를 사용하면서 별도의 axios 등을 이용해 API 요청을 처리해야 했다`}</TabTag>
        <TabTag>
          {`* 하지만 RTK Query를 사용하면, 이 모든 과정을 매우 단순화 시킬 수 있고, createApi 함수를 통해 API 엔드포인트를 정의하면, RTK Query는 해당 엔드포인트와 상호작용하는데 필요한 action, reducer를 자동으로 생성해주고, 이를 통해 각 API요청에 따른 loading, success, error 에 대한 상태관리도 자동으로 처리해준다.`}
        </TabTag>
      </TabTag>
      <Div />
      <H2>{`createApi`}</H2>
      <TextTag>{`- createApi 함수를 이용하면 각각의 엔드포인트에 대한 요청 함수와 훅(hooks)이 자동으로 생성된다`}</TextTag>
      <TextTag>{`- 생성된 훅들은 컴포넌트 내에서 직접 사용될 수 있다(예 : useGetPostsQuery)`}</TextTag>
      <TextTag>{`- 쉽게 생각해보면 Slice들도 만들때 createSlice로 개체를 만들어서 사용하듯이 사용할 수 있다는 말인 것 같다`}</TextTag>
      <H2>{`RTK Query로 만든 API들을 하나의 store에 결합할 수 있다`}</H2>
      <TextTag>{`- createApi 함수를 각각의 API를 정의하면, 각 API는 자체적인 리듀서와 액션을 가지게 된다(이는 Slice와 동일하다)`}</TextTag>
      <TextTag>
        {`- 생성된 API들을 "configureStore"의 "reducer" 필드에 추가할 수 있다`}
        <TabTag>{`* 이렇게 진행을 하면 Slice를 사용할때 사용했던 useSelector를 이용해서 State에 접근할 수 있다.`}</TabTag>
      </TextTag>
      <CodeTag
        code={`import { configureStore } from '@reduxjs/toolkit'
import { api } from './api'  // "createApi"를 통해 생성한 api

export const store = configureStore({
  reducer: {
    // 이 부분에 api.reducer를 추가
    [api.reducerPath]: api.reducer
  },
  // 미들웨어에 api.middleware를 추가
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

// "api"에 스토어 설정
api.setupListeners(store.dispatch)`}
        lang={"javascript"}
      />
      <TabTag>{`* 이렇게 설정하면, createApi를 통해 성생한 API엔드포인트에 대한 액션과 리듀서가 store에 추가되고, RTK Query가 해당 API의 상태를 자동으로 관리하게 된다.`}</TabTag>
      <H2>{`여러 API가 존재한다면?`}</H2>
      <CodeTag
        code={`Copy code
import { configureStore } from '@reduxjs/toolkit'
import homeApi from './HomeApi'
import userProfileApi from './UserProfileApi'

export const store = configureStore({
  reducer: {
    [homeApi.reducerPath]: homeApi.reducer,
    [userProfileApi.reducerPath]: userProfileApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(homeApi.middleware)
      .concat(userProfileApi.middleware),
})

homeApi.setupListeners(store.dispatch)
userProfileApi.setupListeners(store.dispatch)`}
        lang={"javascript"}
      />
      <TabTag>{`* 위에 코드처럼 Home과, User에 대한 API를 만들어두고 사용할 수 있다.`}</TabTag>
      <H2>{`React Query, RTK Query의 장단점을 비교해보자면?`}</H2>
      <TextTag>
        {`React Query`}
        <TabTag>
          {`장점 :`}
          <TabTag>
            {`1. 서버 데이터를 클라이언트 상태로 취급`}
            <TabTag>{`* React Query는 서버데이터를 "서버 상태"로 생각하고 이를 동기화하고 캐시하는데 초점을 두고 있다. 이는 서버에서 가져온 데이터가 자주 변경될 수 있음을 인지하고 이애 대응하는 방식`}</TabTag>
          </TabTag>
          <TabTag>
            {`2. 데이터 무효화 및 리패칭`}
            <TabTag>
              {`* React Query는 데이터의 무효화와 리패칭을 쉽게 할 수 있게 해주며, 이를 통해 서버 데이터와 클라이언트 상태를 쉽게 동기화 할 수 있다`}
            </TabTag>
          </TabTag>
          <TabTag>
            {`3. 자동화된 배경 업데이트`}
            <TabTag>{`* React Query는 백그라운드에서 자동으로 데이터를 업데이트하며, 이를 통해 항상 최신 상태를 유지할 수 있다`}</TabTag>
          </TabTag>
        </TabTag>
        <TabTag>
          {`단점 :`}
          <TabTag>
            {`1. Redux와의 통합`}{" "}
            <TabTag>{`* React Query는 자체적인 상태 관리 메커니즘을 가지고 있기 때문에, Redux와 함께 사용하려면 두 시스템 간의 상호작용을 관리해야한다`}</TabTag>
          </TabTag>
        </TabTag>
      </TextTag>
      <TextTag>
        {`RTK Query`}
        <TabTag>
          {`장점 :`}
          <TabTag>
            {`1. Redux와의 통합`}
            <TabTag>
              {`* RTK Query는 Redux Toolkit의 일부로서, Redux 상태 관리 생태계와 자연스럽게 통합된다. 이는 Redux를 사용하는 애플리케이션에서 API호출을 관리하기 쉽게 만든다`}
            </TabTag>
          </TabTag>
          <TabTag>
            {`2.코드 생성`}
            <TabTag>
              {`* RTK Query는 API 엔드포인트를 정의할 때 코드 생성을 활용하여 더 작은 양의 코드로 같은 작업을 수행할 수 있게 해준다`}
            </TabTag>
          </TabTag>
          <TabTag>
            {`3. 효율적인 캐싱`}
            <TabTag>
              {`* RTK Query는 자동 캐싱 및 데이터 무효화 기능을 제공하며, API 요청을 효율적으로 관리할 수 있다`}
            </TabTag>
          </TabTag>
        </TabTag>
        <TabTag>
          {`단점 :`}
          <TabTag>
            {`1. Redux의 의존`}
            <TabTag>
              {`* RTK Query는 Redux Toolkit의 일부로서 동작하므로, Redux 없이는 사용할 수 없다. 따라서 Redux를 사용하지 않는 프로젝트에서는 React Query가 더 적합하다고 할 수 있다`}
            </TabTag>
          </TabTag>
        </TabTag>
      </TextTag>
    </PostTemplate>
  );
};

export default React2;
