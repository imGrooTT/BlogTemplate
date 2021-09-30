import React from 'react'
// import './BlogCard5.css';
import ReactHtmlParser from 'react-html-parser';


export default function BlogCard5() {
  const Blogcard5=` <div class="blogCard5">
  <div class="blogCard5Header">
       <img class=blogCard5img" /> 
      <h1 class="blogCard5Heading">Avokado Ezmeli Taco</h1>
  </div>
  <div class="blogCard5Content">
      <img class="blogCard5img" src="https://www.acouplecooks.com/wp-content/uploads/2020/06/Avocado-Tacos-016.jpg" />
  </div>
  <div>
      <p class="blogCard5Para">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet venenatis urna cursus eget nunc scelerisque. Volutpat sed cras ornare arcu dui vivamus arcu felis. Auctor elit sed vulputate mi sit amet mauris commodo. Sit amet aliquam id diam maecenas ultricies mi. Dignissim suspendisse in est ante in nibh. Auctor augue mauris augue neque gravida in. Id cursus metus aliquam eleifend mi in nulla. In hac habitasse platea dictumst. Ac odio tempor orci dapibus ultrices in iaculis. Tincidunt eget nullam non nisi est sit.

          Egestas fringilla phasellus faucibus scelerisque eleifend donec. In fermentum et sollicitudin ac orci. Nec dui nunc mattis enim ut. Vitae proin sagittis nisl rhoncus mattis rhoncus urna. Ut eu sem integer vitae justo. Elementum nisi quis eleifend quam. Sed felis eget velit aliquet. Enim ut tellus elementum sagittis vitae et leo. Vivamus arcu felis bibendum ut tristique et. Sit amet luctus venenatis lectus magna fringilla urna. Purus faucibus ornare suspendisse sed nisi lacus sed viverra tellus. Non sodales neque sodales ut etiam. Dui faucibus in ornare quam viverra orci sagittis. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit.

          Sed lectus vestibulum mattis ullamcorper. Gravida neque convallis a cras semper. Quis blandit turpis cursus in hac. Dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in. Ultricies leo integer malesuada nunc vel risus commodo. Et tortor consequat id porta nibh venenatis. Quisque egestas diam in arcu. Morbi non arcu risus quis varius quam. Nec dui nunc mattis enim ut tellus elementum sagittis. Lacus suspendisse faucibus interdum posuere. Suscipit adipiscing bibendum est ultricies integer quis. Gravida arcu ac tortor dignissim. Mauris sit amet massa vitae. Non curabitur gravida arcu ac. Nec tincidunt praesent semper feugiat nibh sed. Quis imperdiet massa tincidunt nunc pulvinar sapien et. Ligula ullamcorper malesuada proin libero nunc consequat interdum varius sit. Volutpat ac tincidunt vitae semper quis lectus nulla at. Pellentesque dignissim enim sit amet venenatis urna cursus eget nunc.

          Faucibus in ornare quam viverra orci sagittis. Nulla porttitor massa id neque. Vivamus at augue eget arcu dictum varius duis at consectetur. Tincidunt ornare massa eget egestas purus viverra accumsan. Sodales ut etiam sit amet. Id diam maecenas ultricies mi eget. Fringilla urna porttitor rhoncus dolor purus non enim praesent elementum. Ullamcorper malesuada proin libero nunc. Massa tincidunt nunc pulvinar sapien. Et pharetra pharetra massa massa ultricies mi quis hendrerit dolor. Iaculis at erat pellentesque adipiscing commodo elit. Diam in arcu cursus euismod. Non enim praesent elementum facilisis. Nam libero justo laoreet sit amet cursus sit amet dictum.

          Quisque non tellus orci ac auctor augue mauris augue. Fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque. Tincidunt augue interdum velit euismod in pellentesque massa. Facilisis volutpat est velit egestas. Sed pulvinar proin gravida hendrerit lectus. Luctus accumsan tortor posuere ac. Lectus proin nibh nisl condimentum id venenatis a condimentum. Massa tincidunt nunc pulvinar sapien et ligula. Aliquam ut porttitor leo a diam sollicitudin tempor id eu. Eleifend mi in nulla posuere. Sagittis nisl rhoncus mattis rhoncus. Tristique risus nec feugiat in fermentum. Augue ut lectus arcu bibendum at varius. Mollis nunc sed id semper risus. Nibh mauris cursus mattis molestie a. Dolor sit amet consectetur adipiscing elit pellentesque habitant. Condimentum mattis pellentesque id nibh tortor id aliquet. Pulvinar pellentesque habitant morbi tristique. Interdum velit laoreet id donec ultrices tincidunt arcu. Duis ut diam quam nulla porttitor."
      </p>
  </div>
</div>
<style>
 .blogCard5 {
height: 100%;
width: 100%;
border: 3px solid tomato;
}

.blogCard5Header {
width: 80%;
margin: auto;
padding-top: 2%;
font-size: 3rem;
}

.blogCard5Content {
display: flex;
justify-content: center;
}

.blogCard5Img {
height: 80vh;
width: 80%;
border-radius: 20px;
}

.blogCard5Para {
padding-top: 5%;
}

</style>`  
  return (
        <>
       {ReactHtmlParser(Blogcard5)}
        </>
    )
}
