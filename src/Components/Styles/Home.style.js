import styled from "styled-components";
export const Div = styled.div`
  #aboutPrev {
    background-color: #311d6b;
  }
  #aboutPrev img {
    max-width: 100%;
    width: 400px;
    text-align: center;
  }
  @media (max-width: 768px) {
    #aboutPrev img {
      max-width: 100%;
      width: 400px;
    }
  }
`;

// Sliding-in background button
export const SlideInButton = styled.div`
  .css-button-sliding-to-left--yellow {
    width: 250px;
    height: 40px;
    color: #fff;
    padding: 5px 10px;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    display: inline-block;
    outline: none;
    border-radius: 5px;
    z-index: 0;
    background: transparent;
    overflow: hidden;
    border: 2px solid #ffd819;
    color: #ffd819;
  }
  .css-button-sliding-to-left--yellow:hover {
    color: #000;
  }
  .css-button-sliding-to-left--yellow:hover:after {
    width: 100%;
  }
  .css-button-sliding-to-left--yellow:after {
    content: "";
    position: absolute;
    z-index: -1;
    transition: all 0.3s ease;
    left: 0;
    top: 0;
    width: 0;
    height: 100%;
    background: #ffd819;
  }
`;

// export const AboutUsPrev = styled.div`
//     background-color: #311d6b;
//     color: white;

//     .text-content{
//         position: relative;

//     }
//     .wavyBg {
//         position: absolute;
//         /* background-color: #311d6b; */
//         width: 100%;
//         height: 600px;
//         z-index: 2;
//     }
//     #text {
//             z-index: 3;
//             background-color: red;
//             font-size: 50px;
//         }
// `;

// ABOUT US
// export const AboutPrev = styled.div`
/* position: relative;
    height: 600px;
    background: url(${({ bgImage }) => bgImage});
    background-size: 100%, cover;
    background-position: center;
    background-attachment: fixed;
    overflow: hidden;
    margin: 50px 0;
    z-index: 500; */

/* .wavyBg { */
/* background-color: #311d6b; */
/* background: linear-gradient(to left, rgb(49, 29, 107), 90%, rgba(49, 29, 107, 0.489)) ; */
/* background: transparent; */
/* width: 100%;
height: 100%; */
/* opacity: 0.854; */
/* backdrop-filter: blur(8px); */
/* z-index: 1000; */
/* } */
/* #text-content {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
}
#text-content div:first-child {

}
@media(max-width: 768px) {
    height: 500px;
    #text-content {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: center;
    }
} */
// `;
