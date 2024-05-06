export const imageUpload = async (image:any) => {
    //  image upload in image bb......
    const formData = new FormData();
    formData.append("image", image);

    const url = `https://api.imgbb.com/1/upload?key=dab8503cf9ae232e69b024f863fa9423`;

    const response = await fetch(url, {
        method: "POST",
        body: formData,
    });
    const result = await response.json();
    const imageUrl = result?.data?.display_url;
    return imageUrl
}