import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const searchBar = ["Location", "Animal", "Breed"];
  const carouselIndexes = [1, 2, 3, 4];
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);
  let selectedImage = null;
  let usedImages = [];

  useEffect(() => {
    requestPets();
  }, []);

  async function requestPets() {
    const res = await fetch("http://pets-v2.dev-apis.com/pets");

    const json = await res.json();

    setPets(json.pets);
    setLoading(false);
  }
  const imagesCollection = pets.map(({ images }) => {
    return images[0];
  });

  return (
    <div>
      <nav className="flex flex-row items-center px-12">
        <div className="my-2 ml-4 md:shrink-0 p-2">
          <Image
            className="bg-blue-principal rounded-full"
            quality={100}
            width={40}
            height={40}
            objectFit="scale-down"
            src="/home/pet-logo.png"
            alt="pet-logo"
          ></Image>
        </div>
        <button className="text-2xl my-auto ml-3 font-medium">Petly</button>
        <button className="text-grey  my-auto ml-96">
          Find a pet to Adopt
        </button>
        <button className="text-grey  my-auto ml-10">
          Find a pet to Adopt
        </button>
        <div className="border-2 border-color-mode ml-auto my-auto  p-1 rounded-3xl w-32 flex flex-row">
          <div className="inline-block my-auto hover:bg-active-color py-2 px-2 w-8 rounded-lg mx-auto content-center">
            <Image
              quality={100}
              src="/home/light-mode.png"
              alt="light mode logo"
              objectFit="scale-down"
              width={20}
              height={20}
            ></Image>
          </div>
          <div className="inline-block my-auto bg-black hover:bg-active-color p-2 w-10 rounded-lg mx-auto">
            <Image
              quality={100}
              src="/home/dark-mode.png"
              objectFit="scale-down"
              width={20}
              height={20}
              alt="dark mode logo"
            ></Image>
          </div>
        </div>
      </nav>
      <section className="bg-background-color">
        <div className="flex flex-row">
          <div className="my-48 mx-48">
            <h3 className="text-small-main-title">FIND SPECIAL PETS</h3>
            <h1>
              <span className="block font-semibold text-5xl text-main-title">
                Think you Love Pets?
              </span>
              <span className="block font-semibold text-5xl text-secondary-title">
                Adopt One.
              </span>
            </h1>
            <p>
              Pet Adoption is quickly becoming the preferred way to find a new
              dog, puppy, cat or kitten
            </p>
          </div>
          <div className="grid grid-cols-2 my-24 mx-18  extra_desktop:mx-80">
            {carouselIndexes.map((index) => {
              function getRandomInt(max) {
                return Math.floor(Math.random() * max);
              }
              const urlIndex = getRandomInt(imagesCollection.length);
              if (!usedImages.includes(urlIndex)) {
                usedImages = [...usedImages, urlIndex];
                selectedImage = imagesCollection[urlIndex];
              } else {
                selectedImage = "/home/carousel-2.png";
              }

              return (
                <div key={index} className="h-60">
                  <Image
                    src={loading ? `/home/loading-image.png` : selectedImage}
                    alt={loading ? `/home/loading-image.png` : selectedImage}
                    objectFit="fill"
                    width={350}
                    height={250}
                  ></Image>
                </div>
              );
            })}
          </div>
        </div>
        <div className="relative bg-white extra_desktop:-top-56 extra_desktop:left-96 desktop:left-20 desktop:-top-56 z-10 p-10 rounded-lg w-fit h-fit">
          <div className="flex flex-row p-4 bg-search-params-bg h-fit w-fit rounded-full">
            {searchBar.map((attribute) => {
              return (
                <div key={attribute} className="flex flex-row">
                  <div className="mx-4 my-auto">
                    <Image
                      src={`/home/search-params/${attribute.toLowerCase()}.png`}
                      alt={`attribute-${attribute}`}
                      objectFit="scale-down"
                      width={20}
                      height={20}
                      className=" border-2 rounded-r-xl"
                    ></Image>
                  </div>
                  <div className="my-auto">
                    <label className="mr-4" htmlFor="pet-select">
                      {attribute}
                    </label>
                    <select id="pet-select">
                      <option value="">--Please choose an option--</option>
                      <option value="dog">Dog</option>
                      <option value="cat">Cat</option>
                    </select>
                  </div>
                </div>
              );
            })}
            <button className="ml-6 bg-background-button p-4 w-20 rounded-full">
              <Image
                src="/home/search-button.png"
                alt="search-button"
                objectFit="scale-down"
                width={20}
                height={20}
              ></Image>
            </button>
          </div>
          <div>
            <h2 className="ml-auto my-4 font-medium">You may be looking for</h2>
          </div>
        </div>
      </section>
    </div>
  );
}
