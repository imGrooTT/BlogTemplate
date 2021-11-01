import React from 'react'

function BlogCard9() {
    return (
        <>
        <div class="maindiv">
    <div class="imgdiv">
         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZj_E_oBxCUBLHfdMfQLGsZwU0EmslMQ_SCfbPDToKKZe5eN2TyZpD9JyKRlOclpv0S-g&usqp=CAU" />
         <div class="t-div"><u>Stay classy Stay classy Stay classy Stay classy</u></div>
          <caption>Nusti daru pya</caption>

    </div>
     
     <div class="headdiv">
          <h1 class="title"><u>KEEEEP WALKING StRaIgHt with johny 🥃🥃🥃 walker</u></h1>
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
            {`
                @import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@700&family=Roboto+Mono:ital@1&display=swap');
                .maindiv{
                    display:flex;
                    flex-direction:column;
                    justify-content: center;
                    width:100%;
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
                    padding: 5%;
                    margin-top: -3%;
                    margin-left: 60%;
                    position: absolute;
                    height: 54vh;
                    width: 23%;
                    background-color: gold;
                    font-weight: bold;
                    text-align: justify;
                    box-shadow: rgb(60 64 67 / 30%) 0px 1px 2px 0px, rgb(60 64 67 / 15%) 0px 1px 3px 1px;
                    z-index: -1;
                    animation: mymove;
                    animation-duration: 3s;
                    animation-iteration-count: 1;   
                  }
                  
                  @keyframes mymove {
                    from {bottom: 100px;}
                    to {top: -500px;}
                  }
                  
                 
          
                
                
                img{
                    
                    height:100%;
                    width:50%;
                    margin: auto;
                    margin-left:10%;
                    box-shadow: rgb(60 64 67 / 30%) 0px 1px 2px 0px, rgb(60 64 67 / 15%) 0px 1px 3px 1px;

                }
                caption{
                    position: relative;
                    margin:  auto;
          
                }
                
                .title{
                    font-family: 'Merriweather', serif;;
                    margin:1.5em 1.5em 1em 1.5em;
                    color:rgb(0 0 0 / 45%);
                    position: relative;
                    animation-name: mymove;
                    animation-duration: 5s;
                  }
                  
                  @keyframes mymove {
                    from {left: -200px;}
                    to {left: 1px;}
                  }
                .headdiv{
                    margin-left:10%;
                    
                }
                
                
          
                .contentdiv{
                    margin: auto;
          
                }
          
                p{
                    font-size: 1.2rem;
                    width: 80%;
                    padding: 23px;
                    margin: auto;
                    line-height: 1.5em;
                    text-align: justify;
                    /* z-index: 1; */
                    overflow:scroll;
                    font-family: 'Maven Pro', sans-serif;
                    
          
                }    

            `}
        </style>
        </>
    )
}

export default BlogCard9
