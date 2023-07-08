const HtmlWebpackPlugin = require("html-webpack-plugin");

const indexHtmlPlugin = new HtmlWebpackPlugin({
  title: "Skeleton Card Loader",
});

const cardHtmlPlugin = new HtmlWebpackPlugin({
  filename: "./card/card.html",
  template: "./src/card/card.html",
  //   templateContent: `
  //     <link rel="stylesheet" href="src/card/card.css" />
  // <div class="card">
  //   <div>
  //     <img
  //       class="card-img"
  //       src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortWaved&accessoriesType=Prescription01&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=Blue03&eyeType=Default&eyebrowType=Default&mouthType=Twinkle&skinColor=Light"
  //     />
  //   </div>
  //   <div class="card-text">
  //     <h2 class="card-title">Gaurav Gawade</h2>
  //     <p class="card-description">
  //       <span>Lorem ipsum dolor sit amet consectetur, adipisicing eli.</span>
  //     </p>
  //     <ul class="card-skills">
  //       <li class="skill">UI Designer.</li>
  //       <li class="skill">UX Designer.</li>
  //       <li class="skill">Web Developer.</li>
  //     </ul>
  //     <a href="#" class="card-link">Read More</a>
  //   </div>
  // </div>

  // <div class="skeleton">
  //   <div class="skeleton-img"></div>
  //   <div class="skeleton-text">
  //     <h2 class="skeleton-title"></h2>
  //     <p class="skeleton-description">
  //       <span></span>
  //       <span></span>
  //     </p>
  //     <ul class="skeleton-skills">
  //       <li class="skill"></li>
  //       <li class="skill"></li>
  //       <li class="skill"></li>
  //     </ul>
  //     <a href="#" class="skeleton-link"></a>
  //   </div>
  // </div>
  // `,
});

const plugins = [indexHtmlPlugin, cardHtmlPlugin];

module.exports = { plugins };
