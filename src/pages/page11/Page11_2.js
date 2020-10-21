import React, { useState } from 'react';
import styled from 'styled-components';
import queryString from 'query-string';

import Background from '../../components/Background';
import PageButton from '../../components/PageButton';
import Answer from '../../components/Answer';

export default function Page11_2({ match, location }) {
  const answers = location.state.answer;
  const mbti = location.state.mbti;
  const [selected, setSelected] = useState(mbti[0]);
  mbti[0] = selected;
  console.log(mbti);
  console.log(answers);
  return (
    <Wrapper>
      <Background page="11_2" />
      <PageButton pageNumber={match.url} {...{ answers }} {...{ mbti }} />
      <VStack>
        <Answer
          isSelected={selected === 'E' ? true : false}
          onClick={() => {
            setSelected('E');
          }}
        >
          오늘부터 플라스틱프리 소모임에 가입할래요!
        </Answer>
        <Answer
          isSelected={selected === 'I' ? true : false}
          onClick={() => {
            setSelected('I');
          }}
        >
          플라스틱 관련 서적과 인터넷을 찾아보며 <br /> 환경에 대해 공부할래요
        </Answer>
      </VStack>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const VStack = styled.div`
  position: absolute;
  top: 179px;
  left: 16px;
  right: 16px;
  z-index: 4;

  display: flex;
  flex-direction: column;
`;
