import React from 'react'
import ImageViewer from 'react-simple-image-viewer';

function GalerySection() {
    const [currentImage, setCurrentImage] = React.useState(0);
    const [isViewerOpen, setIsViewerOpen] = React.useState(false);
    const images = [
        "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg",
        "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg",
        "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg",
        "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg",
        "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg",
        "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg",
        "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg",
        "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg",
        "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg",
        "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg",
        "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg",
        "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg",
        "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg",


    ]
    const openImageViewer = React.useCallback((index) => {
        setCurrentImage(index);
        setIsViewerOpen(true);
    }, []);

    // Membuat array untuk menyimpan kelompok img
    const groupedImages = [];

    // Looping melalui array images dan kelompokkan setiap 3 img dalam satu grup
    for (let i = 0; i < images.length; i += 3) {
        groupedImages.push(images.slice(i, i + 3));
    }
    return (

        <div id="fh5co-gallery" className='bg-[url(/img/background/repeat-background/so-white.png)] bg-no-repeat bg-cover '>
            <img className="flower-3-top" src="/img/background/flowers/top-2.svg" />
            <img className="flower-4-bottom" src="/img/background/flowers/bottom-2.svg" />

            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box">
                        <h2>Galeri Foto</h2>

                    </div>
                </div>
                {/* <div className="row row-bottom-padded-md animate-box">
            <div className="col-md-12">
                <div id="inline-gallery-container" className="inline-gallery-container" style={{position: "relative", height: "500px"}}></div>
            </div>
        </div> */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-3 mb-10 px-8">
                    {groupedImages.map((group, groupIndex) => (
                        <div key={groupIndex} className="grid gap-4">
                            {group.map((src, index) => (
                                <div key={index}>
                                    <img
                                        className="h-auto max-w-full rounded-lg"
                                        src={src}
                                        alt={src}
                                        onClick={() => openImageViewer(groupIndex * 3 + index)}
                                    />
                                </div>
                            ))}
                        </div>
                    ))}
                </div>

                {isViewerOpen && (
                    <ImageViewer
                        src={images}
                        currentIndex={currentImage}
                        onClose={() => setIsViewerOpen(false)}
                    />
                )}


            </div>
        </div>
    )
}

export default GalerySection