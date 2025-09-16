import React, { useEffect, useRef, useState } from "react";
import "./ProductImage.css";

export default function ProductImage() {
  const img1 = useRef<HTMLImageElement>(null);
  const img2 = useRef<HTMLImageElement>(null);
  const img3 = useRef<HTMLImageElement>(null);
  const img4 = useRef<HTMLImageElement>(null);

  const [selectedSrc, setSelectedSrc] = useState<string | null>(null);
  const [armed, setArmed] = useState(false); // posle mouseleave

  const viewRef = useRef<HTMLDivElement | null>(null);

  function onThumbClick(e: React.MouseEvent<HTMLImageElement>) {
    const large = e.currentTarget.dataset.large;
    setSelectedSrc(large ?? e.currentTarget.src);
  }

  // Kada je modal otvoren (selectedSrc != null):
  // 1) dodaj blur na delove stranice
  useEffect(() => {
    const header = document.querySelector("header") as HTMLElement | null;
    const thumbs = document.querySelector(".thumbnails") as HTMLElement | null;
    const hero = document.querySelector("#blur") as HTMLElement | null;
    const info = document.querySelector(".max-w-info") as HTMLElement | null;

    if (selectedSrc) {
      [header, thumbs, hero, info].forEach((el) => {
        if (el) el.style.filter = "blur(5px) drop-shadow(8px 8px 10px black)";
      });
    } else {
      [header, thumbs, hero, info].forEach((el) => {
        if (el) el.style.filter = "none";
      });
    }

    // cleanup i na unmount
    return () => {
      [header, thumbs, hero, info].forEach((el) => {
        if (el) el.style.filter = "none";
      });
    };
  }, [selectedSrc]);

  // 2) ako je "naoružan" (mouseleave se desio), jedan klik VAN modala zatvara
  useEffect(() => {
    if (!selectedSrc || !armed) return;

    const handleBodyClick = (e: MouseEvent) => {
      const el = viewRef.current;
      if (!el) return;
      if (!el.contains(e.target as Node)) {
        // zatvori modal
        setSelectedSrc(null);
        setArmed(false);
      }
    };

    document.body.addEventListener("click", handleBodyClick, {
      capture: true,
      once: true,
    });
    return () => {
      document.body.removeEventListener("click", handleBodyClick, {
        capture: true,
      });
    };
  }, [selectedSrc, armed]);

  // Skupi ostale sličice (za traku)
  const refs = [img1, img2, img3, img4];
  const els = refs
    .map((r) => r.current)
    .filter((el): el is HTMLImageElement => !!el);
  const others = els.filter(
    (el) => (el.dataset.large ?? el.src) !== selectedSrc
  );

  return (
    <>
      {/* HERO / placeholder */}
      <div className="product-image" id="blur"></div>

      {/* Thumbnail-ovi */}
      <div className="thumbnails pt-8 flex max-w-md justify-between gap-3 hidden">
        <img
          src="image-product-1-thumbnail.jpg"
          data-large="image-product-1.jpg"
          alt="product"
          ref={img1}
          onClick={onThumbClick}
        />
        <img
          src="image-product-2-thumbnail.jpg"
          data-large="image-product-2.jpg"
          alt="product"
          ref={img2}
          onClick={onThumbClick}
        />
        <img
          src="image-product-3-thumbnail.jpg"
          data-large="image-product-3.jpg"
          alt="product"
          ref={img3}
          onClick={onThumbClick}
        />
        <img
          src="image-product-4-thumbnail.jpg"
          data-large="image-product-4.jpg"
          alt="product"
          ref={img4}
          onClick={onThumbClick}
        />
      </div>

      {/* MODAL */}
      {selectedSrc && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-md z-40 flex items-center justify-center"
          // klik na overlay ne zatvara, jer zahtev je leave→klik van
          // ali možeš dodati onClick={() => setSelectedSrc(null)} ako želiš
        >
          <div
            id="view"
            ref={viewRef}
            onMouseLeave={() => setArmed(true)}
            onMouseEnter={() => setArmed(false)}
            onClick={(e) => e.stopPropagation()} // spreči bubbling unutar modala
            className="z-50 "
          >
            <div className="flex items-center">
              <button
                type="button"
                className="icon relative left-3.5 bg-white px-3 py-2.5 rounded-full"
                onClick={() => {
                  // levo – samo primer; ovde možeš menjati selectedSrc
                }}
              >
                <img src="icon-previous.svg" alt="icon" />
              </button>

              <img
                src={selectedSrc}
                alt="selected"
                className="max-w-2xl rounded-xl"
              />

              <button
                type="button"
                className="icon relative right-3.5 bg-white px-3 py-2.5 rounded-full"
                onClick={() => {
                  // desno – samo primer; ovde možeš menjati selectedSrc
                }}
              >
                <img src="icon-next.svg" alt="icon" />
              </button>
            </div>

            <div className="flex justify-around mt-5 gap-4">
              {others.map((el) => {
                const large = el.dataset.large ?? el.src;
                return (
                  <img
                    key={large}
                    src={large}
                    alt="other"
                    className="w-28 rounded-xl cursor-pointer"
                    onClick={() => setSelectedSrc(large)}
                  />
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
