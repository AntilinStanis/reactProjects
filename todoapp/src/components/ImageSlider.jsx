import { useState } from "react";

const images = [
    "https://images.unsplash.com/photo-1614200179396-2bdb77ebf81b?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bHV4dXJ5JTIwY2FyfGVufDB8fDB8fHww",
    "https://static.vecteezy.com/system/resources/thumbnails/053/733/179/small/every-detail-of-a-sleek-modern-car-captured-in-close-up-photo.jpg",
    "https://t4.ftcdn.net/jpg/03/21/22/43/360_F_321224333_47wgLRkL9I8cpepsr5JcbjzNCbzC3pox.jpg",
    "https://cdn-s3.autocarindia.com/Mercedes/cla-electric/Mercedes-Benz_CLA_EV_Front_Quarter_Tracking.jpg?w=640&q=75",
    "http://img.etimg.com/thumb/width-1200,height-900,imgsize-69266,resizemode-75,msid-106774994/industry/auto/cars-uvs/super-sports-car-segment-in-india-to-register-30-pc-growth-this-year-mclaren-automotive.jpg"
];

const ImageSlider = () => {

    const [activeIndex, setActiveIndex] = useState(0);

    function handleLeft() {
        if (activeIndex === 0) setActiveIndex(images.length - 1);
        else setActiveIndex(activeIndex - 1);
    }

    function handleRight() {
        if (activeIndex === images.length - 1) setActiveIndex(0);
        else setActiveIndex(activeIndex + 1);
    }

    function checkIndex(index) {
        // console.log("index ", index, "images.length - 1 ", images.length - 1);
        return index % (images.length - 1);
    }

    return (
        <div style={{ marginTop: "200px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px" }}>
                <button style={{ height: "50px", width: "100px", cursor: "pointer" }} onClick={handleLeft}>Left</button>
                <img src={images[activeIndex]} alt="" style={{ height: "200px", width: "300px" }} />
                <img src={images[checkIndex(activeIndex + 1)]} alt="" style={{ height: "200px", width: "300px" }} />
                <img src={images[checkIndex(activeIndex + 2)]} alt="" style={{ height: "200px", width: "300px" }} />
                <button style={{ height: "50px", width: "100px", cursor: "pointer" }} onClick={handleRight}>Right</button>
            </div>
        </div>
    );
}

export default ImageSlider;