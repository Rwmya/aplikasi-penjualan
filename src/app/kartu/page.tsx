import Image from "next/image";

export default function Kartu() {
  return (
    <>
      <div className="flex min-h-screen items-center justify-center bg-gray-300 gap-3 p-3">
        <div className="w-60 rounded-md bg-white p-2 flex flex-col hover:scale-105 duration-300">
          <Image
            width={0}
            height={0}
            sizes="100vw"
            alt="nextkontol"
            className="h-40 rounded-md w-full object-cover"
            src="https://images.pexels.com/photos/2302908/pexels-photo-2302908.jpeg?auto=compress&cs=tinysrgb&w=600"
          ></Image>
          <div className="p-2">
            <h2 className="text-lg font-bold">Flower</h2>
            <p className="text-sm text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem provident, sint odio esse consequuntur nam, voluptate
              sed, sunt iure maxime sequi! Ducimus non rerum ex.
            </p>
          </div>
          <div className="m-2">
            <a
              href="#"
              className="py-1 bg-red-500 px-3 rounded-md hover:bg-red-600 text-red-700 text-lg font-bold"
            >
              Buy
            </a>
          </div>
        </div>
        <div className="w-60 rounded-md bg-white p-2 flex flex-col-reverse hover:scale-105 duration-300">
          <Image
            width={0}
            height={0}
            sizes="100vw"
            alt="nextkontol"
            className="h-40 rounded-md w-full object-cover"
            src="https://images.pexels.com/photos/45853/grey-crowned-crane-bird-crane-animal-45853.jpeg?auto=compress&cs=tinysrgb&w=600"
          ></Image>
          {/* <Image
          width={0}
          height={0}
          sizes="100vw"
          alt="nextkontol"
          className="h-40 rounded-md w-full object-cover"
          src="https://images.pexels.com/photos/2302908/pexels-photo-2302908.jpeg?auto=compress&cs=tinysrgb&w=600"
        ></Image> */}
          <div className="p-2">
            <h2 className="text-lg font-bold">Bird</h2>
            <p className="text-sm text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem provident, sint odio esse consequuntur nam, voluptate
              sed, sunt iure maxime sequi! Ducimus non rerum ex.
            </p>
          </div>
          <div className="m-2">
            <a
              href="#"
              className="py-1 bg-pink-300 px-3 rounded-md hover:bg-pink-400 text-pink-600 text-lg font-bold"
            >
              Buy
            </a>
          </div>
        </div>
        <div className="w-60 rounded-md bg-white p-2 flex flex-col hover:scale-105 duration-300">
          <Image
            width={0}
            height={0}
            sizes="100vw"
            alt="something"
            className="h-40 rounded-md w-full object-cover"
            src="https://images.pexels.com/photos/4929248/pexels-photo-4929248.jpeg?auto=compress&cs=tinysrgb&w=600"
          ></Image>
          <div className="p-2">
            <h2 className="text-lg font-bold">Bird</h2>
            <p className="text-sm text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem provident, sint odio esse consequuntur nam, voluptate
              sed, sunt iure maxime sequi! Ducimus non rerum ex.
            </p>
          </div>
          <div className="m-2">
            <a
              href="#"
              className="py-1 px-3 rounded-md font-bold shadow-md ring-2 ring-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
            >
              Buy
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
