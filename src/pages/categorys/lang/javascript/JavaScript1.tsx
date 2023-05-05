import Des from "@/pages/components/Des";
import H1 from "@/pages/components/H1";
import ImageTag from "@/pages/components/ImageTag";
import PostLayout from "@/pages/components/PostLayout";
import Spacer from "@/pages/components/Spacer";
import React from "react";

interface Post {
  Header: string;
  Date: string;
}

const Post: Post = {
  Header: "JavaScript의 변천사",
  Date: "2023년 4월 27일",
};

const JavaScript1 = () => {
  return (
    <div>
      <PostLayout Header={Post.Header} Date={Post.Date}>
        <div style={{ marginRight: "10px", marginLeft: "10px" }}>
          <H1>
            <div
              style={{
                fontSize: "15px",
                color: "#666",
                justifyContent: "end",
                alignItems: "end",
                display: "flex",
              }}
            >
              {Post.Date}
            </div>
            <div style={{ fontSize: "30px" }}>{Post.Header}</div>
          </H1>
          <Spacer />
          <Des>
            <div style={{ fontSize: "20px" }}>굿굿</div>
            <Spacer />
            <ImageTag
              Url={
                "data:image/jpeg;base64,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"
              }
            />
          </Des>
        </div>
      </PostLayout>
    </div>
  );
};

export default JavaScript1;
