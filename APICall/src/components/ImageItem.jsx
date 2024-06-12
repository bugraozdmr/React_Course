

function ImageItem({image}) {
    return (
        <>
            <a href={image.urls.full}>
            <img src={image.urls.full} alt={image.alt_description}></img>
            </a>
        </>
    );
}

export default ImageItem;