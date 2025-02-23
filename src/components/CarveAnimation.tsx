"use client"
const CurvedAnimation: React.FC<React.SVGProps<SVGSVGElement>> = () => {
  const htmlString=` <svg width="1440" height="800" viewBox="0 0 1440 800" fill="none" ">
    
    <path id="curvePath" d="M100 500 Q720 450 1340 550" fill="transparent" stroke="transparent" />
    

    <image
      href="http://localhost:3000/public/Ellipse.png"
      width="50"
      height="50"
      class="moving-image"
    />
  </svg>`
 return <div dangerouslySetInnerHTML={{__html:htmlString}} />;
}

export default CurvedAnimation;