import React from 'react'
import ReactHtmlParser from 'react-html-parser';
function Blogcard8() {
    const Blogcard8=`
    <div class="maindiv">
    <div class="imgdiv">
         <img src="https://media.istockphoto.com/photos/classic-smokey-makeup-on-woman-face-beautiful-big-eyes-fashion-on-picture-id1157964655?k=20&m=1157964655&s=612x612&w=0&h=_xaOj4yyWa4xjRgZMYMDT86Y9d6JU1XlL5zi14oUYEE=" />
          <caption>mazi item mazi itemmazi item</caption>
         <div class="t-div"></div>
         <div class="t-div1"></div>

    </div>
     
     <div class="headdiv">
          <h1 class="title"><u>Stay classy Stay classy Stay classy Stay classy</u></h1>
      </div>
      <div class="contentdiv">
          <p>
          It is said that it is easy to learn and maintain bad habits but it is very difficult to switch them back. The issue of a healthy lifestyle is very serious but the people take it very lightly. Often, it is seen that the people take steps to improve their lifestyle but due to lack of determination quits in the midway.

          Moreover, for a healthy lifestyle is it important that you take small and one-step at a time. Also, do not go overboard with it. Besides, this healthy lifestyle will help you in life in a lot of ways.
          It is said that it is easy to learn and maintain bad habits but it is very difficult to switch them back. The issue of a healthy lifestyle is very serious but the people take it very lightly. Often, it is seen that the people take steps to improve their lifestyle but due to lack of determination quits in the midway.

          Moreover, for a healthy lifestyle is it important that you take small and one-step at a time. Also, do not go overboard with it. Besides, this healthy lifestyle will help you in life in a lot of ways.
          It is said that it is easy to learn and maintain bad habits but it is very difficult to switch them back. The issue of a healthy lifestyle is very serious but the people take it very lightly. Often, it is seen that the people take steps to improve their lifestyle but due to lack of determination quits in the midway.

          Moreover, for a healthy lifestyle is it important that you take small and one-step at a time. Also, do not go overboard with it. Besides, this healthy lifestyle will help you in life in a lot of ways.
          It is said that it is easy to learn and maintain bad habits but it is very difficult to switch them back. The issue of a healthy lifestyle is very serious but the people take it very lightly. Often, it is seen that the people take steps to improve their lifestyle but due to lack of determination quits in the midway.

          Moreover, for a healthy lifestyle is it important that you take small and one-step at a time. Also, do not go overboard with it. Besides, this healthy lifestyle will help you in life in a lot of ways.
          It is said that it is easy to learn and maintain bad habits but it is very difficult to switch them back. The issue of a healthy lifestyle is very serious but the people take it very lightly. Often, it is seen that the people take steps to improve their lifestyle but due to lack of determination quits in the midway.

          Moreover, for a healthy lifestyle is it important that you take small and one-step at a time. Also, do not go overboard with it. Besides, this healthy lifestyle will help you in life in a lot of ways.
          It is said that it is easy to learn and maintain bad habits but it is very difficult to switch them back. The issue of a healthy lifestyle is very serious but the people take it very lightly. Often, it is seen that the people take steps to improve their lifestyle but due to lack of determination quits in the midway.

          Moreover
          </p>
      </div>
  
  </div>
  <style>
      
      @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:ital@1&display=swap');
      .maindiv{
          display:flex;
          flex-direction:column;
          justify-content: center;
          width:80%;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
          margin: auto;
      }
      .imgdiv{
          display: flex;
          flex-direction: column;
          justify-content: center;
          margin: auto;
          height:auto;
          width:100%;
      }

      .t-div{
          padding: 2%;
          margin-left: 68%;
          margin-top: 21%;
          position: absolute;
          height: 20vh;
          width: 12vw;
          background-color: #26afff7a;
          z-index: 1;
          animation: mymove1 6s ;
          animation-iteration-count: 1;
        }
        
        @keyframes mymove1 {
          from {left: 300px;}
        
        to {left: 139px;}
        }

      .t-div1{
          padding:2%;
          margin-left: 0%;
          margin-top: -25%;
          position: absolute;
          height:20vh;
          width:12vw;
          background-color:#26afff57;
          z-index:1;
          animation: mymove 6s ;
          animation-iteration-count: 1;
        }
        
        @keyframes mymove {
          from {left: -10px;}
          to {left: 140px;}

        }
      
      img{
          
          height:100%;
          width:70%;
          margin: auto;
      }
      caption{
          position: relative;
          margin:  auto;

      }
      
      .title{
          font-family: 'Roboto Mono', monospace;
          margin:1.5em 1.5em 1em 1.5em;
      }

      .headdiv{
          margin-left:10%;
          width:100%;
      }
      
      

      .contentdiv{
          margin: auto;
          background-color: #fff8dc38;

      }

      p{
          font-size: 1.2rem;
          width: 80%;
          padding:0 20px 0 20px;
          margin: auto;
          line-height: 2em;
        // text-align: justify;
          /* z-index: 1; */
        //   box-shadow: rgb(60 64 67 / 30%) 0px 1px 2px 0px, rgb(60 64 67 / 15%) 0px 1px 3px 1px;
          background-color: white;
          overflow:scroll;
          

      }
      
      
  </style>
    `
    return (
        <>
        
       {ReactHtmlParser(Blogcard8)}
        
        </>
    )
}

export default Blogcard8

