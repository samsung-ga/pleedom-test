import React from 'react';
import styled from 'styled-components';
import queryString from 'query-string';

import Background from '../../components/Background';
import PageButton from '../../components/PageButton';

export default function Page5_2({ match, location }) {
  const answers = location.state.answer;
  const mbti = location.state.mbti;
  return (
    <Wrapper>
      <Background page="5_2" />
      <PageButton pageNumber={match.url} {...{ answers }} {...{ mbti }} />
    </Wrapper>
  );
}

const Wrapper = styled.div``;
