import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Responsive from '../common/Responsive';
import SubInfo from '../common/SubInfo';
import { Helmet } from 'react-helmet-async';

const PostViewerBlock = styled(Responsive)`
  margin-top: 2rem;
  padding: 1rem;
  border: 2px solid ${palette.green[1]};
`;
const PostHead = styled.div`
  padding-bottom: 3rem;
  margin-bottom: 5px;
  h1 {
    font-size: 2rem;
    line-height: 1.5;
    margin: 0;
  }
`;

const PostContent = styled.div`
  font-size: 1rem;
  color: ${palette.gray[6]};
`;

const PostReplyBlock = styled(Responsive)`
  margin-top: 2rem;
  padding:0;
`
const Reply = styled.div`
  font-size: 1rem;
  color: ${palette.gray[8]};
  border: 2px solid ${palette.gray[3]};
  padding: 1rem;
`

const ReplyUser = styled.div`
  font-size: 1rem;
  color: ${palette.gray[8]};
  border-bottom: 2px solid ${palette.gray[3]};
  padding: 1rem;
  padding-top:0;
`
const ReplyContent = styled.div`
  font-size: 1rem;
  color: ${palette.gray[8]};
  padding: 1rem;
`

const PostViewer = ({ post, error, loading, actionButtons }) => {
  if (error) {
    if (error.response && error.response.status === 404) {
      return <PostViewerBlock>존재하지 않는 포스트입니다.</PostViewerBlock>;
    }
    return <PostViewerBlock>오류 발생!</PostViewerBlock>;
  }

  
  if (loading || !post) {
    return null;
  }

  const { title, body, publishedDate } = post;
  return (
    <div>
    <PostViewerBlock>
      <Helmet>
        <title>포스트 페이지</title>
      </Helmet>
      <PostHead>
        <h1>{title}</h1>
      </PostHead>
      {actionButtons}
      <PostContent dangerouslySetInnerHTML={{ __html: body }} />
      <SubInfo
          publishedDate={publishedDate}
        />
    </PostViewerBlock>
    
    <PostReplyBlock>
    <div>
      답변
    </div>
    <Reply>
      <ReplyUser>reply-user-name</ReplyUser>
      <ReplyContent>content content content content content content</ReplyContent>
      <SubInfo
          publishedDate={publishedDate}
        />
    </Reply>
    
    </PostReplyBlock>
    </div>
    
  );
};

export default PostViewer;