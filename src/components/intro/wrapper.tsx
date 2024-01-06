'use client'

import styled from "styled-components";
const Wrapper = styled.div`
    position: relative;
    height: 500px;
  
  h1 {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    text-align: center;
    font-size: 3rem;
    margin-bottom: 2rem;
    color: #fff;
    z-index: 1;
    font-weight: 700;
    white-space: pre-line;
  }
  
  img {
      object-fit: cover;
    }
    `
export default Wrapper;