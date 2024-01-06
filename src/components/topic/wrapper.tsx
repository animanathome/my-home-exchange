'use client'

import styled from "styled-components";
const Wrapper = styled.div`
    position: relative;
    height: 300px;
    margin: 1rem 0;
  
    // improve legibility by making the top of the image darker
    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(to top, transparent 0%, rgb(0 0 0 / 25%) 100%);
    }
  
    .wrapper {
        position: absolute;
        top: 0;
        text-align: center;
        margin: 0rem 3rem;
        z-index: 1;
        color: #fff;
    }
  
    .container {
        margin-top: 0.25rem;
        -webkit-box-orient: vertical;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        overflow: hidden;
    }
  
    h2 {
        font-size: 1.75rem;
        font-weight: 700;
        margin: 1rem 0 0.75rem 0;
    }
  
    img {
      object-fit: cover;
    }
  
    a {
      margin-top: 2rem;  
      font-weight: 500;
        text-decoration: none;
        color: rgb(255, 255, 255)
    }
  
    a.link {
        text-decoration: none;
    }
  
    .arrow {
        border: solid rgb(255,255,255);
        border-width: 0 2px 2px 0;
        display: inline-block;
        padding: 3px;
    }
  
    .right {
        transform: rotate(-45deg);
        -webkit-transform: rotate(-45deg);
    }
`
export default Wrapper;