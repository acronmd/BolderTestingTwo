export async function load() {
    const gdriveImgRes = await fetch('https://script.google.com/macros/s/AKfycbzodiYLKFyObm7oFz94xzBWUJxjSLm5-45k6wtvDgMamyuQYPZhoqhq2dl0WI2SY26l/exec');
    const gdriveImgData = await gdriveImgRes.json();
    const images = gdriveImgData.images;
    images.forEach(function (images: { imgurl: string; name: string; id: any; attribution: string; }, index) {
        images.name = "Test";
        images.id = index;
        images.attribution = "Nobody";
        images.imgurl = "https://drive.google.com/uc?export=view&id=" + images.img_id;
      });
    return {
        images: images
    }
}