const Banner = function () {
    return /*html*/`
      <div class="slide relative">
  
            <div>
                <img class=" h-[350px]" src="./public/img/banner1.png" alt="">
            </div>
  
        <div class="btn-slide flex justify-between min-w-full absolute top-2/4">
          <div class="prev ml-4">
            <i class="fa-solid fa-angle-left"></i>
          </div>
  
          <div class="next mr-4">
            <i class="fa-solid fa-angle-right"></i>
          </div>
  
        </div>
        
    </div>
      `;
  };
  export default Banner;