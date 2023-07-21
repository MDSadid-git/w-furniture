import React from "react";
import PaginateItam from "./PaginateItam";
import bed2 from '../../assets/ProductImage/bed2.jpg'
import bed3 from '../../assets/ProductImage/bed3.jpg'
import bed4 from '../../assets/ProductImage/bed4.jpg'
import sofa2 from '../../assets/ProductImage/sofa2.jpg'
import sofa3 from '../../assets/ProductImage/sofa3.jpg'
import sofa4 from '../../assets/ProductImage/sofa4.jpg'
import light2 from '../../assets/ProductImage/light2.jpg'
import light3 from '../../assets/ProductImage/light3.jpg'
import light4 from '../../assets/ProductImage/light4.jpg'
import dining2 from '../../assets/ProductImage/dining2.jpg'
import dining3 from '../../assets/ProductImage/dining3.jpg'
import dining4 from '../../assets/ProductImage/dining4.jpg'

const Blog = () => {
  const data = [
    {
      img: light2,
      heading: "TWO BED",
      details:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. quis...",
      btn: "Read more",
    },
    {
      img: dining2,
      heading: "ROCKING CHAIR",
      details:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. quis...",
      btn: "Read more",
    },
    
    {
      img: bed2,
      heading: "ALMARI",
      details:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. quis...",
      btn: "Read more",
    },
    {
      img: sofa2,
      heading: "ALMARI",
      details:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. quis...",
      btn: "Read more",
    },
   
    {
      img: light2,
      heading: "OFFICE CHAIR",
      details:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. quis...",
      btn: "Read more",
    },
    
    {
      img: dining3,
      heading: "TWO BED",
      details:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. quis...",
      btn: "Read more",
    },
    
    {
      img: bed3,
      heading: "ALMARI",
      details:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. quis...",
      btn: "Read more",
    },
    {
      img: sofa4,
      heading: "TWO BED",
      details:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. quis...",
      btn: "Read more",
    },
    {
      img: bed4,
      heading: "ALMARI",
      details:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. quis...",
      btn: "Read more",
    },
    {
      img: light3,
      heading: "ROCKING CHAIR",
      details:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. quis...",
      btn: "Read more",
    },
    {
      img: sofa3,
      heading: "ALMARI",
      details:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. quis...",
      btn: "Read more",
    },
    {
      img: dining4,
      heading: "OFFICE CHAIR",
      details:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. quis...",
      btn: "Read more",
    },
    
    {
      img: light4,
      heading: "TWO BED",
      details:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. quis...",
      btn: "Read more",
    },
    {
      img: light2,
      heading: "TWO BED",
      details:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. quis...",
      btn: "Read more",
    },
    {
      img: dining2,
      heading: "ROCKING CHAIR",
      details:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. quis...",
      btn: "Read more",
    },
    
    {
      img: bed2,
      heading: "ALMARI",
      details:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. quis...",
      btn: "Read more",
    },
    {
      img: sofa2,
      heading: "ALMARI",
      details:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. quis...",
      btn: "Read more",
    },
   
    {
      img: light2,
      heading: "OFFICE CHAIR",
      details:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. quis...",
      btn: "Read more",
    },
    
    {
      img: dining3,
      heading: "TWO BED",
      details:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. quis...",
      btn: "Read more",
    },
    
    {
      img: bed3,
      heading: "ALMARI",
      details:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. quis...",
      btn: "Read more",
    },
    {
      img: sofa4,
      heading: "TWO BED",
      details:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. quis...",
      btn: "Read more",
    },
    {
      img: bed4,
      heading: "ALMARI",
      details:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. quis...",
      btn: "Read more",
    },
    {
      img: light3,
      heading: "ROCKING CHAIR",
      details:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. quis...",
      btn: "Read more",
    },
    {
      img: sofa3,
      heading: "ALMARI",
      details:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. quis...",
      btn: "Read more",
    },
    {
      img: dining4,
      heading: "OFFICE CHAIR",
      details:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. quis...",
      btn: "Read more",
    },
    
    {
      img: light4,
      heading: "TWO BED",
      details:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. quis...",
      btn: "Read more",
    },

  ];
  return (
    <div>
      <PaginateItam data={data} />
    </div>
  );
};

export default Blog;
